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
        </div>
    )
}

export default RecruitLink;