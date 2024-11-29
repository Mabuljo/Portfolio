import React from 'react';
import imgError from "../assets/images/error_404.svg"
import Button from '../components/Button';

const Error = () => {
    return (
        <div>
            <h1>Oups...</h1>
            <img src={imgError} alt="Erreur 404" />
            <h2>La page que vous demandez n'existe pas.</h2>
            <Button type='link' href="/" text="Retourner sur le portfolio"/>
        </div>
    );
};

export default Error;