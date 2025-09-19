import hoodieBlack from "@/assets/product-hoodie-black.jpg";
import hoodieBlue from "@/assets/product-hoodie-blue.jpg";
import shirtWhite from "@/assets/product-shirt-white.jpg";

export interface Product {
  id: string;
  name: string;
  category: "hoodie" | "shirt" | "jacket";
  price: string;
  image: string;
  description: string;
  featured?: boolean;
  materials?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Oversized Hoodie",
    category: "hoodie",
    price: "$89",
    image: hoodieBlack,
    description: "Premium cotton blend hoodie with modern oversized fit. Perfect for streetwear enthusiasts.",
    featured: true,
    materials: ["100% Premium Cotton", "Brushed Interior", "Reinforced Seams"],
    colors: ["Black", "Charcoal", "Navy"]
  },
  {
    id: "2",
    name: "Electric Dreams Hoodie",
    category: "hoodie", 
    price: "$94",
    image: hoodieBlue,
    description: "Bold electric blue hoodie that makes a statement. Crafted for comfort and style.",
    featured: true,
    materials: ["Cotton Polyester Blend", "Soft Touch Fabric", "Adjustable Hood"],
    colors: ["Electric Blue", "Neon Green", "Hot Pink"]
  },
  {
    id: "3",
    name: "Minimalist Essential Tee",
    category: "shirt",
    price: "$39",
    image: shirtWhite,
    description: "Clean, minimal design meets premium comfort. A wardrobe essential for every occasion.",
    featured: true,
    materials: ["100% Organic Cotton", "Pre-Shrunk", "Tagless Design"],
    colors: ["White", "Black", "Heather Gray"]
  },
  // Additional products for demonstration
  {
    id: "4",
    name: "Urban Explorer Hoodie",
    category: "hoodie",
    price: "$92",
    image: hoodieBlack,
    description: "Adventure-ready hoodie with urban aesthetics. Built for the modern explorer.",
    materials: ["Heavyweight Cotton", "Weather Resistant", "Multiple Pockets"],
    colors: ["Black", "Olive", "Burgundy"]
  },
  {
    id: "5",
    name: "Retro Vibes Tee",
    category: "shirt",
    price: "$42",
    image: shirtWhite,
    description: "Vintage-inspired design with contemporary fit. Nostalgia meets modern style.",
    materials: ["Ring-Spun Cotton", "Vintage Wash", "Ribbed Collar"],
    colors: ["Vintage White", "Faded Black", "Dusty Rose"]
  },
  {
    id: "6",
    name: "Neon Wave Hoodie",
    category: "hoodie",
    price: "$96",
    image: hoodieBlue,
    description: "Futuristic design with vibrant color blocking. Stand out from the crowd.",
    materials: ["Tech Fleece", "Moisture Wicking", "Reflective Details"],
    colors: ["Electric Blue", "Cyber Yellow", "Matrix Green"]
  }
];

export const featuredProducts = products.filter(product => product.featured);

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};