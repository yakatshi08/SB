import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import NavLink from './NavLink';
import CTAButton from './CTAButton';

export default function Header() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu utilisateur en cliquant ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Barre verte unifiée avec tous les éléments */}
      <div className="bg-green-700 text-white py-2 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center space-x-6">
            {/* Île-de-France */}
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Île-de-France</span>
            </div>
            
            {/* Service 24h/24 */}
            <div className="flex items-center">
              <span className="text-green-200">Service disponible 24h/24</span>
            </div>
            
            {/* Téléphone */}
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+33123456789" className="hover:text-green-200 transition-colors">
                +33 1 23 45 67 89
              </a>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:contact@sb-nettoyage.fr" className="hover:text-green-200 transition-colors">
                contact@sb-nettoyage.fr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="Retour à l'accueil SB-Nettoyage"
            >
              <h1 className="text-2xl lg:text-3xl font-bold text-green-700 group-hover:text-green-800 transition-colors">
                SB-<span className="text-yellow-600">Nettoyage</span>
              </h1>
            </Link>

            {/* Navigation principale - Desktop */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              <NavLink 
                translationKey="navigation.home" 
                to="/" 
                exact={true}
              />
              <NavLink 
                translationKey="navigation.services" 
                to="/services" 
              />
              <NavLink 
                translationKey="navigation.contact" 
                to="/contact" 
              />
            </nav>

            {/* Actions à droite */}
            <div className="flex items-center space-x-4">
              
              {/* Bouton Réserver - Desktop */}
              <div className="hidden sm:block">
                <CTAButton 
                  to="/reservation"
                  translationKey="navigation.booking"
                  icon={Phone}
                  variant="primary"
                />
              </div>

              {/* Menu utilisateur */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center text-gray-700 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-2"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                  >
                    <User className="w-5 h-5 mr-1" />
                    <span className="hidden lg:inline font-medium">{user.name}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                      <NavLink
                        translationKey="navigation.dashboard"
                        to="/tableau-de-bord"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-none"
                        onClick={() => setIsUserMenuOpen(false)}
                      />
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        {t('navigation.logout')}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  translationKey="navigation.login"
                  to="/connexion"
                  className="hidden sm:inline-flex text-gray-700 hover:text-green-700 font-medium transition-colors"
                />
              )}

              {/* Bouton menu mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-2"
                aria-expanded={isMobileMenuOpen}
                aria-label="Menu de navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            {/* Contact mobile (affiché uniquement sur mobile) */}
            <div className="lg:hidden bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-green-700" />
                  <a href="tel:+33123456789" className="hover:text-green-700 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-green-700" />
                  <a href="mailto:contact@sb-nettoyage.fr" className="hover:text-green-700 transition-colors">
                    contact@sb-nettoyage.fr
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-green-700" />
                  <span>Île-de-France - Service 24h/24</span>
                </div>
              </div>
            </div>

            <nav className="px-4 py-4 space-y-3" role="navigation">
              <NavLink
                translationKey="navigation.home"
                to="/"
                exact={true}
                className="block py-2 text-gray-700 hover:text-green-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavLink
                translationKey="navigation.services"
                to="/services"
                className="block py-2 text-gray-700 hover:text-green-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavLink
                translationKey="navigation.contact"
                to="/contact"
                className="block py-2 text-gray-700 hover:text-green-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Séparateur */}
              <hr className="my-4 border-gray-200" />
              
              {/* Actions mobiles */}
              <div className="space-y-3">
                <CTAButton 
                  to="/reservation"
                  translationKey="navigation.booking"
                  icon={Phone}
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {!user && (
                  <NavLink
                    translationKey="navigation.login"
                    to="/connexion"
                    className="block py-2 text-center text-gray-700 hover:text-green-700 font-medium border border-gray-300 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}