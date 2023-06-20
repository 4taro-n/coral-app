import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom';

function FormSuccess() {
    return (
        <div className="success">
            <p className="success-title">送信完了しました</p>
            <div className="success-txtbox">
                <p className="success-text">この度は、歯科コーラルクリニックの求人にお問い合わせいただきましてありがとうございます。３営業日以内にご連絡をさせていただきます。万が一返信がない場合は、再度お問い合わせいただきますようお願い申し上げます。</p>
            </div>
            <Link to="/">
                        <button className="form-success-btn">
                            トップページへ
                        </button>
            </Link>
            {console.log('success')}  
        </div>
    )
}

export default FormSuccess;
