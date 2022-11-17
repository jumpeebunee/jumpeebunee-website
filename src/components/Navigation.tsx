import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className='header'>
        <div className='container header__navigation'>
            <Link className='header__logo' to='/'>JumpeeBunee</Link>
            <nav className='header__nav'>
                <ul>
                    <li><a className='header__nav-link header__nav-link_active' href='#home'>Home</a></li>
                    <li><Link className='header__nav-link' to="about">About</Link></li>
                    <li><a className='header__nav-link' href='#works'>Works</a></li>
                    <li><a className='header__nav-link' href='#footer'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Navigation;