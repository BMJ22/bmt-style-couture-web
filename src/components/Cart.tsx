
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getItemCount, checkout, loading } = useCart();

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Veuillez vous connecter pour finaliser votre commande");
      navigate("/auth");
      return;
    }

    const success = await checkout();
    if (success) {
      navigate("/");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Votre panier</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 
              ? "Votre panier est vide."
              : `Vous avez ${getItemCount()} article${getItemCount() > 1 ? "s" : ""} dans votre panier.`}
          </SheetDescription>
        </SheetHeader>
        
        {cartItems.length > 0 && (
          <ScrollArea className="flex-1 my-4">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">{(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.price.toFixed(2)} € / unité</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
        
        {cartItems.length > 0 && (
          <SheetFooter className="mt-auto">
            <div className="w-full space-y-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>{getTotalPrice().toFixed(2)} €</p>
              </div>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Traitement en cours..." : "Passer commande"}
              </Button>
            </div>
          </SheetFooter>
        )}
        
        {cartItems.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <ShoppingCart className="h-16 w-16 text-gray-300" />
            <Button 
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => navigate("/boutique")}
            >
              Découvrir nos produits
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
