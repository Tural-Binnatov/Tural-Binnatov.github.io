
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const productCategories: ProductCategory[] = [
  {
    id: "bread",
    name: "Bröd",
    description: "Våra handgjorda bröd bakas med surdegsstart och får jäsa långsamt för bästa smak och konsistens.",
    image: "/img/Till sortiment delen.jpg",
  },
  {
    id: "pastries",
    name: "Bullar",
    description: "Klassiska kanelbullar, kardemummabullar och andra läckra söta bakverk, alltid nybakade.",
    image: "/img/kanelbullar.jpg",
  },
  {
    id: "cakes",
    name: "Tårtor",
    description: "Vackra och smakrika tårtor för alla tillfällen, från prinsesstårtor till chokladtårtor.",
    image: "/img/Chokladtårta.jpg",
  },
  {
    id: "cookies",
    name: "Croissanter",
    description: "Handgjorda croissanter i olika smaker, perfekta till kaffet eller som gåva.",
    image: "/img/Croissant.jpg",
  },
];

const ProductRange = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredCategories = filter
    ? productCategories.filter((category) => category.id === filter)
    : productCategories;

  return (
    <section id="products" className="container-section">
      <div className="text-center mb-12">
        <h2 className="section-heading">Vårt Sortiment</h2>
        <p className="section-subheading">
          Utforska vårt utbud av handgjorda bröd och bakverk, bakade med kärlek och de finaste ingredienserna
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="bg-bakery-brown text-white border-bakery-brown"
          >
            Alla
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
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Product categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCategories.map((category) => (
          <Card key={category.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 relative">
              <div className="overflow-hidden h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bakery-brown mb-2 font-playfair">{category.name}</h3>
                <p className="text-bakery-brown/80 mb-4 text-sm">{category.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
