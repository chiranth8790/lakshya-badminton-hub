import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight } from "lucide-react";
import { brands, skillLevels, playingStyles, priceRanges } from "@/data/products";

const AIMatchFinder = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: "",
    skillLevel: "",
    playingStyle: "",
    brand: ""
  });

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev] === value ? "" : value
    }));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 neon-border"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Perfect Racquet –{" "}
              <span className="gradient-text">AI Match Finder</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let our AI analyze your playing style and preferences to recommend 
              the perfect racquet for your game.
            </p>
          </div>

          {/* Filter Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Price Range */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">Price Range</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => handleFilterChange("priceRange", range.label)}
                      className={`filter-chip ${selectedFilters.priceRange === range.label ? "filter-chip-active" : ""}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Level */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">Skill Level</h4>
                <div className="flex flex-wrap gap-2">
                  {skillLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => handleFilterChange("skillLevel", level)}
                      className={`filter-chip ${selectedFilters.skillLevel === level ? "filter-chip-active" : ""}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Playing Style */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">Playing Style</h4>
                <div className="flex flex-wrap gap-2">
                  {playingStyles.map((style) => (
                    <button
                      key={style}
                      onClick={() => handleFilterChange("playingStyle", style)}
                      className={`filter-chip ${selectedFilters.playingStyle === style ? "filter-chip-active" : ""}`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Preference */}
              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">Brand Preference</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleFilterChange("brand", brand)}
                      className={`filter-chip ${selectedFilters.brand === brand ? "filter-chip-active" : ""}`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button variant="hero" size="lg" className="min-w-[250px]">
                <Sparkles className="w-5 h-5" />
                Start AI Match Finder
                <ChevronRight className="w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Powered by advanced AI to find your perfect match
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMatchFinder;
