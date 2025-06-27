import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock, Users, Award, Phone, Mail, Star, Euro, ArrowRight, Home, Building, Factory, Wrench, Calendar, Calculator } from 'lucide-react';
import BeforeAfterSection from '../components/BeforeAfterSection'; // ← AJOUT

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  duration: string;
  image: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 'residential',
    title: 'Nettoyage Résidentiel',
    description: 'Service de ménage professionnel pour votre domicile. Nos équipes qualifiées s\'occupent de l\'entretien complet de votre logement avec des produits écologiques et du matériel professionnel.',
    features: [
      'Ménage complet toutes pièces',
      'Nettoyage des sanitaires',
      'Dépoussiérage et aspirateur',
      'Lavage des sols',
      'Nettoyage des vitres intérieures',
      'Produits écologiques inclus'
    ],
    priceRange: '25€ - 45€/h',
    duration: '2-4 heures',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    icon: Home,
    color: '#1b5b35',
    gradient: 'from-green-600 to-green-700'
  },
  {
    id: 'commercial',
    title: 'Nettoyage Commercial',
    description: 'Solutions professionnelles pour bureaux, magasins et espaces commerciaux. Intervention flexible selon vos horaires d\'ouverture avec du personnel formé aux exigences du secteur tertiaire.',
    features: [
      'Nettoyage bureaux et open-spaces',
      'Entretien des sanitaires professionnels',
      'Nettoyage des espaces communs',
      'Vidage et désinfection des poubelles',
      'Nettoyage des vitres et baies vitrées',
      'Intervention hors horaires d\'ouverture'
    ],
    priceRange: '20€ - 35€/h',
    duration: '3-6 heures',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    icon: Building,
    color: '#c88f3b',
    gradient: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'industrial',
    title: 'Nettoyage Industriel',
    description: 'Nettoyage spécialisé pour sites industriels, entrepôts et grandes surfaces. Équipes formées aux normes de sécurité avec matériel adapté aux environnements exigeants.',
    features: [
      'Nettoyage d\'entrepôts et usines',
      'Dégraissage des sols industriels',
      'Nettoyage haute pression',
      'Évacuation des déchets industriels',
      'Respect des normes de sécurité',
      'Intervention week-end et jours fériés'
    ],
    priceRange: '30€ - 50€/h',
    duration: '4-8 heures',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    icon: Factory,
    color: '#1a0d1a',
    gradient: 'from-gray-800 to-gray-900'
  },
  {
    id: 'specialized',
    title: 'Services Spécialisés',
    description: 'Interventions spécifiques pour nettoyage après travaux, désinfection, remise en état. Solutions sur-mesure pour situations particulières avec équipement spécialisé.',
    features: [
      'Nettoyage après travaux/rénovation',
      'Désinfection et décontamination',
      'Nettoyage de fin de chantier',
      'Remise en état post-sinistre',
      'Nettoyage de vitres en hauteur',
      'Interventions d\'urgence 24h/24'
    ],
    priceRange: '40€ - 80€/h',
    duration: '2-6 heures',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      after: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    icon: Wrench,
    color: '#1b5b35',
    gradient: 'from-green-600 to-yellow-600'
  }
];

export default function ServicesPage() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden" style={{background: `linear-gradient(135deg, #1b5b35, #2d7a4a)`}}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Services de Nettoyage
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Solutions professionnelles adaptées à tous vos besoins. Devis gratuit et intervention rapide en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: '#c88f3b', color: '#1b5b35'}}
            >
              <Calculator className="w-5 h-5 mr-2" />
              Devis Gratuit
            </button>
            <a
              href="tel:+33123456789"
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{backgroundColor: service.color}}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                        <span className="text-sm font-semibold" style={{color: service.color}}>
                          {service.priceRange}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" style={{color: service.color}} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <button
                            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            className="text-sm font-medium hover:underline"
                            style={{color: service.color}}
                          >
                            {selectedService === service.id ? 'Voir moins' : `+${service.features.length - 3} autres`}
                          </button>
                        )}
                      </div>

                      {/* Expanded features */}
                      {selectedService === service.id && (
                        <div className="space-y-2 mb-6 border-t pt-4">
                          {service.features.slice(3).map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" style={{color: service.color}} />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Info */}
                      <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span>4.9/5 (50+ avis)</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => setShowQuoteForm(true)}
                        className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                        style={{backgroundColor: service.color, color: 'white'}}
                      >
                        Demander un devis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION AVANT/APRÈS AVEC SLIDER */}
      <BeforeAfterSection />

      {/* CTA Section */}
      <section className="py-16" style={{background: `linear-gradient(135deg, #1b5b35, #c88f3b)`}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer vos espaces ?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Obtenez un devis personnalisé en moins de 24h. Intervention rapide en Île-de-France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuoteForm(true)}
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculer mon devis
            </button>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Demande de Devis</h3>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de service *
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Surface (m²)
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="100"
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
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Décrivez vos besoins..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
                  style={{backgroundColor: '#1b5b35'}}
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}