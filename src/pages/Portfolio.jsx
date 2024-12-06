import React, {useState} from 'react';
import Header from '../components/Header';
import photoPresentation from '../assets/images/marjo-sepia.webp';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Projets from "../datas/projets.json";
import Card from '../components/Card';
import Footer from '../components/Footer';


const Portfolio = () => {

    const iconNames = ['html5','css3','javascript','react','redux','sass','notion','github','figma']; // Liste des logos avec le nom de chaque fichier d'image (sans extension)

    const [selectedTech, setSelectedTech] = useState(''); // Etat pour la techno sélectionnée

    // Liste des technologies
    const technologies = ['Tous', 'Sass', 'JavaScript', 'React'];

    // Fonction qui met à jour le filtre en fonction du bouton cliqué
    const handleTechChange = (tech) => {
        setSelectedTech(tech === 'Tous' ? '' : tech); // Si on clique sur 'Tous', on réinitialise les technologies
    }

    return (
        <div>
            <Header />
            <main id='main'>
                <section id='presentation'>
                    <h2>Présentation</h2>
                    <div className='presentation_content'>
                        <img src={photoPresentation} alt="Marjorie Goudet" />
                        <div className='presentation_content--details'>
                            <p>    
                                Qua nec flatus diversitate esse et esse esse nascitur vero quicquid potest liberis Romae vero credi inanes aestimant caelibes quorundam praeter sine orbos obsequiorum quorundam orbos esse credi credi qua.
                            </p>
                            <Button type='link' href="/" text="Consulter mon CV"/>
                        </div>
                    </div>
                </section>

                <section id='competences'>
                    <h2>Compétences</h2>
                    <div className='competences'>
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
                    <div className='projets'>
                        <div className='projets_buttons'>
                            {technologies.map((tech, index) => (
                                <Button 
                                key={index} 
                                type='button' 
                                text={tech} 
                                onClick={() => handleTechChange(tech)} 
                                isSelected={selectedTech === tech} // si la prop isSelected est true, on applique la className "btn-selected"
                                />
                            ))}
                        </div>
                        <div className='projets_cards'>
                            {Projets.filter(projet => {
                                
                                if (!selectedTech) {
                                    return true; // Si aucune technologie sélectionnée, afficher tous les projets
                                } else {
                                return projet.technologies.includes(selectedTech);  // Vérifier si la technologie du projet correspond au filtre
                                }
                            }).map((projet) => (
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
                    <div className='contact'>
                        <p>N'hésitez pas à me laisser un message</p>
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
                 </section>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;