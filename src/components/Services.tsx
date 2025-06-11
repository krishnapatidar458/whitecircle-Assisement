
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Target, FileText, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Optimization",
      description: "Strategic keyword research and optimization to improve your product visibility and organic ranking on Amazon & Flipkart."
    },
    {
      icon: TrendingUp,
      title: "Product Ranking",
      description: "Advanced ranking strategies to get your products on the first page and increase conversion rates significantly."
    },
    {
      icon: Target,
      title: "Paid Ads (Amazon/Flipkart)",
      description: "Expert PPC campaign management for Amazon and Flipkart to maximize ROI and drive targeted traffic."
    },
    {
      icon: FileText,
      title: "Listing Enhancement",
      description: "Optimize product titles, descriptions, images, and A+ content to boost conversion rates and sales."
    },
    {
      icon: Award,
      title: "SEO & Branding",
      description: "Complete SEO solutions and brand building strategies specifically designed for e-commerce sellers."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive e-commerce growth solutions tailored for Amazon and Flipkart sellers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
