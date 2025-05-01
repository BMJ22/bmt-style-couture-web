
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Share2 } from "lucide-react";

const BoutiqueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Simuler des données de produit
  const product = {
    id: parseInt(id || "1"),
    name: "Robe Élégance",
    price: 89.99,
    description: "Une robe élégante et polyvalente, parfaite pour les occasions spéciales comme pour le quotidien. Fabriquée à partir de matériaux de haute qualité avec une attention particulière aux détails.",
    longDescription: "Cette robe a été conçue pour mettre en valeur votre silhouette tout en offrant un confort optimal. Fabriquée à la main dans notre atelier, chaque pièce bénéficie d'un soin particulier et de finitions impeccables. Le tissu doux et léger drape magnifiquement le corps, tandis que la coupe soigneusement étudiée assure une tenue parfaite. Disponible en plusieurs tailles, cette robe est un must-have pour toute garde-robe.",
    features: [
      "Tissu 100% coton premium",
      "Doublure en satin",
      "Fermeture éclair invisible au dos",
      "Poches latérales discrètes",
      "Longueur midi"
    ],
    mainImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000",
      "https://images.unsplash.com/photo-1554141220-83411835a60b?q=80&w=1000",
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1000"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Noir", "Bleu Marine", "Bordeaux"],
    category: "Robes",
    inStock: true
  };

  // État pour gérer l'image sélectionnée
  const [selectedImage, setSelectedImage] = React.useState(product.mainImage);
  
  // États pour la taille et couleur sélectionnées
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Navigation du fil d'Ariane */}
          <div className="text-sm breadcrumbs mb-8">
            <ul className="flex space-x-2">
              <li><a href="/" className="text-gray-500 hover:text-amber-600">Accueil</a></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><a href="/boutique" className="text-gray-500 hover:text-amber-600">Boutique</a></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><span className="text-gray-900">{product.name}</span></li>
            </ul>
          </div>

          {/* Détails du produit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Images du produit */}
            <div className="space-y-4">
              <div className="h-96 rounded-lg overflow-hidden">
                <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === image ? 'border-amber-600' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Informations du produit */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-amber-600 mb-4">{product.price} €</p>
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Sélection de la taille */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Taille</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border ${
                        selectedSize === size
                          ? 'border-amber-600 bg-amber-50 text-amber-600'
                          : 'border-gray-300 hover:border-amber-600'
                      } rounded-md transition-colors`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sélection de la couleur */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Couleur</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border ${
                        selectedColor === color
                          ? 'border-amber-600 bg-amber-50 text-amber-600'
                          : 'border-gray-300 hover:border-amber-600'
                      } rounded-md transition-colors`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Ajouter au panier
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Stock info */}
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 text-sm rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'En stock' : 'Rupture de stock'}
                </span>
              </div>

              {/* Caractéristiques */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Caractéristiques</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Description détaillée */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Description détaillée</h2>
            <p className="text-gray-600 mb-6">{product.longDescription}</p>
          </div>

          {/* Produits recommandés */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Vous pourriez également aimer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/product${item}/300/300`} 
                      alt={`Produit recommandé ${item}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">Produit similaire {item}</h3>
                    <p className="text-amber-600 font-medium">{Math.floor(Math.random() * 50 + 40)}.99 €</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BoutiqueDetailPage;
