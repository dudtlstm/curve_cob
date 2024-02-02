import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/COB_logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <Link to="/">
                    <img className="logoImage" src={logo} alt="COB Logo"/>
                </Link>
                <div className="links">
                    <Link to="/about">서비스 소개</Link>
                    <Link to="/personal">개인 구매</Link>
                    <Link to="/corporate">기업 구매</Link>
                    <Link to="/faq">고객 지원</Link>
                    <Link to="/contact">회사 소개</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;