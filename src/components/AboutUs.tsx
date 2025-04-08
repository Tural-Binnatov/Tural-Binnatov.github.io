
import { Button } from "@/components/ui/button";

const AboutUs = () => {
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
            <h2 className="section-heading text-left mb-4">Om Oss</h2>
            <p className="text-bakery-brown/90 mb-6 leading-relaxed">
              Margaretas Bröd & Bakverk grundades 1930 av Margareta Svensson med en passion för traditionellt hantverk och högkvalitativa ingredienser. I över fyra decennier har vi hållit fast vid hennes filosofi: att baka med kärlek och respekt för traditionen.
            </p>
            <p className="text-bakery-brown/90 mb-6 leading-relaxed">
              Vårt bageri använder endast noggrant utvalda ekologiska ingredienser och lokala råvaror när det är möjligt. Varje produkt som lämnar vårt bageri är gjord för hand med samma omsorg och passion som Margareta själv lade i varje bröd och bakelse.
            </p>
            <p className="text-bakery-brown/90 mb-8 leading-relaxed">
              Idag drivs bageriet av andra generationen, men Margaretas anda lever vidare i varje muffins, limpa och bulle som vi bakar. Vi ser fram emot att dela vår kärlek till bakning med dig och dina nära.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
