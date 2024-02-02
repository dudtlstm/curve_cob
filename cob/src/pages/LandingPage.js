import React from "react";
import '../style/LandingPage.css';

// 사진
import checkImage from '../assets/images/body_image_check.png';
import bellImage from '../assets/images/body_image_bell.png';
import cautionImage from '../assets/images/body_image_caution.png';
import chatImage from '../assets/images/body_image_chat.png';
import ligthbulbImage from '../assets/images/body_image_lightbulb.png';
import noticeImage from '../assets/images/body_image_notice.png';

export default function LandingPage() {
    return(
        <><div className="landing-container-top">
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
            <div className="body-section">
                <img src={checkImage} alt="체크" className="body-image-check"/>
                <div className="body-text">
                    막상 말하려고만 하면, 입이 떨어지지 않는 당신<br/>
                    상사의 기분을 해치진 않을까 고민되지 않으신가요?
                </div>
            </div>
            <div className="body-image-2">
                <img src={bellImage} alt="벨" className="body-image-bell"/>
            </div>
                <div className="body-text">
                    회사 동료에게 내 생각을 오해 없이 효과적으로<br/>
                    전달하고 싶으신 적 없으신가요?
                </div>
                <div className="body-text">
                    어렵기만 한 사회생활<br/>
                    커브에서 미리 연습해보세요!
                </div>
                <div className="body-text">
                    사회생활 만렙 찍은 AI 직장인,<br/>
                    이 친구에게 직접 배우는 그 비결을 소개합니다.
                </div>
        </div></>
    );
}