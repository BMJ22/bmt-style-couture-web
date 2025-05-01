
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HomeCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000",
      title: "Collection Printemps-Été",
      subtitle: "Découvrez nos nouvelles créations légères et colorées",
      buttonText: "Voir la collection",
      buttonLink: "/boutique"
    },
    {
      image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1000",
      title: "Créations Sur-Mesure",
      subtitle: "Des vêtements uniques adaptés à votre style et votre morphologie",
      buttonText: "En savoir plus",
      buttonLink: "/sur-mesure"
    },
    {
      image: "https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1000",
      title: "Formations Certifiantes",
      subtitle: "Apprenez les techniques de couture professionnelle",
      buttonText: "Découvrir nos formations",
      buttonLink: "/formations"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]);

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-3xl px-6">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg md:text-xl mb-8">{slide.subtitle}</p>
                    <Button 
                      onClick={() => navigate(slide.buttonLink)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-amber-500" : "bg-white bg-opacity-50"
              } transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 bg-white/30 hover:bg-white/50 text-white" />
        <CarouselNext className="absolute right-4 bg-white/30 hover:bg-white/50 text-white" />
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
