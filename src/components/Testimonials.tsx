import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Erfahrungen unserer Paare
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-warm transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="font-inter text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-inter font-medium text-foreground">
                  {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
