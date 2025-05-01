
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeCarousel from "@/components/HomeCarousel";
import FeaturedServices from "@/components/FeaturedServices";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeCarousel />
        <FeaturedServices />
        <FeaturedProducts />
        <Testimonials />
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à transformer votre style?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Découvrez nos services de couture personnalisée, nos formations et nos conseils de stylisme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate("/contact")}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3"
              >
                Contactez-nous
              </Button>
              <Button 
                onClick={() => navigate("/boutique")}
                variant="outline" 
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3"
              >
                Voir la boutique
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
