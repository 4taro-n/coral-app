import React,{useState} from 'react';

import './Facility.css';

function Facility() {

    const [open, setOpen] = useState(false);

    const [isPublished, setIsPublished] = useState('open');

    return (
        <div className="facility-section">
            <div className={open ? 'facility-container active' : 'facility-container'}>
                <h2>施設基準および院内掲示文章</h2>
                <a className="facility-btn" onClick={() => setOpen(!open)}><span>{open ? 'close' : 'open'}<i class="fas fa-arrow-down"></i></span></a>
                <div className="facility-contents">
                    {/* <p>歯科コーラルクリニックでは以下の衛生管理を行い、新型コロナウイルスへの対策を行っています。皆様にご協力いただく点もございますが何卒ご理解いただきますようお願いします。</p> */}
                    <ul className="facility-contents-listbox">
                        <li type="1">
                            <p>医療DX 第936号</p>
                            <p>医療DX推進体制整備加算</p>
                        </li>
                        <li type="1">
                            <p>歯初診 第1032号</p>
                            <p>初診料（歯科）の注1に掲げる基準</p>
                        </li>
                        <li type="1">
                            <p>外安全1 第697号</p>
                            <p>かかりつけ歯科医料強化型歯科診療所</p>
                        </li>
                        <li type="1">
                            <p>外感染1 第697号</p>
                            <p>かかりつけ歯科医料強化型歯科診療所</p>
                        </li>
                        <li type="1">
                            <p>医管 第885号</p>
                            <p>歯科疾患料の注11に掲げる総合医療加算及び歯科治療時医療管理料</p>
                        </li>
                        <li type="1">
                            <p>口管強 第292号</p>
                            <p>小児口腔機能管理料の注3に規定知る口腔管理体制強化加算</p>
                        </li>
                        <li type="1">
                            <p>歯援診2 第342号</p>
                            <p>在宅療養歯科診療所2</p>
                        </li>
                        <li type="1">
                            <p>在宅DX 第104号</p>
                            <p>在宅患者訪問診療料（I）の注13及び歯科訪問診療所の注20に規定する在宅医療DX情報活用加算</p>
                        </li>
                        <li type="1">
                            <p>歯技連1 第105号</p>
                            <p>歯科技工士連携加算1及び光学印象歯科技工士連携加算</p>
                        </li>
                        <li type="1">
                            <p>歯技連2 第106号</p>
                            <p>歯科技工士連携加算2</p>
                        </li>
                        <li type="1">
                            <p>光印象 第133号</p>
                            <p>光学印象</p>
                        </li>
                        <li type="1">
                            <p>歯CAD 第840号</p>
                            <p>CAB/CAM冠</p>
                        </li>
                        <li type="1">
                            <p>補管 第1660号</p>
                            <p>クラウン・ブリッジ維持管理料</p>
                        </li>
                        <li type="1">
                            <p>歯外住ベ1 筋429号</p>
                            <p>歯科外来・在宅ベースアップ評価論（I）</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Facility;
