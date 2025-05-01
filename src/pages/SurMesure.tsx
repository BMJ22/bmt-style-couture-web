
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Scissors } from "lucide-react";

const SurMesurePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Couture Sur-Mesure</h1>
              <p className="text-lg mb-8">
                Des vêtements uniques créés spécialement pour vous, 
                parfaitement adaptés à votre morphologie et votre style.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Notre Processus</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Rencontre pour discuter de vos besoins, prendre vos mesures et explorer les options de design.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Design</h3>
                <p className="text-gray-600">
                  Création de croquis et sélection des tissus pour donner vie à votre vision.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Fabrication</h3>
                <p className="text-gray-600">
                  Confection artisanale de votre vêtement avec attention aux détails et finitions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Essayage</h3>
                <p className="text-gray-600">
                  Ajustements finaux pour garantir une coupe parfaite et un tombé impeccable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Services Sur-Mesure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <Scissors className="text-amber-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Création Complète</h3>
                    <p className="text-gray-600">
                      Des vêtements entièrement créés selon vos spécifications, du concept à la réalisation.
                      Idéal pour les occasions spéciales ou pour des pièces uniques.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Consultation personnalisée</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Choix de tissus premium</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Ajustements multiples</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <Scissors className="text-amber-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Modifications</h3>
                    <p className="text-gray-600">
                      Perfectionnez vos vêtements existants avec notre service d'ajustement et de personnalisation.
                      Donnez une seconde vie à vos pièces favorites.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Ajustements de taille</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Réparations spécialisées</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-amber-600 mr-2" size={16} />
                        <span>Personnalisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Demander un devis
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Quelques Réalisations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative h-64 overflow-hidden rounded-lg">
                  <img 
                    src={`https://picsum.photos/600/400?random=${item}`} 
                    alt={`Réalisation ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      Voir détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3">
                Voir plus de réalisations
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à créer votre vêtement unique?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous pour une consultation personnalisée et donnez vie à vos idées.
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

export default SurMesurePage;
