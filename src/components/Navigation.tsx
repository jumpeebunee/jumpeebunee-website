import React, { useState, useMemo } from 'react'

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  useMemo(() => {
    if (isOpen) {
      document.body.classList.add('body_active');
    } else {
      document.body.classList.remove('body_active');
    }
  },[isOpen]);

  return (
    <header className='header'>
        <div className='container header__navigation'>
            <a className='header__logo' href='/'>JumpeeBunee</a>
            <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'header__burger header__burger_open' : 'header__burger'}><span></span></button>
            <nav className='header__nav'>
                <ul>
                    <li><a className='header__nav-link header__nav-link_active' href='#home'>Home</a></li>
                    <li><a className='header__nav-link' href='#about'>About</a></li>
                    <li><a className='header__nav-link' href='#works'>Works</a></li>
                    <li><a className='header__nav-link' href='#footer'>Contact</a></li>
                </ul>
            </nav>
            <nav className={isOpen ? 'header__nav_mobile header__nav_mobile_active' : 'header__nav_mobile'}>
                <ul>
                  <li onClick={() => setIsOpen(false)}><a className='header__nav-link header__nav-link_active' href='#home'>Home</a></li>
                  <li onClick={() => setIsOpen(false)}><a className='header__nav-link' href='#about'>About</a></li>
                  <li onClick={() => setIsOpen(false)}><a className='header__nav-link' href='#works'>Works</a></li>
                  <li onClick={() => setIsOpen(false)}><a className='header__nav-link' href='#footer'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Navigation;