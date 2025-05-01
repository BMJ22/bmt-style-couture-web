
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AProposPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">À Propos de BMT Style</h1>
              <p className="text-lg mb-8">
                Découvrez notre histoire, notre philosophie et notre passion pour la mode et la couture.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Notre Histoire</h2>
                <p className="text-gray-600 mb-4">
                  Fondée en 2020 à Douala au Cameroun par Madame BISSOHONG Marie Thérèse, BMT Style est née d'une passion pour la 
                  couture et d'un désir de créer des vêtements uniques qui célèbrent l'individualité.
                </p>
                <p className="text-gray-600 mb-4">
                  Ce qui a commencé comme un petit atelier s'est développé pour devenir 
                  une entreprise respectée, offrant une gamme complète de services allant de la création sur-mesure 
                  aux formations en passant par les consultations de style.
                </p>
                <p className="text-gray-600">
                  Notre objectif est resté constant au fil des ans : créer des vêtements qui non seulement 
                  suivent les tendances mais qui sont aussi durables, confortables et parfaitement adaptés 
                  à chaque client.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1558227691-41a45d5b6511?q=80&w=1000" 
                  alt="Notre atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold mb-6">Notre Mission & Nos Valeurs</h2>
              <p className="text-gray-600">
                Chez BMT Style, nous croyons que les vêtements que nous portons sont une expression de notre 
                identité. Notre mission est de vous aider à trouver et à développer votre style unique.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualité</h3>
                <p className="text-gray-600">
                  Nous ne faisons jamais de compromis sur la qualité. Chaque point, chaque couture et 
                  chaque finition est exécuté avec la plus grande attention aux détails.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Durabilité</h3>
                <p className="text-gray-600">
                  Nous sommes engagés dans des pratiques durables, en utilisant des matériaux éco-responsables 
                  et en minimisant les déchets à travers l'upcycling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Personnalisation</h3>
                <p className="text-gray-600">
                  Nous croyons que les vêtements doivent s'adapter à vous, et non l'inverse. C'est pourquoi 
                  nous mettons l'accent sur la personnalisation dans tout ce que nous faisons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Notre Équipe</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Brigitte Meboulou"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Marie Thérèse BISSOHONG</h3>
                <p className="text-amber-600 mb-4">Fondatrice & Designer Principal</p>
                <p className="text-gray-600">
                  Passionnée de mode depuis son plus jeune âge, Marie Thérèse apporte sa vision créative 
                  et son expertise technique à chaque projet.
                </p>
              </div>

              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Thomas Essomba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Derrick BILONG</h3>
                <p className="text-amber-600 mb-4">Maître Tailleur</p>
                <p className="text-gray-600">
                  Avec plus de 15 ans d'expérience, Derrick est un expert dans la création de vêtements 
                  sur mesure qui mettent en valeur chaque client.
                </p>
              </div>

              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Sophie Ndongo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Adassa Ngosso</h3>
                <p className="text-amber-600 mb-4">Styliste & Formatrice</p>
                <p className="text-gray-600">
                  Adassa combine son œil pour la mode avec ses talents pédagogiques pour diriger 
                  nos programmes de formation et nos consultations de style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop and Studio */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Notre Atelier</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="rounded-lg overflow-hidden h-64">
                  <img 
                    src={`https://picsum.photos/600/400?random=${item + 10}`} 
                    alt={`Notre atelier ${item}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Visitez notre atelier
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Rejoignez la famille BMT Style</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Que vous soyez à la recherche d'un vêtement unique, d'une formation en couture ou de conseils de style,
              nous sommes là pour vous accompagner dans votre voyage.
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

export default AProposPage;
