
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Target, FileText, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Optimization",
      description: "Strategic keyword research and optimization to improve your product visibility and organic ranking on Amazon & Flipkart.",
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200/50"
    },
    {
      icon: TrendingUp,
      title: "Product Ranking",
      description: "Advanced ranking strategies to get your products on the first page and increase conversion rates significantly.",
      color: "bg-gradient-to-br from-green-500/10 to-green-600/20",
      iconColor: "text-green-600",
      borderColor: "border-green-200/50"
    },
    {
      icon: Target,
      title: "Paid Ads (Amazon/Flipkart)",
      description: "Expert PPC campaign management for Amazon and Flipkart to maximize ROI and drive targeted traffic.",
      color: "bg-gradient-to-br from-purple-500/10 to-purple-600/20",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200/50"
    },
    {
      icon: FileText,
      title: "Listing Enhancement",
      description: "Optimize product titles, descriptions, images, and A+ content to boost conversion rates and sales.",
      color: "bg-gradient-to-br from-orange-500/10 to-orange-600/20",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200/50"
    },
    {
      icon: Award,
      title: "SEO & Branding",
      description: "Complete SEO solutions and brand building strategies specifically designed for e-commerce sellers.",
      color: "bg-gradient-to-br from-pink-500/10 to-pink-600/20",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200/50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Comprehensive</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailored e-commerce growth solutions designed specifically for Amazon and Flipkart sellers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-brand-lg transition-all duration-500 border-0 ${service.borderColor} hover:scale-105 transform backdrop-blur-sm`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
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
