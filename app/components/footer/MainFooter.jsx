import css from './footerStyle.css'
import React from 'react'

export default function MainFooter() {

  function getYear(){
    const currentDate = new Date();
    return currentDate.getFullYear().toString();
  }

  const currentYear = getYear();

  return (
    <footer>
      <div className='screen-width'>
        <div className='footer-layout'>
          <div className='footer-flex-child footer-logo'>
          </div>
          <div className='footer-flex-child'>
            <p className='bright-1100 footer-title'>Contacto</p>
            <p className='bright-900 footer-item'>cs.finder@gmail.com</p>
            <p className='bright-900 footer-item'>Política de privacidad</p>
          </div>
          <div className='footer-flex-child'>
            <p className='bright-1100 footer-title'>Secciones</p>
            <p className='bright-900 footer-item'>Home</p>
            <p className='bright-900 footer-item'>Login</p>
            <p className='bright-900 footer-item'>Mi cuenta</p>
          </div>
          <div className='footer-flex-child'>
            <p className='bright-1100 footer-title'>Explorá</p>
            <p className='bright-900 footer-item'>Skins</p>
            <p className='bright-900 footer-item'>Stickers</p>
            <p className='bright-900 footer-item'>Cajas</p>
          </div>
        </div>
        <div className='line-separator bright-700'></div>
        <div>
          <p className='bright-900'>CS.Finder {currentYear} | Todos los derechos reservados ©.</p>
        </div>
      </div>
    </footer>
  )
}