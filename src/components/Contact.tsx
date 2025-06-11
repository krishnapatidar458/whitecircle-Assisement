
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@whitecirclegroup.com",
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      color: "bg-gradient-to-br from-green-500/10 to-green-600/20",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Mumbai, India",
      color: "bg-gradient-to-br from-purple-500/10 to-purple-600/20",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to Scale</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss your growth strategy and transform your e-commerce journey
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Start Your Growth Journey Today
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Book a free growth audit and discover how we can help you achieve 10X sales growth 
                on Amazon and Flipkart. Our experts are ready to analyze your current performance 
                and create a customized growth strategy.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-2xl hover:shadow-brand transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">{info.title}</div>
                    <div className="text-muted-foreground text-base">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-brand-lg border-0 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base focus:ring-2 focus:ring-primary/20 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base focus:ring-2 focus:ring-primary/20 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 text-base focus:ring-2 focus:ring-primary/20 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business and how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-base focus:ring-2 focus:ring-primary/20 border-border/50 resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full h-14 text-lg font-semibold gradient-primary hover:shadow-brand-lg transform hover:scale-105 transition-all duration-300 border-0">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
