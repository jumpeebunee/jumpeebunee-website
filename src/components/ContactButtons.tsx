import React from 'react'

const ContactButtons = () => {
  return (
    <div  className='contact-btns'>
        <a href="https://t.me/fjapgwap" target="_blank" rel="noreferrer" className='contact-btn'>Contact me</a>
        <div className='social-btns'>
            <a target="_blank" rel="noreferrer" href="https://github.com/jumpeebunee" className='social-btn'><span className='social-btn-icon social-btn-icon_github'></span></a>
            <a target="_blank" rel="noreferrer" href="https://t.me/fjapgwap" className='social-btn'><span className='social-btn-icon social-btn-icon_telegram'></span></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/jumpeebunee" className='social-btn'><span className='social-btn-icon social-btn-icon_vk'></span></a>
            <a target="_blank" rel="noreferrer" href="https://www.codewars.com/users/rsschool_bb5f5c8d9feee30a" className='social-btn'><span className='social-btn-icon social-btn-icon_codewars'></span></a>
        </div>
    </div>
  );
};

export default ContactButtons;