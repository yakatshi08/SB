import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const ReservationExpress = () => {
  const steps = [
    {
      id: 1,
      icon: <CheckCircle size={24} />,
      title: "✓ Sélectionnez votre service",
      description: "Choisissez parmi nos services de nettoyage",
      link: "#services"
    },
    {
      id: 2,
      icon: <Calendar size={24} />,
      title: "✓ Choisissez date et heure",
      description: "Sélectionnez le créneau qui vous convient",
      link: "#calendar"
    },
    {
      id: 3,
      icon: <Clock size={24} />,
      title: "✓ Confirmez votre réservation",
      description: "Validez et payez en toute sécurité",
      link: "#confirmation"
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encart avec fond dégradé */}
        <div className="bg-gradient-to-r from-golden-orange via-golden-orange to-forest-green rounded-3xl p-12 shadow-2xl">
          {/* Titre centré */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Réservation Express
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Réservez votre service de nettoyage en 3 étapes simples et rapides
            </p>
          </div>

          {/* 3 blocs interactifs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <a
                key={step.id}
                href={step.link}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl cursor-pointer border border-white/20"
              >
                {/* Numéro d'étape */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-forest-green w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-golden-orange group-hover:text-white transition-all duration-300">
                  {step.id}
                </div>

                {/* Icône */}
                <div className="text-white mb-6 flex justify-center group-hover:text-golden-orange transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-golden-orange transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>

                {/* Effet de survol - flèche */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
              </a>
            ))}
          </div>

          {/* Call-to-action en bas */}
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-white text-lg font-medium mb-2">
                🚀 Intervention garantie sous 48h
              </p>
              <p className="text-white/80 text-sm">
                Plus de 500 clients nous font confiance
              </p>
            </div>
          </div>
        </div>

        {/* Statistiques en dessous */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-golden-orange mb-2">500+</div>
            <div className="text-forest-green font-medium">Clients satisfaits</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-golden-orange mb-2">48h</div>
            <div className="text-forest-green font-medium">Délai d'intervention</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-golden-orange mb-2">4.9/5</div>
            <div className="text-forest-green font-medium">Note moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationExpress;