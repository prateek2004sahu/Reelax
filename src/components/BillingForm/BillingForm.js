import React, { useState } from 'react';
import './BillingForm.css';

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const INDIAN_CITIES = [
  'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Hyderabad',
  'Jaipur', 'Kolkata', 'Mumbai', 'Pune', 'Surat'
];

const BillingForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    gstNumber: '',
    panNumber: '',
    premises: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Details saved successfully!');
  };

  const handleCancel = () => {
    setFormData({
      companyName: '', email: '', gstNumber: '', panNumber: '',
      premises: '', street: '', state: '', city: '', country: 'India', pinCode: '',
    });
  };

  return (
    <div className="billing-form">
      <h1 className="billing-form__title">Review your details</h1>

      <section className="billing-form__section">
        <h2 className="billing-form__section-title">Billing Information</h2>

        <form className="billing-form__form" onSubmit={handleSave}>

          {/* Row 1: Company Name + Email */}
          <div className="billing-form__row">
            <div className="billing-form__field">
              <label className="billing-form__label">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="altriqon"
                className="billing-form__input"
              />
            </div>
            <div className="billing-form__field">
              <label className="billing-form__label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johnjoe.dummy@gtrlease.com"
                className="billing-form__input"
              />
            </div>
          </div>

          {/* Row 2: GST + PAN */}
          <div className="billing-form__row">
            <div className="billing-form__field">
              <label className="billing-form__label">
                GST Number <span className="billing-form__optional">(Optional)</span>
              </label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                placeholder="GST Number"
                className="billing-form__input"
              />
            </div>
            <div className="billing-form__field">
              <label className="billing-form__label">
                PAN Number <span className="billing-form__optional">(Optional)</span>
              </label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="Pan Number"
                className="billing-form__input"
              />
            </div>
          </div>

          {/* Row 3: Premises + Street */}
          <div className="billing-form__row">
            <div className="billing-form__field">
              <label className="billing-form__label">Premises/House no.</label>
              <input
                type="text"
                name="premises"
                value={formData.premises}
                onChange={handleChange}
                placeholder="Premises/House no."
                className="billing-form__input"
              />
            </div>
            <div className="billing-form__field">
              <label className="billing-form__label">Street</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street"
                className="billing-form__input"
              />
            </div>
          </div>

          {/* Row 4: State + City */}
          <div className="billing-form__row">
            <div className="billing-form__field">
              <label className="billing-form__label">State</label>
              <div className="billing-form__select-wrapper">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="billing-form__select"
                >
                  <option value="">Select state</option>
                  {INDIAN_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <span className="billing-form__select-icon"><ChevronDown /></span>
              </div>
            </div>
            <div className="billing-form__field">
              <label className="billing-form__label">City</label>
              <div className="billing-form__select-wrapper">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="billing-form__select"
                >
                  <option value="">Select city</option>
                  {INDIAN_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <span className="billing-form__select-icon"><ChevronDown /></span>
              </div>
            </div>
          </div>

          {/* Row 5: Country + Pin Code */}
          <div className="billing-form__row">
            <div className="billing-form__field">
              <label className="billing-form__label">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                className="billing-form__input billing-form__input--readonly"
                readOnly
              />
            </div>
            <div className="billing-form__field">
              <label className="billing-form__label">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pincode"
                className="billing-form__input"
                maxLength={6}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="billing-form__actions">
            <button
              type="button"
              className="billing-form__btn billing-form__btn--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="billing-form__btn billing-form__btn--save"
            >
              Save Details
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};

export default BillingForm;
