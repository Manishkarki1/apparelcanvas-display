import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: MessageCircle, // Using MessageCircle as TikTok icon placeholder
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
  ];

  return (
    <footer className="bg-neutral-darker text-white py-16">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight">LUXE</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium streetwear for those who dare to stand out. 
              Crafted with passion, worn with pride.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                All Products
              </Link>
              <Link to="/products?category=hoodie" className="text-gray-400 hover:text-white transition-colors">
                Hoodies
              </Link>
              <Link to="/products?category=shirt" className="text-gray-400 hover:text-white transition-colors">
                Shirts
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>hello@luxestreetwear.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Los Angeles, CA</p>
            </div>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-electric inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LUXE Streetwear. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Crafted with ❤️ for the culture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;