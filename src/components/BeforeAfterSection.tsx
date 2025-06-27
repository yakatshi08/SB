import React, { useRef, useEffect, useState } from 'react';

const InteractiveBeforeAfter = ({ 
  beforeImage, 
  afterImage, 
  title, 
  description,
  stats 
}) => {
  const sliderRef = useRef(null);
  const afterContainerRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    const slider = sliderRef.current;
    const afterContainer = afterContainerRef.current;

    if (slider && afterContainer) {
      const updateComparison = () => {
        afterContainer.style.width = `${slider.value}%`;
      };

      slider.addEventListener('input', updateComparison);
      updateComparison(); // Initial setup
      
      return () => {
        slider.removeEventListener('input', updateComparison);
      };
    }
  }, []);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    if (afterContainerRef.current) {
      afterContainerRef.current.style.width = `${e.target.value}%`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* En-tête avec badge et titre */}
      <div className="p-6">
        <div className="inline-block bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {title}
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-3">{description}</h3>
        <p className="text-gray-600 mb-6">
          Transformation complète d'un appartement parisien. Nettoyage en profondeur, 
          désinfection et remise en état après déménagement.
        </p>

        {/* Stats */}
        <div className="flex space-x-8 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.satisfaction}</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{stats.duration}</div>
            <div className="text-sm text-gray-500">Durée</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.rating}</div>
            <div className="text-sm text-gray-500">Note client</div>
          </div>
        </div>
      </div>

      {/* Container avant/après interactif */}
      <div className="relative">
        <div className="before-after-container relative overflow-hidden" style={{ height: '400px' }}>
          {/* Image AVANT (arrière-plan) */}
          <img 
            src={beforeImage} 
            alt="Avant nettoyage" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          
          {/* Container image APRÈS */}
          <div 
            ref={afterContainerRef}
            className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-100 ease-out"
            style={{ width: '50%' }}
          >
            <img 
              src={afterImage} 
              alt="Après nettoyage" 
              className="w-full h-full object-cover object-left"
              style={{ width: '200%' }} // Pour éviter la déformation
            />
            
            {/* Ligne de séparation */}
            <div className="absolute top-0 right-0 w-1 h-full bg-white shadow-lg">
              <div className="absolute top-1/2 right-0 w-6 h-6 bg-white rounded-full border-2 border-green-700 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg cursor-pointer">
                <div className="w-1 h-3 border-l-2 border-r-2 border-green-700"></div>
              </div>
            </div>
          </div>

          {/* Labels AVANT/APRÈS */}
          <div className="absolute top-4 left-0 right-0 flex justify-between px-4 z-10">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              AVANT
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              APRÈS
            </div>
          </div>
        </div>

        {/* Slider de contrôle */}
        <div className="p-6 text-center bg-gray-50">
          <input 
            ref={sliderRef}
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-custom"
          />
          <p className="text-sm text-gray-500 mt-3 italic">
            Faites glisser le curseur pour voir la transformation
          </p>
        </div>
      </div>

      <style jsx>{`
        .slider-custom::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1b5b35;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .slider-custom::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #1b5b35;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          border: none;
        }

        .slider-custom::-webkit-slider-track {
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
        }

        .slider-custom::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

const BeforeAfterSection = () => {
  const services = [
    {
      id: 1,
      title: "Nettoyage Résidentiel",
      description: "Appartement 3 pièces",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=faces&auto=format",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=faces&auto=format",
      stats: {
        satisfaction: "98%",
        duration: "4h",
        rating: "5/5"
      }
    },
    {
      id: 2,
      title: "Nettoyage Commercial",
      description: "Bureaux d'entreprise",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=faces&auto=format",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&crop=faces&auto=format",
      stats: {
        satisfaction: "100%",
        duration: "2h",
        rating: "5/5"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Avant / Après
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez la qualité de nos interventions à travers ces exemples concrets
          </p>
        </div>

        {/* Grid des exemples */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <InteractiveBeforeAfter
              key={service.id}
              title={service.title}
              description={service.description}
              beforeImage={service.beforeImage}
              afterImage={service.afterImage}
              stats={service.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;