import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 font-playfair text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Heart className="w-6 h-6 md:w-7 md:h-7 text-primary fill-primary" />
            <span className="hidden sm:inline">Paartherapie</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('philosophie')}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Philosophie
            </button>
            <button
              onClick={() => scrollToSection('leistungen')}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Erfahrungen
            </button>
            <Button
              onClick={() => scrollToSection('kontakt')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('philosophie')}
                className="font-inter text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Philosophie
              </button>
              <button
                onClick={() => scrollToSection('leistungen')}
                className="font-inter text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="font-inter text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Erfahrungen
              </button>
              <Button
                onClick={() => scrollToSection('kontakt')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
