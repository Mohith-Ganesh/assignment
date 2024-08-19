import React from 'react';
import './index.css';
import Sidebar from '../Sidebar';
import Header from '../Header';
import MainContent from '../MainContent';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
