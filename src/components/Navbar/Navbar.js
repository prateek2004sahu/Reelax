import React from 'react';
import './Navbar.css';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__search-wrapper">
        <div className="navbar__search">
          <SearchIcon />
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Find influencers to collaborate with"
          />
        </div>
      </div>

      <div className="navbar__actions">
        <button className="navbar__btn navbar__btn--outline">
          AI Assist
        </button>
        <button className="navbar__btn navbar__btn--primary">
          <PlusIcon />
          Create Campaign
        </button>
        <button className="navbar__icon-btn">
          <GridIcon />
        </button>
        <button className="navbar__icon-btn">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
