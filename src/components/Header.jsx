import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.webp";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour l'ajout/retrait de la classe active-menu sur le body
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('active-menu');
        } else {
            document.body.classList.remove('active-menu');
        }
    }, [isOpen]); // S'exécute à chaque changement de isOpen


    return (
        <header>
            <div className='header-content'>
                <h1>"Chaque pixel, chaque ligne de code est une histoire à raconter"</h1>
                <span><a href="#main" aria-label="flèche d'accés"><i className="fa-solid fa-arrow-down"></i></a></span>
            </div>
            <nav className={isOpen ? "open" : ""}>
                <img src={logo} alt="logo" className='nav_logo' />
                <a href="#presentation">Présentation</a>
                <a href="#competences">Compétences</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
                <a href="/">Mon CV</a>
            </nav>
            <i className={`fa-solid menu ${isOpen ? "fa-xmark" : "fa-bars"}`} onClick={toggleMenu}></i>
        </header>
    );
};

export default Header;