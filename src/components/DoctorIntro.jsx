import React from 'react';

import doctor from './images/doctor.jpg';
import './DoctorIntro.css';

function DoctorIntro() {
    return (
        <div className="doctor-intro-section">
            <div className="doctor-intro-left-container">
                <div className="doctor-intro-img-box">
                    <div className="doctor-intro-img">
                        <img src={doctor} />
                    </div>
                </div>
                <div className="doctor-intro-container">
                    <div className="doctor-intro-contents">
                        <p>当クリニックでは、患者様一人ひとりに寄り添い、丁寧かつ親身な診療を心がけております。<br />歯のトラブルは生活に多大な影響を与えることから、お口の健康を保つことは全身の健康にもつながります。そのため、患者様とのコミュニケーションを大切にし、お悩みやご要望に真摯にお答えすることを約束します。<br/>
                            当クリニックの使命は、歯の保存を重視し、最新の医療技術と知識を駆使して患者様の健康と笑顔を守ることです。地域医療への貢献を大切に考え、信頼される医療を提供して参ります。<br/>皆様の健康な歯を保つお手伝いができることを心より光栄に思っております。<br/>何かお困りごとやご質問がございましたら、どうぞお気軽にお声がけください。</p>
                        <p class="director-signature">院長　仲宗根　歩</p>
                    </div>
                </div>
            </div>
            <div className="doctor-intro-profile-container">
                <div className="doctor-intro-title">Profile</div>
                <div className="doctor-intro-table">
                    
                    <div className="doctor-intro-first-cell">
                        <div className="doctor-intro-col">名前</div>
                        <div className="doctor-intro-info">
                            <p>仲宗根 歩</p>
                        </div>
                    </div>
                    <div class="doctor-intro-second-cell">
                        <div className="doctor-intro-col">経歴</div>
                        <ul className="doctor-intro-info">
                            <li>朝日大学 歯学部 卒業</li>
                            <li>朝日大学 口腔機能修復学講座 歯科保存学分野 歯内療法学 勤務</li>
                            <li>歯科コーラルクリニック 開院</li>
                        </ul>
                    </div>
                    <div class="doctor-intro-third-cell">
                        <div className="doctor-intro-col">所属</div>
                        <ul className="doctor-intro-info">
                            <li>朝日大学 口腔機能修復学講座 非常勤講師</li>
                            <li>日本歯科保存学会 専門医</li>
                            <li>日本口腔インプラント学会</li>
                            <li>日本歯科医療管理学会</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorIntro;