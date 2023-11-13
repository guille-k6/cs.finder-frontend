'use client'

import css from './LoginSignUpContainer.css';
import { useRef } from 'react';
import LoginForm from './LoginForm';

const LoginSignUpContainer = () => {

    const container = useRef(null); 
    function addActiveClass() {container.current.classList.add("right-panel-active")}
    function removeActiveClass() {container.current.classList.remove("right-panel-active")}

    return (
        <div className="newlogin-container" id="container" ref={container}>
            <div className="form-container sign-up-container">
                <div className='ex-form'>
                    <h1>Registrate</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className='newlogin-button'>Crear cuenta</button>
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
                        <h3>Ya tenes una cuenta?</h3>
                        <p className='overlay-text'>Para mantenerte al tanto de las ultimas novedades, inicia sesión</p>
                        <button className="newlogin-button ghost" id="signIn" onClick={removeActiveClass}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>No estas registrado?</h1>
                        <p className='overlay-text'>Creá una cuenta totalmente gratis y encontrá alguien con quien tradear.</p>
                        <button className="newlogin-button ghost" id="signUp" onClick={addActiveClass}>Registrate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUpContainer;
