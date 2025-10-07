import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-playfair text-lg font-semibold text-foreground">
              Paartherapie
            </span>
          </div>
          <p className="font-inter text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Paartherapie Praxis. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <button className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </button>
            <button className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
