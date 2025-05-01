
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const ConsultationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Consultations Personnalisées</h1>
              <p className="text-lg mb-8">
                Découvrez votre style unique avec nos consultations personnalisées.
                Notre expertise vous aide à trouver les vêtements qui vous mettent en valeur.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Réserver une consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Services de Consultation</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <User className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Style Personnalisé</h3>
                <p className="text-gray-600 mb-4">
                  Analyse complète de votre morphologie et colorimétrie pour déterminer les coupes, couleurs et styles qui vous valorisent.
                </p>
                <p className="font-semibold">90€ - 1h30</p>
              </div>

              {/* Service 2 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clock className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Tri de Garde-Robe</h3>
                <p className="text-gray-600 mb-4">
                  Évaluation de vos vêtements actuels et conseils pour optimiser votre garde-robe selon votre style de vie et vos préférences.
                </p>
                <p className="font-semibold">120€ - 2h</p>
              </div>

              {/* Service 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Calendar className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Shopping Accompagné</h3>
                <p className="text-gray-600 mb-4">
                  Accompagnement personnalisé pour choisir des vêtements adaptés à votre style, budget et morphologie.
                </p>
                <p className="font-semibold">150€ - 3h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Comment ça marche ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-black text-amber-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-3">Prise de contact</h3>
                <p className="text-gray-600">
                  Remplissez notre formulaire pour nous parler de vos besoins et objectifs stylistiques.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-black text-amber-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-3">Planification</h3>
                <p className="text-gray-600">
                  Nous vous contactons pour programmer une consultation à une date qui vous convient.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-black text-amber-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Profitez de notre expertise pour transformer votre style et votre garde-robe.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Réserver maintenant
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Ce que disent nos clients</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Sophie Martin</h4>
                    <div className="flex text-amber-500">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
                <p className="italic">
                  "La consultation a complètement transformé ma façon de m'habiller. Je reçois désormais des compliments quotidiens sur mon style !"
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jean Dupont</h4>
                    <div className="flex text-amber-500">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
                <p className="italic">
                  "J'étais perdu dans ma garde-robe avant de rencontrer BMT Style. Maintenant je sais exactement quels vêtements me mettent en valeur."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à transformer votre style?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Réservez une consultation personnalisée et découvrez comment révéler votre plein potentiel stylistique.
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

export default ConsultationsPage;
