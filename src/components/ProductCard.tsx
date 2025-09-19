import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description?: string;
  className?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  category, 
  price, 
  image, 
  description,
  className = "" 
}: ProductCardProps) => {
  return (
    <div className={`product-card group ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="product-card-image"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Link 
            to={`/product/${id}`}
            className="btn-electric inline-flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Details
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="heading-product text-foreground group-hover:text-accent transition-colors">
            {name}
          </h3>
          <span className="text-xl font-bold text-accent ml-4">
            {price}
          </span>
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;