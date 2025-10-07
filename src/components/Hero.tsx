import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Glückliches Paar in vertrauensvoller Atmosphäre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="backdrop-blur-md bg-background/40 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20 shadow-2xl">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Gemeinsam zu mehr
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% auto' }}>
              Nähe & Verständnis
            </span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
            Professionelle Paartherapie für eine tiefere Verbindung. Wir begleiten Sie mit Empathie 
            und modernen Methoden zu mehr Intimität in Ihrer Beziehung.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-inter font-medium px-8 py-6 text-lg shadow-warm transition-all hover:scale-105 hover:shadow-glow animate-glow"
          >
            Kostenloses Erstgespräch buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
