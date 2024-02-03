import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section company">
          <h1>COB</h1>
          <p>© 성신여자대학교 & 동국대학교 Team. 커브</p>
        </div>
        <div className="link-groups">
          <div className="link-group">
            <p className="link-title">Planner & PM</p>
            <p>안수빈 모민서</p>
          </div>
          <div className="link-group">
            <p className="link-title">Planner & Designer</p>
            <p>백희정</p>
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
