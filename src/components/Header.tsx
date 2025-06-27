import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, User, LogOut, LayoutDashboard, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }} className="bg-white shadow-lg">
      {/* Barre supérieure */}
      <div className="hidden lg:block" style={{ backgroundColor: '#1b5b35' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-6 text-sm text-white">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Île-de-France</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Service disponible 24h/24</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <a href="tel:+33123456789" className="hover:text-gray-200">
                +33 1 23 45 67 89
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@sb-nettoyage.fr" className="hover:text-gray-200">
                contact@sb-nettoyage.fr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: '#1b5b35' }}>
                SB–Nettoyage
              </span>
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Bouton Réservation */}
            <Link
              to="/reservation"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#c88f3b' }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Réservation
            </Link>

            {/* Menu utilisateur simplifié */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-800"
                >
                  <User className="w-6 h-6" />
                  <span className="text-sm font-medium">{user.name}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        to="/tableau-de-bord"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4 mr-3" />
                        Tableau de bord
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Se déconnecter
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/connexion"
                className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium"
              >
                Connexion
              </Link>
            )}
          </div>

          {/* Bouton menu mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Informations de contact mobile */}
            <div className="px-3 py-2 space-y-2 text-sm border-b">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" style={{ color: '#c88f3b' }} />
                <span>Île-de-France</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" style={{ color: '#c88f3b' }} />
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" style={{ color: '#c88f3b' }} />
                <a href="mailto:contact@sb-nettoyage.fr">contact@sb-nettoyage.fr</a>
              </div>
            </div>

            {/* Navigation mobile */}
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Actions mobile */}
            <div className="px-3 py-2 space-y-2">
              <Link
                to="/reservation"
                className="block w-full text-center px-4 py-3 text-base font-medium text-white rounded-lg"
                style={{ backgroundColor: '#c88f3b' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Réservation
              </Link>

              {user ? (
                <div className="space-y-2">
                  <Link
                    to="/tableau-de-bord"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="w-5 h-5 mr-3" />
                    Tableau de bord
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Se déconnecter
                  </button>
                </div>
              ) : (
                <Link
                  to="/connexion"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}