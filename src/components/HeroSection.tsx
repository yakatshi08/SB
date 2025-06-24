import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat pt-32 pb-20 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Contenu textuel - Aligné à gauche */}
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-golden-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-white font-medium">4.9/5 - Plus de 500 clients satisfaits</span>
            </div>
            
            {/* Titre principal sur une seule ligne */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Services de </span>
              <span className="text-golden-orange">Nettoyage </span>
              <span className="text-white">Professionnel</span>
            </h1>
            
            {/* Sous-texte descriptif */}
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl">
              Confiez-nous l'entretien de vos espaces. Équipe qualifiée, produits écologiques, 
              satisfaction garantie. Réservez en ligne en quelques clics.
            </p>

            {/* Points forts avec icônes */}
            <div className="space-y-5 mb-10">
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-golden-orange flex-shrink-0" size={28} />
                <span className="text-white font-medium text-lg">Équipe professionnelle certifiée</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-golden-orange flex-shrink-0" size={28} />
                <span className="text-white font-medium text-lg">Produits écologiques et sains</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-golden-orange flex-shrink-0" size={28} />
                <span className="text-white font-medium text-lg">Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-golden-orange flex-shrink-0" size={28} />
                <span className="text-white font-medium text-lg">Assurance responsabilité civile</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-golden-orange hover:bg-golden-orange-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl">
                <span>Réserver maintenant</span>
                <ArrowRight size={22} />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-forest-green px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-xl backdrop-blur-sm">
                Devis gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;