import {useState, useEffect} from 'react';

import emialjs from 'emailjs-com';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        job: '歯科衛生士（正社員)',
        name: '',
        hurigana: '',
        education: '',
        // year: '',
        // month: '',
        // date: '',
        birth: '',
        tel: '',
        email: '',
        contents: ''
        // contact: 'お電話'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [send, setSend] = useState(false);

    

    // 入力された値に変更があるたびに実行される（valueが更新される）
    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,[name]:value
        });
    }

    // 送信ボタンが押されるたびにエラーテストと送信チェックを行う
    const handleClick = () => {
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log('test');
    }

    // 内容を送信するプロセス
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('subsend');

        if(send) {
            console.log('send');
            emialjs.sendForm('gmail_test', 'template_smxpbxt', e.target, 'user_9WJzYlIr0tiung2DEGLsp').then((result) => {
            console.log(result.text);
            },(error) => {
                console.log(error.text);
            });
            callback();
        }
        
        e.target.reset();  
         
    };
    // errorsがレンダリングされるたびに実行される
    useEffect(
        () => {
            // もしエラーが０になりisSubmittingが返された場合にuseFormを再実行する
            if(Object.keys(errors).length === 0 && isSubmitting) {
                setSend(true);
                // callback();
            }
        },
        [errors]
    );

    return {handleChange, handleSubmit, handleClick, values, errors};
};

export default useForm;
