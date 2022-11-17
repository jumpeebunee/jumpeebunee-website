import React from 'react'

const ContactButtons = () => {
  return (
    <div  className='contact-btns'>
        <button className='contact-btn'>Contact me</button>
        <div className='social-btns'>
            <button className='social-btn'><span className='social-btn-icon social-btn-icon_github'></span></button>
            <button className='social-btn'><span className='social-btn-icon social-btn-icon_telegram'></span></button>
            <button className='social-btn'><span className='social-btn-icon social-btn-icon_codewars'></span></button>
            <button className='social-btn'><span className='social-btn-icon social-btn-icon_discord'></span></button>
        </div>
    </div>
  );
};

export default ContactButtons;