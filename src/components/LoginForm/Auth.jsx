import React, {useState} from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

import { auth } from '../firebase/Firebase';

import './Auth.css';

function Auth({submitForm}) {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const [error, setError] = useState(false);

    onAuthStateChanged(auth, (currentUser) => {
        setUser( currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail,
                registerPassword
            );
            console.log(user);

        }catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            setError(false);
            submitForm();
        } catch(error) {
            console.log(error.massage);
            setError(true);
        }
    };

    const logout = async () => {
        await signOut(auth);
    }
    return (
        <div className="auth">
            {/* サインイン */}
            {/* <div>
                <h3> Register User </h3>
                <input 
                placeholder="Email.."
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}
                />
                <input 
                placeholder="Pawwsord.."
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
                />
                <button onClick={register}> Create User </button>
            </div> */}

            <div>
                <div className="auth-form-inputs">
                    <div className="auth-form-label">
                        <label>eメール</label>
                    </div>
                    <div className="auth-form-input">
                        <input 
                        type="text"
                        placeholder="Email.."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="auth-form-inputs">
                    <div className="auth-form-label">
                        <label>パスワード</label>
                    </div>
                    <div className="auth-form-input">
                        <input 
                        type="password"
                        placeholder="Password.."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="error-massage-wrap">
                    {error && <p>ユーザー名かパスワードが正しくありません。再度試してください。</p>}
                </div>
                
                <div className="btn-wrap">
                    <button onClick={login} className="login-btn"> Login </button>
                    <p>ログイン中のアカウント:{user?.email}</p>
                    <button onClick={logout} className="logout-btn"> Sign out </button>
                </div>
            </div>

        </div>
    );
}
export default Auth;
