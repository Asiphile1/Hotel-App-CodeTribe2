import React from 'react';

const Stripe = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#5C2018', marginBottom: '1rem' }}>Payment Gateway</h2>
      {/* Stripe Payment Form */}
      <form action="https://example.com/payment" method="post">
        <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="YOUR_STRIPE_PUBLISHABLE_KEY"
          data-amount="1000"
          data-name="Luxury Hotel"
          data-description="Room Booking Payment"
          data-image="https://example.com/logo.png"
          data-locale="auto">
        </script>
      </form>
    </div>
  );
};

export default Stripe;
