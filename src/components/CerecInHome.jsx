import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './CerecInHome.css';

function CerecInHome() {
    return (
        <div className="cerec-home-section">
            {/* <h2>CEREC(Ceramic Reconstruction)</h2>
            <p>セレックを用いることによって高精度な治療が可能です。</p>
            <div className="cerec-home-contnainers">
                <div className="cerec-home-comment">銀歯って目立つしすぐ取れる！</div>
                <div className="cerec-home-comment">金属アレルギーの原因は銀歯かも...。</div>
                <div className="cerec-home-comment">同じところがまた虫歯になっちゃった</div>
                <div className="tooth-background">
                    <div className="cerec-home-topic">
                        <h2>みんな一度は感じたことある？</h2>
                        <h2>治療の不満や不安。</h2>
                    </div>
                </div>
                <div className="cerec-home-comment">型取りが苦手で治療が憂鬱</div>
                <div className="cerec-home-comment">白い詰め物も時間が経つと黄色くなる</div>
            </div>
            <Link to="/CerecPage" className="cerec-home-btn">
                <span>
                    詳しくはこちら
                    <i class="fas fa-arrow-right"></i>
                </span>
            </Link> */}
            <div to="/CerecPage" className="cerec-link">
                <div className="cerec-link-contents">
                    <h3>セレック治療</h3> 
                    <div className="cerec-link-text">
                        当医院ではセレックシステムを用いた虫歯治療をご提案しています。
                        <br/>セレック治療とはコンピュータ制御によって自動で歯の被せ物や詰め物を設計・作成することができる最先端のシステムです。
                    </div>
                    <Link to="/CerecPage" className="cerec-home-btn">
                        <span>
                            詳しくはこちら
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CerecInHome;
