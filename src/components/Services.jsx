import React from 'react';

import './Services.css';

function Services() {
    return (
        <div className="services-section">
            <div className="services-card">
                <div className="services-pic">
                    <div className="services-pic-left">
                        <p>一般歯科</p>
                    </div>
                    <div className="services-pic-right">
                        <i class="fas fa-tooth"></i>
                    </div>
                </div>
                <div className="services-text">
                    <ul>
                        <li>□虫歯治療・歯根の治療・被せ物などの治療<span>	患者様がご自身の派手快適に過ごせるよう、できる限り「歯を削らない」「神経を取らない」「歯を抜かない」という方針で治療を進めていきます。日本歯科保存学会専門医として専門的な治療を行っております。</span></li>
                        <li>□入れ歯<span>入れ歯は設計と材料で大きく差が出ます。 気持ち悪い、痛い、よく噛めない、話しにくい、バネが見える等、入れ歯でお困りの方はご相談ください。</span></li>
                    </ul>
                </div>
            </div>

            <div className="services-card">
                <div className="services-pic">
                    <div className="services-pic-left">
                        <p>小児歯科・一般矯正</p>
                    </div>
                    <div className="services-pic-right">
                        <i class="far fa-grimace"></i>
                    </div>
                </div>
                <div className="services-text">
                    <div>
                        一般診療に加え、フッ素塗布・シーラント・歯磨き指導などの予防処置に力を入れております。また予防のための矯正治療も行っています。乳歯から永久歯へ生え変わるときに、簡単な装置をつけて歯並びの修正を行います。正しい歯列になれば、将来的にむし歯にもなりにくくなります。
                    </div>
                </div>
            </div>

            <div className="services-card">
                <div className="services-pic">
                    <div className="services-pic-left">
                        <p>ホワイトニング</p>
                    </div>
                    <div className="services-pic-right">
                        <i class="fas fa-magic"></i>
                    </div>
                </div>
                <div className="services-text">
                    <div>
                    光の照射やホワイトニング剤を使用して白く自然な色にします。当院で行うオフィスホワイトニングと自宅で行うホームホワイトニングの2種類の方法がございます。
                    ご興味のある方はスタッフまでご相談下さい。
                    </div>
                </div>
            </div>

            <div className="services-card">
                <div className="services-pic">
                    <div className="services-pic-left">
                        <p>インプラント</p>
                    </div>
                    <div className="services-pic-right">
                        <i class="fas fa-teeth"></i>
                    </div>
                </div>
                <div className="services-text">
                    <div>
                        インプラントとは、歯を失ってしまった部分に人工の歯根を埋め込み、隣の歯に全く負担をかけずにご自分の歯と同じように噛む事の出来る治療法です。高い専門性をもった歯科医師の治療により安全で確実な治療を受けていただけます。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
