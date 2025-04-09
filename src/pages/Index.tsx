
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <FeaturedProducts />
        
        {/* Banner Section */}
        <section className="py-24 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-6">
              Craftsmanship That Lasts a Lifetime
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Each piece is meticulously crafted by skilled artisans using the finest materials and time-honored techniques.
            </p>
            <Link to="/about" className="btn-primary bg-white text-furniture-walnut hover:bg-furniture-cream inline-block">
              Our Story
            </Link>
          </div>
        </section>
        
        {/* Catalog Preview Section */}
        <section className="py-20 bg-furniture-beige/50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="section-title">British Exclusive Sofa Collection</h2>
              <p className="section-subtitle">
                Explore our 2025 collection - handcrafted in the United Kingdom
              </p>
            </div>
            
            <div className="relative mb-8 overflow-hidden rounded-md shadow-lg">
              <img 
                src="/lovable-uploads/d78eebc2-3167-4a3b-9120-7f47b8911d03.png" 
                alt="British Exclusive Sofa Collection 2025" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link 
                  to="/products" 
                  className="bg-white text-furniture-walnut px-6 py-3 rounded-sm hover:bg-furniture-walnut hover:text-white transition-colors font-medium"
                >
                  View Full Catalog
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/products" className="btn-secondary inline-block">
                Browse All Products
              </Link>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
