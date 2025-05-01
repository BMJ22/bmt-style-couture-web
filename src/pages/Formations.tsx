
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

const FormationsPage = () => {
  const formations = [
    {
      id: 1,
      title: "Initiation à la Couture",
      description: "Apprenez les bases de la couture et réalisez vos premiers projets.",
      duration: "10 séances de 2h",
      price: 250,
      level: "Débutant",
      icon: <BookOpen className="text-amber-600" size={24} />
    },
    {
      id: 2,
      title: "Perfectionnement",
      description: "Améliorez vos techniques et abordez des projets plus complexes.",
      duration: "8 séances de 3h",
      price: 320,
      level: "Intermédiaire",
      icon: <Users className="text-amber-600" size={24} />
    },
    {
      id: 3,
      title: "Création de Patron",
      description: "Maîtrisez l'art de créer vos propres patrons sur mesure.",
      duration: "6 séances de 3h",
      price: 380,
      level: "Avancé",
      icon: <GraduationCap className="text-amber-600" size={24} />
    }
  ];

  const faqs = [
    {
      question: "Quel matériel dois-je apporter pour les cours ?",
      answer: "Pour les cours d'initiation, tout le matériel de base est fourni. Pour les niveaux plus avancés, une liste détaillée vous sera envoyée avant le début de la formation."
    },
    {
      question: "Y a-t-il un âge minimum pour participer aux formations ?",
      answer: "Nos formations standards sont ouvertes aux personnes de 16 ans et plus. Nous proposons également des ateliers spéciaux pour les enfants de 12 à 15 ans."
    },
    {
      question: "Comment se déroulent les sessions de formation ?",
      answer: "Chaque session comprend une partie théorique suivie d'exercices pratiques. Des supports de cours sont fournis et vous repartez avec vos créations."
    },
    {
      question: "Que se passe-t-il si je manque une séance ?",
      answer: "En cas d'absence, nous proposons des sessions de rattrapage en fonction des disponibilités. Veuillez nous informer à l'avance si possible."
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
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Formations en Couture</h1>
              <p className="text-lg mb-8">
                Développez vos compétences en couture avec nos formations professionnelles,
                quel que soit votre niveau de départ.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Découvrir nos formations
              </Button>
            </div>
          </div>
        </section>

        {/* Formations Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Programmes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {formations.map((formation) => (
                <Card key={formation.id} className="border border-gray-200 h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <div className="mb-4">
                      {formation.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
                    <div className="mb-4 text-sm">
                      <span className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 mb-2">
                        {formation.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{formation.description}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <p><strong>Durée:</strong> {formation.duration}</p>
                      <p><strong>Prix:</strong> {formation.price}€</p>
                    </div>
                    <Button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white">
                      S'inscrire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Calendrier des Prochaines Sessions</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Initiation à la Couture</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Checkbox id="session1" className="mr-2" />
                  <label htmlFor="session1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Du 15 mai au 17 juillet - Mardi soir (18h-20h)
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="session2" className="mr-2" />
                  <label htmlFor="session2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Du 2 juin au 4 août - Samedi matin (10h-12h)
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Perfectionnement</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Checkbox id="session3" className="mr-2" />
                  <label htmlFor="session3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Du 10 juin au 29 juillet - Jeudi soir (18h-21h)
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Création de Patron</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Checkbox id="session4" className="mr-2" />
                  <label htmlFor="session4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Du 5 juillet au 9 août - Mercredi soir (18h-21h)
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                Réserver ma place
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Questions Fréquentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <CollapsibleTrigger className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="text-amber-600">+</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à développer vos compétences ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à l'une de nos formations et lancez-vous dans l'aventure de la création.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
              S'inscrire maintenant
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FormationsPage;
