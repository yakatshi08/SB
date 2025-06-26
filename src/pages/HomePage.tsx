import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { CheckCircle, Clock, Users, Award, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Section Hero */}
      <HeroSection />

      {/* Section Services avec Effets Hover Ultra Fluides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Nettoyage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SB-Nettoyage vous propose une gamme complète de services pour tous vos besoins de nettoyage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Nettoyage Résidentiel */}
            <div className="group relative text-center p-6 rounded-2xl border-2 border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-transparent hover:shadow-xl">
              {/* Background gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-50 group-hover:scale-100"
                style={{
                  background: `linear-gradient(135deg, #1b5b35, #2d7a4a)`,
                  borderRadius: '1rem'
                }}
              ></div>
              
              {/* Particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
              </div>

              <div className="relative z-10 transform transition-all duration-300 ease-out group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <CheckCircle className="w-8 h-8 transition-all duration-300 ease-out" style={{color: '#1b5b35'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
                  Nettoyage Résidentiel
                </h3>
                <p className="text-gray-600 transition-all duration-300 ease-out group-hover:text-gray-100 leading-relaxed">
                  Ménage à domicile, nettoyage approfondi de votre logement
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Service 2 - Nettoyage Commercial */}
            <div className="group relative text-center p-6 rounded-2xl border-2 border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-transparent hover:shadow-xl">
              {/* Background gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-50 group-hover:scale-100"
                style={{
                  background: `linear-gradient(135deg, #c88f3b, #d4a757)`,
                  borderRadius: '1rem'
                }}
              ></div>
              
              {/* Particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>

              <div className="relative z-10 transform transition-all duration-300 ease-out group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Users className="w-8 h-8 transition-all duration-300 ease-out" style={{color: '#c88f3b'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
                  Nettoyage Commercial
                </h3>
                <p className="text-gray-600 transition-all duration-300 ease-out group-hover:text-gray-100 leading-relaxed">
                  Bureaux, magasins, espaces professionnels et commerciaux
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Service 3 - Nettoyage Industriel */}
            <div className="group relative text-center p-6 rounded-2xl border-2 border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-transparent hover:shadow-xl">
              {/* Background gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-50 group-hover:scale-100"
                style={{
                  background: `linear-gradient(135deg, #1a0d1a, #2d1a2d)`,
                  borderRadius: '1rem'
                }}
              ></div>
              
              {/* Particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              </div>

              <div className="relative z-10 transform transition-all duration-300 ease-out group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Award className="w-8 h-8 transition-all duration-300 ease-out" style={{color: '#1a0d1a'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
                  Nettoyage Industriel
                </h3>
                <p className="text-gray-600 transition-all duration-300 ease-out group-hover:text-gray-100 leading-relaxed">
                  Usines, entrepôts, grands espaces industriels
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Service 4 - Services Spécialisés */}
            <div className="group relative text-center p-6 rounded-2xl border-2 border-gray-100 cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:border-transparent hover:shadow-xl">
              {/* Background gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-50 group-hover:scale-100"
                style={{
                  background: `linear-gradient(135deg, #1b5b35, #c88f3b)`,
                  borderRadius: '1rem'
                }}
              ></div>
              
              {/* Particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
              </div>

              <div className="relative z-10 transform transition-all duration-300 ease-out group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-out group-hover:bg-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Clock className="w-8 h-8 transition-all duration-300 ease-out" style={{color: '#1b5b35'}} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
                  Services Spécialisés
                </h3>
                <p className="text-gray-600 transition-all duration-300 ease-out group-hover:text-gray-100 leading-relaxed">
                  Nettoyage après travaux, désinfection, urgences
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12 group-hover:left-full transition-all duration-700 ease-out"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#1b5b35',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2d7a4a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1b5b35';
              }}
            >
              Découvrir tous nos services
            </a>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <TestimonialsSection />

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir SB-Nettoyage ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à vous offrir un service de qualité supérieure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Avantage 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#1b5b35'}}>
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Intervention rapide et efficace. Nous respectons vos horaires et vos délais.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#1b5b35'}}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualité Garantie</h3>
              <p className="text-gray-600 leading-relaxed">
                Personnel qualifié et produits professionnels pour un résultat impeccable à chaque fois.
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#1b5b35'}}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Équipe Professionnelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Équipe formée, assurée et de confiance. Votre satisfaction est notre priorité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact Rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-12 text-white text-center" style={{background: `linear-gradient(135deg, #1b5b35, #2d7a4a)`}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un devis gratuit ?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Contactez-nous dès maintenant pour une estimation personnalisée et sans engagement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105"
                style={{backgroundColor: '#c88f3b', color: '#1b5b35'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a757';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#c88f3b';
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Demander un devis
              </a>
              
              <a
                href="tel:+33123456789"
                className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out inline-flex items-center justify-center transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}