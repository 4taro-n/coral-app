import React,{useState} from 'react';

import './Covid.css';

function Covid() {

    const [open, setOpen] = useState(false);

    const [isPublished, setIsPublished] = useState('open');

    return (
        <div className="covid-section">
            <div className={open ? 'covid-container active' : 'covid-container'}>
                <h2>新型コロナウイルス対策について</h2>
                <button className="covid-btn" onClick={() => setOpen(!open)}><span>{open ? 'close' : 'open'}<i class="fas fa-arrow-down"></i></span></button>
                <div className="covid-contents">
                    <p>歯科コーラルクリニックでは以下の衛生管理を行い、新型コロナウイルスへの対策を行っています。皆様にご協力いただく点もございますが何卒ご理解いただきますようお願いします。</p>
                    <ul className="covid-contents-listbox">
                        <li>受付時に検温、手指消毒のご協力をお願いしています。</li>
                        <li>院内は24時間換気システムを導入しています。</li>
                        <li>スタッフのマスク、グローブ、フェイスシールドの着用を徹底しています。</li>
                        <li>患者様ごとに新しいグローブ、エプロン、コップを使用し廃棄しています。</li>
                        <li>ドリル等のハンドピースを含めた治療器具は、患者様ごとに交換、オートクレーブによる滅菌を行っています。</li>
                        <li>室外廃棄型の口腔外バキューム（東京技研）を全ユニットに導入し、院内を清潔に保っています。
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Covid;
