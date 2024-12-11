import React, { useRef, useState } from 'react';
import Button from './Button'; 
import emailjs from '@emailjs/browser';

const Form = () => {

    const formRef = useRef();
    const [message, setMessage] = useState(''); // State pour le message de confirmation ou d'erreur
    const [isError, setIsError] = useState(false); // State pour gérer si erreur d'envoi ou pas

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_4dea2ln', 'template_emiv9mj', formRef.current, '7n2CI-dcbl5POYSfd')
            .then(() => {
                setMessage('Votre message a bien été envoyé !');
                setIsError(false); // Pas d'erreur
                formRef.current.reset();
            })
            .catch(() => {
                setMessage('Une erreur est survenue, veuillez réessayer.');
                setIsError(true); // Erreur détectée
            });
    };

    return (
        <div className='contact'>
            <p>Vous avez un projet ou une question?<br />N'hésitez pas à me laisser un message via ce formulaire.</p>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className='form_container'>
                    <div className='form_container--details'>
                        <label htmlFor="nom">Nom</label>
                        <input type="text" name="nom" id="nom" required/>
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" name="prenom" id="prenom" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className='form_container--message'>
                        <label htmlFor="message">Votre message</label>
                        <textarea name="message" id="message" rows="10" required></textarea>
                    </div>
                </div>
                <Button type='submit' text="Envoyer" />
                {message && (
                <p className={`form-message ${isError ? 'error' : ''}`}>{message}</p>
                )}  
            </form>
        </div>
    );
};

export default Form;