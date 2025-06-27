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
    comment: "Excellent service ! L'équipe de SB Nettoyage a transformé notre appartement. Très professionnels et respectueux.",
    service: "Nettoyage Résidentiel",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 2 semaines"
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    location: "Neuilly-sur-Seine",
    rating: 5,
    comment: "Service irréprochable pour nos bureaux. Ponctualité parfaite et travail de qualité. Je recommande vivement !",
    service: "Nettoyage Commercial",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 1 mois"
  },
  {
    id: 3,
    name: "Sophie Leroy",
    location: "Boulogne-Billancourt",
    rating: 5,
    comment: "Intervention d'urgence suite à un dégât des eaux. Équipe réactive et efficace. Résultat impeccable !",
    service: "Services Spécialisés",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 3 semaines"
  },
  {
    id: 4,
    name: "Philippe Moreau",
    location: "Versailles",
    rating: 5,
    comment: "Contrat annuel pour notre restaurant. Service constant de haute qualité. Nos clients apprécient la propreté !",
    service: "Nettoyage Commercial",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 1 semaine"
  },
  {
    id: 5,
    name: "Caroline Bernard",
    location: "Saint-Cloud",
    rating: 5,
    comment: "Service de ménage régulier pour ma maison. Toujours satisfaite de la qualité et de la discrétion de l'équipe.",
    service: "Nettoyage Résidentiel",
    avatar: "https://images.unsplash.com/photo-1559116315-702b0b4774e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 4 jours"
  },
  {
    id: 6,
    name: "Thomas Petit",
    location: "Rueil-Malmaison",
    rating: 5,
    comment: "Nettoyage complet après travaux. Résultat parfait, délais respectés. Rapport qualité-prix excellent !",
    service: "Services Spécialisés",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "Il y a 2 mois"
  }
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        style={{
          color: i < rating ? '#c88f3b' : '#e5e7eb',
          fill: i < rating ? '#c88f3b' : 'none'
        }}
      />
    ));
  };

  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1b5b35',
            marginBottom: '1rem'
          }}>
            Ce que disent nos clients
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez les témoignages de nos clients satisfaits à travers l'Île-de-France
          </p>
        </div>

        {/* Statistiques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8fdf9',
            borderRadius: '12px',
            border: '1px solid #e5f3e7'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1b5b35',
              marginBottom: '0.5rem'
            }}>
              500+
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Clients satisfaits
            </div>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fff8e6',
            borderRadius: '12px',
            border: '1px solid #f5e6b3'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#c88f3b',
              marginBottom: '0.5rem'
            }}>
              4.9/5
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Note moyenne
            </div>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: '#f8fdf9',
            borderRadius: '12px',
            border: '1px solid #e5f3e7'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1b5b35',
              marginBottom: '0.5rem'
            }}>
              98%
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Recommandations
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                padding: '2rem',
                backgroundColor: '#fafafa',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                position: 'relative'
              }}
            >
              {/* Badge service */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#1b5b35',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {testimonial.service}
              </div>

              {/* Icône quote */}
              <div style={{ marginBottom: '1rem' }}>
                <Quote size={32} style={{ color: '#c88f3b' }} />
              </div>

              {/* Commentaire */}
              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.comment}"
              </p>

              {/* Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <div style={{
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.25rem'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#6b7280'
                    }}>
                      {testimonial.location} • {testimonial.date}
                    </div>
                  </div>
                </div>

                {/* Étoiles */}
                <div style={{ display: 'flex', gap: '2px' }}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#1b5b35',
          borderRadius: '16px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Rejoignez nos clients satisfaits !
          </h3>
          <p style={{
            color: '#d1d5db',
            marginBottom: '2rem'
          }}>
            Demandez votre devis gratuit dès maintenant
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="/reservation"
              style={{
                backgroundColor: '#c88f3b',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:+33123456789"
              style={{
                border: '2px solid white',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              📞 +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}