import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modal/modal';
import '../style/TopicSelect.css';

import icon1 from '../assets/images/title_choose_icon1.png';
import icon2 from '../assets/images/title_choose_icon2.png';
import icon3 from '../assets/images/title_choose_icon3.png';
import icon4 from '../assets/images/title_choose_icon4.png';
import icon5 from '../assets/images/title_choose_icon5.png';
import icon6 from '../assets/images/title_choose_icon6.png';

import simulationImage from '../assets/images/simulationButton2.png';

// 이미지 경로 배열 정의
const icons = [
    { src: icon1, alt: '출장 보고', id: 'businesstrip-report'},
    { src: icon2, alt: '수정 요청', id: 'modify'},
    { src: icon3, alt: '실수 보고', id: 'mistake-report'},
    { src: icon4, alt: '업무 분담 요청', id: 'work-sharing'},
    { src: icon5, alt: '요청 거절', id: 'reject'},
    { src: icon6, alt: '업무 질문', id: 'question'},
]

export default function TopicSelect() {
    const [selected, setSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const navigate = useNavigate();

    const handleBoxClick = (id) => {
        if (selected === id) {
            setSelected(null);
        } else {
            setSelected(id);
        }
    };

    const navigateToSimulation = () => {
        if(selected) {
            navigate('/simulation');
        } else {
            setIsModalOpen(true); // 모달 열기
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <>
        <div className="title-choose-title">
            내가 원하는 상황을 직접 선택해서<br/>
            직장상사 혹은 동료가 된 AI와 대화연습을 해보세요!
        </div>
        <div className="body">
            {icons.map((icon) => (
            <div 
                className={`body-box ${selected === icon.id ? "" : "unselected"}`}
                onClick={() => handleBoxClick(icon.id)}
                key={icon.id}
            >
                <img src={icon.src} alt={icon.alt} className="body-icon"/>
                {icon.alt}
            </div>
            ))}
        </div>
            <div 
                className={`simulationButton ${selected ? "selected" : ""}`}
                onClick={navigateToSimulation}
            >
                <span className="simulationButtonText">대화 연습하러 가기</span>
                <img src={simulationImage} alt="시뮬레이션 버튼" className="simulationImage" />

                <Modal isOpen={isModalOpen} close={closeModal}>
                    원하는 대화 주제를 선택해주세요!
                </Modal>
            </div>
        </>
    );
    }