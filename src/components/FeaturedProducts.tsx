
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample product data - in a real app, this would come from an API/database
const allProducts = [
  {
    id: 1,
    name: "Harmony Sofa",
    category: "Sofas",
    imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 2,
    name: "Serenity Armchair",
    category: "Chairs",
    imageSrc: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2665&q=80"
  },
  {
    id: 3,
    name: "Nova Dining Table",
    category: "Tables",
    imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 4,
    name: "Luna Queen Bed",
    category: "Beds",
    imageSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 5,
    name: "Oasis Coffee Table",
    category: "Tables",
    imageSrc: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 6,
    name: "Tranquil Lounge Chair",
    category: "Chairs",
    imageSrc: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 7,
    name: "Urban Sectional",
    category: "Sofas",
    imageSrc: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: 8,
    name: "Dreamer King Bed",
    category: "Beds",
    imageSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  }
];

// Array of categories for filter
const categories = ["All", "Sofas", "Chairs", "Tables", "Beds"];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter products based on active category
  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-furniture-softwhite">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Collection</h2>
        <p className="section-subtitle text-center">
          Discover our most popular and trending pieces crafted for modern living.
        </p>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-sm whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-furniture-walnut text-white"
                    : "bg-transparent text-furniture-darkbrown hover:bg-furniture-beige"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group block">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <Link
                    to="/contact"
                    className="bg-white text-furniture-walnut px-4 py-2 rounded-sm hover:bg-furniture-walnut hover:text-white transition-colors"
                  >
                    Contact for details
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 mb-1">{product.category}</h3>
                <h2 className="text-lg font-medium font-serif text-furniture-darkbrown group-hover:text-furniture-walnut transition-colors">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All button */}
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="btn-secondary inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
