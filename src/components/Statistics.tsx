
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, DollarSign, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Sellers Helped",
      description: "Successfully transformed businesses across India",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Sales Growth",
      description: "Consistent results across all client portfolios",
      color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      icon: DollarSign,
      number: "₹50Cr+",
      label: "Total Revenue Generated",
      description: "Combined revenue growth for our clients",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Proven track record of delivering results",
      color: "bg-gradient-to-br from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-24 gradient-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Real Numbers, Real Results
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Measurable success that showcases our commitment to your growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 transform group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3 text-white">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-3 text-white">
                  {stat.label}
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
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
