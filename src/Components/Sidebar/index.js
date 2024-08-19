import React from 'react';
import './index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Ditch Dollar</div>
      <nav className="sidebar-nav">
        <a href="#" className="nav-item">Dashboard</a>
        <a href="#" className="nav-item">CRM</a>
        <a href="#" className="nav-item">MAM</a>
        <a href="#" className="nav-item">PAMM</a>
        <a href="#" className="nav-item">Trade</a>
        <a href="#" className="nav-item">Wallet</a>
        <a href="#" className="nav-item">Accounts</a>
        <a href="#" className="nav-item">History</a>
      </nav>
      <div className="sidebar-footer">
        <div className="footer-user">Shyam Shakur</div>
        <div className="footer-email">shyam01.shankur@mail.com</div>
      </div>
    </div>
  );
};

export default Sidebar;
