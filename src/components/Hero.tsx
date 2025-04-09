
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Modern living room with elegant furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-10 md:mt-0">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight animate-fade-in">
            Elevate Your Living Spaces
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover timeless pieces crafted for comfort, style, and the moments that matter in your home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link 
              to="/shop" 
              className="bg-furniture-walnut text-white px-8 py-3 rounded-sm hover:bg-furniture-darkbrown transition-colors duration-300 font-medium flex items-center justify-center sm:justify-start"
            >
              Shop Now
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border border-white text-white px-8 py-3 rounded-sm hover:bg-white hover:text-furniture-walnut transition-colors duration-300 font-medium flex items-center justify-center sm:justify-start"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
