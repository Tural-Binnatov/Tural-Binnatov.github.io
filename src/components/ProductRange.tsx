import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";

type Product = {
  id: string;
  name: { sv: string; en: string };
  description: { sv: string; en: string };
  image: string;
};

type ProductCategory = {
  id: string;
  name: { sv: string; en: string };
  products: Product[];
};

const translations = {
  sv: {
    heading: "Vårt Sortiment",
    subheading: "Utforska vårt utbud av handgjorda bröd och bakverk, bakade med kärlek och de finaste ingredienserna",
    all: "Alla"
  },
  en: {
    heading: "Our Product Range",
    subheading: "Explore our selection of handmade bread and pastries, baked with love and the finest ingredients",
    all: "All"
  }
};

const productCategories: ProductCategory[] = [
  {
    id: "bread",
    name: { sv: "Bröd", en: "Bread" },
    products: [
      {
        id: "sourdough",
        name: { sv: "Surdegsbröd", en: "Sourdough Bread" },
        description: {
          sv: "Klassiskt surdegsbröd bakat på råg och vete.",
          en: "Classic sourdough bread made with rye and wheat.",
        },
        image: "/img/Till sortiment delen.jpg",
      },
      {
        id: "baguette",
        name: { sv: "Baguette", en: "Baguette" },
        description: {
          sv: "Frasig och luftig baguette perfekt till ostbrickan.",
          en: "Crispy and airy baguette perfect for a cheese platter.",
        },
        image: "/img/Till sortiment delen.jpg",
      },
    ],
  },
  {
    id: "pastries",
    name: { sv: "Bullar", en: "Pastries" },
    products: [
      {
        id: "cinnamon-bun",
        name: { sv: "Kanelbulle", en: "Cinnamon Bun" },
        description: {
          sv: "Klassiska kanelbullar, alltid nybakade!",
          en: "Classic cinnamon buns, always freshly baked!",
        },
        image: "/img/Kanelbullar.jpg",
      },
      {
        id: "cardamom-bun",
        name: { sv: "Kardemummabulle", en: "Cardamom Bun" },
        description: {
          sv: "Doftande kardemummabulle med smörig fyllning.",
          en: "Aromatic cardamom bun with a buttery filling.",
        },
        image: "/img/Kanelbullar.jpg",
      },
    ],
  },
  {
    id: "cookies",
    name: { sv: "Kakor", en: "Cookies" },
    products: [
      {
        id: "chocolate-chip",
        name: { sv: "Chocolate Chip Cookie", en: "Chocolate Chip Cookie" },
        description: {
          sv: "Krispig på utsidan, mjuk på insidan med rik chokladsmak.",
          en: "Crispy outside, soft inside with rich chocolate flavor.",
        },
        image: "/img/Blandade_desserter.jpg",
      },
      {
        id: "oatmeal",
        name: { sv: "Havrekaka", en: "Oatmeal Cookie" },
        description: {
          sv: "Rustik småkaka med havre och kanel.",
          en: "Rustic cookie with oats and cinnamon.",
        },
        image: "/img/Blandade_desserter.jpg",
      },
    ],
  },
  {
    id: "croissants",
    name: { sv: "Croissanter", en: "Croissants" },
    products: [
      {
        id: "plain-croissant",
        name: { sv: "Naturell Croissant", en: "Plain Croissant" },
        description: {
          sv: "Smörig och flerskiktad klassiker.",
          en: "Buttery and layered classic.",
        },
        image: "/img/Croissant.jpg",
      },
      {
        id: "choco-croissant",
        name: { sv: "Chokladcroissant", en: "Chocolate Croissant" },
        description: {
          sv: "Fylld med len choklad – perfekt till kaffet.",
          en: "Filled with smooth chocolate – perfect with coffee.",
        },
        image: "/img/Croissant.jpg",
      },
    ],
  },


  {
    id: "Cakes",
    name: { sv: "Tårtor", en: "Cakes" },
    products: [
      {
        id: "Chocolate cake",
        name: { sv: "Choklad Tårta", en: "Chocolate Cake" },
        description: {
          sv: "Saftig, full av choklad och helt oemotståndlig. En riktig choklad dröm!",
          en: "Moisty, full of chocolate and absolutely irresistible. A true chocolate dream!",
        },
        image: "/img/Chokladtårta.jpg",
      },
      {
        id: "Strawberry Cake",
        name: { sv: "Jordgubbs Tårta", en: "Strawberry Cake" },
        description: {
          sv: "Sommar på en tallrik - grädde, fluff och färska jordgubbar",
          en: "Summer on a plate - cream, fluff and fresh strawberries",
        },
        image: "/img/Jordgubbstårta.jpg",
      },
    ],
  },

  {
    id: "Sallads",
    name: { sv: "Sallader", en: "Sallads" },
    products: [
      {
        id: "Spring Sallad",
        name: { sv: "Vår Sallad ", en: "Spring Sallad" },
        description: {
          sv: "En smakrik och mättande sallad – couscous, kikärter och chèvre i perfekt harmoni!",
          en: "A tasty and filling salad – couscous, chickpeas and chèvre in perfect harmony!",
        },
        image: "/img/VårSallad.jpg",
      },
    ],
  },





];

const ProductRange = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);

  const filteredCategories = filter
    ? productCategories.filter((category) => category.id === filter)
    : productCategories;

  return (
    <section id="products" className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-heading">{translations[language].heading}</h2>
        <p className="section-subheading">{translations[language].subheading}</p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="bg-bakery-brown text-white border-bakery-brown"
          >
            {translations[language].all}
          </Button>
          {productCategories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={
                filter === category.id
                  ? "bg-bakery-brown text-white"
                  : "border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white"
              }
            >
              {category.name[language]}
            </Button>
          ))}
        </div>
      </div>

      {/* Products per category */}
      {filteredCategories.map((category) => (
        <div key={category.id} className="mb-16">
          {!filter && (
            <h3 className="text-4xl font-bold text-center text-bakery-brown mb-6">
              {category.name[language]}
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0 relative">
                  <div className="overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-bakery-brown mb-2 font-playfair">
                      {product.name[language]}
                    </h4>
                    <p className="text-bakery-brown/80 text-sm">
                      {product.description[language]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductRange;
