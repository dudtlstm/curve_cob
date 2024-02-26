import React, { useState } from 'react';
import '../style/LanguageGuide.css';


export default function LanguageGuide() {
    // 검색어 상태
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    const handleSearch = () => {
        setSearchResult(`'${searchTerm}'에 대한 검색 결과가 없습니다.`);
    };

    const renderSearchResult = () => {
        if (searchResult) {
            return <div className="search-result">{searchResult}</div>;
        }
        return null;
    };

    return(
        <div className="guide-container">
            <div className="guide-top">
                <div className="guide-top-text">
                    일하고 있는데 처음 듣는 단어,
                    <br /> 바로 찾아보세요!
                </div>

                <div className="guide-search-container">
                    <input
                        type="text"
                        placeholder="단어를 입력해주세요."
                        className="guide-search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearch} className="guide-search-button">
                        검색
                    </button>
                </div>
            </div>
            <div className="guide-body">
                
            </div>
        </div>
    )
}