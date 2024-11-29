import React from 'react';

const Button = ({ type = "button", text, href, onClick, disabled = false }) => {
    switch (type) {
        case "link": // Retourne un lien <a> si le type est "link"
            return (
                <a href={href} target='_blank' rel="noreferrer" >{text}</a>
            );
        case "submit": // Retourne un bouton de type "submit"
            return (
                <button type='submit' disabled={disabled} >{text}</button>
            );
        default: // Retourne un bouton classique de type "button"
            return (
                <button type='button' onClick={onClick}>{text}</button>
            )
    }
};

export default Button;