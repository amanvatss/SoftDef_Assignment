import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Toolbar from "../components/ToolBar/ToolBar";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import { products } from "../data/products";
import type { Product } from "../data/products";

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // state sync with URL
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [perPage, setPerPage] = useState(Number(searchParams.get("perPage")) || 12);
  const [sortBy, setSortBy] = useState<"name" | "price" | "popularity">(
    (searchParams.get("sortBy") as any) || "name"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    (searchParams.get("sortOrder") as any) || "asc"
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filters
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.category);
      const colorMatch = selectedColors.length === 0 || p.colors.some((c) => selectedColors.includes(c));
      return categoryMatch && brandMatch && colorMatch;
    });
  }, [selectedCategories, selectedBrands, selectedColors]);

  // Sorting
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price": return sortOrder === "asc" ? a.discountPrice - b.discountPrice : b.discountPrice - a.discountPrice;
        case "name": return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case "popularity": return sortOrder === "asc" ? a.ratingCount - b.ratingCount : b.ratingCount - a.ratingCount;
        default: return 0;
      }
    });
  }, [filtered, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  // Reset page when filters/sort change
  useEffect(() => {
    setPage(1);
  }, [sortBy, sortOrder, selectedCategories, selectedColors, selectedBrands]);

  // Sync to URL
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
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <main className="flex flex-1">
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
        <section className="flex-1 px-4 md:px-6">
          <HeroBanner />
          <Toolbar
            itemCount={filtered.length}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortByChange={setSortBy}
            perPage={perPage}
            onPerPageChange={setPerPage}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Product Section */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-4"}>
            {paginated.length === 0 ? (
              <p className="col-span-full text-center text-gray-500 py-12">
                😢 No products found.
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedColors([]);
                    setSelectedBrands([]);
                    setSortBy("name");
                    setSortOrder("asc");
                  }}
                  className="ml-2 text-blue-500 underline"
                >
                  Reset Filters
                </button>
              </p>
            ) : (
              paginated.map((p: Product) => <ProductCard key={p.id} product={p} />)
            )}
          </div>

          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;