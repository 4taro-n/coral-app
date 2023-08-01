import React from 'react';

import './Access.css';

import GoogleMap from './GoogleMap';

function Access() {
    return (
        <div className="access-section" id="access">
            <div className="access-heading">
                <h1>アクセス</h1>
            </div>
            <div className="access-contents">
                <div className="phone-contents">
                    <i class="fas fa-phone"></i>
                    (058)-329-3456
                </div>
                <div className="phone-contents">
                    <i class="fas fa-map-marker-alt"></i>
                    〒501-0236 岐阜県瑞穂市本田749-1
                </div>

                <ul className="access-options">
                    <li className="access-option">
                        <div className="access-option-pic"><i class="fas fa-parking"></i></div>
                        <div className="access-option-txt"><p>駐車場８台完備</p></div>
                    </li>
                    <li className="access-option">
                        <div className="access-option-pic"><i class="fas fa-car"></i></div>
                        <div className="access-option-txt"><p>JR東海道 「穂積駅」<br/>車で約5分 </p></div>
                    </li>
                    <li className="access-option">
                        <div className="access-option-pic"><i class="fas fa-bus"></i></div>
                        <div className="access-option-txt"><p>本田団地北バス停<br/>徒歩１分</p></div>
                    </li>
                </ul>
                
                <GoogleMap />
                
                <a href="https://www.google.co.jp/maps/place/コーラルクリニック/@35.411014,136.6700993,20.63z/data=!4m5!3m4!1s0x6003adf4ef974279:0x434f072da25cc8f6!8m2!3d35.4094072!4d136.6736578?hl=ja" target="_blank" rel="noopener noreferrer" className="access-googlemap-link">
                    <div className="access-googlemap-btn">
                        <span>
                            Google Mapで詳しく見る
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </a>
                {/* <ul className="access-options">
                    <li className="access-option">
                        <div className="access-option-i">
                            <i class="fas fa-parking"></i>
                        </div>
                        <div className="access-option-text">
                            駐車場８台完備
                        </div>
                    </li>
                    <li className="access-option">
                        <div className="access-option-i">
                            <i class="fas fa-car"></i>
                        </div>
                        <div className="access-option-text">
                            JR東海道　「穂積駅」<br/>車約15分
                        </div>
                    </li>
                    <li className="access-option">
                        <div className="access-option-i">
                            <i class="fas fa-bus-alt"></i>
                        </div>
                        <div className="access-option-text">
                            本田団地バス停<br/>徒歩１分
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Access;
