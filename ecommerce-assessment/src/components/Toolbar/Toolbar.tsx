import type { FC } from "react";
import { LayoutGrid, List } from "lucide-react"; // icons

interface ToolbarProps {
  itemCount: number;
  sortBy: "name" | "price" | "popularity";
  sortOrder: "asc" | "desc";
  perPage: number;
  onSortByChange: (s: "name" | "price" | "popularity") => void;
  onPerPageChange: (n: number) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const Toolbar: FC<ToolbarProps> = ({
  itemCount,
  sortBy,
  perPage,
  onSortByChange,
  onPerPageChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 px-4 py-3 rounded shadow-sm text-sm mb-6 space-y-3 md:space-y-0">
      {/* Left: item count */}
      <p className="text-gray-600">{itemCount} Items</p>

      {/* Middle: Sort By & Show */}
      <div className="flex items-center space-x-6">
        <label className="flex items-center space-x-2 text-gray-600">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>

        <label className="flex items-center space-x-2 text-gray-600">
          <span>Show</span>
          <select
            value={perPage}
            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </label>
      </div>

      {/* Right: view toggle buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 rounded border ${
            viewMode === "grid"
              ? "text-blue-500 border-blue-500"
              : "text-gray-400 border-transparent hover:text-gray-700"
          }`}
        >
          <LayoutGrid size={18} />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 rounded border ${
            viewMode === "list"
              ? "text-blue-500 border-blue-500"
              : "text-gray-400 border-transparent hover:text-gray-700"
          }`}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;