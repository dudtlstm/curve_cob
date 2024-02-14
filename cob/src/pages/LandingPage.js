import React, { useEffect, useState } from "react";
import '../style/LandingPage.css';
import { Link } from 'react-router-dom';

// 사진
import checkImage from '../assets/images/body_image_check.png';
import bellImage from '../assets/images/body_image_bell.png';
import cautionImage from '../assets/images/body_image_caution.png';
import chatImage from '../assets/images/body_image_chat.png';
import lightbulbImage from '../assets/images/body_image_lightbulb.png';
import noticeImage from '../assets/images/body_image_notice.png';
import characteristicImage from '../assets/images/characteristic.png';
import gotoTopicSelectButton from '../assets/images/gotoTopicSelectButton.png';


export default function LandingPage() {
    // 이미지와 텍스트를 함께 포함하는 그룹 컴포넌트
    const Group = ({ imgSrc, text }) => (
        <div className="body-section">
            <img src={imgSrc} alt="" className="body-image" />
            {text && <div className="body-text">{text}</div>}
        </div>
    );

    const [animated, setAnimated] = useState({
        text1: false,
        text2: false,
        text3: false,
        text4: false
    });

    useEffect(() => {
        const handleScroll = () => {
            const checkAndAnimateText = (textId) => {
                const element = document.querySelector(`.${textId}`);
                const scrollPosition = window.scrollY + window.innerHeight;
                if (element && scrollPosition > element.offsetTop && !animated[textId]) {
                    element.classList.add('slide-up');
                    setAnimated(prev => ({ ...prev, [textId]: true }));
                }
            };
    
            ['text1', 'text2', 'text3', 'text4'].forEach(checkAndAnimateText);
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [animated]);

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
            <div className="group group1">
                {/* 그룹1 */}
                <Group imgSrc={checkImage}/>
                <Group imgSrc={chatImage}/>
                <Group imgSrc={noticeImage}/>
            </div>
            <div className="group group2">
                {/* 그룹2 */}
                <div className="text1">
                    막상 말하려고만 하면, 입이 떨어지지 않은 당신<br />
                    상사의 기분을 해치진 않을까 고민되지 않으신가요?
                </div>
                <div className="text2">
                    회사 동료에게 내 생각을 오해 없이 효과적으로<br />
                    전달하고 싶으신 적 없으신가요?
                </div>
                <div className="text3">
                    어렵기만 한 사회생활<br />
                    커브에서 미리 연습해보세요!
                </div>
                <div className="text4">
                    사회생활 만렙 찍은 AI 직장인, <br />
                    이 친구에게 직접 배우는 그 비결을 소개합니다.
                </div>
            </div>
            <div className="group group3">
                {/* 그룹3 */}
                <Group imgSrc={lightbulbImage}/>
                <Group imgSrc={bellImage}/>
                <Group imgSrc={cautionImage}/>
            </div>
        </div>
        <div className="landing-container-bottom">
            <div className="bottom group1">

            </div>
            <div className="bottom group2">
                
            </div>
        </div>
        <div className="landing-container-last">
            <div className="bottom-text">
                이 외에도<br/>
                커브는,
            </div>
            <div className="landing-container-body">

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