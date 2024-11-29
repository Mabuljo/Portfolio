import React from 'react';
import logoFooter from "../assets/images/logo.jpg"

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo" />
            <ul>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-github"></i></li>
                <li><i class="fa-solid fa-envelope"></i></li>
            </ul>
        </footer>
    );
};

export default Footer;