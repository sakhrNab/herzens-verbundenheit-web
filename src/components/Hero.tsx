import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-couple.jpg";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-[var(--gradient-mesh)] animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Background Image with Parallax & Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Glückliches Paar in vertrauensvoller Atmosphäre"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <Heart className="absolute top-1/4 right-1/4 w-8 h-8 text-primary/20 animate-bounce-slow" />
      <Sparkles className="absolute bottom-1/3 left-1/4 w-6 h-6 text-secondary/20 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="backdrop-blur-2xl bg-background/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/30 shadow-[var(--shadow-3d)] hover:scale-[1.02] transition-transform duration-700">
          <div className="animate-scale-in">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Gemeinsam zu mehr
              <br />
              <span 
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-shimmer inline-block" 
                style={{ backgroundSize: '200% auto' }}
              >
                Nähe & Verständnis
              </span>
            </h1>
          </div>
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professionelle Paartherapie für eine tiefere Verbindung. Wir begleiten Sie mit Empathie 
            und modernen Methoden zu mehr Intimität in Ihrer Beziehung.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-secondary hover:to-primary text-primary-foreground font-inter font-medium px-10 py-7 text-lg shadow-[var(--shadow-3d)] transition-all hover:scale-110 hover:shadow-glow before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
              style={{ backgroundSize: '200% auto' }}
            >
              <Heart className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
              Kostenloses Erstgespräch buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
