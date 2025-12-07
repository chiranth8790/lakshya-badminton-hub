import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter?: (product: typeof products[0]) => boolean;
  limit?: number;
  viewAllLink?: string;
}

const FeaturedProducts = ({ 
  title, 
  subtitle, 
  filter, 
  limit = 4,
  viewAllLink 
}: FeaturedProductsProps) => {
  const filteredProducts = filter 
    ? products.filter(filter).slice(0, limit)
    : products.slice(0, limit);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {viewAllLink && (
            <Button asChild variant="ghost" className="self-start md:self-auto">
              <Link to={viewAllLink} className="flex items-center gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
