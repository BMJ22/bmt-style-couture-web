
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, BookOpen, UserPlus, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Couture Sur-Mesure",
      description: "Des créations uniques adaptées à votre morphologie et à votre style.",
      icon: <Scissors className="h-10 w-10 text-amber-500" />,
      link: "/sur-mesure"
    },
    {
      title: "Formations Certifiantes",
      description: "Apprenez les métiers de la couture avec nos programmes de formation professionnels.",
      icon: <BookOpen className="h-10 w-10 text-amber-500" />,
      link: "/formations"
    },
    {
      title: "Stylisme & Relooking",
      description: "Des conseils personnalisés pour révéler votre style et mettre en valeur votre silhouette.",
      icon: <UserPlus className="h-10 w-10 text-amber-500" />,
      link: "/consultations"
    },
    {
      title: "Upcycling",
      description: "Transformez vos anciens vêtements en pièces modernes et stylées.",
      icon: <RefreshCw className="h-10 w-10 text-amber-500" />,
      link: "/upcycling"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-3">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'éventail de services professionnels que nous proposons pour satisfaire vos besoins en matière de mode et de style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:border-amber-300 transition-all hover:shadow-md">
              <CardHeader className="text-center pt-6">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="font-playfair">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button 
                  variant="outline"
                  onClick={() => navigate(service.link)} 
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
