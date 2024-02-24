import React, { useState } from 'react';
import '../style/SmallTalk.css';


export default function SmallTalk() {

    const [selectedContent, setSelectedContent] = useState(null);

    const handleContentClick = (contentId) => {
        setSelectedContent(contentId);
    };

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
                            {['뮤지컬', '음악', '독서', '영화', '전시회', '게임'].map((item, index) => (
                                <div
                                    key={index}
                                    className="content"
                                    style={{
                                        backgroundColor: selectedContent === item ? '#6D32DB' : '#BE9BFF',
                                    }}
                                    onClick={() => handleContentClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="smalltalk-body-box">
                        <div className="box-title">
                            사회경제 관련 주제
                        </div>
                        <div className="box-content">
                            {['주식', '환경', '세계', 'ESG', 'CSR', '경제'].map((item, index) => (
                                <div
                                    key={index}
                                    className="content"
                                    style={{
                                        backgroundColor: selectedContent === item ? '#6D32DB' : '#BE9BFF',
                                    }}
                                    onClick={() => handleContentClick(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
