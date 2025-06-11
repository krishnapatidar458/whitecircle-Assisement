
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, BarChart, FileText } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "AI-Driven Strategy",
      description: "We leverage artificial intelligence and machine learning to optimize your e-commerce performance with data-driven insights and automated solutions.",
      color: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/20",
      iconColor: "text-cyan-600",
      borderColor: "hover:border-cyan-200/50"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team of e-commerce experts has years of experience in Amazon and Flipkart marketplace optimization, ensuring proven strategies for your success.",
      color: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/20",
      iconColor: "text-indigo-600",
      borderColor: "hover:border-indigo-200/50"
    },
    {
      icon: BarChart,
      title: "Proven Results",
      description: "Track record of helping 500+ sellers achieve 10X growth with measurable improvements in rankings, traffic, and revenue generation.",
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/20",
      iconColor: "text-emerald-600",
      borderColor: "hover:border-emerald-200/50"
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Detailed analytics and regular reports keep you informed about your campaign performance with complete transparency in our processes.",
      color: "bg-gradient-to-br from-rose-500/10 to-rose-600/20",
      iconColor: "text-rose-600",
      borderColor: "hover:border-rose-200/50"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">The Difference</span> That Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Key factors that make us the trusted choice for e-commerce growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className={`group hover:shadow-brand-lg transition-all duration-500 border-border ${reason.borderColor} hover:scale-105 transform`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${reason.color} group-hover:scale-110 transition-all duration-300`}>
                  <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
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
