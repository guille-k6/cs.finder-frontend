'use client'

import './loginForm.css'
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";

import Link from 'next/link';

import CircularProgress from '@mui/material/CircularProgress';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const LoginForm = ( ) => {
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState({
        initial: true,
        message: null
    });
    const [passwError, setPasswError] = useState({
        initial: true,
        message: null
    });
    const [errorMessage, setErrorMessage] = useState('');

    const refs = {
        modalRef: useRef(),
        emailRef: useRef(),
        passRef: useRef(),
        msgRef: useRef(),
    }

    async function handleLoginSubmit(){
        const email = refs.emailRef.current.value;
        const password = refs.passRef.current.value;

        try {
            setLoading(true);
            const responseNextAuth = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (responseNextAuth.ok) {
                // Handle if it's right
            }else{
                console.log(responseNextAuth);
                showErrorMessage(responseNextAuth.error);
            }
        } catch (error) {
            console.log(error);
            showErrorMessage(error);
        }finally{
            setLoading(false);
        }

    }

    function showErrorMessage(mensaje, ms){
        if (!ms) ms = 5000;
        setErrorMessage(mensaje);
        setTimeout(() => {
            setErrorMessage('');
        }, ms);
    }

    let emailInputValue = '';
    let timeoutId;

    const handleEmailChange = e => {
        clearTimeout(timeoutId);
        emailInputValue = e.target.value;
        timeoutId = setTimeout(() => {
            validateEmail(e.target.value);
        }, 300);
    }
    const validateEmail = email => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailPattern.test(email)){
            setEmailError({
                initial: false,
                message: null
            })
            refs.emailRef.current.classList.remove('border-danger');
        }else{
            setEmailError({
                initial: false,
                message: 'Email no válido'
            })
            refs.emailRef.current.classList.add('border-danger');
        }
    }

    let passwInputValue = '';

    const handlePassChange = e => {
        clearTimeout(timeoutId);
        passwInputValue = e.target.value;
        timeoutId = setTimeout(() => {
            validatePassw(e.target.value);
        }, 600);
    }

    const validatePassw = passw => {
        if(passw.length >= 4){
            setPasswError({
                initial: false,
                message: null
            })
            refs.passRef.current.classList.remove('border-danger');
        }else{
            setPasswError({
                initial: false,
                message: 'Contraseña no válida'
            })
            refs.passRef.current.classList.add('border-danger');
        }
    }

    const isDisabled = () => emailError.initial || passwError.initial || emailError.message || passwError.message;

    return (
        <>  
            <div ref={refs.modalRef} className="modal-container">
                <div className='login-container'>
                    <div className='login-title-container'>
                        <LoginOutlinedIcon className='login-icon'></LoginOutlinedIcon>
                        <h4 className='login-title'>Iniciar sesión</h4>
                    </div>
                    <div className='pb-0'>
                        <div className='input-container'>
                            {emailError.message &&
                            <p className='input-error'>{emailError.message}</p>}
                            <input type='text' className='login-input' placeholder='Email' onChange={handleEmailChange} ref={refs.emailRef}/>
                        </div>
                    </div>
                    <div className='pb-0'>
                        <div className='input-container'>
                            {passwError.message &&
                            <p className='input-error'>{passwError.message}</p>}
                            <input type='password' className='login-input' placeholder='Contraseña' onChange={handlePassChange} ref={refs.passRef}/>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex justify-space-between links-container'>
                            <Link href={'/new-password'} className='login-link forgot-passw'>Olvidaste tu contraseña?</Link>
                        </div>
                        <p className='error-message' ref={refs.msgRef}>{errorMessage}</p>
                    </div>
                    <div>
                        {!loading && <button className='login-button' disabled={isDisabled()} onClick={handleLoginSubmit}>Login</button>}
                        {loading && <div className='spinner'><CircularProgress sx={{margin: 'auto', color: 'var(--main-1100)'}}/></div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
