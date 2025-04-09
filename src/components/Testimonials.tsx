
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Sample testimonial data - in a real app, this would come from an API/database
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Interior Designer",
    quote: "Omar's Furniture pieces have elevated my clients' homes with their exceptional craftsmanship and timeless design. Their attention to detail is unmatched in the industry.",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Homeowner",
    quote: "After searching for the perfect sofa for months, I found exactly what I needed at Omar's. The quality, comfort, and style exceeded my expectations, and the customer service was impeccable.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Architect",
    quote: "I've been recommending Omar's Furniture to my clients for years. Their pieces blend functionality with aesthetic appeal, creating spaces that are both beautiful and livable.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-furniture-beige">
      <div className="container-custom">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        
        <div className="mt-12 relative">
          {/* Testimonial slider */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-10 left-0 text-furniture-walnut opacity-20">
                <Quote size={64} />
              </div>
              
              {/* Testimonial */}
              <div className="bg-white p-8 md:p-12 rounded-sm shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <img 
                      src={testimonials[currentIndex].imageSrc} 
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <h3 className="text-xl font-serif font-medium text-furniture-walnut">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white border border-furniture-walnut text-furniture-walnut hover:bg-furniture-walnut hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-furniture-walnut text-furniture-walnut hover:bg-furniture-walnut hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-furniture-walnut" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
