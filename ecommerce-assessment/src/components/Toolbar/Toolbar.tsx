import type { FC } from "react";
import { LayoutGrid, List } from "lucide-react";

interface ToolbarProps {
  itemCount: number;
  sortBy: "name" | "price" | "popularity";
  sortOrder: "asc" | "desc";
  perPage: number;
  onSortByChange: (s: "name" | "price" | "popularity") => void;
  onSortOrderChange: (o: "asc" | "desc") => void;   // ✅ add handler
  onPerPageChange: (n: number) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  search: string;
  onSearchChange: (val: string) => void;
}

const Toolbar: FC<ToolbarProps> = ({
  itemCount,
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
  perPage,
  onPerPageChange,
  viewMode,
  onViewModeChange,
  search,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 px-4 py-3 rounded shadow-sm text-sm mb-6 space-y-3 md:space-y-0">
      
      {/* Item count */}
      <p>{itemCount} Items</p>

      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products..."
        className="border rounded px-2 py-1 text-sm"
      />

      {/* Sort & Show */}
      <div className="flex items-center space-x-6">
        
        {/* Sort By */}
        <label>
          Sort By{" "}
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="border rounded p-1"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>

        {/* Sort Order (asc/desc) */}
        <label>
          Order{" "}
          <select
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value as any)}
            className="border rounded p-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        {/* Per Page */}
        <label>
          Show{" "}
          <select
            value={perPage}
            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
            className="border rounded p-1"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </label>
      </div>

      {/* View mode buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 rounded border ${
            viewMode === "grid"
              ? "text-blue-500 border-blue-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          <LayoutGrid size={18} />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 rounded border ${
            viewMode === "list"
              ? "text-blue-500 border-blue-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          <List size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;