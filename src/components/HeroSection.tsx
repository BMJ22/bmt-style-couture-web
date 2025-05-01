
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover opacity-50"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl leading-tight mb-6">
            Créations <span className="text-amber-500">uniques</span> pour des personnalités <span className="text-amber-500">exceptionnelles</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Couture sur-mesure, stylisme personnel et formations certifiantes pour exprimer votre style unique.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => navigate("/sur-mesure")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              Créations Sur-Mesure
            </Button>
            <Button 
              onClick={() => navigate("/boutique")}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
            >
              Découvrir la Boutique
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
