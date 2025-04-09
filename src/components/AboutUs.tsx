import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

const translations_about_us = {
  sv: {
    heading: "Om Oss",
    whole_text1: " Margaretas Bröd & Bakverk grundades 1930 av Margareta Svensson med en passion för traditionellt hantverk och högkvalitativa ingredienser. I över fyra decennier har vi hållit fast vid hennes filosofi: att baka med kärlek och respekt för traditionen.", 
    whole_text2: "Vårt bageri använder endast noggrant utvalda ekologiska ingredienser och lokala råvaror när det är möjligt. Varje produkt som lämnar vårt bageri är gjord för hand med samma omsorg och passion som Margareta själv lade i varje bröd och bakelse.",
    whole_text3: "Idag drivs bageriet av andra generationen, men Margaretas anda lever vidare i varje muffins, limpa och bulle som vi bakar. Vi ser fram emot att dela vår kärlek till bakning med dig och dina nära."
  },

  en: {
    heading: "About Us",
    whole_text1: " Margaretas Bröd & Bakverk was founded in 1930 by Margareta Svensson with a passion for traditional craftsmanship and high-quality ingredients. For over four decades, we have stuck to her philosophy: to bake with love and respect for tradition.", 
    whole_text2: "Our bakery only uses carefully selected organic ingredients and local produce whenever possible. Every product that leaves our bakery is handmade with the same care and passion that Margareta herself put into every bread and pastry.",
    whole_text3: "Today, the bakery is run by the second generation, but Margareta’s spirit lives on in every muffin, loaf and bun that we bake. We look forward to sharing our love of baking with you and your loved ones."
  }
};



const AboutUs = () => {

const { language } = useLanguage();
const t_about_us = translations_about_us[language];

  return (
    <section id="about" className="bg-bakery-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="/img/Digital-redovisning-smart-papperslös-bokföring-Revizz-scaled.jpg"
                alt="Margareta i bageriet"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="md:w-1/2">
            <h2 className="section-heading text-left mb-4">{t_about_us.heading}</h2>
            <p className="text-bakery-brown/90 mb-6 leading-relaxed">
            {t_about_us.whole_text1}
            </p>
            <p className="text-bakery-brown/90 mb-6 leading-relaxed">
            {t_about_us.whole_text2}
            </p>
            <p className="text-bakery-brown/90 mb-8 leading-relaxed">
            {t_about_us.whole_text3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
