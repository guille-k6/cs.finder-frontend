'use client';
import { useState, useEffect, useRef } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const RegisterForm = () => {

    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState({
        initial: true,
        message: null
    });
    const [passwError, setPasswError] = useState({
        initial: true,
        message: null
    });
    const [twoPasswError, setTwoPasswError] = useState({
        initial: true,
        message: null
    })
    const [errorMessage, setErrorMessage] = useState('');

    const refs = {
        emailRef: useRef(),
        passRef: useRef(),
        twoPassRef: useRef(),
        msgRef: useRef(),
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
    let passwTwoInputValue = '';

    const handlePassChange = e => {
        clearTimeout(timeoutId);
        passwInputValue = e.target.value;
        timeoutId = setTimeout(() => {
            validatePassw(e.target.value);
        }, 600);
    }

    const handleTwoPassChange = e => {
        clearTimeout(timeoutId);
        passwTwoInputValue = e.target.value;
        timeoutId = setTimeout(() => {
            validateTwoPassw(e.target.value);
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

    const validateTwoPassw = twoPassw => {
        if(twoPassw.length >= 4 && twoPassw === refs.passRef.current.value){
            setTwoPasswError({
                initial: false,
                message: null
            })
            refs.twoPassRef.current.classList.remove('border-danger');
        }else if(twoPassw !== refs.passRef.current.value){
            setTwoPasswError({
                initial: false,
                message: 'Las contraseñas no coinciden'
            })
            refs.twoPassRef.current.classList.add('border-danger');
        }else{
            setPasswError({
                initial: false,
                message: 'Contraseña no válida'
            })
            refs.passRef.current.classList.add('border-danger');            
        }
    }

    const isDisabled = () => emailError.initial || passwError.initial || emailError.message || passwError.message || twoPasswError.message;

    return (
        <>
            <div className="modal-container">
                <div className='login-container'>
                    <div className='login-title-container'>
                        <LoginOutlinedIcon className='login-icon'></LoginOutlinedIcon>
                        <h4 className='login-title'>Registrate</h4>
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
                    <div className='pb-0'>
                        <div className='input-container'>
                            {twoPasswError.message &&
                            <p className='input-error'>{twoPasswError.message}</p>}
                            <input type='password' className='login-input' placeholder='Repetir contraseña' onChange={handleTwoPassChange} ref={refs.twoPassRef}/>
                        </div>
                    </div>
                    <div>
                        <p className='error-message' ref={refs.msgRef}>{errorMessage}</p>
                    </div>
                    <div>
                        {!loading && <button className='login-button' disabled={isDisabled()}>Enviar</button>}
                        {loading && <div className='spinner'><CircularProgress sx={{margin: 'auto', color: 'var(--main-1100)'}}/></div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;
