import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/Simulation.css';

import tutorImage from '../assets/images/tutorImage.png';

export default function Simulation() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const chatContainerRef = useRef(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') {
            setMessages(messages => [...messages, { text: inputMessage, sender: 'right', id: Date.now() }]);
            setInputMessage('');

            // 새 메시지가 추가되고, 화면 업데이트가 된 후에 스크롤을 맨 아래로 이동시킵니다.
            setTimeout(() => {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }, 0);
        }
    };

    return (
        <div className="simulation-container">
            {/* <div className="simulation-header">
                <Link to="/somewhere" className="back-button">←</Link>
                <span>COB</span>
            </div> */}
            <form className="simulation-form">
                <div className="form-section">
                    <label htmlFor="userType">대화 대상 :</label><br/>
                    <select class="selects" id="userType">
                        <option value="customer">상사</option>
                        <option value="colleague">동료</option>
                        <option value="employee">거래처 직원</option>
                    </select>
                </div>
                <div className="form-section">
                    <label htmlFor="scenario">시나리오 :</label><br/>
                    <select class="selects" id="svenario">
                        <option value="businesstrip-report">출장 보고</option>
                        <option value="modify">수정 요청</option>
                        <option value="mistake-report">실수 보고</option>
                        <option value="work-sharing">업무 분담 요청</option>
                        <option value="reject">요청 거절</option>
                        <option value="question">업무 질문</option>
                    </select>
                </div>
                <div className="form-section">
                    <label htmlFor="method">반응 방식 :</label><br/>
                    <select class="selects" id="method">
                        <option value="favorable">호의적인 자세</option>
                        <option value="stiff">완강한 자세</option>
                        <option value="negative">부정적인 자세</option>
                        <option value="gentle">온화한 자세</option>
                    </select>
                </div>
            </form>
            
            <div className="simulation-chat" ref={chatContainerRef}>
                <div className="tutor-container">
                    <img src={tutorImage} alt="AI Coach" className="tutorImage" />
                    <span className="ai-coach-text">AI COACH</span>
                </div>
                <div className="chat-message-container">
                    <div className="chat-message-left">
                        <p>좋은 아침이에요, 지혜씨!</p>
                    </div>
                    <div className="chat-message-left">
                        <p>업무 분담 관련해서 하실 이야기 있다고 들었어요.</p>
                    </div>
                    <div className="chat-message-right">
                        <p>안녕하세요 팀장님!</p>
                    </div>
                    <div className="chat-message-right">
                        <p>저번에 맡겨주신 코코주식회사가 기획서 작성과 관련해서 의견 여쭙고 싶은 게 있어요.</p>
                    </div>
                    {messages.map(message => (
                        <div key={message.id} className={`chat-message-${message.sender} chat-message-enter`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
                    <form className="chat-input-form" onSubmit={handleSendMessage}>
                        <input 
                        type="text" 
                        placeholder="적절한 답변을 입력해보세요"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)} 
                        />
                        <button type="submit" className="send-button">입력</button>
                    </form>
            </div>
        </div>
    )
}
