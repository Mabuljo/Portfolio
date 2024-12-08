import React from 'react';
import Button from './Button'; 

const Form = () => {
    return (
        <div className='contact'>
                        <p>Vous avez un projet ou une question ?<br />N'hésitez pas à me laisser un message via ce formulaire.</p>
                        <form action="#" method="post">
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
                                    <textarea name="message" id="message" cols="30" rows="15" required></textarea>
                                </div>
                            </div>
                            <Button type='submit' text="Envoyer" />
                        </form>
                    </div>
    );
};

export default Form;