
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  const [category, setCategory] = useState("all");
  
  const products = [
    {
      id: 1,
      name: "Robe Élégance",
      price: 85000,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1783&q=80",
      category: "femmes"
    },
    {
      id: 2,
      name: "Ensemble Ankara",
      price: 65000,
      image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      category: "femmes"
    },
    {
      id: 3,
      name: "Costume Moderne",
      price: 120000,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "hommes"
    },
    {
      id: 4,
      name: "Ensemble Enfant",
      price: 45000,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      category: "enfants"
    },
  ];
  
  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-3">Nos Créations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos dernières créations et produits disponibles à l'achat dans notre boutique en ligne.
          </p>
          
          <div className="flex justify-center flex-wrap gap-2 mt-6">
            <Button 
              variant={category === "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className={category === "all" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Tous
            </Button>
            <Button 
              variant={category === "femmes" ? "default" : "outline"}
              onClick={() => setCategory("femmes")}
              className={category === "femmes" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Femmes
            </Button>
            <Button 
              variant={category === "hommes" ? "default" : "outline"}
              onClick={() => setCategory("hommes")}
              className={category === "hommes" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Hommes
            </Button>
            <Button 
              variant={category === "enfants" ? "default" : "outline"}
              onClick={() => setCategory("enfants")}
              className={category === "enfants" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              Enfants
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-md">
              <div className="relative h-80">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-playfair font-semibold text-xl">{product.name}</h3>
                  <p className="font-semibold text-amber-600">{product.price.toLocaleString()} FCFA</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-4">
                <Button 
                  onClick={() => navigate(`/boutique/${product.id}`)}
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  Voir le produit
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            onClick={() => navigate("/boutique")}
            variant="outline" 
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3"
          >
            Voir tous nos produits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
