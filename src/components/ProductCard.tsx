
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  imageSrc: string;
}

const ProductCard = ({ id, name, category, imageSrc }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to wishlist",
      description: `${name} has been added to your wishlist.`,
    });
  };

  return (
    <Link
      to={`/contact`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm mb-4">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with buttons */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleWishlist}
            className="bg-white text-furniture-walnut p-3 rounded-full hover:bg-furniture-walnut hover:text-white transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm text-gray-500 mb-1">{category}</h3>
        <h2 className="text-lg font-medium font-serif text-furniture-darkbrown group-hover:text-furniture-walnut transition-colors">{name}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
