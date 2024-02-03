import React, { useState, useRef, useEffect } from 'react';
import '../style/Solution.css';

import solutiontutorImage from '../assets/images/tutorImage.png';

export default function Solution() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const chatContainerRef = useRef(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            setMessages(messages => [...messages, { text: inputMessage, sender: 'right', id: Date.now() }]);
            setInputMessage('');
        }
    };

    useEffect(() => {
        // 새 메시지가 추가될 때 전체 페이지의 스크롤을 맨 아래로 이동
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
        });
    }, [messages]);

    return (            
            <div className="solution-chat">
                <div className="solution-tutor-container">
                    <img src={solutiontutorImage} alt="AI Coach" className="solutiontutorImage" />
                    <span className="ai-coach-text">AI COACH</span>
                </div>
                <div className="solution-message-container" ref={chatContainerRef}>
                    <div className="solution-message-right">
                        <p>“과장님이 나한테 20년도 서류 처리를 부탁하셨는데 나는 21년 입사라 관련 내용을 몰라. 거절하면 혹시라도 무책임해 보일까 봐 걱정되는데, 어떻게 말씀드리는 게 좋을까?”</p>
                    </div>
                    <div className="solution-message-left">
                        <p>이 상황에서는 솔직하고 정직한 태도를 취하는 것이 중요해. 과장님께 먼저 상황을 설명드리고 진실성과 전문성을 강조하며, 적절한 도움을 요청해봐</p>
                    </div>
                    <div className="solution-message-left">
                        <p>"과장님, 제게 20년도 서류 처리를 부탁해 주셔서 감사합니다. 저는 항상 최신 정보와 정확한 자료에 기반해 업무를 진행하고자 노력합니다. 다만, 제가 21년에 입사했기 때문에 20년도 서류 처리에 대해 정확한 정보를 갖고 있지 않습니다. 관련 부서나 담당자에게 문의하여 필요한 정보를 수집해 작성하도록 노력하겠습니다."</p>
                    </div>
                    {messages.map(message => (
                        <div key={message.id} className={`solution-message-${message.sender}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
                <form className="solution-input-form" onSubmit={handleSendMessage}>
                    <input 
                    type="text" 
                    placeholder="궁금한 점을 입력해보세요"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)} 
                    />
                    <button type="submit" className="solution-send-button">입력</button>
                </form>
            </div>
    );
}

