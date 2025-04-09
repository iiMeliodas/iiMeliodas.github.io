
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-furniture-walnut text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Omar's Furniture</h3>
            <p className="text-furniture-beige text-sm mb-6 max-w-xs">
              Crafting timeless pieces that transform houses into homes since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-furniture-cream transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-furniture-cream transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-furniture-cream transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-furniture-beige hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-furniture-beige hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-furniture-beige hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-furniture-beige hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-furniture-beige hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours and Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Hours & Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Monday - Saturday: 9am - 7pm<br />Sunday: Closed</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Mobile: 07929 886930<br />
                  Office: 01274 726011
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>muhammadimran308@yahoo.com</span>
              </li>
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-medium mb-4">Visit Our Showroom</h4>
            <div className="flex items-start mb-4">
              <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
              <span>29 Summerville Rd, Bradford BD7 1NS</span>
            </div>
            <a 
              href="https://maps.google.com/?q=29+Summerville+Rd,+Bradford+BD7+1NS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-furniture-walnut px-4 py-2 rounded-sm hover:bg-furniture-cream transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-furniture-lightbrown/30 my-8" />
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-furniture-beige">
          <p>&copy; {currentYear} Omar's Furniture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
