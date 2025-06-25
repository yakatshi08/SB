import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep-plum text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div>
            <h3 className="text-xl font-bold text-golden-orange mb-4">SB-Nettoyage</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel et résidentiel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-golden-orange mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">Nettoyage résidentiel</a></li>
              <li><a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">Nettoyage de bureaux</a></li>
              <li><a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">Nettoyage après travaux</a></li>
              <li><a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">Nettoyage de vitres</a></li>
              <li><a href="#" className="text-forest-green hover:text-golden-orange transition-colors duration-200">Entretien jardins</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-golden-orange mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-golden-orange" />
                <span className="text-forest-green">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-golden-orange" />
                <span className="text-forest-green">contact@sb-nettoyage.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-golden-orange" />
                <span className="text-forest-green">Paris & Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold text-golden-orange mb-4">Horaires</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-golden-orange" />
                <div>
                  <p className="text-forest-green font-medium">Lun - Ven</p>
                  <p className="text-gray-300 text-sm">8h00 - 18h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-golden-orange" />
                <div>
                  <p className="text-forest-green font-medium">Samedi</p>
                  <p className="text-gray-300 text-sm">9h00 - 16h00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-golden-orange" />
                <div>
                  <p className="text-forest-green font-medium">Dimanche</p>
                  <p className="text-gray-300 text-sm">Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SB-Nettoyage. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-forest-green hover:text-golden-orange text-sm transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-forest-green hover:text-golden-orange text-sm transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="text-forest-green hover:text-golden-orange text-sm transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>
          <div className="mt-2 space-x-4 text-sm text-center md:text-right">
            <Link to="/mentions-legales" className="hover:text-golden-orange transition-colors">
              Mentions légales
            </Link>
            <span>|</span>
            <Link to="/politique-confidentialite" className="hover:text-golden-orange transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
