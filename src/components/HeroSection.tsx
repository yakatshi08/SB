import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Sparkles, Clock } from 'lucide-react';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-green-800 to-green-600 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-green-800 bg-opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-green-300">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm">{t('hero.fastService')}</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm">{t('hero.professionalCleaning')}</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/reservation"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.bookNow')}
              </Link>
              
              <a
                href="tel:+33123456789"
                className="border-2 border-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                {t('hero.emergencyCall')}
              </a>
            </div>
            
            {/* Trust Elements */}
            <div className="mt-8 pt-8 border-t border-green-600">
              <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start text-sm text-green-200">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {t('hero.certifiedProfessionals')}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {t('hero.guarantee')}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {t('hero.freeQuote')}
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={t('hero.imageAlt')}
                className="w-full h-80 object-cover rounded-lg"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm font-medium">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}