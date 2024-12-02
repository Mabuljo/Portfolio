import React from 'react';
import logoFooter from "../assets/images/logo.webp"

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo" />
            <div>
                <a href="https://fr.linkedin.com/" target='_blank' alt='Lien LinkedIn'rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Mabuljo" target='_blank' alt='Lien GitHub' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="/" target='_blank' alt='Lien email' rel="noopener noreferrer" ><i className="fa-solid fa-envelope"></i></a>
            </div>
        </footer>
    );
};

export default Footer;