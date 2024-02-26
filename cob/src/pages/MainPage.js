import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/MainPage.css';
import box1_image from '../assets/images/mainPage/box1_image.png';
import box2_image from '../assets/images/mainPage/box2_image.png';
import box3_image from '../assets/images/mainPage/box3_image.png';
import box4_image from '../assets/images/mainPage/box4_image.png';
import box5_image from '../assets/images/mainPage/box5_image.png';

export default function MainPage() {

    const navigate = useNavigate();

    const goToDocumentForm = () => {
        navigate('/document-form');
    }

    const goToSolution = () => {
        navigate('/solution');
    };

    const goToLanguageGuide = () => {
        navigate('/language-guide');
    }

    const goToSelectTopic = () => {
        navigate('/select-topic');
    }
    
    const goToSmallTalk = () => {
        navigate('/smalltalk');
    }

    return(
        <div className="main-container">
            <div className="main-top">
                <div className="main-top-text">
                    만렙 직장인이 되는 길을 위한 커브의 모든 서비스들을 이용해 보세요
                </div>
            </div>

            <div className="main-body">
                <div className="main-body-content">
                    <div className="main-body-box box1">
                        <div className="box-left">
                            <div className="main-body-desc" onClick={goToDocumentForm}>
                                내용만 생각하세요,
                                <br/> 양식은 커브가 찾아올게요
                            </div>
                            <div className="main-body-title">
                                문서 양식 찾아보기
                            </div>
                        </div>
                        <div className="box-right">
                            <div className="main-body-image">
                                <img src={box1_image} alt="box1"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-body-box box2" onClick={goToSmallTalk}>
                        <div className="box-left">
                            <div className="main-body-desc">
                                어색한 자리에서,
                                    <br/> 할 말이 없을 때
                            </div>
                            <div className="main-body-title">
                                스몰토크 주제 제안
                            </div>
                        </div>
                        <div className="box-right">
                            <div className="main-body-image">
                                <img src={box2_image} alt="box2"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-body-box box3" onClick={goToSolution}>
                        <div className="box-left">
                            <div className="main-body-desc">
                                긴급 상황 발생!
                                    <br/> 뭐라고 해야 하지?
                            </div>
                            <div className="main-body-title">
                                긴급 상황 솔루션
                            </div>
                        </div>
                        <div className="box-right">
                            <div className="main-body-image">
                                <img src={box3_image} alt="box3"/>
                            </div>
                        </div>
                    </div>
                    <div className="main-body-box box4" onClick={goToLanguageGuide}>
                        <div className="box-left">
                            <div className="main-body-desc">
                                모르는 전문 용어,
                                <br/> 커브에서 바로 검색
                            </div>
                            <div className="main-body-title">
                                직무별 언어 가이드
                            </div>
                        </div>
                        <div className="box-right">
                            <div className="main-body-image">
                                <img src={box4_image} alt="box4"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-body-box box5" onClick={goToSelectTopic}>
                <div className="box-left">
                    <div className="main-body-desc">
                        실제 워킹스페이스처럼
                        <br/> AI와 시뮬레이션으로 대화 연습해보세요
                    </div>
                    <div className="main-body-title">
                        AI와 대화 연습하기
                    </div>
                    </div>
                    <div className="box-right">
                        <div className="main-body-image">
                            <img src={box5_image} alt="box5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}