'use client'

import css from './LoginSignUpContainer.css';
import { useRef } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AkComponent from './AkComponent';

const LoginSignUpContainer = () => {

    const container = useRef(null); 
    function addActiveClass() {container.current.classList.add("right-panel-active")}
    function removeActiveClass() {container.current.classList.remove("right-panel-active")}

    return (
        <div className="newlogin-container" id="container" ref={container}>
            <div className="form-container sign-up-container">
                <div className='ex-form'>
                    <RegisterForm></RegisterForm>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <div className='ex-form'>
                    <LoginForm></LoginForm>
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <AkComponent imgWidth={200} imgHeight={100}></AkComponent>
                        <p className='overlay-title'>Ya tenes una cuenta?</p>
                        <p className='overlay-text'>Para mantenerte al tanto de las ultimas novedades, inicia sesión</p>
                        <button className="newlogin-button ghost" id="signIn" onClick={removeActiveClass}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <AkComponent imgWidth={200} imgHeight={100}></AkComponent>
                        <p className='overlay-title'>No estas registrado?</p>
                        <p className='overlay-text'>Creá una cuenta totalmente gratis y encontrá alguien con quien tradear.</p>
                        <button className="newlogin-button ghost" id="signUp" onClick={addActiveClass}>Registrate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUpContainer;
