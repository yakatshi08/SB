import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après"
}: BeforeAfterSliderProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div style={{ 
      width: '100%', 
      backgroundColor: '#ffffff', 
      border: '1px solid #e5e7eb',
      marginBottom: '2rem'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '1rem', 
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          fontWeight: '500', 
          color: '#374151' 
        }}>
          {beforeLabel}
        </span>
        <span style={{ 
          fontSize: '0.875rem', 
          fontWeight: '500', 
          color: '#374151' 
        }}>
          {afterLabel}
        </span>
      </div>

      {/* Image Container */}
      <div style={{ height: '300px', position: 'relative', backgroundColor: '#f3f4f6' }}>
        {/* Image affichée */}
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={showAfter ? afterLabel : beforeLabel}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Label sur l'image */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: '500'
        }}>
          {showAfter ? afterLabel : beforeLabel}
        </div>
      </div>

      {/* Contrôles */}
      <div style={{ 
        padding: '1rem',
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          marginBottom: '0.5rem'
        }}>
          <button
            onClick={() => setShowAfter(false)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: !showAfter ? '#1b5b35' : '#e5e7eb',
              color: !showAfter ? 'white' : '#374151',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Voir Avant
          </button>
          <button
            onClick={() => setShowAfter(true)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: showAfter ? '#1b5b35' : '#e5e7eb',
              color: showAfter ? 'white' : '#374151',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            Voir Après
          </button>
        </div>
        
        <div style={{ 
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#6b7280'
        }}>
          Cliquez sur les boutons pour comparer • Actuellement : {showAfter ? 'Après' : 'Avant'}
        </div>
      </div>
    </div>
  );
}