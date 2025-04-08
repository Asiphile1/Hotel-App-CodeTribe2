import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const SERVICE_ID = 'service_o3febxb'; 
  const TEMPLATE_ID = 'template_s1kxvnb'; 
  const PUBLIC_KEY = '2O5qdCvEzkBQ8O_Fn'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: 'Luxury Hotel',
      from_email: email,
      to_email: 'asiphile26@gmail.com', 
      message_html: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {sent ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </div>
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
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ padding: '0.5rem', width: '100%', height: '100px' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#BC4639', color: '#F3E0DC', padding: '0.8rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
