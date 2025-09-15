import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  BarChart3, 
  Shield,
  ArrowRight,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Transform your software development and IT operations with our comprehensive DevOps services. Achieve faster delivery and continuous improvement.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Build tailored software solutions that perfectly fit your business needs. From web applications to enterprise systems.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Streamline your business processes with integrated ERP systems that enhance efficiency and provide real-time insights.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create engaging mobile experiences with native and cross-platform applications that connect with your users.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Turn your data into actionable insights with advanced analytics, Power BI, and Tableau implementations.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions and compliance frameworks.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive IT Solutions for
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full range of technology services designed to accelerate your digital transformation 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 shadow-card hover:shadow-elegant transition-smooth group cursor-pointer overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 text-primary hover:text-primary-glow group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="hero-gradient shadow-elegant hover:shadow-glow transition-smooth"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;