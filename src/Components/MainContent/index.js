import React from 'react';
import './index.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="content-grid">
        <div className="content-left">
          <div className="quick-links">
            <h3 className="section-title">Quick Links</h3>
            <div className="links-grid">
              {[{src: "https://res.cloudinary.com/dttnhad6r/image/upload/v1724047133/Untitled_fvzcxf.png", name: 'Deposit'}, {src: "https://res.cloudinary.com/dttnhad6r/image/upload/v1724048728/Untitled_o6p7ye.png", name:'Withdraw'}, {src: "https://res.cloudinary.com/dttnhad6r/image/upload/v1724049105/Untitled_d2l8yb.png", name:'Settings'}, {src: "https://res.cloudinary.com/dttnhad6r/image/upload/v1724049147/Untitled_krddla.png", name:'Verification'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049178/Untitled_mq7k7a.png", name:'Bonuses'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049211/Untitled_i2vugu.png", name:'MT5'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049245/Untitled_auk3iv.png", name:'Transfer'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049277/Untitled_xbapiv.png", name:'History'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049307/Untitled_banc64.png", name:'Partner'}, {src:"https://res.cloudinary.com/dttnhad6r/image/upload/v1724049338/Untitled_trmkxr.png", name:'Exchange'}, {src: "https://res.cloudinary.com/dttnhad6r/image/upload/v1724049372/Untitled_fvfatb.png", name:'Analytics'}].map(link => (
                <div style={{padding: '20px'}}>
                <img src={link.src} alt="logo" style={{marginLeft: '30px', height:'30px'}}/>
                <button key={link} className="quick-link-item">
                  {link.name}
                </button>
                </div>
              ))}
            </div>
          </div>

          <div className="overview-section">
            <div className="overview-header">
              <h3 className="section-title">Overview</h3>
              <button className="download-report">Download Report</button>
            </div>
            <div className="overview-toggle">
              <button className="toggle-active">Monthly</button>
              <button className="toggle-inactive">Yearly</button>
            </div>
            <div className="chart-placeholder">
              {/* Replace with actual chart */}
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="trading-accounts">
            <h3 className="section-title">Trading Accounts</h3>
            <div className="accounts-list">
              <div className="account-item">
                <div className="account-type">Master Account</div>
                <div className="account-balance">0.00 USD</div>
              </div>
              <div className="account-item">
                <div className="account-type">Master Account</div>
                <div className="account-balance">0.00 USD</div>
              </div>
            </div>
          </div>

          <div className="open-trades">
            <h3 className="section-title">Open Trades</h3>
            <div className="trades-list">
              <div className="trade-item">
                <div className="trade-pair">GBPUSD</div>
                <div className="trade-profit text-green">+56.00 USD</div>
              </div>
              <div className="trade-item">
                <div className="trade-pair">USDJPY</div>
                <div className="trade-loss text-red">-0.09 USD</div>
              </div>
              <div className="trade-item">
                <div className="trade-pair">EURUSD</div>
                <div className="trade-loss text-red">-1.09 USD</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
