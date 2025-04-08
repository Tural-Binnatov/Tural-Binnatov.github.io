
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-heading">Kontakt</h2>
        <p className="section-subheading">
          Har du frågor eller funderingar? Kontakta oss gärna eller besök vårt bageri
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-6 font-playfair">Hitta oss</h3>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 mb-6">
              <iframe
                src = "https://www.google.com/maps/place/Margaretas+br%C3%B6d+%26+bakverk/@57.654054,12.005203,15z/data=!4m6!3m5!1s0x464ff245bfffffff:0xd2e4ecade3445ee0!8m2!3d57.6540544!4d12.0052032!16s%2Fg%2F11bbrj77jt?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-bakery-brown mr-3 h-5 w-5 mt-1" />
                <p className="text-bakery-brown/80">
                  Frölundagatan 35a<br />
                  431 44 Mölndal
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="text-bakery-brown mr-3 h-5 w-5" />
                <p className="text-bakery-brown/80">031-271 85 8 & 070-023 43 63</p>
              </div>

              <div className="flex items-center">
                <Mail className="text-bakery-brown mr-3 h-5 w-5" />
                <p className="text-bakery-brown/80">Margaretas.gbg@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-4 font-playfair">Öppettider</h3>
            <div className="space-y-2 text-bakery-brown/80">
              <div className="flex justify-between">
                <span>Måndag - Torsdag</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fredag</span>
                <span>08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lördag & Söndag</span>
                <span>08:00 - 16:00</span>
              </div>

              <div className="flex justify-between">
                <span>Vecka 29 - 31</span>
                <span>Semesterstängt</span>
              </div>


            </div>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-4 font-playfair">Följ oss</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/margaretasbrodochbakverk/"
                target="blank"
                className="bg-bakery-brown text-white p-3 rounded-full hover:bg-bakery-brown/80 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/margaretasbrodbakverk"
                target="blank"
                className="bg-bakery-brown text-white p-3 rounded-full hover:bg-bakery-brown/80 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="/gdpr.html"
                target="blank"
                className="bg-bakery-brown text-white p-3 rounded-full hover:bg-bakery-brown/80 transition-colors"
              >
                GDPR
              </a>


            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-bakery-light p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-bakery-brown mb-6 font-playfair">Kontakta oss</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="contactName" className="text-bakery-brown">Namn</Label>
              <Input
                id="contactName"
                required
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="contactEmail" className="text-bakery-brown">E-post</Label>
              <Input
                id="contactEmail"
                type="email"
                required
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="contactMessage" className="text-bakery-brown">Meddelande</Label>
              <Textarea
                id="contactMessage"
                required
                rows={4}
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>
            
            <Button type="submit" className="btn-primary w-full">
              Skicka meddelande
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
