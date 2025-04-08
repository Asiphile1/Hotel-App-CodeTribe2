import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Absolute perfection! The attention to detail was unparalleled.',
      image: '/woman 2.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Best hotel experience of my life. Will definitely return!',
      image: '/man.jpg'
    },
    {
      id: 3,
      name: 'Emma Williams',
      text: 'Every moment felt magical. Truly a 5-star experience.',
      image: '/woman 1.jpg'
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#F3E0DC'
    }}>
      <h2 style={{
        color: '#5C2018',
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem'
      }}>
        Guest Experiences
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {reviews.map(review => (
          <div key={review.id} style={{
            backgroundColor: '#D4A59A',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <img
              src={review.image}
              alt={review.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <h4 style={{
              color: '#5C2018',
              marginBottom: '0.5rem'
            }}>
              {review.name}
            </h4>
            <p style={{
              color: '#BC4639',
              fontStyle: 'italic',
              lineHeight: '1.6'
            }}>
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
