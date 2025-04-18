import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <nav style={{ 
      backgroundColor: '#5C2018', 
      color: '#F3E0DC', 
      padding: '1rem 2rem' 
    }}>
      <div 
        className="navbar" 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Hotel Logo" 
          style={{ height: '80px' }} 
        />

        {/* Nav Links */}
        <ul style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  listStyleType: 'none', 
  gap: '20px', 
  margin: 0, 
  padding: 0 
}}>
  <li><Link to="/" style={{ color: '#F3E0DC', textDecoration: 'none' }}>Home</Link></li>
  <li><Link to="/about" style={{ color: '#F3E0DC', textDecoration: 'none' }}>About</Link></li>
  <li><Link to="/rooms" style={{ color: '#F3E0DC', textDecoration: 'none' }}>Rooms</Link></li>
  <li><Link to="/contact" style={{ color: '#F3E0DC', textDecoration: 'none' }}>Contact</Link></li>
</ul>

        {/* User Icon and Sign In */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaUserCircle size={28} style={{ color: '#BC4639' }} />
          <button 
            onClick={handleSignIn} 
            style={{
              backgroundColor: '#BC4639', 
              color: '#F3E0DC', 
              borderRadius: '5px', 
              padding: '6px 12px', 
              border: 'none', 
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
