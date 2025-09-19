import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  className?: string;
}

const ProductCarousel = ({ title, products, className = "" }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= products.length - slidesToShow ? prev : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? prev : prev - 1
    );
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < products.length - slidesToShow;

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container-fluid">
        <div className="flex items-center justify-between mb-12">
          <h2 className="heading-section animate-fade-in">
            {title}
          </h2>
          
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                canGoPrev 
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                  : 'border-neutral text-muted-foreground cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                canGoNext 
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                  : 'border-neutral text-muted-foreground cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(products.length / slidesToShow) * 100}%`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className="px-3"
                style={{ width: `${100 / products.length}%` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(products.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * slidesToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToShow) === index
                  ? 'bg-accent scale-125'
                  : 'bg-neutral hover:bg-neutral-dark'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;