import { MapPin, Phone, Mail, Clock, Instagram, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-fluid">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6 animate-fade-in">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Ready to discuss your next streetwear obsession? We're here to help you find the perfect piece or answer any questions about our collection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="heading-section mb-8">Let's Connect</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Quick responses, direct communication</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-dark transition-colors font-semibold"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">For detailed inquiries and partnerships</p>
                    <a 
                      href="mailto:hello@luxestreetw.com"
                      className="text-accent hover:text-accent-dark transition-colors font-semibold"
                    >
                      hello@luxestreetw.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground mb-2">Visit our creative hub</p>
                    <p className="text-foreground">
                      123 Fashion District<br />
                      Los Angeles, CA 90028
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Hours</h3>
                    <p className="text-muted-foreground mb-2">When we're most responsive</p>
                    <div className="text-foreground">
                      <p>Mon - Fri: 9AM - 6PM PST</p>
                      <p>Sat - Sun: 10AM - 4PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-bold mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-neutral-light rounded-2xl p-8 lg:p-12">
                <h2 className="heading-section mb-8">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your style, questions, or ideas..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-electric w-full"
                  >
                    Send Message
                  </button>
                </form>
                
                <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Prefer instant chat?</strong> Hit us up on WhatsApp for immediate responses about sizing, availability, or styling questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;