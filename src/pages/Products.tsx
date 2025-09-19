import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid3X3, LayoutGrid } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "hoodie", name: "Hoodies", count: products.filter(p => p.category === "hoodie").length },
    { id: "shirt", name: "Shirts", count: products.filter(p => p.category === "shirt").length },
  ];

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveFilter(category);
      handleFilter(category);
    }
  }, [searchParams]);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-neutral-light">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h1 className="heading-hero text-4xl lg:text-6xl mb-6 animate-fade-in">
              Our Collection
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Discover premium streetwear designed for those who dare to be different. 
              Every piece tells a story of craftsmanship and bold style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-border">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-accent text-accent-foreground shadow-lg scale-105"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary-hover"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
              <div className="flex gap-1 bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "grid" ? "bg-accent text-accent-foreground" : "hover:bg-secondary-hover"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === "masonry" ? "bg-accent text-accent-foreground" : "hover:bg-secondary-hover"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-fluid">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8"
            }>
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className={`animate-fade-in ${viewMode === "masonry" ? "break-inside-avoid mb-8" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard
                    {...product}
                    className={viewMode === "masonry" ? "hover-lift" : ""}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;