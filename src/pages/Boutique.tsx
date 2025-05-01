
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const BoutiquePage = () => {
  // Exemple de produits
  const products = [
    {
      id: 1,
      name: "Robe à Fleurs",
      price: 75,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000",
      description: "Robe élégante avec motif floral"
    },
    {
      id: 2,
      name: "Chemise Lin",
      price: 55,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1000",
      description: "Chemise en lin naturel"
    },
    {
      id: 3,
      name: "Pantalon Tailleur",
      price: 85,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000",
      description: "Pantalon de tailleur élégant"
    },
    {
      id: 4,
      name: "Jupe Midi",
      price: 65,
      image: "https://images.unsplash.com/photo-1551163943-3f7fb60e3a48?q=80&w=1000",
      description: "Jupe midi plissée"
    },
    {
      id: 5,
      name: "Ensemble Deux Pièces",
      price: 120,
      image: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?q=80&w=1000",
      description: "Ensemble élégant deux pièces"
    },
    {
      id: 6,
      name: "Veste Légère",
      price: 95,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000",
      description: "Veste légère pour mi-saison"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Notre Boutique</h1>
              <p className="text-lg mb-8">
                Découvrez notre collection unique de vêtements faits à la main,
                créés avec passion et souci du détail.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Explorer la collection
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Créations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border border-gray-200 h-full flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="font-semibold text-lg">{product.price} €</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      <ShoppingBag className="mr-2 h-4 w-4" /> Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3">
                Voir plus de produits
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Catégories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Vêtements Femme</h3>
                <p className="text-gray-600 mb-6">Découvrez notre collection de robes, jupes et ensembles pour femme.</p>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Explorer
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Vêtements Homme</h3>
                <p className="text-gray-600 mb-6">Notre sélection de chemises, pantalons et vestes pour homme.</p>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Explorer
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Accessoires</h3>
                <p className="text-gray-600 mb-6">Complétez votre tenue avec nos accessoires fait-main.</p>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  Explorer
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Vous cherchez quelque chose de spécial?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nous proposons également des créations sur mesure adaptées à vos besoins spécifiques.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
              Découvrir nos services sur mesure
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BoutiquePage;
