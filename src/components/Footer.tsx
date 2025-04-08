
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tack för din prenumeration på vårt nyhetsbrev!");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-bakery-brown text-white">
      {/* Newsletter Section */}
      {/* <div className="container mx-auto px-4 py-10 border-b border-white/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-playfair">Prenumerera på vårt nyhetsbrev</h3>
          <p className="text-white/80 mb-6">
            Håll dig uppdaterad med våra senaste nyheter, erbjudanden och säsongsbakverk.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Din e-postadress"
              required
              className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
            />
            <Button type="submit" className="bg-white text-bakery-brown hover:bg-white/90">
              Prenumerera
            </Button>
          </form>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="text-1xl font-bold mb-4 font-playfair">Margaretas Bröd & Bakverk</h3>
            <p className="text-white/80 mb-4">
              Hantverk och passion för bakning sedan 1930. Vi bakar med kärlek och de finaste ingredienserna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Hem</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Om Oss</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Sortiment</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">Beställning</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white/80">
              <li>Frölundagatan 35a, 431 44 Mölndal</li>
              <li>031-271 85 8 & 070-023 43 63</li>
              <li>Margaretas.gbg@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-4">Följ oss</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/margaretasbrodochbakverk/"
                target="blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/margaretasbrodbakverk"
                target="blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright
        <div className="text-center mt-12 pt-6 border-t border-white/20 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Margaretas Bröd & Bakverk. Alla rättigheter förbehållna. TB production</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
