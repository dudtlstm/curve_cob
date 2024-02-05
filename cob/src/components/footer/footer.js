import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section company">
          <h1>COB</h1>
          <p>© Team. Curve</p>
        </div>
        <div className="link-groups">
          <div className="link-group">
            <p className="link-title">Planner & PM</p>
            <p>000</p>
          </div>
          <div className="link-group">
            <p className="link-title">Planner & Designer</p>
            <p>000</p>
          </div>
          <div className="link-group">
            <p className="link-title">Frontend Developer</p>
            <p>박영신</p>
          </div>
          <div className="link-group">
            <p className="link-title">AI Developer</p>
            <p>윤서현</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
