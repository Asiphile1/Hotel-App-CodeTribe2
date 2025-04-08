import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', email, password);
    // Add authentication logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
      <img 
        src="/login-image.jpg" 
        alt="Login Image" 
        style={{ width: '50%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <form style={{ width: '50%', padding: '2rem', backgroundColor: '#F3E0DC', borderRadius: '10px' }}>
        <h2 style={{ color: '#5C2018', marginBottom: '1rem' }}>Sign In</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: '#BC4639',
            color: '#F3E0DC',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Sign In
        </button>
        <p style={{ marginTop: '1rem' }}>
          Not a guest yet? <Link to="/signup">Sign Up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
