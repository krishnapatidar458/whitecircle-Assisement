
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, DollarSign, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Sellers Helped",
      description: "Successfully transformed businesses across India"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Sales Growth",
      description: "Consistent results across all client portfolios"
    },
    {
      icon: DollarSign,
      number: "₹50Cr+",
      label: "Total Revenue Generated",
      description: "Combined revenue growth for our clients"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Proven track record of delivering results"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Real numbers that showcase our commitment to your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 text-primary-foreground">
                  {stat.label}
                </div>
                <p className="text-sm text-primary-foreground/80">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
