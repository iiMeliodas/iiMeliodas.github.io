
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page header */}
      <div className="pt-24 pb-12 bg-furniture-beige">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-furniture-walnut text-center">Our Products</h1>
        </div>
      </div>
      
      <main className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="section-title">British Exclusive Sofa Collection 2025</h2>
            <p className="section-subtitle">
              All our designs are fully customizable and made in the United Kingdom with premium materials.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
