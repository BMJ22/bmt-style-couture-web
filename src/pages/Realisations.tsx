
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RealisationsPage = () => {
  // Exemple de projets réalisés
  const projects = [
    {
      id: 1,
      title: "Collection Été",
      category: "Prêt-à-porter",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000",
      description: "Une série de pièces légères et colorées pour l'été"
    },
    {
      id: 2,
      title: "Robe de Mariée",
      category: "Sur-mesure",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1000",
      description: "Création d'une robe de mariée unique"
    },
    {
      id: 3,
      title: "Costumes Théâtre",
      category: "Costumes",
      image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1000",
      description: "Costumes pour une pièce de théâtre contemporaine"
    },
    {
      id: 4,
      title: "Collection Hiver",
      category: "Prêt-à-porter",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000",
      description: "Vêtements chauds et élégants pour l'hiver"
    },
    {
      id: 5,
      title: "Tenues Bureau",
      category: "Sur-mesure",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000",
      description: "Ensemble de tenues professionnelles sur mesure"
    },
    {
      id: 6,
      title: "Upcycling Jeans",
      category: "Upcycling",
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=1000",
      description: "Transformation de jeans usagés en nouvelles pièces"
    },
    {
      id: 7,
      title: "Accessoires",
      category: "Prêt-à-porter",
      image: "https://images.unsplash.com/photo-1584285405429-136bf988919c?q=80&w=1000",
      description: "Création d'accessoires coordonnés"
    },
    {
      id: 8,
      title: "Tenue de Soirée",
      category: "Sur-mesure",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000",
      description: "Ensemble élégant pour un événement de gala"
    }
  ];

  // Catégories pour le filtrage
  const categories = ["Tous", "Prêt-à-porter", "Sur-mesure", "Costumes", "Upcycling"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Nos Réalisations</h1>
              <p className="text-lg mb-8">
                Découvrez nos créations et projets réalisés, témoignant de notre savoir-faire 
                et de notre passion pour la couture.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-amber-600 hover:bg-amber-700" : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <p className="text-amber-400 text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Voir détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Notre Processus de Création</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4">Concept</h3>
                <p className="text-gray-600">
                  Tout commence par une idée ou une inspiration. Nous explorons les concepts, 
                  recherchons des matériaux et esquissons des designs préliminaires.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4">Création</h3>
                <p className="text-gray-600">
                  Une fois le concept finalisé, nous procédons à la création des patrons, 
                  à la coupe des tissus et à l'assemblage des pièces avec précision.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4">Finition</h3>
                <p className="text-gray-600">
                  Chaque création est méticuleusement finalisée avec une attention particulière 
                  aux détails et à la qualité des finitions pour un résultat parfait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Vous avez un projet en tête?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre idée et voir comment nous pouvons la réaliser ensemble.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
              Lancer un projet
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealisationsPage;
