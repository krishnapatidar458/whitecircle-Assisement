
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-primary/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 border border-primary/20 shadow-brand animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            E-Commerce Growth Experts
            <TrendingUp size={16} className="text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
            <span className="block text-gradient">Grow Your</span>
            <span className="block text-foreground">E-Commerce Sales</span>
            <span className="block text-gradient">by 10X</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in">
            Transform your Amazon & Flipkart business with our 
            <span className="text-primary font-semibold"> AI-driven strategies</span>. 
            We help e-commerce sellers optimize keywords, rank products, and scale revenue 
            through proven digital marketing techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="text-lg px-10 py-6 gradient-primary hover:shadow-brand-lg transform hover:scale-105 transition-all duration-300 border-0"
            >
              Book Free Growth Audit
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-3 px-4 py-2 bg-success/10 rounded-full border border-success/20">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success-foreground font-medium">500+ Sellers Helped</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-info/10 rounded-full border border-info/20">
                <div className="w-3 h-3 bg-info rounded-full animate-pulse"></div>
                <span className="text-info-foreground font-medium">Average 300% Growth</span>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">₹50Cr+</div>
              <div className="text-xs text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5★</div>
              <div className="text-xs text-muted-foreground">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
