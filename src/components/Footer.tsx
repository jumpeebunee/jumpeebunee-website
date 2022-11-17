import React from "react";
import ContactButtons from "./ContactButtons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <h2>Want to work together?</h2>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    <a href="mailto:jumpeebunee@gmail.com">jumpeebunee@gmail.com</a>
                    <ContactButtons/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;