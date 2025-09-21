// fix-import-case.js
// Automatically fixes casing in imports to match actual filesystem

import fs from "fs";
import path from "path";

// The src folder
const SRC_DIR = path.join(process.cwd(), "src");

// Regex for imports like: import X from "..."
const importRegex = /from\s+['"](.*)['"]/g;

// Recursively get all files
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

// Get actual case-correct filesystem path
function getRealPathCaseSensitive(p) {
  const parts = p.split(path.sep);
  let current = path.isAbsolute(p) ? path.parse(p).root : "";
  for (const part of parts) {
    const files = fs.readdirSync(current || ".", { withFileTypes: true });
    const matched = files.find((f) => f.name.toLowerCase() === part.toLowerCase());
    if (!matched) return p; // fallback
    current = path.join(current, matched.name);
  }
  return current;
}

console.log("🔍 Scanning and fixing import casing...\n");

const files = getAllFiles(SRC_DIR);

let fixed = 0;

files.forEach((file) => {
  let content = fs.readFileSync(file, "utf-8");
  let changed = false;
  const dir = path.dirname(file);

  content = content.replace(importRegex, (match, importPath) => {
    if (importPath.startsWith(".")) {
      const fullPath = path.resolve(dir, importPath);

      const candidates = [
        fullPath,
        fullPath + ".ts",
        fullPath + ".tsx",
        path.join(fullPath, "index.ts"),
        path.join(fullPath, "index.tsx"),
      ];

      const realFile = candidates.find((c) => fs.existsSync(c));
      if (realFile) {
        const realFixed = getRealPathCaseSensitive(
          path.relative(dir, realFile).replace(/\\/g, "/").replace(/\.(ts|tsx)$/, "")
        );

        const properImport = "./" + realFixed;
        if (importPath !== properImport) {
          console.log(`⚡ Fixed import in ${file}`);
          console.log(`   ${importPath}  -->  ${properImport}\n`);
          fixed++;
          changed = true;
          return `from "${properImport}"`;
        }
      }
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, "utf-8");
  }
});

if (fixed === 0) {
  console.log("✅ All imports already matched case correctly.");
} else {
  console.log(`✨ Fixed ${fixed} import path(s). Please commit the changes.\n`);
}