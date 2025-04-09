
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0); // This would be connected to actual cart state in a real app
  const location = useLocation();

  // Check if the current route matches the link
  const isActive = (path: string) => location.pathname === path;
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-furniture-walnut">Omar's Furniture</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-furniture-walnut transition-colors ${
                isActive("/") ? "text-furniture-walnut" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <span className="text-sm font-medium text-gray-700 cursor-pointer hover:text-furniture-walnut transition-colors flex items-center">
                Shop
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/shop?category=sofas" className="block py-2 px-3 text-sm text-gray-700 hover:bg-furniture-beige rounded-md">Sofas</Link>
                <Link to="/shop?category=chairs" className="block py-2 px-3 text-sm text-gray-700 hover:bg-furniture-beige rounded-md">Chairs</Link>
                <Link to="/shop?category=tables" className="block py-2 px-3 text-sm text-gray-700 hover:bg-furniture-beige rounded-md">Tables</Link>
                <Link to="/shop?category=beds" className="block py-2 px-3 text-sm text-gray-700 hover:bg-furniture-beige rounded-md">Beds</Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`text-sm font-medium hover:text-furniture-walnut transition-colors ${
                isActive("/about") ? "text-furniture-walnut" : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium hover:text-furniture-walnut transition-colors ${
                isActive("/contact") ? "text-furniture-walnut" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="text-gray-700 hover:text-furniture-walnut transition-colors"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/cart" 
              className="text-gray-700 hover:text-furniture-walnut transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-furniture-walnut text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              aria-label="Menu" 
              className="md:hidden text-gray-700 hover:text-furniture-walnut transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-serif font-bold text-furniture-walnut">Menu</h2>
              <button 
                aria-label="Close menu" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-furniture-walnut"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium text-gray-700 hover:text-furniture-walnut transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">Shop</h3>
                <div className="pl-4 space-y-3">
                  <Link 
                    to="/shop?category=sofas" 
                    className="block text-base text-gray-600 hover:text-furniture-walnut transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sofas
                  </Link>
                  <Link 
                    to="/shop?category=chairs" 
                    className="block text-base text-gray-600 hover:text-furniture-walnut transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Chairs
                  </Link>
                  <Link 
                    to="/shop?category=tables" 
                    className="block text-base text-gray-600 hover:text-furniture-walnut transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tables
                  </Link>
                  <Link 
                    to="/shop?category=beds" 
                    className="block text-base text-gray-600 hover:text-furniture-walnut transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Beds
                  </Link>
                </div>
              </div>
              <Link 
                to="/about" 
                className="block text-lg font-medium text-gray-700 hover:text-furniture-walnut transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-lg font-medium text-gray-700 hover:text-furniture-walnut transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
