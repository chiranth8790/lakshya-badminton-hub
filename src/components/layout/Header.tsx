import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products", hasMegaMenu: true },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">Lakshya</span>
              <span className="text-primary"> Sports</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMegaMenu && setIsMegaMenuOpen(false)}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                  {link.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu */}
                {link.hasMegaMenu && (
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                      >
                        <div className="glass-card p-6 grid grid-cols-2 gap-6">
                          {/* Badminton */}
                          <div>
                            <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
                              <span className="text-lg">🏸</span> Badminton
                            </h3>
                            <div className="space-y-2">
                              {categories.badminton.map((cat) => (
                                <Link
                                  key={cat.name}
                                  to={`/category/badminton/${cat.name.toLowerCase()}`}
                                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors group"
                                >
                                  <span className="flex items-center gap-2 text-foreground/80 group-hover:text-foreground">
                                    <span>{cat.icon}</span>
                                    {cat.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground">{cat.count}</span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Other Sports */}
                          <div>
                            <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
                              <span className="text-lg">🏆</span> Other Sports
                            </h3>
                            <div className="space-y-2">
                              {categories.otherSports.map((cat) => (
                                <Link
                                  key={cat.name}
                                  to={`/category/${cat.name.toLowerCase()}`}
                                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors group"
                                >
                                  <span className="flex items-center gap-2 text-foreground/80 group-hover:text-foreground">
                                    <span>{cat.icon}</span>
                                    {cat.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground">{cat.count}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="relative"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Login */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for racquets, shoes, accessories..."
                    className="w-full h-12 pl-12 pr-4 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasMegaMenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      <p className="text-sm text-primary font-medium">Badminton</p>
                      {categories.badminton.slice(0, 4).map((cat) => (
                        <Link
                          key={cat.name}
                          to={`/category/badminton/${cat.name.toLowerCase()}`}
                          className="block py-1 text-sm text-foreground/60 hover:text-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {cat.icon} {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                <User className="w-4 h-4 mr-2" />
                Login / Register
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
