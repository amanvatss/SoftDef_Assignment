import type { FC } from "react";

interface ToolbarProps {
  itemCount: number;
  sortBy: "name" | "price" | "popularity";
  sortOrder: "asc" | "desc";
  perPage: number;
  onSortByChange: (s: "name" | "price" | "popularity") => void;
  onSortOrderChange: (o: "asc" | "desc") => void;
  onPerPageChange: (n: number) => void;
}

const Toolbar: FC<ToolbarProps> = ({
  itemCount,
  sortBy,
  sortOrder,
  perPage,
  onSortByChange,
  onSortOrderChange,
  onPerPageChange,
}) => {
  return (
    <div className="flex justify-between items-center py-4 text-sm">
      <p>{itemCount} Items</p>
      <div className="flex items-center space-x-4">
        <label>
          Sort By{" "}
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as any)}
            className="border rounded p-1 text-sm"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </label>

        <label>
          Order{" "}
          <select
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value as any)}
            className="border rounded p-1 text-sm"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        <label>
          Show{" "}
          <select
            value={perPage}
            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
            className="border rounded p-1 text-sm"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Toolbar;