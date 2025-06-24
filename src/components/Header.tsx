import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Partie A - Bande verte avec contact réorganisée */}
      <div className="bg-forest-green text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Structure en 3 zones avec Flexbox */}
          <div className="flex justify-between items-center text-sm">
            {/* Zone gauche - Coordonnées (téléphone + email) */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>contact@sb-nettoyage.fr</span>
              </div>
            </div>

            {/* Zone centrale - Vide pour équilibrage */}
            <div className="hidden md:block flex-1"></div>

            {/* Zone droite - Localisation */}
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Paris - Île-de-France</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partie B - Navigation principale */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-forest-green">
                  SB-Nettoyage
                </h1>
              </div>
            </div>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-forest-green hover:text-golden-orange transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Accueil
              </a>
              <a href="#services" className="text-forest-green hover:text-golden-orange transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Services
              </a>
              <a href="#contact" className="text-forest-green hover:text-golden-orange transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Contact
              </a>
              
              {/* Bouton Réserver maintenant - aligné avec la localisation */}
              <button className="bg-golden-orange hover:bg-golden-orange-dark text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ml-4">
                Réserver maintenant
              </button>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-forest-green hover:text-golden-orange transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-off-white border-t">
              <a href="#accueil" className="text-forest-green hover:text-golden-orange block px-3 py-2 text-base font-medium">
                Accueil
              </a>
              <a href="#services" className="text-forest-green hover:text-golden-orange block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-forest-green hover:text-golden-orange block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="border-t pt-4 mt-4">
                <button className="bg-golden-orange hover:bg-golden-orange-dark text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mx-3 w-full">
                  Réserver maintenant
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;