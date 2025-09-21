import type { FC } from "react";
import { useState } from "react";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  isOpen?: boolean; // for mobile
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  selectedBrands,
  setSelectedBrands,
  isOpen = false,
  onClose,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const hotDeals = [
    { label: "Nike", count: 2 },
    { label: "Airmax", count: 48 },
    { label: "Nike", count: 14 },
    { label: "Adidas", count: 15 },
    { label: "Vans", count: 23 },
    { label: "All Stars", count: 1 },
    { label: "Puma", count: 18 },
    { label: "Reebok", count: 12 },
  ];

  const displayedDeals = showAllCategories ? hotDeals : hotDeals.slice(0, 6);

  const brands = [
    { label: "Nike", count: 99 },
    { label: "Adidas", count: 99 },
    { label: "Siemens", count: 99 },
  ];

  const colors = [
    "#2196F3",
    "#FF3B30",
    "#000000",
    "#FFD600",
    "#FF2D55",
    "#E0E0E0",
  ];

  const toggleSelection = (
    list: string[],
    setList: (v: string[]) => void,
    value: string
  ) => {
    setList(
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    );
  };

  const content = (
    <div className="w-full px-4 py-6 space-y-6">
      {/* Hot Deals */}
      <div className="bg-white shadow-sm rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Hot Deals</h3>
        <ul className="space-y-2 text-sm">
          {displayedDeals.map((item, idx) => (
            <li
              key={idx}
              className={`flex justify-between cursor-pointer ${
                selectedCategories.includes(item.label)
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() =>
                toggleSelection(
                  selectedCategories,
                  setSelectedCategories,
                  item.label
                )
              }
            >
              <span>{item.label}</span>
              <span>{item.count}</span>
            </li>
          ))}
        </ul>
        {hotDeals.length > 6 && (
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="text-blue-500 text-sm mt-2"
          >
            {showAllCategories ? "View Less" : "View More"}
          </button>
        )}
      </div>

      {/* Prices */}
      <div className="bg-white shadow-sm rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-3 uppercase text-xs">
          Prices
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Range: <span className="font-medium">$13.99 - $25.99</span>
        </p>
        <input type="range" className="w-full accent-blue-500" />
      </div>

      {/* Colors */}
      <div className="bg-white shadow-sm rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-3 uppercase text-xs">
          Color
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() =>
                toggleSelection(selectedColors, setSelectedColors, color)
              }
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColors.includes(color)
                  ? "ring-2 ring-offset-2 ring-blue-400"
                  : ""
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="bg-white shadow-sm rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-3 uppercase text-xs">
          Brand
        </h3>
        <ul className="space-y-2 text-sm">
          {brands.map((item, idx) => (
            <li
              key={idx}
              className={`flex justify-between cursor-pointer ${
                selectedBrands.includes(item.label)
                  ? "text-blue-500 font-medium"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() =>
                toggleSelection(selectedBrands, setSelectedBrands, item.label)
              }
            >
              <span>{item.label}</span>
              <span>{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* MORE Button */}
      <div className="bg-white text-center shadow-sm rounded p-3 cursor-pointer hover:bg-gray-100 font-medium">
        MORE
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 bg-gray-50 w-64 md:w-72 overflow-y-auto">
        {content}
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-white w-64 md:w-72 h-screen overflow-y-auto relative animate-slide-in">
            <button
              className="absolute top-3 right-3 text-gray-600"
              onClick={onClose}
            >
              ✕
            </button>
            {content}
          </div>
          <div className="flex-1" onClick={onClose}></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
