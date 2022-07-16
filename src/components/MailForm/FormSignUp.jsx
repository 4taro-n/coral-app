import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, handleSubmit, handleClick, values, errors} = useForm(
        submitForm,
        validate
    );

    

    return (
        <div className="FormSignUp">
            <div className="recruit-form">
                <h3>MAIL FORM</h3>
                <p>メールフォーム</p>
                <p>内容を確認し次第担当者よりご連絡させていただきます。</p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
                {/* 希望職種 */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>希望職種</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <select
                            name="job"
                            value={values.job}
                            onChange={handleChange}>
                                <option value="歯科衛生士（正社員)">歯科衛生士（正社員)</option>
                                <option value="歯科衛生士（パートタイマー)">歯科衛生士（パートタイマー）</option>
                                <option value="歯科助手・受付（正社員）">歯科助手・受付（正社員）</option>
                            </select>
                            {/* <p>{values.job}</p> */}
                        </div>
                        {errors.job && <p className="error-massage">{errors.job}</p>}
                    </div>
                </div>
                {/* 名前 */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>名前</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p >必須</p>
                            <input 
                            type="text"
                            name="name"
                            placeholder='山田太郎'
                            value={values.name}
                            onChange={handleChange}/>
                        </div>
                        {errors.name && <p className="error-massage">{errors.name}</p>}
                    </div>
                </div>
                {/* フリガナ */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>フリガナ</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <input 
                            type="text"
                            name="hurigana"
                            placeholder='ヤマダタロウ'
                            value={values.hurigana}
                            onChange={handleChange}/>
                        </div>
                        {errors.hurigana && <p className="error-massage">{errors.hurigana}</p>}
                    </div>  
                </div>
                {/* 最終学歴 */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>最終学歴</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <input 
                            type="text"
                            name="education"
                            placeholder='○○大学'
                            value={values.education}
                            onChange={handleChange}/>
                        </div>
                        {errors.education && <p className="error-massage">{errors.education}</p>}
                    </div>
                </div>
                {/* 生年月日 */}
                {/* <div className="form-inputs">
                    <label>生年月日</label>
                    <input 
                    type="text"
                    name="year"
                    placeholder='(例)2000'
                    value={values.year}
                    onChange={handleChange}/>
                    <label>年</label>
                    <input 
                    type="text"
                    name="month"
                    placeholder='(例)01'
                    value={values.month}
                    onChange={handleChange}/>
                    <label>月</label>
                    <input 
                    type="text"
                    name="date"
                    placeholder='(例)01'
                    value={values.date}
                    onChange={handleChange}/>
                    <label>日</label>
                    {errors.year && <p>{errors.year}</p>}
                    {errors.month && <p>{errors.month}</p>}
                    {errors.date && <p>{errors.date}</p>}
                </div> */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>生年月日</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <input 
                            type="text"
                            name="birth"
                            value={values.birth}
                            onChange={handleChange}/>
                            
                        </div>
                        <p className="birth-p">(例)2001年3月18日の場合　ー　20010318</p>
                        {errors.birth && <p className="error-massage">{errors.birth}</p>}
                    </div>
                </div>
                {/* 電話番号 */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>電話番号</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <input 
                            type="tel"
                            name="tel"
                            placeholder='○○○-○○○○-○○○○'
                            value={values.tel}
                            onChange={handleChange}/>
                        </div>
                        {errors.tel && <p className="error-massage">{errors.tel}</p>}
                    </div>
                </div>
                {/* eメール */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>eメール</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item">
                            <p>必須</p>
                            <input 
                            type="emial"
                            name="email"
                            placeholder='○○○○@gamil.com'
                            value={values.email}
                            onChange={handleChange}/>
                        </div>
                        {errors.email && <p className="error-massage">{errors.email}</p>}
                    </div>
                </div>
                {/* 備考欄 */}
                <div className="form-textarea-wrap">
                    <div className="form-textarea-label">
                        <label>備考欄</label>
                    </div>
                    <div className="form-textarea">
                        <div className="form-textarea-item">
                            <p>任意</p>
                            <textarea
                            name="contents"
                            placeholder=""
                            value={values.contents}
                            onChange={handleChange} />
                        </div>
                    </div>
                </div>
                {/* 連絡方法 */}
                <div className="form-inputs">
                    <div className="form-label">
                        <label>ご連絡方法</label>
                    </div>
                    <div className="form-input">
                        <div className="form-input-item form-input-last">
                            <p>任意</p>
                            <label>
                                <input 
                                type="radio"
                                value="お電話"
                                name="contact"
                                onChange={handleChange}
                                checked={values.contact === "お電話"} />
                                お電話
                            </label>
                            <label>
                                <input 
                                type="radio"
                                value="メール"
                                name="contact"
                                onChange={handleChange}
                                checked={values.contact === "メール"} />
                                メール
                            </label>
                            <label>
                                <input 
                                type="radio"
                                value="両方可"
                                name="contact"
                                onChange={handleChange}
                                checked={values.contact === "両方可"} />
                                両方可
                            </label>
                        </div>
                    </div>
                </div>
                <div className="submit-button">
                    <input type="submit" value="送信" onClick={handleClick}/>
                </div>
                
                {/* <button type="submit">送信する</button> */}
            </form>
        </div>
    )
}

export default FormSignup;
