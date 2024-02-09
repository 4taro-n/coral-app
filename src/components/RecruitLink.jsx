import React from 'react';

import './RecruitLink.css';

function RecruitLink() {
    return (
        <div className="recruit-link-section">
            <a href="https://www.webqua.jp/ndh/search/109422" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
                <div className="recruit-new-btn">
                    <span>
                        歯科衛生士・新卒
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </a>
            <a href="https://www.webqua.jp/dh/search/109423" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
                <div className="recruit-middle-btn">
                    <span>
                        歯科衛生士・転職
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </a>
            <a href="https://jp.indeed.com/viewjob?cmp=%25E5%258C%25BB%25E7%2599%2582%25E6%25B3%2595%25E4%25BA%25BAEpic&t=歯科助手&jk=2b8db0c4fbd7b26b&xpse=SoDC67I3FbZKsI2cVp0LbzkdCdPP&xkcb=SoCP67M3FbYxrKQJYB0JbzkdCdPP&vjs=3" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
                <div className="recruit-middle-btn">
                    <span>
                        歯科助手
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default RecruitLink;