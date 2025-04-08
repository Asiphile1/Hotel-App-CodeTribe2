import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', roomType, checkIn, checkOut, guests);
    // Add booking logic here
    // Navigate to PaymentPage after successful booking
    // window.location.href = '/payment';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#5C2018', marginBottom: '1rem' }}>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Room Type:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          >
            <option value="">Select Room Type</option>
            <option value="Executive Suite">Executive Suite</option>
            <option value="Presidential Suite">Presidential Suite</option>
            <option value="Royal Penthouse">Royal Penthouse</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Check-in Date:</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Check-out Date:</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Number of Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#BC4639',
            color: '#F3E0DC',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Book Room
        </button>
      </form>
    </div>
  );
};

export default Booking;
