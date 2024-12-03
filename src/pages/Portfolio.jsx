import React from 'react';
import Header from '../components/Header';
import photoPresentation from '../assets/images/marjo-sepia.webp';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Projets from "../datas/projets.json";
import Card from '../components/Card';


const Portfolio = () => {

    const iconNames = ['html5','css3','javascript','react','redux','sass','notion','github','figma']; // Liste des logos avec le nom de chaque fichier d'image (sans extension)

    return (
        <div>
            <Header />
            <main id='main'>
                <section id='presentation'>
                    <h2>Présentation</h2>
                    <div>
                        <img src={photoPresentation} alt="Marjorie Goudet" />
                        <div>
                            <p>    
                                Qua nec flatus diversitate esse et esse esse nascitur vero quicquid potest liberis Romae vero credi inanes aestimant caelibes quorundam praeter sine orbos obsequiorum quorundam orbos esse credi credi qua.
                            </p>
                            <Button type='link' href="/" text="Consulter mon CV"/>
                        </div>
                    </div>
                </section>

                <section id='competences'>
                    <h2>Compétences</h2>
                    <div>
                        {iconNames.map((iconName, index) => {
                            const imagePath = require(`../assets/icones/${iconName}.png`)
                            return (
                                <Icon key={index} src={imagePath} alt={iconName} />
                            )
                        })}
                    </div>
                </section>

                <section id='projets'>
                    <h2>Mes projets</h2>
                    <div>
                        <div>
                            <Button type='button' text="Tous"/>
                            <Button type='button' text="Sass"/>
                            <Button type='button' text="JavaScript"/>
                            <Button type='button' text="React"/>
                        </div>
                        <div>
                            {Projets.map((projet) =>(
                                <Card projet={projet} key={projet.id} />
                            ))}
                        </div>
                    </div>
                </section>
                <aside>
                {/* modale */}
                </aside>
                 
                <section id='contact'>
                    <h2>Me contacter</h2>
                    <p>N'hésitez pas à me laisser un message</p>
                    <form action="">
                        <div>
                            <div>
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" id="nom" required/>
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" name="prenom" id="prenom" required/>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <label htmlFor="message">Votre message</label>
                            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                        </div>
                        <Button type='submit' text="Envoyer" />
                    </form>
                 </section>
            </main>
        </div>
    );
};

export default Portfolio;