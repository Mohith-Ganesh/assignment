import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Dashboard</div>
      <div className="header-actions">
        <input
          type="text"
          placeholder="Search..."
          className="header-search"
        />
        <div className="header-notification">🔔</div>
      </div>
    </header>
  );
};

export default Header;
