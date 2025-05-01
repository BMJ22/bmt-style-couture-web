
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Recycle, Scissors, ThumbsUp } from "lucide-react";

const UpcyclingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Upcycling</h1>
              <p className="text-lg mb-8">
                Donnez une seconde vie à vos vêtements avec notre service d'upcycling.
                Transformez l'ancien en nouveau, réduisez les déchets et créez des pièces uniques.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </section>

        {/* What is Upcycling */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Qu'est-ce que l'Upcycling?</h2>
                <p className="text-gray-600 mb-4">
                  L'upcycling, ou surcyclage, est l'art de transformer des vêtements ou accessoires 
                  usagés en nouvelles pièces de valeur supérieure. Contrairement au recyclage traditionnel, 
                  l'upcycling ne décompose pas les matériaux mais les réutilise de manière créative.
                </p>
                <p className="text-gray-600 mb-4">
                  En choisissant l'upcycling, vous contribuez à:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ThumbsUp className="text-amber-600 mr-2" size={18} />
                    <span>Réduire les déchets textiles</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-amber-600 mr-2" size={18} />
                    <span>Diminuer la consommation de ressources</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-amber-600 mr-2" size={18} />
                    <span>Créer des pièces uniques avec une histoire</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-amber-600 mr-2" size={18} />
                    <span>Prolonger la vie de vos vêtements préférés</span>
                  </li>
                </ul>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                  Nos projets d'upcycling
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584285403346-e75315e12cf6?q=80&w=1000" 
                  alt="Upcycling process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Services d'Upcycling</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-amber-100 p-4 rounded-full inline-block mb-6">
                  <Scissors className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Transformation Complète</h3>
                <p className="text-gray-600 mb-6">
                  Nous redessinons et reconstruisons entièrement vos vêtements pour créer de nouvelles pièces, 
                  comme transformer une robe en haut et jupe, ou un jean en sac.
                </p>
                <p className="font-semibold">À partir de 60€</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-amber-100 p-4 rounded-full inline-block mb-6">
                  <Recycle className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Embellissement</h3>
                <p className="text-gray-600 mb-6">
                  Nous ajoutons des détails, des motifs ou des appliqués à vos vêtements existants pour 
                  leur donner une nouvelle vie sans modification structurelle majeure.
                </p>
                <p className="font-semibold">À partir de 35€</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-amber-100 p-4 rounded-full inline-block mb-6">
                  <ThumbsUp className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Réparation Créative</h3>
                <p className="text-gray-600 mb-6">
                  Nous réparons les déchirures, trous ou zones usées de façon artistique, 
                  transformant les défauts en caractéristiques de design uniques.
                </p>
                <p className="font-semibold">À partir de 25€</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Demander un devis
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Notre Processus</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Discussion initiale pour comprendre vos vêtements, vos besoins et vos idées de transformation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-gray-600">
                  Création de croquis et propositions pour la transformation de vos vêtements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-3">Transformation</h3>
                <p className="text-gray-600">
                  Réalisation du projet d'upcycling avec attention aux détails et finitions soignées.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">4</div>
                <h3 className="text-xl font-bold mb-3">Finalisation</h3>
                <p className="text-gray-600">
                  Essayage final et ajustements pour garantir votre satisfaction complète.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Exemples de Transformations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/upcycle${item}/600/400`}
                      alt={`Projet d'upcycling ${item}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-bold text-lg">Avant / Après</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold mb-1">Transformation #{item}</h3>
                    <p className="text-gray-600 text-sm">
                      {item % 2 === 0 ? "Chemise en robe" : item % 3 === 0 ? "Jean en sac" : "T-shirt en top"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3">
                Voir plus d'exemples
              </Button>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-amber-50 border border-amber-100 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-6">Ateliers d'Upcycling</h2>
                  <p className="text-gray-600 mb-4">
                    Apprenez à transformer vous-même vos vêtements lors de nos ateliers d'upcycling. 
                    Ces sessions pratiques vous enseignent les techniques de base et avancées pour 
                    donner une nouvelle vie à votre garde-robe.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Nos ateliers sont ouverts aux débutants comme aux personnes plus expérimentées et 
                    comprennent tous les outils et matériaux nécessaires.
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                    Voir le calendrier des ateliers
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1000" 
                    alt="Atelier d'upcycling"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à transformer votre garde-robe?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Donnez une seconde vie à vos vêtements et contribuez à une mode plus durable.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
              Contactez-nous
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UpcyclingPage;
