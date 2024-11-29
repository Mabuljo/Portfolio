import React from 'react';
import logo from "../assets/images/logo.jpg"

const Header = () => {
    return (
        <header>
         <img src={logo} alt="logo" />
         <nav>
            <a href="#presentation">Présentation</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
            <a href="">Mon C V</a>
         </nav>
        </header>
    );
};

export default Header;