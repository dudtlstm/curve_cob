import React, { useState } from 'react';
import '../style/DocumentForm.css';


export default function DocumentForm() {

    const [selectedBox, setSelectedBox] = useState(null);

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

    const titles = [
        ['설날 안내문', '확인 및 다운로드'],
        ['인사부원을 위한', '인사관련 필수 문서'],
        ['신규 채용', '근로 계약서 확인']
    ];

    return(
        <div className="document-container">
            <div className="document-top">
                <div className="document-top-text">
                    문서를 어떻게 작성해야 할지 모르겠다면,
                    <br /> 바로 찾아보세요!
                </div>

                <div className="document-search-container">
                    <input
                        type="text"
                        placeholder="원하는 문서 양식을 검색해주세요."
                        className="document-search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleSearch} className="document-search-button">
                        검색
                    </button>
                </div>
            </div>

            <div className="document-body">
            {renderSearchResult()}
                <div className="document-body-content">
                    {titles.map((titleLines, index) => (
                        <div 
                            key={index} 
                            className={`document-body-box ${selectedBox === index ? 'selected' : ''}`} 
                            onClick={() => setSelectedBox(index)}
                        >
                            <div className="document-title">
                                {titleLines.map((line, lineIndex) => (
                                    <React.Fragment key={lineIndex}>
                                        {line}{lineIndex < titleLines.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
