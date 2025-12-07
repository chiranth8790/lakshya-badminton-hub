import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="product-card group"
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square bg-secondary/50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded-full flex items-center gap-1">
                <BadgePercent className="w-3 h-3" />
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="glass" className="w-9 h-9">
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button variant="default" className="w-full">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Specs Tags */}
          {(product.skillLevel || product.playingStyle) && (
            <div className="flex flex-wrap gap-1 mt-3">
              {product.skillLevel && product.skillLevel !== "All" && (
                <span className="px-2 py-0.5 text-xs bg-secondary rounded text-muted-foreground">
                  {product.skillLevel}
                </span>
              )}
              {product.playingStyle && (
                <span className="px-2 py-0.5 text-xs bg-secondary rounded text-muted-foreground">
                  {product.playingStyle}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
