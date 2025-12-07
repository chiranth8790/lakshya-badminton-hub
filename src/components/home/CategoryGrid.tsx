import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

interface CategoryGridProps {
  type: "badminton" | "other";
  title: string;
}

const CategoryGrid = ({ type, title }: CategoryGridProps) => {
  const categoryList = type === "badminton" ? categories.badminton : categories.otherSports;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        </motion.div>

        <div className={`grid gap-6 ${
          type === "badminton" 
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
            : "grid-cols-2 md:grid-cols-4"
        }`}>
          {categoryList.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={type === "badminton" 
                  ? `/category/badminton/${category.name.toLowerCase()}`
                  : `/category/${category.name.toLowerCase()}`
                }
                className="category-box group"
              >
                <span className="text-5xl mb-2 transition-transform group-hover:scale-125">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} Products
                </p>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
