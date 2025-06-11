
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Electronics Store Owner",
      rating: 5,
      text: "Whitecircle Group transformed my Amazon business completely. Within 3 months, my sales increased by 250% and my products started ranking on the first page. Their keyword optimization strategy is simply outstanding!"
    },
    {
      name: "Priya Sharma",
      business: "Fashion & Lifestyle Seller",
      rating: 5,
      text: "The team's expertise in Flipkart advertising helped me scale from ₹2 lakhs to ₹20 lakhs monthly revenue. Their transparent reporting and AI-driven approach made all the difference in my business growth."
    },
    {
      name: "Amit Patel",
      business: "Home & Kitchen Products",
      rating: 5,
      text: "Professional service with incredible results! Their listing enhancement and SEO strategies boosted my conversion rate by 180%. I highly recommend Whitecircle Group for any serious e-commerce seller."
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from e-commerce sellers who achieved remarkable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
