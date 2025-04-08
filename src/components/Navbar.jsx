import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#5C2018', color: '#F3E0DC', padding: '1rem' }}>
      <div className="navbar">
        <img src="/logo.png" alt="Hotel Logo" style={{ height: '100px', }} />
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
          <li><a href="/" style={{ color: '#F3E0DC', marginRight: '20px' }}>Home</a></li>
          <li><a href="/about" style={{ color: '#F3E0DC', marginRight: '20px' }}>About</a></li>
          <li><a href="/rooms" style={{ color: '#F3E0DC', marginRight: '20px' }}>Rooms</a></li>
          <li><a href="/contact" style={{ color: '#F3E0DC' }}>Contact</a></li>
        </ul>
        <div style={{ float: 'right' }}>  
          <FaUserCircle size={24} style={{ color: '#BC4639', marginRight: '10px' }} />
          <button style={{ backgroundColor: '#BC4639', color: '#F3E0DC', borderRadius: '5px', padding: '5px 10px' }}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
