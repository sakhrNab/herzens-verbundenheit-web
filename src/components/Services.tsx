import { Heart, MessageCircle, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Heart,
    title: "Paartherapie",
    description:
      "Gemeinsam arbeiten wir an den Herausforderungen in Ihrer Beziehung und stärken Ihre emotionale Verbindung.",
  },
  {
    icon: MessageCircle,
    title: "Kommunikationstraining",
    description:
      "Lernen Sie, einander wirklich zuzuhören und Ihre Bedürfnisse klar und liebevoll auszudrücken.",
  },
  {
    icon: Users,
    title: "Konfliktlösung",
    description:
      "Entwickeln Sie gesunde Strategien, um Meinungsverschiedenheiten konstruktiv zu bewältigen.",
  },
  {
    icon: Shield,
    title: "Vertrauensaufbau",
    description:
      "Heilen Sie alte Wunden und bauen Sie ein stabiles Fundament des Vertrauens auf.",
  },
];

const Services = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="leistungen" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={elementRef}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Leistungen
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten individuelle therapeutische Ansätze, die auf Ihre einzigartigen 
            Bedürfnisse zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 0.1;
            return (
              <Card
                key={index}
                className={`border-border/50 hover:shadow-[var(--shadow-3d)] transition-all duration-700 hover:-translate-y-3 hover:rotate-1 group cursor-pointer bg-card/40 backdrop-blur-lg relative overflow-hidden ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${delay}s`,
                  transform: 'perspective(1000px)'
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <CardContent className="p-6 md:p-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 shadow-lg group-hover:shadow-[var(--shadow-glow)]">
                    <Icon className="w-8 h-8 text-primary transition-all duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
