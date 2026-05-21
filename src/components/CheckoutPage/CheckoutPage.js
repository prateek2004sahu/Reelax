import React from 'react';
import BillingForm from '../BillingForm/BillingForm';
import OrderSummary from '../OrderSummary/OrderSummary';
import './CheckoutPage.css';

const BackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      {/* Back link */}
      <div className="checkout-page__back">
        <button className="checkout-page__back-btn">
          <BackIcon />
          <span>Back to plans</span>
        </button>
      </div>

      {/* Page layout: form + sidebar */}
      <div className="checkout-page__layout">
        <div className="checkout-page__main">
          <BillingForm />
        </div>
        <div className="checkout-page__sidebar">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
