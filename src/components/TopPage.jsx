import React from 'react';

import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';

import './TopPage.css';

function TopPage() {
    return (
        <div className="top-page" id="top-page">
            <div className="top-background"></div>
            <div className="top-contents">
                <h1>MAKING THE <br/> TOWN SMILE</h1>
                <div className="top-contents-p"><p>歯科コーラルクリニックは患者様に寄り添い、十分な説明・痛くない丁寧な診療を心がけています。</p></div>
                <Scroll to='access' className="top-page-link" smooth={true}>
                    <div  className="top-page-btn">
                        <span>
                            アクセス
                            <i class="fas fa-angle-right"></i>
                        </span>
                    </div>
                </Scroll>
            </div>
            <div className="top-side-scroll">
                <span>Scroll Down</span>
            </div>
        </div>
    )
}

export default TopPage;
