import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <CheckoutPage />
      </main>
    </div>
  );
}

export default App;
