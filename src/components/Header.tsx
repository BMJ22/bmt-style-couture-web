
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="font-playfair font-bold text-2xl text-amber-500">BMT Style</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-amber-400 transition">Accueil</Link>
            <Link to="/boutique" className="text-white hover:text-amber-400 transition">Boutique</Link>
            <Link to="/sur-mesure" className="text-white hover:text-amber-400 transition">Sur-Mesure</Link>
            <Link to="/formations" className="text-white hover:text-amber-400 transition">Formations</Link>
            <Link to="/consultations" className="text-white hover:text-amber-400 transition">Consultations</Link>
            <Link to="/realisations" className="text-white hover:text-amber-400 transition">Réalisations</Link>
            <Link to="/blog" className="text-white hover:text-amber-400 transition">Blog</Link>
            <Link to="/a-propos" className="text-white hover:text-amber-400 transition">À Propos</Link>
          </nav>

          <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700">
            <Link to="/contact">Contact</Link>
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-amber-400 transition px-4">Accueil</Link>
              <Link to="/boutique" className="text-white hover:text-amber-400 transition px-4">Boutique</Link>
              <Link to="/sur-mesure" className="text-white hover:text-amber-400 transition px-4">Sur-Mesure</Link>
              <Link to="/formations" className="text-white hover:text-amber-400 transition px-4">Formations</Link>
              <Link to="/consultations" className="text-white hover:text-amber-400 transition px-4">Consultations</Link>
              <Link to="/realisations" className="text-white hover:text-amber-400 transition px-4">Réalisations</Link>
              <Link to="/blog" className="text-white hover:text-amber-400 transition px-4">Blog</Link>
              <Link to="/a-propos" className="text-white hover:text-amber-400 transition px-4">À Propos</Link>
              <Link to="/contact" className="text-white hover:text-amber-400 transition px-4">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
