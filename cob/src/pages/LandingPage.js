import React, { useEffect, useState } from "react";
import '../style/LandingPage.css';
import { Link } from 'react-router-dom';

// 사진
import checkImage from '../assets/images/body_image_check.png';
import bellImage from '../assets/images/body_image_bell.png';
import cautionImage from '../assets/images/body_image_caution.png';
import chatImage from '../assets/images/body_image_chat.png';
import ligthbulbImage from '../assets/images/body_image_lightbulb.png';
import noticeImage from '../assets/images/body_image_notice.png';
import characteristicImage from '../assets/images/characteristic.png';
import gotoTopicSelectButton from '../assets/images/gotoTopicSelectButton.png';
import aboutImage from '../assets/images/aboutimage2.png';


export default function LandingPage() {
    
    return(
        <>
        <div className="landing-container-top">
            <h1 className="title">
                나와 커리어를 잇다<br />
                <span className="highlight">커</span>뮤니케이션 <span className="highlight">브</span>릿지
            </h1>
            <h1 className="subtitle">
                우리는 <br />
                <span className="highlight">
                사회생활</span> —————<br />
                <span className="highlight">마스터 메이커<br /></span>
                —————— 입니다
            </h1>
        </div>
        <div className="landing-container-body">

        </div>
        <div className="landing-container-bottom">
            <div className="bottom-text">
                이 외에도<br/>
                커브는,
            </div>
            <div className="bottom-content">
                
            </div>
            <div className="last-text animated-background">
                AI 직장인과의 대화를<br/>
                지금 시작해보세요.
            </div>
            <Link to="/">
            <img 
                src={gotoTopicSelectButton} 
                alt="메인버튼" 
                className="gotoTopicSelectButton"
            />
        </Link>
        </div></>
    );
}