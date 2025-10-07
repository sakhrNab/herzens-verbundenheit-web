import { Heart, MessageCircle, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <section id="leistungen" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
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
            return (
              <Card
                key={index}
                className="border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
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
