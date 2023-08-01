import React,{useState} from 'react';

import './Cerec.css';
import cerecFirst from './images/cerec_first.jpg';
import cerecSecond from './images/cerec_second.jpg';
import cerecThird from './images/cerec_third.jpg';


function Cerec() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    // const [isPublished, setIsPublished] = useState('open');

    return (
        <div className="cerec-section">
            <p>当医院ではセレックシステムを用いた虫歯治療をご提案しています。</p>
            <h2>健康な歯を守る、セレック治療の４つのメリット。</h2>
            <div className="cerec-points">
                <div className="cerec-point">
                    <div className='cerec-point-num'>
                        <p>point</p>
                        <p>01</p>
                    </div>
                    <div className='cerec-point-contents'>
                        <div>
                            <h3>虫歯になりにくい</h3>
                            <h3>汚れがつきにくい</h3>
                        </div>
                        <p>セラミックは、保険適応の素材に比べ汚れを寄せ付けにくく、歯にしっかり固定できるため隙間を作らず虫歯にあるリスクが低く抑えられます。</p>
                    </div> 
                </div>
                <div className="cerec-point">
                    <div className='cerec-point-num'>
                        <p>point</p>
                        <p>02</p>
                    </div>
                    <div className='cerec-point-contents'>
                        <h3>カラダにやさしい</h3>
                        <p>セラミックは天然歯に近い素材のため、変色や摩耗がおきにくいという特徴がある</p>
                    </div> 
                </div>
                <div className="cerec-point">
                    <div className='cerec-point-num'>
                        <p>point</p>
                        <p>03</p>
                    </div>
                    <div className='cerec-point-contents'>
                        <h3>審美的質感</h3>
                        <p>セラミックブロックは天然歯によくなじむ色や質感のため見た目も綺麗で自然な感触です。</p>
                    </div> 
                </div>
                <div className="cerec-point">
                    <div className='cerec-point-num'>
                        <p>point</p>
                        <p>04</p>
                    </div>
                    <div className='cerec-point-contents'>
                        <h3>精度の高い修復物</h3>
                        <p>先進のコンピューターシステムを使用し修復物を作成するため、これまでの手作業に比べ常に均一の品質が保たれる</p>
                    </div> 
                </div>
            </div>
            <h2>セレック治療の流れ</h2>
            <div className="cerec-flow-container">
                <div className="cerec-flow">
                    <div className="cerec-contents">
                        <div className="cerec-flow-pic">
                            <h3>Step1</h3>
                            <img src={cerecFirst} />
                        </div>
                        <div className="cerec-flow-para">
                            <h3>スキャン（型取り）</h3>
                            <p>3Dカメラで簡単撮影。わずかな時間でモニターに再現され、お口の中に不快な素材を入れる必要がありません。</p>                    
                        </div>    
                    </div>
                    <i class="fas fa-caret-down" />
                    <div className="cerec-contents">
                        <div className="cerec-flow-pic">
                            <h3>Step2</h3>
                            <img src={cerecSecond} />
                        </div>
                        <div className="cerec-flow-para">
                            <h3>修復物設計</h3>
                            <p>コンピューターの3D画面上で修復物を設計します。</p>
                        </div>
                    </div>
                    <i class="fas fa-caret-down" />
                    <div className="cerec-contents">
                        <div className="cerec-flow-pic">
                            <h3>Step3</h3>
                            <img src={cerecThird} />
                        </div>
                        <div className="cerec-flow-para">
                            <h3>修復物制作</h3>
                            <p>設計データを元に、加工機で修復物を削り出します。出来上がった修復物をお口にセットして治療完了です。</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>よくあるご質問</h2>
            <div className="cerec-qa-container">
                <div className={open1 ? 'cerec-qa active' : 'cerec-qa'}>
                    <button 
                    className='cerec-qa-btn'
                    onClick={() => setOpen1(!open1)}
                    ><i class="fab fa-quora" />どんな症状でもセレック治療は可能ですか？<i class="fas fa-chevron-down" /></button>
                    <div className="cerec-qa-contents">
                        A. 一般的な詰め物・被せものといった治療はもちろんのこと、前歯に貼り付けるラミネートベニア治療も可能です。歯を削る量を抑えて審美的な仕上がりを得られます。虫歯の大きさや噛み合わせの関係など、お口の中の状態より適切な治療法を検討しますので、詳しくは医院スタッフまでご相談ください。
                    </div>
                </div>
                <div className={open2 ? 'cerec-qa active' : 'cerec-qa'}>
                    <button 
                    className='cerec-qa-btn'
                    onClick={() => setOpen2(!open2)}
                    ><i class="fab fa-quora" />本当に通院１日・最短１時間で治療が可能ですか？<i class="fas fa-chevron-down" /></button>
                    <div className="cerec-qa-contents">
                        A. 虫歯の大きさ・歯茎・神経などの症状により、他の治療法を優先して行う必要がある場合には、当日のセレック治療ができないことがあります。また、セレック治療がで複雑で複数かに渡る場合や、特殊な色付け加工が必要な場合には、１時間以内の治療ができないこともあります。
                    </div>
                </div>
                <div className={open3 ? 'cerec-qa active' : 'cerec-qa'}>
                    <button 
                    className='cerec-qa-btn'
                    onClick={() => setOpen3(!open3)}
                    ><i class="fab fa-quora" />保険診療は可能ですか？<i class="fas fa-chevron-down" /></button>
                    <div className="cerec-qa-contents">
                        A. セレック治療は保険外診療となりますが、セレック治療による様々なメリットは、コストに見合った治療をもたらすものと自信を持っておすすめします。
                    </div>
                </div>
                <div className={open4 ? 'cerec-qa active' : 'cerec-qa'}>
                    <button 
                    className='cerec-qa-btn'
                    onClick={() => setOpen4(!open4)}
                    ><i class="fab fa-quora" />セレック治療と従来の治療との違いは何ですか？<i class="fas fa-chevron-down" /></button>
                    <div className="cerec-qa-contents">
                        A. セレック治療は、従来の治療に比べて、治療時間の短縮、通院回数の減少、精密なフィット感、審美性に優れたセラミック素材の使用、印象材料による型取り不要のため苦痛が少ないなど、多くの利点があります。ただし、症例によっては従来の治療が適切な場合もありますので、歯科医師と相談して最適な治療法を選択しましょう。
                    </div>
                </div>
                <div className={open5 ? 'cerec-qa active' : 'cerec-qa'}>
                    <button 
                    className='cerec-qa-btn'
                    onClick={() => setOpen5(!open5)}
                    ><i class="fab fa-quora" />セレックで使用される素材はなんですか？<i class="fas fa-chevron-down" /></button>
                    <div className="cerec-qa-contents">
                        A. セレックで使用される主な素材はセラミックで、金属アレルギーの心配がなく、審美性にも優れています。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cerec;