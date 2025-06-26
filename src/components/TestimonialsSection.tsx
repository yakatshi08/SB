import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Paris 15ème",
    rating: 5,
    comment: "Service impeccable ! L'équipe de SB-Nettoyage a fait un travail remarquable pour le nettoyage de nos bureaux. Ponctualité, professionnalisme et résultats parfaits. Je recommande vivement !",
    service: "Nettoyage de bureaux",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 2 semaines"
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    location: "Versailles",
    rating: 5,
    comment: "Excellente prestation ! Mon appartement était dans un état déplorable après des travaux. L'équipe a tout remis en parfait état. Service rapide et tarifs corrects.",
    service: "Nettoyage après travaux",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 1 mois"
  },
  {
    id: 3,
    name: "Sophie Leclerc",
    location: "Boulogne-Billancourt",
    rating: 5,
    comment: "Je fais appel à SB-Nettoyage depuis 6 mois pour l'entretien de ma maison. Toujours satisfaite du service, personnel de confiance et très minutieux.",
    service: "Ménage régulier",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 3 jours"
  },
  {
    id: 4,
    name: "David Rousseau",
    location: "Saint-Germain-en-Laye",
    rating: 5,
    comment: "Intervention d'urgence un dimanche pour un dégât des eaux. L'équipe est arrivée rapidement et a fait un excellent travail de nettoyage et désinfection. Merci !",
    service: "Intervention d'urgence",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 1 semaine"
  },
  {
    id: 5,
    name: "Isabelle Moreau",
    location: "Neuilly-sur-Seine",
    rating: 5,
    comment: "Service de qualité exceptionnelle ! Le nettoyage de fin de chantier de notre restaurant a été parfait. Respect des délais et travail irréprochable.",
    service: "Nettoyage commercial",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 2 mois"
  },
  {
    id: 6,
    name: "Thomas Benoit",
    location: "Courbevoie",
    rating: 5,
    comment: "Très professionnel ! Nettoyage complet de notre local commercial. L'équipe est arrivée à l'heure, bien équipée et a laissé les lieux impeccables.",
    service: "Nettoyage de local",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 3 semaines"
  }
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits. Leur confiance est notre plus belle récompense.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">500+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">4.9/5</div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700">98%</div>
              <div className="text-sm text-gray-600">Recommandations</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-green-700 opacity-20" />
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Service */}
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits !
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez pourquoi plus de 500 clients nous font confiance pour leurs besoins de nettoyage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Demander un devis gratuit
              </a>
              <a
                href="tel:+33123456789"
                className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}