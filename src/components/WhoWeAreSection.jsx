import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section style={{ 
      display: 'flex', 
      gap: '2rem', 
      padding: '4rem 0',
      backgroundColor: '#F3E0DC'
    }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h2 style={{ 
          color: '#5C2018', 
          fontSize: '2.5rem',
          marginBottom: '1rem'
        }}>
          Discover Our Legacy
        </h2>
        <p style={{
          color: '#BC4639',
          lineHeight: '1.6',
          fontSize: '1.1rem'
        }}>
          Established in 1995, Luxe Haven Hotel has redefined luxury hospitality. 
          Our 50 exquisite rooms blend modern elegance with timeless comfort, 
          offering personalized services that cater to your every need.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <img 
          src="/hotel-loby.jpg" 
          alt="Hotel Lobby" 
          style={{
            width: '100%',
            height: '400px',
            borderRadius: '10px',
            objectFit: 'cover',
            boxShadow: '0 8px 16px rgba(92, 32, 24, 0.3)'
          }}
        />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
