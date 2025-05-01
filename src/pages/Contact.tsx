
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Contactez-Nous</h1>
              <p className="text-lg mb-8">
                Vous avez des questions ou souhaitez prendre rendez-vous ? 
                N'hésitez pas à nous contacter, nous sommes là pour vous aider.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white p-3">
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <MapPin className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600">123 Rue de la Mode</p>
                      <p className="text-gray-600">Yaoundé, Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Phone className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-600">+237 123 456 789</p>
                      <p className="text-gray-600">+237 987 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Mail className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">contact@bmtstyle.com</p>
                      <p className="text-gray-600">info@bmtstyle.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <Clock className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
                      <p className="text-gray-600">Samedi: 10h - 15h</p>
                      <p className="text-gray-600">Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              {/* Ici vous intégreriez normalement une carte Google Maps ou similaire */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <MapPin className="text-amber-600 mr-2" size={24} />
                <span className="text-gray-600 font-medium">Carte de localisation</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Questions Fréquentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <MessageSquare className="text-amber-600 mr-2" size={20} />
                  Comment prendre rendez-vous pour une consultation?
                </h3>
                <p className="text-gray-600">
                  Vous pouvez prendre rendez-vous en nous contactant par téléphone, 
                  par email ou en remplissant le formulaire de contact sur cette page.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <MessageSquare className="text-amber-600 mr-2" size={20} />
                  Combien de temps faut-il pour réaliser un vêtement sur-mesure?
                </h3>
                <p className="text-gray-600">
                  Le délai dépend de la complexité du vêtement, mais généralement entre 2 et 4 semaines. 
                  Nous discuterons d'un calendrier précis lors de votre consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <MessageSquare className="text-amber-600 mr-2" size={20} />
                  Proposez-vous des formations en ligne?
                </h3>
                <p className="text-gray-600">
                  Oui, nous proposons des formations en ligne en plus de nos cours en présentiel. 
                  Contactez-nous pour plus d'informations sur nos programmes virtuels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Prêt à nous contacter?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nous sommes impatients de vous entendre et de vous aider à concrétiser vos projets.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
              Contactez-nous dès maintenant
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
