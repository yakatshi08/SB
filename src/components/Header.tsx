import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="w-full">
      {/* Partie A - Bande verte avec coordonnées */}
      <div className="bg-forest-green text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-golden-orange transition-colors">
                <Phone size={14} />
                <span className="hidden sm:inline">+33 1 23 45 67 89</span>
                <span className="sm:hidden">Appeler</span>
              </a>
              <a href="mailto:contact@sb-nettoyage.fr" className="flex items-center gap-2 hover:text-golden-orange transition-colors">
                <Mail size={14} />
                <span className="hidden md:inline">contact@sb-nettoyage.fr</span>
                <span className="md:hidden">Email</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Paris & Île-de-France</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partie B - Navigation principale */}
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-green">
                SB<span className="text-golden-orange">-</span>Nettoyage
              </h1>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-forest-green font-medium transition-base">
                Accueil
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-forest-green font-medium transition-base">
                Services
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-forest-green font-medium transition-base">
                Contact
              </Link>
              
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 text-gray-700 hover:text-forest-green font-medium transition-base"
                  >
                    <User size={20} />
                    <span>{user?.name || user?.email}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to={user?.role === 'admin' ? '/admin/dashboard' : '/tableau-de-bord'}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <LayoutDashboard size={16} />
                        Tableau de bord
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <LogOut size={16} />
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to="/connexion"
                  className="flex items-center gap-2 text-gray-700 hover:text-forest-green font-medium transition-base"
                >
                  <User size={20} />
                  <span>Connexion</span>
                </Link>
              )}
              
              <Link 
                to="/reservation"
                className="bg-golden-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-golden-orange-dark transition-base"
              >
                Réserver
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-forest-green"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
            <div className="flex flex-col p-4 gap-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to={user?.role === 'admin' ? '/admin/dashboard' : '/tableau-de-bord'}
                    className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard size={20} />
                    Tableau de bord
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base flex items-center gap-2 text-left"
                  >
                    <LogOut size={20} />
                    Déconnexion
                  </button>
                </>
              ) : (
                <Link 
                  to="/connexion" 
                  className="text-gray-700 hover:text-forest-green font-medium py-2 transition-base flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} />
                  Connexion
                </Link>
              )}
              
              <Link 
                to="/reservation"
                className="bg-golden-orange text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-golden-orange-dark transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}