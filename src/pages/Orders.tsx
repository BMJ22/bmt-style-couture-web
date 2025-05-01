
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Package } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface OrderItem {
  id: string;
  product_id: string;
  quantity: number;
  price: number;
  product: {
    name: string;
    image_url: string;
  };
}

interface Order {
  id: string;
  created_at: string;
  status: string;
  total: number;
  order_items: OrderItem[];
}

const OrdersPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('orders')
          .select(`
            id,
            created_at,
            status,
            total,
            order_items (
              id,
              product_id,
              quantity,
              price,
              products (
                name,
                image_url
              )
            )
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Transformer les données pour correspondre à notre interface
        const transformedOrders = data?.map(order => {
          return {
            ...order,
            order_items: order.order_items.map((item: any) => ({
              ...item,
              product: item.products
            }))
          };
        });
        
        setOrders(transformedOrders || []);
      } catch (error) {
        console.error("Erreur lors du chargement des commandes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return "bg-yellow-100 text-yellow-800";
      case 'processing':
        return "bg-blue-100 text-blue-800";
      case 'shipped':
        return "bg-purple-100 text-purple-800";
      case 'delivered':
        return "bg-green-100 text-green-800";
      case 'cancelled':
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return "En attente";
      case 'processing':
        return "En traitement";
      case 'shipped':
        return "Expédié";
      case 'delivered':
        return "Livré";
      case 'cancelled':
        return "Annulé";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-playfair font-bold mb-8">Mes commandes</h1>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-amber-600" />
          </div>
        ) : orders.length > 0 ? (
          <div className="space-y-8">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="flex flex-wrap justify-between items-center">
                    <div>
                      <CardTitle className="text-lg">Commande #{order.id.slice(0, 8)}</CardTitle>
                      <CardDescription>
                        Passée le {format(new Date(order.created_at), 'd MMMM yyyy', { locale: fr })}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                      <span className="ml-4 font-semibold">{order.total.toFixed(2)} €</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {order.order_items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 py-2 border-b last:border-0">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          {item.product?.image_url && (
                            <img
                              src={item.product.image_url}
                              alt={item.product?.name || "Produit"}
                              className="h-full w-full object-cover object-center"
                            />
                          )}
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.product?.name || "Produit"}</h3>
                            <p className="ml-4">{(item.price * item.quantity).toFixed(2)} €</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.quantity} x {item.price.toFixed(2)} €
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <Package className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="text-xl font-semibold">Vous n'avez pas encore de commande</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Explorez notre boutique et découvrez notre collection unique de vêtements faits à la main.
            </p>
            <Button 
              onClick={() => navigate("/boutique")}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
            >
              Découvrir la boutique
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
