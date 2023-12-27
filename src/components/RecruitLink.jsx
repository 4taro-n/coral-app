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
            <a href="https://jp.indeed.com/cmp/歯科コーラルクリニック(医療法人-Epic)?from=mobviewjob&tk=1hgmni6ntjqlq800&fromjk=d9de847590eda211&attributionid=mobvjcmp" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
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