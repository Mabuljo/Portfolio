import React from 'react';
import logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <header>
            <div>
                <h1>"Chaque pixel, chaque ligne de code est une histoire à raconter"</h1>
                <span><a href="#main"><i className="fa-solid fa-arrow-down"></i></a></span>
            </div>
            <div>
                <img src={logo} alt="logo" />
                <nav>
                    <a href="#presentation">Présentation</a>
                    <a href="#competences">Compétences</a>
                    <a href="#projets">Projets</a>
                    <a href="#contact">Contact</a>
                    <a href="/">Mon C V</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;