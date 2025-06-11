
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, BarChart, FileText } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "AI-Driven Strategy",
      description: "We leverage artificial intelligence and machine learning to optimize your e-commerce performance with data-driven insights and automated solutions."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team of e-commerce experts has years of experience in Amazon and Flipkart marketplace optimization, ensuring proven strategies for your success."
    },
    {
      icon: BarChart,
      title: "Proven Results",
      description: "Track record of helping 500+ sellers achieve 10X growth with measurable improvements in rankings, traffic, and revenue generation."
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Detailed analytics and regular reports keep you informed about your campaign performance with complete transparency in our processes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The key factors that make us the trusted choice for e-commerce growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
