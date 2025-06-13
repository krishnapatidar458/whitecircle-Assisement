
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Whitecircle Group</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Your trusted partner for e-commerce growth. We help Amazon and Flipkart sellers 
              achieve 10X sales growth through AI-driven strategies and proven digital marketing techniques.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('tech-stack')}
                className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Tech Stack
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <p>hr@whitecirclegroup.in</p>
              <p>+91 XXXXXXXXXX</p>
              <p>Headquarter Swastik Galaxy A Block, 1st Floor, Near Indra Square, Shahdol, MP</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © Copyright Whitecircle Group 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
