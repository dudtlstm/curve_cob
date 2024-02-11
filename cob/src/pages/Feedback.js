import React from 'react';
import '../style/Feedback.css';

import profileImage from "../assets/images/profile-image.png";

export default function Feedback() {
    return (
        <div className="feedback-container">
            <div className="left-container">
                <div className="profile-section">
                    <img src={profileImage} alt="프로필 이미지" className="profile-image" />
                    <h1>이지혜님</h1>
                    <div className="info">
                        <div className="info-item"><span>직급/직책</span>서비스 기획자</div>
                        <div className="info-item"><span>나이</span>24세</div>
                        <div className="info-item"><span>주거지</span>서울시 영등포구</div>
                        <div className="info-item"><span>취미</span>영화, 여행</div>
                        <div className="info-item"><span>MBTI</span>ISTJ</div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="evaluation">
                    <div className="evaluation-title">종합평가</div>
                    <div className="grade">A</div>
                    <div className="score">우수</div>
                    <div className="details">85점</div>
                    <div className="rank">33등/429명 (상위 8%)</div>
                </div>
                <div className="abilities">
                    <div className="ability-title">대화 능력</div>
                        <div className="ability-item">
                            <div className="ability-subtitle">1st</div>
                            <div className="ability-name">설득력</div>
                            <div className="ability-bar"></div>
                        </div>
                        <div className="ability-item">
                            <div className="ability-subtitle">2nd</div>
                            <div className="ability-name">논리력</div>
                            <div className="ability-bar"></div>
                        </div>
                        <div className="ability-item">
                            <div className="ability-subtitle">3nd</div>
                            <div className="ability-name">사고력</div>
                            <div className="ability-bar"></div>
                        </div>
                </div>
                <div className="reliability">
                    <div className="reliability-title">신뢰도</div>
                    <div className="reliability-content">업무분담 관련 대화를 매우 우수하게 완료하였으며, 분석 결과 해당 주제 대화 능력이 우수한 것으로 판단됩니다.</div>
                </div>
                <div className="keywords">
                    <div className="keywords-title">사용자 키워드</div>
                    <div className="keywords-list">
                        <span className="keyword">#관찰력이 높은</span>
                        <span className="keyword">#친화력</span>
                        <span className="keyword">#견실한</span>
                        <span className="keyword">#설득력 있는</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
