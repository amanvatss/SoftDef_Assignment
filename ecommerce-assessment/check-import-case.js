// check-import-case.js
// Utility: scan all TS/TSX files for import paths and validate casing on disk

import fs from "fs";
import path from "path";

// The src folder
const SRC_DIR = path.join(process.cwd(), "src");

// Regex to capture imports like import X from "..."
const importRegex = /from\s+['"](.*)['"]/g;

// Scan all files recursively
function getAllFiles(dir, ext = [".ts", ".tsx"]) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, ext));
    } else if (ext.some((e) => entry.name.endsWith(e))) {
      files.push(fullPath);
    }
  }
  return files;
}

// Case-sensitive existence check
function fileExistsCaseSensitive(importPath) {
  try {
    const parts = importPath.split(path.sep);
    let current = path.isAbsolute(importPath) ? path.parse(importPath).root : "";
    for (const part of parts) {
      const files = fs.readdirSync(current || ".", { withFileTypes: true });
      const matched = files.find((f) => f.name === part);
      if (!matched) return false;
      current = path.join(current, part);
    }
    return true;
  } catch {
    return false;
  }
}

console.log("🔍 Scanning imports for casing consistency...\n");

const files = getAllFiles(SRC_DIR);

let issues = 0;

files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const dir = path.dirname(file);

  let match;
  while ((match = importRegex.exec(content))) {
    const importPath = match[1];
    if (importPath.startsWith(".")) {
      const fullPath = path.resolve(dir, importPath);

      // try extensions
      const candidates = [fullPath, fullPath + ".ts", fullPath + ".tsx", fullPath + "/index.tsx", fullPath + "/index.ts"];
      const realFile = candidates.find((c) => fs.existsSync(c));

      if (realFile && !fileExistsCaseSensitive(path.relative(process.cwd(), realFile))) {
        console.warn(`⚠️ Case mismatch in file: ${file}\n   import path: ${importPath}\n   resolved: ${realFile}\n`);
        issues++;
      }
    }
  }
});

if (issues === 0) {
  console.log("✅ All imports match file casing correctly.");
} else {
  console.log(`❌ Found ${issues} casing issue(s). Please fix them before deploying.\n`);
  process.exitCode = 1;
}