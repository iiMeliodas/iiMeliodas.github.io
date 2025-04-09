
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  category: string;
  imageSrc: string;
}

const products: Product[] = [
  { id: 1, name: "FALCON", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 2, name: "BRAVO", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 3, name: "CHESTER FIELD", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 4, name: "PEARTH CORNER", category: "Corner Sofa", imageSrc: "/placeholder.svg" },
  { id: 5, name: "CHESTER FIELD PARKER CORNER", category: "Corner Sofa", imageSrc: "/placeholder.svg" },
  { id: 6, name: "ROSE LAND LOUNGE", category: "Lounge", imageSrc: "/placeholder.svg" },
  { id: 7, name: "ROSE LAND CHAIR", category: "Chair", imageSrc: "/placeholder.svg" },
  { id: 8, name: "RAMADA", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 9, name: "FLAME 3 SEATER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 10, name: "PRINCE LOUNGE", category: "Lounge", imageSrc: "/placeholder.svg" },
  { id: 11, name: "ROSE LAND 2 SEATER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 12, name: "ROSE LAND CORNER", category: "Corner Sofa", imageSrc: "/placeholder.svg" },
  { id: 13, name: "ROSE LAND 3 SEATER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 14, name: "ROSE LAND 3 SEATER - GOLD", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 15, name: "ROSE LAND 3+2 - BLACK", category: "Sofa Set", imageSrc: "/placeholder.svg" },
  { id: 16, name: "PEARTH 3 SEATER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 17, name: "ORHAN GOLDWOOD & CHROME", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 18, name: "PARKER 3 SEATER WITH PVC", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 19, name: "CHESTER FIELD BADESTER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 20, name: "GHORI CORNER", category: "Corner Sofa", imageSrc: "/placeholder.svg" },
  { id: 21, name: "CHESTERFIELD FERRO BENCH", category: "Bench", imageSrc: "/placeholder.svg" },
  { id: 22, name: "CHOCLATE BAR BENCH", category: "Bench", imageSrc: "/placeholder.svg" },
  { id: 23, name: "ROSE LAND FIX BACK", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 24, name: "JOY GOLD 3 SEATER", category: "Sofa", imageSrc: "/placeholder.svg" },
  { id: 25, name: "ROCK", category: "Sofa", imageSrc: "/placeholder.svg" },
];

const ProductCatalog = () => {
  return (
    <div>
      {/* Full Catalog Image */}
      <div className="mb-12">
        <img 
          src="/lovable-uploads/d78eebc2-3167-4a3b-9120-7f47b8911d03.png" 
          alt="British Exclusive Sofa Collection 2025" 
          className="w-full h-auto rounded-md shadow-md"
        />
        <p className="text-center mt-4 text-sm text-gray-500">
          Full catalog image - individual product images shown below are placeholders
        </p>
      </div>
      
      {/* Individual Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
