import React, {useState,useEffect} from 'react';
import Header from '../components/Header';
import photoPresentation from '../assets/images/marjo-sepia.webp';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Projets from "../datas/projets.json";
import Card from '../components/Card';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


const Portfolio = () => {

    // Liste des logos avec le nom de chaque fichier d'image (sans extension)
    const iconNames = ['html5','css3','javascript','react','redux','sass','notion','github','figma']; 

    // Etat pour la technologie sélectionnée
    const [selectedTech, setSelectedTech] = useState(''); 
    // Liste des technologies
    const technologies = ['Tous', 'Sass', 'JavaScript', 'React'];

    // Fonction qui met à jour les projets en fonction du bouton cliqué
    const handleTechChange = (tech) => {
        setSelectedTech(tech === 'Tous' ? '' : tech); // Si on clique sur 'Tous', on réinitialise les technologies
    }

    // Variables et Fonction pour la Modale
    const [modal, setModal] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState(null); // Etat pour le projet sélectionné

    const toggleModal = (projet) => {
        setModal(!modal); // Ouvre ou ferme la modale
        setSelectedProjet(projet || null);// Met à jour le projet sélectionné
    }

    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal'); // Ajoute la classe quand modal est true
        } else {
            document.body.classList.remove('active-modal'); // Retire la classe quand modal est false
        }
    }, [modal]); // Effectue l'effet chaque fois que 'modal' change

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
                            <Button type='link' href="/" aria-label="Télécharger mon CV en PDF" text="Consulter mon CV"/>
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
                                <Card projet={projet} key={projet.id} toggleModal={() => toggleModal(projet)} /> // Passe le projet cliqué
                            ))}
                        </div>
                    </div>
                </section>

                <section id='contact'>
                    <h2>Me contacter</h2>   
                    <Form />
                 </section>
                 {/* Affichage conditionnel de la modale */}
                 {modal && <Modal projet={selectedProjet} toggleModal={toggleModal} />}
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;