import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, Phone, Mail, Star, Euro, ArrowRight, Home, Building, Factory, Wrench, Calendar, Calculator } from 'lucide-react';
import BeforeAfterSection from '../components/BeforeAfterSection';

export default function ServicesPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="bg-gray-50">
      {/* Hero Section Services */}
      <section className="relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #1b5b35 0%, #2d7a4a 100%)'
      }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nos Services de Nettoyage
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Solutions complètes et professionnelles pour tous vos besoins de nettoyage en Île-de-France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#c88f3b' }}
              >
                <Calculator className="w-6 h-6 mr-2" />
                Devis gratuit
              </button>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-green-800 transition-all duration-200"
              >
                <Phone className="w-6 h-6 mr-2" />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1b5b35' }}>
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services adaptés à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1 - Résidentiel */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#1b5b35' }}>
                  <Home className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1b5b35' }}>
                    Nettoyage Résidentiel
                  </h3>
                  <div className="text-lg font-semibold mt-1" style={{ color: '#c88f3b' }}>
                    À partir de 25€/heure
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Service de nettoyage personnalisé pour votre domicile. Nous prenons soin de votre espace de vie 
                avec professionnalisme et discrétion.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Prestations incluses :</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Nettoyage complet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Sanitaires</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Cuisine</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Sols et surfaces</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Dépoussiérage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#1b5b35' }} />
                    <span className="text-sm">Vitres</span>
                  </div>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Nettoyage résidentiel"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            {/* Service 2 - Commercial */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">
                    Nettoyage Commercial
                  </h3>
                  <div className="text-lg font-semibold mt-1" style={{ color: '#c88f3b' }}>
                    Devis personnalisé
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Solutions professionnelles pour bureaux, magasins, restaurants. Maintenez une image 
                irréprochable pour vos clients et employés.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Prestations incluses :</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Espaces de travail</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Accueil et halls</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Salles de réunion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Cuisines d'entreprise</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Désinfection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm">Horaires flexibles</span>
                  </div>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Nettoyage commercial"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            {/* Service 3 - Industriel */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-600">
                    Nettoyage Industriel
                  </h3>
                  <div className="text-lg font-semibold mt-1" style={{ color: '#c88f3b' }}>
                    Sur mesure
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Expertise technique pour sites industriels, usines, entrepôts. Respect des normes 
                de sécurité et contraintes spécifiques.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Prestations incluses :</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Zones de production</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Entrepôts</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Dégraissage industriel</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Équipements spécialisés</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Normes HACCP</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm">Sécurité renforcée</span>
                  </div>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Nettoyage industriel"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>

            {/* Service 4 - Spécialisés */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600">
                    Services Spécialisés
                  </h3>
                  <div className="text-lg font-semibold mt-1" style={{ color: '#c88f3b' }}>
                    Intervention rapide
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Solutions expertes pour situations spéciales : remise en état, nettoyage après sinistre, 
                désinfection d'urgence, fin de chantier.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Prestations incluses :</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Après sinistre</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Fin de chantier</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Remise en état</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Désinfection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Urgence 24h/24</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">Techniques avancées</span>
                  </div>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Services spécialisés"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Avant/Après */}
      <BeforeAfterSection />

      {/* Section Garanties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1b5b35' }}>
              Nos Garanties
            </h2>
            <p className="text-xl text-gray-600">
              Votre satisfaction est notre priorité absolue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1b5b35' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1b5b35' }}>
                Qualité Garantie
              </h3>
              <p className="text-gray-600">
                Satisfaction 100% garantie ou nous repassons gratuitement
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#c88f3b' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1b5b35' }}>
                Équipe Certifiée
              </h3>
              <p className="text-gray-600">
                Personnel formé, assuré et respectueux de votre intimité
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1b5b35' }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1b5b35' }}>
                Ponctualité
              </h3>
              <p className="text-gray-600">
                Intervention dans les créneaux convenus, respect des délais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16" style={{ backgroundColor: '#1b5b35' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à découvrir nos services ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Demandez votre devis personnalisé gratuit en moins de 24h
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#c88f3b' }}
            >
              <Mail className="w-6 h-6 mr-2" />
              Devis gratuit en ligne
            </button>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-green-800 transition-all duration-200"
            >
              <Phone className="w-6 h-6 mr-2" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Modal Formulaire Devis */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#1b5b35' }}>
                Demande de Devis
              </h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de service
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Nettoyage Résidentiel</option>
                  <option>Nettoyage Commercial</option>
                  <option>Nettoyage Industriel</option>
                  <option>Services Spécialisés</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surface approximative (m²)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: 100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#c88f3b' }}
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}