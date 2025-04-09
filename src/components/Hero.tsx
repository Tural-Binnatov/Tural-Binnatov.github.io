import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

const translations = {
  sv: {
    heading_text: "Välkommen till Margaretas Bröd & Bakverk",
    subheading_text: "Hantverk sedan 1930",
    button_text: "Se vårt sortiment"
  },

  en: {
    heading_text: "Welcome to Margaretas Bröd & Bakverk",
    subheading_text: "Baked since 1930",
    button_text: " Se our product range",
  },
};


const Hero = () => {

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair leading-tight">
          {t.heading_text}
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light">
        {t.subheading_text}
        </h2>
        <Button asChild className="btn-primary text-base md:text-lg px-8 py-3 md:py-4 font-semibold">
          <a href="#products">{t.button_text}</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
