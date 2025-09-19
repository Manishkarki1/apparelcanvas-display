import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Shirt, Palette, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(getProductById(id || ""));
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock additional images for carousel
  const productImages = product ? [product.image, product.image, product.image] : [];
  
  // Suggested products (excluding current product)
  const suggestedProducts = products
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 4);

  useEffect(() => {
    setProduct(getProductById(id || ""));
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container-fluid text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-electric">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Product Detail */}
      <section className="pt-24 pb-16">
        <div className="container-fluid">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-neutral-light rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? "border-accent scale-105" 
                        : "border-transparent hover:border-neutral-dark"
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="heading-section mb-4 animate-fade-in">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-accent">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-body text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-6">
                {product.materials && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Package className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold">Materials & Features</h3>
                    </div>
                    <ul className="space-y-2">
                      {product.materials.map((material, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.colors && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Palette className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold">Available Colors</h3>
                    </div>
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/1234567890?text=Hi! I'm interested in the ${product.name} (${product.price}). Can you tell me more about it?`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-electric w-full inline-flex items-center justify-center text-lg py-4"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Contact on WhatsApp
                </a>
                
                <Link 
                  to="/products"
                  className="btn-hero-outline w-full inline-flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Products
                </Link>
              </div>

              {/* Styling Tips */}
              <div className="bg-neutral-light p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Shirt className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Styling Inspiration</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Perfect for layering over basics or wearing solo. Pair with distressed jeans and chunky sneakers 
                  for an effortless street look, or dress it up with tailored pants for urban sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Products */}
      {suggestedProducts.length > 0 && (
        <ProductCarousel 
          title="You Might Also Like"
          products={suggestedProducts}
          className="bg-neutral-light"
        />
      )}

      {/* Fixed WhatsApp Button */}
      <a 
        href={`https://wa.me/1234567890?text=Hi! I'm interested in the ${product.name} (${product.price}). Can you tell me more about it?`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 z-50 hover-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  );
};

export default ProductDetail;