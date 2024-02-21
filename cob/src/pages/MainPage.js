import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/MainPage.css';

export default function MainPage() {

    const navigate = useNavigate();

    const goToSolution = () => {
        navigate('/solution');
    };

    const goToSimulation = () => {
        navigate('/simulation');
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
                            <div className="main-body-desc">
                                내용만 생각하세요,
                                <br/> 양식은 커브가 찾아올게요
                            </div>
                            <div className="main-body-title">
                                문서 양식 찾아보기
                            </div>
                        </div>
                        <div className="box-right">
                            <div className="main-body-image">

                            </div>
                        </div>
                    </div>
                    <div className="main-body-box box2">
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

                            </div>
                        </div>
                    </div>
                    <div className="main-body-box box4">
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

                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-body-box box5" onClick={goToSimulation}>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}