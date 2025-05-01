
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      location: "Yaoundé",
      text: "Ma robe de mariage réalisée par BMT Style était absolument magnifique et parfaitement ajustée. Merci pour ce chef-d'œuvre qui a rendu mon jour spécial encore plus mémorable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
      name: "Jean P.",
      location: "Douala",
      text: "J'ai suivi la formation en couture avancée et je suis maintenant capable de créer mes propres modèles. La qualité de l'enseignement est exceptionnelle!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Aminata K.",
      location: "Bamenda",
      text: "Le service de consultation en style personnel m'a vraiment ouvert les yeux sur ce qui me va le mieux. J'ai complètement renouvelé ma garde-robe et je me sens beaucoup plus confiante!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvdW5nJTIwYmxhY2slMjBhZnJpY2FuJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Robert T.",
      location: "Kribi",
      text: "Le costume sur-mesure que BMT Style a créé pour moi est de loin le meilleur vêtement que j'ai jamais porté. La qualité du tissu et la précision de la coupe sont remarquables.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerView : prevIndex - 1
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-3">Témoignages Clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos créations et services.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </Button>

          <div className="flex justify-center mt-6 md:hidden gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
