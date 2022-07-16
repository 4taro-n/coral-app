import React, { useState } from 'react';
import './Form.css';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {/* 三項演算子でisSubmittedがfalseの時はFormSignUpを実行、trueでFormSuccessを実行 */}
            {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
    )
}

export default Form;