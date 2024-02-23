import React from 'react';
import '../style/SmallTalk.css';


export default function SmallTalk() {
    return(
        <div className="smalltalk-container">
            <div className="smalltalk-top">
                <div className="smalltalk-top-text">
                    '아... 할 말 없는데.. 무슨 대화 하지?'
                    <br/> 고민하지 말고 추천받아 보세요!
                </div>
            </div>

            <div className="smalltalk-body">
                <div className="smalltalk-body-content">
                    <div className="smalltalk-body-box">
                        <div className="box-title">
                            예술 관련 주제
                        </div>
                        <div className="box-content">
                            <div className="content content1">
                                뮤지컬
                            </div>
                            <div className="content content2">
                                음악
                            </div>
                            <div className="content content3">
                                독서
                            </div>
                            <div className="content content4">
                                영화
                            </div>
                            <div className="content content5">
                                전시회
                            </div>
                            <div className="content content6">
                                게임
                            </div>
                        </div>
                    </div>
                    <div className="smalltalk-body-box">
                        <div className="box-title">
                            사회경제 관련 주제
                        </div>
                        <div className="box-content">
                            <div className="content content1">
                                주식
                            </div>
                            <div className="content content2">
                                환경
                            </div>
                            <div className="content content3">
                                세계
                            </div>
                            <div className="content content4">
                                ESG
                            </div>
                            <div className="content content5">
                                CSR
                            </div>
                            <div className="content content6">
                                경제
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
