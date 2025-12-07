import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import AIAssistant from "@/components/AIAssistant";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react";
import { products, brands, priceRanges, categories } from "@/data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    brand: ""
  });

  const allCategories = [
    ...categories.badminton.map(c => ({ ...c, sport: "Badminton" })),
    ...categories.otherSports.map(c => ({ ...c, sport: c.name }))
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // New filter
      if (filterParam === "new" && !product.isNew) return false;

      // Category filter
      if (filters.category && product.subcategory !== filters.category) return false;

      // Price filter
      if (filters.priceRange) {
        const range = priceRanges.find(r => r.label === filters.priceRange);
        if (range && (product.price < range.min || product.price > range.max)) return false;
      }

      // Brand filter
      if (filters.brand && product.brand !== filters.brand) return false;

      return true;
    });
  }, [filterParam, filters]);

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] === value ? "" : value
    }));
  };

  const clearFilters = () => {
    setFilters({ category: "", priceRange: "", brand: "" });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {filterParam === "new" ? "New Arrivals" : "All Products"}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-2 p-1 bg-secondary rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="h-8 w-8"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="h-8 w-8"
                >
                  <LayoutList className="w-4 h-4" />
                </Button>
              </div>

              {/* Filter Button - Mobile */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <div className="glass-card p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Category</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {allCategories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => handleFilterChange("category", cat.name)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                            filters.category === cat.name 
                              ? "bg-primary text-primary-foreground" 
                              : "hover:bg-secondary"
                          }`}
                        >
                          <span>{cat.icon}</span>
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Price Range</h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => handleFilterChange("priceRange", range.label)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            filters.priceRange === range.label 
                              ? "bg-primary text-primary-foreground" 
                              : "hover:bg-secondary"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brand */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Brand</h4>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => handleFilterChange("brand", brand)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            filters.brand === brand 
                              ? "bg-primary text-primary-foreground" 
                              : "hover:bg-secondary"
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1"
                }`}>
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">
                    No products found matching your filters
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <AIAssistant />

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-primary mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {allCategories.slice(0, 6).map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => handleFilterChange("category", cat.name)}
                      className={`filter-chip text-xs ${filters.category === cat.name ? "filter-chip-active" : ""}`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-primary mb-3">Price Range</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => handleFilterChange("priceRange", range.label)}
                      className={`filter-chip text-xs ${filters.priceRange === range.label ? "filter-chip-active" : ""}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-primary mb-3">Brand</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleFilterChange("brand", brand)}
                      className={`filter-chip text-xs ${filters.brand === brand ? "filter-chip-active" : ""}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Button variant="hero" className="w-full" onClick={() => setShowFilters(false)}>
                Apply Filters
              </Button>
              <Button variant="outline" className="w-full" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Products;
