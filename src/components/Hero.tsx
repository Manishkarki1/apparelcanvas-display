import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-fluid text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-hero mb-6 animate-fade-in">
            REDEFINE
            <br />
            <span className="text-transparent bg-clip-text gradient-electric">
              YOUR STYLE
            </span>
          </h1>
          
          <p className="text-body opacity-90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Discover our curated collection of premium streetwear. 
            Bold designs that speak your language, crafted for those who dare to stand out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-zoom-in">
            <Link 
              to="/products"
              className="btn-electric inline-flex items-center group"
            >
              Shop Collection
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/products?category=hoodie"
              className="btn-hero-outline"
            >
              View Hoodies
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;