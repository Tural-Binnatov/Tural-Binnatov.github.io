import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "./LanguageContext";

const translations = {
  sv: {
    heading: "Kontakt",
    subheading: "Har du frågor eller funderingar? Kontakta oss gärna eller besök vårt bageri",
    findUs: "Hitta oss",
    openingHours: "Öppettider",
    followUs: "Följ oss",
    contactUs: "Kontakta oss",
    name: "Namn",
    email: "E-post",
    message: "Meddelande",
    sendMessage: "Skicka meddelande",
    successToast: "Tack för ditt meddelande! Vi återkommer så snart som möjligt.",
    days: {
      monThu: "Måndag - Torsdag",
      fri: "Fredag",
      weekend: "Lördag & Söndag",
      summerClosed: "Semesterstängt",
      summerWeeks: "Vecka 29 - 31",
    },
  },
  en: {
    heading: "Contact",
    subheading: "Have questions? Feel free to reach out or visit our bakery",
    findUs: "Find Us",
    openingHours: "Opening Hours",
    followUs: "Follow Us",
    contactUs: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    successToast: "Thanks for your message! We'll get back to you as soon as possible.",
    days: {
      monThu: "Monday - Thursday",
      fri: "Friday",
      weekend: "Saturday & Sunday",
      summerClosed: "Closed for summer",
      summerWeeks: "Week 29 - 31",
    },
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Sending form data to Formspree API
    const response = await fetch("https://formspree.io/f/myzelzgd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast.success(t.successToast);
      form.reset();
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-heading">{t.heading}</h2>
        <p className="section-subheading">{t.subheading}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-6 font-playfair">{t.findUs}</h3>
            {/* Embed Google Map */}
            <div className="rounded-lg overflow-hidden h-64 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.672307324667!2d12.002628276101792!3d57.65405724397474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff245bfffffff%3A0xd2e4ecade3445ee0!2sMargaretas%20br%C3%B6d%20%26%20bakverk!5e0!3m2!1sen!2sse!4v1688676173023!5m2!1sen!2sse"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Details */}
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

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-4 font-playfair">{t.openingHours}</h3>
            <div className="space-y-2 text-bakery-brown/80">
              <div className="flex justify-between">
                <span>{t.days.monThu}</span>
                <span>07:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t.days.fri}</span>
                <span>08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t.days.weekend}</span>
                <span>08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t.days.summerWeeks}</span>
                <span>{t.days.summerClosed}</span>
              </div>
            </div>
          </div>

          {/* Social media links */}
          <div>
            <h3 className="text-2xl font-bold text-bakery-brown mb-4 font-playfair">{t.followUs}</h3>
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
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-bakery-light p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-bakery-brown mb-6 font-playfair">{t.contactUs}</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="contactName" className="text-bakery-brown">{t.name}</Label>
              <Input
                id="contactName"
                name="name"
                required
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="contactEmail" className="text-bakery-brown">{t.email}</Label>
              <Input
                id="contactEmail"
                name="email"
                type="email"
                required
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="contactMessage" className="text-bakery-brown">{t.message}</Label>
              <Textarea
                id="contactMessage"
                name="message"
                required
                rows={4}
                className="border-bakery-beige/50 focus:border-bakery-brown focus:ring-bakery-brown"
              />
            </div>

            <Button type="submit" className="btn-primary w-full">
              {t.sendMessage}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
