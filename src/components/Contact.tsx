import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns so schnell wie möglich bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt aufnehmen
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Bereit für den ersten Schritt? Kontaktieren Sie uns für ein kostenloses 
            Erstgespräch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    E-Mail
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Telefon (optional)
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full"
                    placeholder="+49 123 456789"
                  />
                </div>
                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Nachricht
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full min-h-[120px]"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6"
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Telefon
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      +49 (0) 123 456 789
                    </p>
                    <p className="font-inter text-sm text-muted-foreground mt-1">
                      Mo-Fr: 9:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      E-Mail
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      kontakt@paartherapie.de
                    </p>
                    <p className="font-inter text-sm text-muted-foreground mt-1">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Praxis
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Musterstraße 123
                      <br />
                      10115 Berlin
                    </p>
                    <p className="font-inter text-sm text-muted-foreground mt-1">
                      Auch Online-Termine verfügbar
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
