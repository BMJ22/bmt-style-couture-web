
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const BlogPage = () => {
  // Exemple d'articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances mode de l'été 2023",
      excerpt: "Découvrez les tendances incontournables qui marqueront la saison estivale cette année.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000",
      author: "Marie Lambert",
      date: "15 avril 2023",
      readTime: "5 min",
      category: "Tendances"
    },
    {
      id: 2,
      title: "Comment choisir le tissu parfait pour votre projet",
      excerpt: "Guide complet pour sélectionner les tissus adaptés à vos créations couture selon le type de vêtement.",
      image: "https://images.unsplash.com/photo-1544767252-c33ba2f8ba78?q=80&w=1000",
      author: "Thomas Dubois",
      date: "28 mars 2023",
      readTime: "8 min",
      category: "Conseils"
    },
    {
      id: 3,
      title: "L'upcycling : donnez une seconde vie à vos vêtements",
      excerpt: "Astuces et idées créatives pour transformer vos anciens vêtements en nouvelles pièces tendance.",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1000",
      author: "Sophie Martin",
      date: "10 mars 2023",
      readTime: "6 min",
      category: "Upcycling"
    },
    {
      id: 4,
      title: "Les bases de la couture pour débutants",
      excerpt: "Apprenez les techniques fondamentales pour débuter sereinement dans l'univers de la couture.",
      image: "https://images.unsplash.com/photo-1615639164233-6d969db291c0?q=80&w=1000",
      author: "Jean Dupont",
      date: "22 février 2023",
      readTime: "10 min",
      category: "Tutoriels"
    },
    {
      id: 5,
      title: "Comment entretenir vos vêtements fait-main",
      excerpt: "Conseils pratiques pour préserver la qualité et la longévité de vos créations artisanales.",
      image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1000",
      author: "Claire Rousseau",
      date: "5 février 2023",
      readTime: "7 min",
      category: "Entretien"
    },
    {
      id: 6,
      title: "Les erreurs à éviter en couture",
      excerpt: "Découvrez les pièges classiques et comment les contourner pour réussir vos projets.",
      image: "https://images.unsplash.com/photo-1551525212-a1dc18871d4a?q=80&w=1000",
      author: "Luc Bernard",
      date: "15 janvier 2023",
      readTime: "6 min",
      category: "Conseils"
    }
  ];

  // Catégories pour le filtrage
  const categories = ["Tous", "Tendances", "Conseils", "Tutoriels", "Upcycling", "Entretien"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Notre Blog</h1>
              <p className="text-lg mb-8">
                Retrouvez nos derniers articles, conseils et inspirations 
                sur l'univers de la mode et de la couture.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Categories Filter */}
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
            
            {/* Featured Post */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-96 overflow-hidden rounded-lg">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blogPosts[0].readTime} de lecture</span>
                    </div>
                  </div>
                  
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    Lire l'article
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-xl mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    
                    <div className="flex items-center text-gray-500 text-xs mb-4">
                      <div className="flex items-center mr-3">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                      Lire l'article
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" className="w-10 h-10 p-0 border-gray-300">
                  &lt;
                </Button>
                <Button className="w-10 h-10 p-0 bg-amber-600 hover:bg-amber-700">
                  1
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 border-gray-300">
                  2
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 border-gray-300">
                  3
                </Button>
                <Button variant="outline" className="w-10 h-10 p-0 border-gray-300">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
              <p className="text-gray-600 mb-6">
                Recevez nos derniers articles et conseils directement dans votre boîte de réception.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
