
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  stock: number;
}

const BoutiqueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error) throw error;
        
        setProduct(data);

        // Charger les produits similaires
        if (data) {
          const { data: related, error: relatedError } = await supabase
            .from('products')
            .select('*')
            .eq('category', data.category)
            .neq('id', id)
            .limit(3);
            
          if (!relatedError && related) {
            setRelatedProducts(related);
          }
        }
      } catch (error) {
        console.error("Erreur lors du chargement du produit:", error);
        toast.error("Erreur lors du chargement du produit");
        navigate("/boutique");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && product && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-amber-600" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
          <p className="mb-8">Le produit que vous recherchez n'existe pas.</p>
          <Button onClick={() => navigate("/boutique")} className="bg-amber-600 hover:bg-amber-700 text-white">
            Retour à la boutique
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          className="mb-8 flex items-center text-gray-600"
          onClick={() => navigate("/boutique")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la boutique
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-amber-600 font-medium">{product.category}</span>
            </div>
            <div className="text-2xl font-semibold mb-6">{product.price} €</div>
            
            <div className="prose prose-lg mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-700">Quantité:</span>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 mx-2 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={quantity >= product.stock}
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                {product.stock > 0 
                  ? `${product.stock} articles en stock` 
                  : "Rupture de stock"}
              </div>
              
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {product.stock > 0 ? "Ajouter au panier" : "Indisponible"}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-playfair font-bold mb-8">Vous pourriez aussi aimer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <div 
                  key={related.id}
                  onClick={() => navigate(`/boutique/${related.id}`)}
                  className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={related.image_url}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{related.name}</h3>
                    <p className="text-amber-600 font-semibold">{related.price} €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BoutiqueDetailPage;
