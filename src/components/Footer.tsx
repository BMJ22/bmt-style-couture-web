
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-amber-500">BMT Style</h3>
            <p className="mb-4 text-gray-300">
              Couture personnalisée, formation et stylisme pour tous. Notre atelier crée des pièces uniques qui mettent en valeur votre personnalité.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-amber-500">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/boutique" className="text-gray-300 hover:text-amber-500">Boutique</Link></li>
              <li><Link to="/sur-mesure" className="text-gray-300 hover:text-amber-500">Sur-Mesure</Link></li>
              <li><Link to="/formations" className="text-gray-300 hover:text-amber-500">Formations</Link></li>
              <li><Link to="/consultations" className="text-gray-300 hover:text-amber-500">Consultations</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-amber-500">Blog</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-amber-500">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-amber-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-amber-500" />
                <span className="text-gray-300">123 Rue de la Mode, Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-500" />
                <a href="tel:+237123456789" className="text-gray-300 hover:text-amber-500">+237 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-500" />
                <a href="mailto:contact@bmtstyle.com" className="text-gray-300 hover:text-amber-500">contact@bmtstyle.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-amber-500">Newsletter</h3>
            <p className="text-gray-300 mb-4">Inscrivez-vous pour recevoir nos offres exclusives et nouvelles collections.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-amber-500"
              />
              <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BMT Style. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
