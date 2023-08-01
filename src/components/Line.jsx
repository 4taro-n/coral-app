import React from 'react';

import './Line.css';

import lineqr from './images/line-qr-kado.png';

function Line() {
    return (
        <div className="line-section">
            {/* <div className="line-container">
                <h2><i class="fab fa-line"></i>LINE連携について</h2>

                <p>LINEから手軽に予約確認・お知らせを確認できます!</p>
                <div className="line-contents">
                    <ul>
                        <li>Point.1 医院から大切なお知らせをお届けします。</li>
                        <li>Point.2 予約日の前日にお知らせいたします。</li>
                    </ul>
                </div>
                <div className="line-links">
                    <a href="https://www.genifix.jp/coral_dent35-caa/line_guide" target="_blank" rel="noopener noreferrer" className="line-btn">
                        <span>
                        友だち登録
                        <i class="fas fa-arrow-right"></i>
                        </span>
                    </a>
                    <a href="https://www.genifix.jp/coral_dent35-caa/line_guide" target="_blank" rel="noopener noreferrer"><img src={lineqr} className="line-qr"/></a>
                </div>
            </div> */}
            <div className="line-container">
                <div className="line-outer">
                    <h2><i class="fab fa-line"></i>LINE連携について</h2>
                    <p>LINEから手軽に予約確認・お知らせを確認できます!</p>
                    <div className="line-contents">
                        <ul>
                            <li>Point.1 医院から大切なお知らせをお届けします。</li>
                            <li>Point.2 予約日の前日にお知らせいたします。</li>
                        </ul>
                    </div>
                    <div className="line-links">
                        <a href="https://www.genifix.jp/coral_dent35-caa/line_guide" target="_blank" rel="noopener noreferrer" className="line-btn">
                            <span>
                            友だち登録
                            <i class="fas fa-arrow-right"></i>
                            </span>
                        </a>
                        <a href="https://www.genifix.jp/coral_dent35-caa/line_guide" target="_blank" rel="noopener noreferrer"><img src={lineqr} className="line-qr"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Line;
