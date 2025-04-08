
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProductRange from "@/components/ProductRange";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

const Index = () => {

  return (
    <div className="min-h-screen bg-bakery-light">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ProductRange />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
