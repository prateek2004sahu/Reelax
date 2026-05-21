import React, { useState } from 'react';
import './OrderSummary.css';

// Icons
const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const WalletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month', selected: true },
  { code: 'ANNUAL50', description: '50% off on annual plans', selected: false },
];

const OrderSummary = () => {
  const [couponOpen, setCouponOpen] = useState(true);
  const [couponInput, setCouponInput] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [walletApplied, setWalletApplied] = useState(false);

  const SUBTOTAL = 14999;
  const TAX_RATE = 0.18;
  const tax = Math.round(SUBTOTAL * TAX_RATE);
  const total = SUBTOTAL + tax;

  const handleApplyCoupon = () => {
    if (couponInput.trim()) {
      alert(`Coupon "${couponInput.toUpperCase()}" applied!`);
    }
  };

  return (
    <div className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>

      {/* Plan Price */}
      <div className="order-summary__plan">
        <div className="order-summary__plan-price">
          <span className="order-summary__currency">₹</span>
          <span className="order-summary__amount">4,999</span>
          <span className="order-summary__period">/month</span>
        </div>
        <div className="order-summary__plan-info">
          <span className="order-summary__plan-label">SELECTED PLAN</span>
          <span className="order-summary__plan-name">Startup</span>
        </div>
      </div>
      <p className="order-summary__plan-note">Includes 5,000 credits/mo</p>

      {/* Upgrade CTA */}
      <button className="order-summary__upgrade-btn">
        <ArrowRightIcon />
        Upgrade to Growth Plan
      </button>

      <div className="order-summary__divider" />

      {/* Wallet Balance */}
      <div className="order-summary__wallet">
        <div className="order-summary__wallet-left">
          <WalletIcon />
          <div>
            <p className="order-summary__wallet-title">Wallet Balance</p>
            <p className="order-summary__wallet-sub">₹500.00 available</p>
          </div>
        </div>
        <button
          className={`order-summary__apply-btn ${walletApplied ? 'order-summary__apply-btn--applied' : ''}`}
          onClick={() => setWalletApplied(!walletApplied)}
        >
          {walletApplied ? 'Applied' : 'Apply'}
        </button>
      </div>

      {/* Apply Coupon toggle */}
      <button
        className="order-summary__coupon-toggle"
        onClick={() => setCouponOpen(!couponOpen)}
      >
        <div className="order-summary__coupon-toggle-left">
          <TagIcon />
          <span>Apply Coupon</span>
        </div>
        {couponOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>

      {/* Coupon input */}
      {couponOpen && (
        <div className="order-summary__coupon-section">
          <div className="order-summary__coupon-input-row">
            <input
              type="text"
              value={couponInput}
              onChange={e => setCouponInput(e.target.value)}
              placeholder="Enter coupon code"
              className="order-summary__coupon-input"
              onKeyDown={e => e.key === 'Enter' && handleApplyCoupon()}
            />
            <button
              className="order-summary__apply-btn"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>

          {/* Coupon options */}
          <div className="order-summary__coupon-list">
            {COUPONS.map(coupon => (
              <label key={coupon.code} className="order-summary__coupon-item">
                <div className="order-summary__coupon-item-left">
                  <span className="order-summary__coupon-code">{coupon.code}</span>
                  <span className="order-summary__coupon-desc">{coupon.description}</span>
                </div>
                <div className="order-summary__radio-wrapper">
                  <input
                    type="radio"
                    name="coupon"
                    value={coupon.code}
                    checked={selectedCoupon === coupon.code}
                    onChange={() => setSelectedCoupon(coupon.code)}
                    className="order-summary__radio"
                  />
                  {selectedCoupon === coupon.code && (
                    <span className="order-summary__radio-check"><CheckCircleIcon /></span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="order-summary__divider" />

      {/* Price breakdown */}
      <div className="order-summary__breakdown">
        <div className="order-summary__breakdown-row">
          <span className="order-summary__breakdown-label">Subtotal</span>
          <span className="order-summary__breakdown-value">
            ₹{SUBTOTAL.toLocaleString('en-IN')}.00
          </span>
        </div>
        <div className="order-summary__breakdown-row">
          <span className="order-summary__breakdown-label">Tax (18% GST)</span>
          <span className="order-summary__breakdown-value">
            ₹{tax.toLocaleString('en-IN')}.64
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="order-summary__total-row">
        <span className="order-summary__total-label">Total due today</span>
        <span className="order-summary__total-value">
          ₹{total.toLocaleString('en-IN')}.64
        </span>
      </div>

      {/* Proceed button */}
      <button className="order-summary__proceed-btn">
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
