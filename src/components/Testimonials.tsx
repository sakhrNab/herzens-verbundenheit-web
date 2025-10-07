import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Die Therapie hat uns geholfen, wieder miteinander zu reden statt übereinander. Wir fühlen uns einander näher als je zuvor.",
    author: "Anna & Markus",
  },
  {
    text: "Wir haben gelernt, unsere Konflikte konstruktiv zu lösen. Das hat unsere Beziehung auf eine neue Ebene gehoben.",
    author: "Sarah & Tom",
  },
  {
    text: "Die einfühlsame Begleitung hat uns durch eine schwere Krise geholfen. Heute sind wir stärker denn je.",
    author: "Lisa & Daniel",
  },
];

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={elementRef}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Erfahrungen unserer Paare
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const delay = index * 0.15;
            return (
              <Card
                key={index}
                className={`border-border/50 bg-card/70 backdrop-blur-md hover:shadow-[var(--shadow-3d)] transition-all duration-700 hover:-translate-y-2 hover:scale-105 group relative overflow-hidden ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${delay}s`,
                  transform: 'perspective(1000px) rotateX(0deg)'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 md:p-8 relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <Quote className="w-12 h-12 text-primary/20 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <p className="font-inter text-muted-foreground leading-relaxed mb-6 italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <p className="font-inter font-semibold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {testimonial.author}
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

export default Testimonials;
