import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, X, ChevronRight } from "lucide-react";
import { brands, skillLevels, playingStyles, priceRanges } from "@/data/products";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    budget: "",
    skillLevel: "",
    brand: "",
    playingStyle: ""
  });

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] === value ? "" : value
    }));
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="rounded-full w-16 h-16 p-0 animate-pulse-glow"
        >
          <Sparkles className="w-7 h-7" />
        </Button>
        <span className="absolute -top-2 -right-2 px-2 py-1 bg-destructive text-destructive-foreground text-xs rounded-full font-bold">
          AI
        </span>
      </motion.div>

      {/* Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md"
            >
              <div className="glass-card p-6 neon-border">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Match Finder</h3>
                      <p className="text-xs text-muted-foreground">Quick recommendations</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Filters */}
                <div className="space-y-5">
                  {/* Budget */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Budget</h4>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.slice(0, 3).map((range) => (
                        <button
                          key={range.label}
                          onClick={() => handleFilterChange("budget", range.label)}
                          className={`filter-chip text-xs ${selectedFilters.budget === range.label ? "filter-chip-active" : ""}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Skill Level */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Skill Level</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillLevels.slice(0, 3).map((level) => (
                        <button
                          key={level}
                          onClick={() => handleFilterChange("skillLevel", level)}
                          className={`filter-chip text-xs ${selectedFilters.skillLevel === level ? "filter-chip-active" : ""}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brand */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Brand</h4>
                    <div className="flex flex-wrap gap-2">
                      {brands.slice(0, 4).map((brand) => (
                        <button
                          key={brand}
                          onClick={() => handleFilterChange("brand", brand)}
                          className={`filter-chip text-xs ${selectedFilters.brand === brand ? "filter-chip-active" : ""}`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Playing Style */}
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Playing Style</h4>
                    <div className="flex flex-wrap gap-2">
                      {playingStyles.map((style) => (
                        <button
                          key={style}
                          onClick={() => handleFilterChange("playingStyle", style)}
                          className={`filter-chip text-xs ${selectedFilters.playingStyle === style ? "filter-chip-active" : ""}`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button variant="hero" className="w-full mt-6">
                  <Sparkles className="w-4 h-4" />
                  Find Recommendations
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
