import React from 'react';
import css from './headerStyle.css';
import LoginComponent from './LoginComponent';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Link from 'next/link';

export default function MainHeader() {
  
    return (
      <header>
        <nav className=''>
          <Link href={'/'}>
            <div className='logo'></div>
          </Link>
          <ul className='nav-list'>
            <li>
              <Link href='crear' className='link-nav'>Crear</Link>              
            </li>
            <li>
              <Link href='explorar' className='link-nav'>Explorar</Link>              
            </li>
            <li>
              <LoginComponent></LoginComponent>
            </li>
          </ul>
        </nav>
      </header>

    );
}
