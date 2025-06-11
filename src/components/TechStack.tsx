
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Smartphone } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      technologies: ["Figma", "Adobe XD", "Responsive Design", "User Experience"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Zap,
      title: "Animations & Effects",
      technologies: ["LottieFiles", "Framer Motion", "CSS Animations", "Interactive Elements"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      technologies: ["Media Queries", "Mobile-First", "Cross-Browser", "Performance Optimization"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies we use to build exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
