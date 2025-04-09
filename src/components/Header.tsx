import { useState, useEffect } from 'react';
import { Menu, X, Globe } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

type NavLink = {
  label: string;
  href: string;
};


// Translations
const navLinks = {
  sv: [
    { label: "Hem", href: "/" },
    { label: "Om Oss", href: "#about" },
    { label: "Sortiment", href: "#products" },
    { label: "Kontakt", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Product Range", href: "#products" },
    { label: "Contact", href: "#contact" },
  ]
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "sv" ? "en" : "sv");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="font-playfair">
            <img
              src="/lovable-uploads/c92d840b-e477-427f-8e26-3fc3ad009c40.png"
              alt="Margaretas Bageri Konditori Café"
              className="h-12 md:h-14"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks[language].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors font-medium ${isScrolled ? 'text-black' : 'text-white'} hover:${isScrolled ? 'text-gray-600' : 'text-bakery-brown/100'}`}
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center ${isScrolled ? 'text-black' : 'text-white'} hover:${isScrolled ? 'text-gray-600' : 'text-bakery-brown/100'} transition-colors`}
          >
            <Globe size={18} className="mr-1" />
            <span>{language === "sv" ? "Svenska" : "English"}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-bakery-brown p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks[language].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-bakery-brown hover:text-bakery-brown/70 transition-colors py-2 border-b border-bakery-beige/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex justify-between items-center py-2 border-b border-bakery-beige/30">
              <button
                onClick={toggleLanguage}
                className="flex items-center text-bakery-brown hover:text-bakery-brown/70 transition-colors"
              >
                <Globe size={18} className="mr-1" />
                <span>{language === "sv" ? "Svenska" : "English"}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;