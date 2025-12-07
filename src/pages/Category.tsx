import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import AIAssistant from "@/components/AIAssistant";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { 
  products, 
  brands, 
  skillLevels, 
  playingStyles, 
  balanceTypes,
  priceRanges 
} from "@/data/products";

const Category = () => {
  const { sport, subcategory } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    skillLevel: "",
    playingStyle: "",
    balance: "",
    brand: ""
  });

  // Determine category title
  const categoryTitle = subcategory 
    ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1)
    : sport 
      ? sport.charAt(0).toUpperCase() + sport.slice(1)
      : "All Products";

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (sport && sport !== "badminton") {
        if (product.category.toLowerCase() !== sport.toLowerCase()) return false;
      }
      if (subcategory) {
        if (product.subcategory.toLowerCase() !== subcategory.toLowerCase()) return false;
      }
      if (sport === "badminton" && !subcategory) {
        if (product.category !== "Badminton") return false;
      }

      // Price filter
      if (filters.priceRange) {
        const range = priceRanges.find(r => r.label === filters.priceRange);
        if (range && (product.price < range.min || product.price > range.max)) return false;
      }

      // Skill level filter
      if (filters.skillLevel && product.skillLevel !== filters.skillLevel) return false;

      // Playing style filter
      if (filters.playingStyle && product.playingStyle !== filters.playingStyle) return false;

      // Balance filter
      if (filters.balance && product.balance !== filters.balance) return false;

      // Brand filter
      if (filters.brand && product.brand !== filters.brand) return false;

      return true;
    });
  }, [sport, subcategory, filters]);

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] === value ? "" : value
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: "",
      skillLevel: "",
      playingStyle: "",
      balance: "",
      brand: ""
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  // Determine which filters to show based on subcategory
  const showRacquetFilters = subcategory?.toLowerCase() === "racquets";
  const showShoeFilters = subcategory?.toLowerCase() === "shoes";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {categoryTitle}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
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

                  {/* Skill Level - for racquets */}
                  {showRacquetFilters && (
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Skill Level</h4>
                      <div className="space-y-2">
                        {skillLevels.map((level) => (
                          <button
                            key={level}
                            onClick={() => handleFilterChange("skillLevel", level)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              filters.skillLevel === level 
                                ? "bg-primary text-primary-foreground" 
                                : "hover:bg-secondary"
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Playing Style - for racquets */}
                  {showRacquetFilters && (
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Playing Style</h4>
                      <div className="space-y-2">
                        {playingStyles.map((style) => (
                          <button
                            key={style}
                            onClick={() => handleFilterChange("playingStyle", style)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              filters.playingStyle === style 
                                ? "bg-primary text-primary-foreground" 
                                : "hover:bg-secondary"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Balance - for racquets */}
                  {showRacquetFilters && (
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-3">Balance</h4>
                      <div className="space-y-2">
                        {balanceTypes.map((balance) => (
                          <button
                            key={balance}
                            onClick={() => handleFilterChange("balance", balance)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              filters.balance === balance 
                                ? "bg-primary text-primary-foreground" 
                                : "hover:bg-secondary"
                            }`}
                          >
                            {balance}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

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

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="w-full"
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

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Same filter content as desktop */}
            <div className="space-y-6">
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

export default Category;
