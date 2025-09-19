import { Link } from "react-router-dom";
import { ArrowRight, Zap, Star, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, featuredProducts } from "@/data/products";

const Index = () => {
  const hoodieProducts = products.filter(p => p.category === "hoodie");
  const shirtProducts = products.filter(p => p.category === "shirt");

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <Hero />
      
      {/* Featured Collections */}
      <ProductCarousel 
        title="Featured Collection"
        products={featuredProducts}
        className="bg-neutral-light"
      />

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-section mb-8">
                Crafted for the 
                <span className="text-accent"> Bold</span>
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                Every piece in our collection tells a story. From concept to creation, 
                we obsess over every detail to deliver streetwear that doesn't just look good—it feels incredible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">Finest materials, expert craftsmanship</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Unique Designs</h3>
                  <p className="text-sm text-muted-foreground">Original, bold, unforgettable</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Made with Love</h3>
                  <p className="text-sm text-muted-foreground">Passion in every stitch</p>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="product-card">
                  <img src={featuredProducts[0]?.image} alt="Featured" className="product-card-image" />
                </div>
                <div className="product-card mt-8">
                  <img src={featuredProducts[1]?.image} alt="Featured" className="product-card-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoodies Collection */}
      <ProductCarousel 
        title="Premium Hoodies"
        products={hoodieProducts}
        className="bg-background"
      />

      {/* Shirts Collection */}
      <ProductCarousel 
        title="Essential Shirts"
        products={shirtProducts}
        className="bg-neutral-light"
      />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-neutral-darker text-white">
        <div className="container-fluid text-center">
          <h2 className="heading-section mb-6 animate-fade-in">
            Ready to Stand Out?
          </h2>
          <p className="text-body opacity-90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Join thousands of style enthusiasts who trust LUXE for their streetwear needs. 
            Your next favorite piece is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-zoom-in">
            <Link 
              to="/products"
              className="btn-electric inline-flex items-center group"
            >
              Shop All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero-outline text-white border-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
