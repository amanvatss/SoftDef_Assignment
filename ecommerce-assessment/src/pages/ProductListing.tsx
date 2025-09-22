import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Toolbar from "../components/Toolbar/Toolbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import { products } from "../data/products";
import type { Product } from "../data/products";

/* --- Loading skeleton card --- */
const SkeletonCard = () => (
  <div className="animate-pulse bg-gray-200 rounded h-64 w-full"></div>
);

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Pagination state
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [perPage, setPerPage] = useState(
    Number(searchParams.get("perPage")) || 12
  );

  // Sort/filter state
  const [sortBy, setSortBy] = useState<"name" | "price" | "popularity">(
    (searchParams.get("sortBy") as any) || "name"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    (searchParams.get("sortOrder") as any) || "asc"
  );
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Grid/List toggle
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Loading simulation for skeletons
  const [loading, setLoading] = useState(false);

  /* ---------------- FILTERING ---------------- */
  const filtered = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => {
        const categoryMatch =
          selectedCategories.length === 0 ||
          selectedCategories.includes(p.category);
        const brandMatch =
          selectedBrands.length === 0 || selectedBrands.includes(p.category);
        const colorMatch =
          selectedColors.length === 0 ||
          p.colors.some((c) => selectedColors.includes(c));
        return categoryMatch && brandMatch && colorMatch;
      });
  }, [search, selectedCategories, selectedBrands, selectedColors]);

  /* ---------------- SORTING ---------------- */
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price":
          return sortOrder === "asc"
            ? a.discountPrice - b.discountPrice
            : b.discountPrice - a.discountPrice;
        case "name":
          return sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case "popularity":
          return sortOrder === "asc"
            ? a.ratingCount - b.ratingCount
            : b.ratingCount - a.ratingCount;
        default:
          return 0;
      }
    });
  }, [filtered, sortBy, sortOrder]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  // Reset page when filters/sort change
  useEffect(() => {
    setPage(1);
  }, [sortBy, sortOrder, selectedCategories, selectedColors, selectedBrands]);

  // Loading skeleton trigger
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [
    sortBy,
    sortOrder,
    page,
    selectedCategories,
    selectedColors,
    selectedBrands,
    search,
  ]);

  // Sync state with URL
  useEffect(() => {
    setSearchParams({
      page: String(page),
      perPage: String(perPage),
      sortBy,
      sortOrder,
    });
  }, [page, perPage, sortBy, sortOrder, setSearchParams]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar includes 🛒 icon that opens Cart Drawer */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="flex flex-1">
        {/* Sidebar (collapsible drawer on mobile) */}
        <Sidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main content */}
        <section className="flex-1 px-4 md:px-6">
          <HeroBanner />

          {/* Toolbar with sort, items, search, etc */}
          <Toolbar
            itemCount={filtered.length}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortByChange={setSortBy}
            onSortOrderChange={setSortOrder} 
            perPage={perPage}
            onPerPageChange={setPerPage}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            search={search}
            onSearchChange={setSearch}
          />

          {/* Product grid / list */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col space-y-4"
            }
          >
            {loading ? (
              // Show skeletons during filter/sort refresh
              Array.from({ length: perPage }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            ) : paginated.length === 0 ? (
              // Empty state
              <p className="col-span-full text-center text-gray-500 py-12">
                😢 No products found.
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedColors([]);
                    setSelectedBrands([]);
                    setSortBy("name");
                    setSortOrder("asc");
                    setSearch("");
                  }}
                  className="ml-2 text-blue-500 underline"
                >
                  Reset Filters
                </button>
              </p>
            ) : (
              // Render Product Cards
              paginated.map((p: Product) => (
                <ProductCard key={p.id} product={p} />
              ))
            )}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductListing;
