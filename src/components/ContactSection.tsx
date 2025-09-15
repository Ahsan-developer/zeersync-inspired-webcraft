import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Your Business?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="transition-smooth focus:shadow-glow" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="transition-smooth focus:shadow-glow" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="transition-smooth focus:shadow-glow" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company
                </label>
                <Input placeholder="Your Company" className="transition-smooth focus:shadow-glow" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..."
                  className="min-h-[120px] transition-smooth focus:shadow-glow resize-none"
                />
              </div>
              
              <Button className="w-full hero-gradient shadow-elegant hover:shadow-glow transition-smooth group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking to modernize your existing systems, build new digital products, 
                or implement cutting-edge technologies, our team is here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 fade-in-up stagger-1">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground">hello@techflow.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 fade-in-up stagger-2">
                <div className="bg-accent/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 fade-in-up stagger-3">
                <div className="bg-green-500/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl fade-in-up stagger-4">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-muted-foreground text-sm">
                We respond to all inquiries within 24 hours. For urgent matters, 
                call us directly for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;