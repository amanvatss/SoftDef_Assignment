import type { FC } from "react";
import FilterPanel from "./FilterPanel";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

const Sidebar: FC<SidebarProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  selectedBrands,
  setSelectedBrands,
}) => {
  const toggleSelection = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  const categories = ["Nike", "Adidas", "Sneakers", "Vans"];
  const brands = ["Nike", "Adidas", "Siemens"];
  const colors = ["#000000", "#FF0000", "#2196F3", "#FFC107", "#E91E63"]; // black, red, blue, yellow, pink

  return (
    <aside className="w-64 bg-white p-6 border-r space-y-6 hidden lg:block">
      {/* Categories */}
      <FilterPanel title="Hot Deals" open={true} setOpen={() => {}}>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => toggleSelection(selectedCategories, setSelectedCategories, cat)}
              className={`cursor-pointer ${
                selectedCategories.includes(cat) ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </FilterPanel>

      {/* Prices (for visual only here, not wired yet) */}
      <FilterPanel title="Prices" open={true} setOpen={() => {}}>
        <p className="text-sm mb-2">Range: $13.99 - $25.99</p>
        <input type="range" className="w-full accent-blue-500" />
      </FilterPanel>

      {/* Colors */}
      <FilterPanel title="Color" open={true} setOpen={() => {}}>
        <div className="flex space-x-2">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-6 h-6 rounded-full cursor-pointer border`}
              style={{ backgroundColor: color }}
              onClick={() => toggleSelection(selectedColors, setSelectedColors, color)}
            >
              {selectedColors.includes(color) && (
                <div className="w-6 h-6 rounded-full ring-2 ring-blue-400"></div>
              )}
            </div>
          ))}
        </div>
      </FilterPanel>

      {/* Brands */}
      <FilterPanel title="Brand" open={true} setOpen={() => {}}>
        <ul className="space-y-2 text-sm">
          {brands.map((brand) => (
            <li
              key={brand}
              onClick={() => toggleSelection(selectedBrands, setSelectedBrands, brand)}
              className={`cursor-pointer ${
                selectedBrands.includes(brand) ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {brand}
            </li>
          ))}
        </ul>
      </FilterPanel>
    </aside>
  );
};

export default Sidebar;