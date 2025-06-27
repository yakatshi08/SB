import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #1b5b35 0%, #2d7a4a 100%)'
    }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Services de Nettoyage
              <span className="block text-3xl lg:text-4xl mt-2" style={{ color: '#c88f3b' }}>
                Professionnels
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed">
              SB Nettoyage vous offre des services de nettoyage de qualité supérieure 
              pour vos espaces résidentiels et commerciaux en Île-de-France.
            </p>

            {/* Points clés */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <Sparkles className="w-6 h-6 mr-4" style={{ color: '#c88f3b' }} />
                <span className="text-lg">Équipe professionnelle certifiée</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4" style={{ color: '#c88f3b' }} />
                <span className="text-lg">Service disponible 24h/24</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" style={{ color: '#c88f3b' }} />
                <span className="text-lg">Devis gratuit sous 24h</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#c88f3b' }}
              >
                Réserver maintenant
              </Link>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-green-800 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Service de nettoyage professionnel SB Nettoyage"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Décoration simple */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" 
              style={{ backgroundColor: '#c88f3b' }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20" 
              style={{ backgroundColor: '#c88f3b' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Décoration d'arrière-plan simple */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}