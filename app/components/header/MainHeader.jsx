import React from 'react';
import css from './headerStyle.css';
import NavLink from './NavLink';
import LoginComponent from './LoginComponent';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function MainHeader() {

  const navLinks = [
    {
      text: "Crear",
      path: "crear"
    },
    {
      text: "Explorar",
      path: "items"
    }];
    
  
    return (
      <header>
        <nav className=''>
          <div className='logo'></div>
          <ul className='nav-list'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink text={link.text} path={link.path} />
              </li>
            ))}
            <li>
              <HomeRoundedIcon></HomeRoundedIcon>
              <LoginComponent text={"Texto"} path={"usuario"} isUserLoggedIn={false}></LoginComponent>
            </li>
          </ul>
        </nav>
      </header>

    );
}
