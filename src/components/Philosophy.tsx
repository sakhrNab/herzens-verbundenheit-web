const Philosophy = () => {
  return (
    <section id="philosophie" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Unsere Philosophie
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8"></div>
          <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
            "Jede Beziehung verdient einen sicheren Raum, in dem beide Partner gehört, 
            verstanden und wertgeschätzt werden."
          </p>
          <p className="font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
            Wir glauben daran, dass jede Partnerschaft das Potenzial für tiefe Verbindung und 
            gegenseitiges Wachstum in sich trägt. Mit Empathie, modernen therapeutischen Methoden 
            und einem offenen Herzen begleiten wir Sie auf Ihrem Weg zu mehr Nähe, Verständnis 
            und Intimität.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
