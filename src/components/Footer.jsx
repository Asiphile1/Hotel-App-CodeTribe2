import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            src="https://www.google.com/maps?q=-26.101589794629312,28.059926486569537&z=15&output=embed"
            style={{
              width: '100%',
              height: '200px',
              border: 'none',
              borderRadius: '8px'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h4>
          <div style={{ lineHeight: '2' }}>
            <p><FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />5 Benmore Rd, Benmore Gardens, Sandton, 2196</p>
            <p><FaPhone style={{ marginRight: '0.5rem' }} />+27 (71) 568-6151</p>
            <p><FaEnvelope style={{ marginRight: '0.5rem' }} />info@lebelmor.com</p>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Rooms', path: '/rooms' },
              { name: 'Contact', path: '/contact' }
            ].map(link => (
              <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                <Link to={link.path} style={{
                  color: '#F3E0DC',
                  textDecoration: 'none'
                }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ cursor: 'pointer', color: '#F3E0DC' }} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} style={{ cursor: 'pointer', color: '#F3E0DC' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} style={{ cursor: 'pointer', color: '#F3E0DC' }} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        paddingTop: '2rem',
        borderTop: '1px solid #BC4639'
      }}>
        <p>© 2024 Hotel Le' Bel Mor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
