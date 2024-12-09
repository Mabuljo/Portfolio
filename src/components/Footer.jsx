import React from 'react';
import logoFooter from "../assets/images/logo.webp";

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo du portfolio" className='footer_logo' />
            <div className='reseaux'>
                <a href="https://www.linkedin.com/in/marjorie-goudet-951b80340/" target='_blank' aria-label='Lien LinkedIn'rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Mabuljo" target='_blank' aria-label='Lien GitHub' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="mailto:mabuljo-dev@gmail.com" target='_blank' aria-label='Lien email' rel="noopener noreferrer" ><i className="fa-solid fa-envelope"></i></a>
            </div>
        </footer>
    );
};

export default Footer;