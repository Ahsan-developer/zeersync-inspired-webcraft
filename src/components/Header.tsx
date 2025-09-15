import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-glow">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TechFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/90 hover:text-primary transition-smooth font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-foreground/90 hover:text-primary transition-smooth font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#solutions" className="text-foreground/90 hover:text-primary transition-smooth font-medium relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-foreground/90 hover:text-primary transition-smooth font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow transition-smooth border border-primary/30">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-smooth border border-primary/20"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20 bg-card/50 rounded-lg backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground/90 hover:text-primary transition-smooth font-medium px-4 py-2 rounded hover:bg-primary/10">
                Home
              </a>
              <a href="#services" className="text-foreground/90 hover:text-primary transition-smooth font-medium px-4 py-2 rounded hover:bg-primary/10">
                Services
              </a>
              <a href="#solutions" className="text-foreground/90 hover:text-primary transition-smooth font-medium px-4 py-2 rounded hover:bg-primary/10">
                Solutions
              </a>
              <a href="#contact" className="text-foreground/90 hover:text-primary transition-smooth font-medium px-4 py-2 rounded hover:bg-primary/10">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-primary to-accent text-white w-full mt-4 border border-primary/30">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;