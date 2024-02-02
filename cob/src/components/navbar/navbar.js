import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/COB_logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <Link to="/about">
                    <img className="logoImage" src={logo} alt="COB Logo"/>
                </Link>
                <div className="links">
                    <Link to="/">주제 선택</Link>
                    <Link to="/simulation">시뮬레이션</Link>
                    <Link to="/solution">솔루션</Link>
                    <Link to="/feedback">피드백</Link>
                    <Link to="/about">서비스 소개</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;