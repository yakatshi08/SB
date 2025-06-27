import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { CheckCircle, Clock, Users, Award, Phone, Mail, MapPin, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Section Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1b5b35' }}>
              Nos Services de Nettoyage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de nettoyage en Île-de-France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Résidentiel */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#1b5b35' }}>
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1b5b35' }}>
                Nettoyage Résidentiel
              </h3>
              <p className="text-gray-600 mb-4">
                Maisons, appartements, espaces de vie. Service personnalisé pour votre confort quotidien.
              </p>
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#c88f3b' }}>
                  À partir de 25€/h
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#1b5b35' }} />
                  <span>Nettoyage complet</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#1b5b35' }} />
                  <span>Produits écologiques</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#1b5b35' }} />
                  <span>Équipement fourni</span>
                </li>
              </ul>
            </div>

            {/* Service 2 - Commercial */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Nettoyage Commercial
              </h3>
              <p className="text-gray-600 mb-4">
                Bureaux, magasins, restaurants. Environnement professionnel impeccable.
              </p>
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#c88f3b' }}>
                  Devis personnalisé
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Contrats réguliers</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Équipe dédiée</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  <span>Horaires flexibles</span>
                </li>
              </ul>
            </div>

            {/* Service 3 - Industriel */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                Nettoyage Industriel
              </h3>
              <p className="text-gray-600 mb-4">
                Usines, entrepôts, sites industriels. Expertise technique spécialisée.
              </p>
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#c88f3b' }}>
                  Sur mesure
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Équipement spécialisé</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Normes de sécurité</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Formation certifiée</span>
                </li>
              </ul>
            </div>

            {/* Service 4 - Spécialisés */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                Services Spécialisés
              </h3>
              <p className="text-gray-600 mb-4">
                Nettoyage après sinistre, désinfection, remise en état. Solutions expertes.
              </p>
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#c88f3b' }}>
                  Intervention rapide
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>Urgence 24h/24</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>Techniques avancées</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span>Devis immédiat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Testimonials */}
      <TestimonialsSection />

      {/* Section Pourquoi nous choisir */}
      <section className="py-16" style={{ backgroundColor: '#1b5b35' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi choisir SB Nettoyage ?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Une expertise reconnue au service de votre satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#c88f3b' }}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                500+ Clients Satisfaits
              </h3>
              <p className="text-green-100 text-lg">
                Plus de 500 clients nous font confiance pour l'entretien de leurs espaces 
                en Île-de-France depuis notre création.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#c88f3b' }}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Qualité Certifiée
              </h3>
              <p className="text-green-100 text-lg">
                Équipe formée et certifiée, utilisation de produits professionnels 
                et respect des normes environnementales.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#c88f3b' }}>
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Disponibilité 24h/24
              </h3>
              <p className="text-green-100 text-lg">
                Service d'urgence disponible 24h/24, 7j/7 pour répondre 
                à tous vos besoins de nettoyage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact Rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1b5b35' }}>
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Obtenez votre devis gratuit dès maintenant ou contactez-nous pour plus d'informations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#c88f3b' }}
            >
              <Mail className="w-6 h-6 mr-2" />
              Demander un devis gratuit
            </a>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1b5b35' }}
            >
              <Phone className="w-6 h-6 mr-2" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#c88f3b' }}>
                SB–Nettoyage
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Votre partenaire de confiance pour tous vos besoins de nettoyage en Île-de-France. 
                Service professionnel, équipe certifiée, résultats garantis.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-sm">4.9/5 sur Google</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-1" style={{ color: '#c88f3b' }} />
                  <span className="text-sm">500+ clients</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services" className="hover:text-white transition-colors">Nettoyage Résidentiel</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Nettoyage Commercial</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Nettoyage Industriel</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services Spécialisés</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Urgences 24h/24</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" style={{ color: '#c88f3b' }} />
                  <a href="tel:+33123456789" className="hover:text-white transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" style={{ color: '#c88f3b' }} />
                  <a href="mailto:contact@sb-nettoyage.fr" className="hover:text-white transition-colors">
                    contact@sb-nettoyage.fr
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: '#c88f3b' }} />
                  <span>Île-de-France<br />Service disponible 24h/24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Barre du bas */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SB–Nettoyage. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}