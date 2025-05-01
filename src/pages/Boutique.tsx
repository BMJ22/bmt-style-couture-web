
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  stock: number;
}

const BoutiquePage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = supabase.from('products').select('*');
        
        if (selectedCategory) {
          query = query.eq('category', selectedCategory);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        setProducts(data || []);
        
        // Extraire les catégories uniques
        if (!selectedCategory) {
          const uniqueCategories = [...new Set((data || []).map(p => p.category))];
          setCategories(uniqueCategories.filter(Boolean) as string[]);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
        toast.error("Erreur lors du chargement des produits");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Notre Boutique</h1>
              <p className="text-lg mb-8">
                Découvrez notre collection unique de vêtements faits à la main,
                créés avec passion et souci du détail.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('products-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3"
              >
                Explorer la collection
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-amber-600 hover:bg-amber-700" : ""}
                onClick={() => handleCategorySelect(null)}
              >
                Tous les produits
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-amber-600 hover:bg-amber-700" : ""}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <section className="py-8" id="products-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Nos Créations</h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-amber-600" />
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden border border-gray-200 h-full flex flex-col">
                    <div className="h-64 overflow-hidden cursor-pointer" onClick={() => navigate(`/boutique/${product.id}`)}>
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => navigate(`/boutique/${product.id}`)}>
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <p className="font-semibold text-lg">{product.price} €</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.stock > 0 ? `En stock: ${product.stock}` : "Rupture de stock"}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock <= 0}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> 
                        {product.stock > 0 ? "Ajouter au panier" : "Indisponible"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg text-gray-600">
                  {selectedCategory 
                    ? `Aucun produit trouvé dans la catégorie ${selectedCategory}.` 
                    : "Aucun produit disponible pour le moment."}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">Vous cherchez quelque chose de spécial?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nous proposons également des créations sur mesure adaptées à vos besoins spécifiques.
            </p>
            <Button 
              onClick={() => navigate("/sur-mesure")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3"
            >
              Découvrir nos services sur mesure
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BoutiquePage;
