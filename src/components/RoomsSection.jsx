import React from 'react';
import { FaHeart } from 'react-icons/fa';

const RoomsSection = () => {
  const rooms = [
    { id: 1, name: 'Executive Suite', price: 450 },
    { id: 2, name: 'Presidential Suite', price: 750 },
    { id: 3, name: 'Royal Penthouse', price: 1200 }
  ];

  return (
    <section style={{ 
      padding: '4rem 2rem',
      backgroundColor: '#D4A59A'
    }}>
      <h2 style={{
        color: '#5C2018',
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem'
      }}>
        Our Luxury Suites
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {rooms.map(room => (
          <div key={room.id} style={{
            backgroundColor: '#F3E0DC',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 16px rgba(92, 32, 24, 0.2)'
          }}>
            <img
              src={`/room9.jpg`}
              alt={room.name}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                color: '#5C2018',
                marginBottom: '0.5rem' 
              }}>
                {room.name}
              </h3>
              <p style={{ 
                color: '#BC4639',
                fontSize: '1.2rem',
                marginBottom: '1rem'
              }}>
                R{room.price}/night
                
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <button style={{
                  backgroundColor: '#BC4639',
                  color: '#F3E0DC',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Book Now
                </button>
                <FaHeart 
                  size={24} 
                  style={{ 
                    color: '#5C2018',
                    cursor: 'pointer'
                  }} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
