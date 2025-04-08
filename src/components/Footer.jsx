import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#5C2018',
      color: '#F3E0DC',
      padding: '4rem 2rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Map Column */}
        <div>
          <h4 style={{ 
            fontSize: '1.2rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaMapMarkerAlt /> Location
          </h4>
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed"
            style={{
              width: '100%',
              height: '200px',
              border: 'none',
              borderRadius: '8px'
            }}
          />
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h4>
          <div style={{ lineHeight: '2' }}>
            <p><FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />123 Luxury Avenue</p>
            <p><FaPhone style={{ marginRight: '0.5rem' }} />+1 (555) 123-4567</p>
            <p><FaEnvelope style={{ marginRight: '0.5rem' }} />info@luxehaven.com</p>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Home', 'About', 'Rooms', 'Contact'].map(link => (
              <li key={link} style={{ marginBottom: '0.5rem' }}>
                <a href={`#${link}`} style={{
                  color: '#F3E0DC',
                  textDecoration: 'none',
                  '&:hover': { color: '#BC4639' }
                }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <FaInstagram size={24} style={{ cursor: 'pointer' }} />
            <FaFacebook size={24} style={{ cursor: 'pointer' }} />
            <FaTwitter size={24} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        paddingTop: '2rem',
        borderTop: '1px solid #BC4639'
      }}>
        <p>© 2025 Luxe Haven Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
