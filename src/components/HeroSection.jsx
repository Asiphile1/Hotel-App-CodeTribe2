import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-section-content" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#F3E0DC'
      }}>
        <h1>Welcome to Luxury Hotel</h1>
        <p>Experience the ultimate comfort and elegance.</p>
        <input type="text" placeholder="Search rooms..." style={{
          padding: '10px',
          borderRadius: '5px',
          borderColor: '#BC4639',
          marginBottom: '20px'
        }} />
        <button style={{
          backgroundColor: '#BC4639',
          color: '#F3E0DC',
          padding: '10px 20px',
          borderRadius: '5px'
        }}>Check Availability</button>
      </div>
    </div>
  );
};

export default HeroSection;
