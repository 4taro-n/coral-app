import React, {useState} from 'react';

import Editer from '../Editer';
import Auth from './Auth';

const LoginForm = () => {
    const [isSubmitted, setIssubmitted] = useState(false);

    function submitForm() {
        setIssubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<Auth submitForm={submitForm} />): (<Editer />)}
            
        </div>
    )
}

export default LoginForm;