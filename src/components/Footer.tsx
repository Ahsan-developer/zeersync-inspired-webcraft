import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="hero-gradient p-2 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TechFlow</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Your trusted partner in digital transformation, delivering innovative IT solutions 
              that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-white transition-colors">DevOps & Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ERP Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Intelligence</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-white transition-colors">ServiceNow</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salesforce</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Power BI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tableau</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 TechFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;