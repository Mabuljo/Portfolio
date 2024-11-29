import React from 'react';
import Header from '../components/Header';
import photoPresentation from '../assets/images/marjo-sepia.jpg';
import Button from '../components/Button';
import Icon from '../components/Icon';


const Portfolio = () => {

    const iconNames = ['html5','css3','javascript','react','redux','sass','notion','github','figma']; // Liste des logos avec le nom de chaque fichier d'image (sans extension)

    return (
        <div>
            <h1>"Chaque pixel, chaque ligne de code est une histoire à raconter"</h1>
            <Header />
            <main>
                <section id='presentation'>
                    <h2>Présentation</h2>
                    <div>
                        <img src={photoPresentation} alt="Marjorie Goudet" />
                        <div>
                            <p>
                                Qua nec flatus diversitate esse et esse esse nascitur vero quicquid potest liberis Romae vero credi inanes aestimant caelibes quorundam praeter sine orbos obsequiorum quorundam orbos esse credi credi qua.
                            </p>
                            <Button type='link' href="" text="Consulter mon CV"/>
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

            </main>
        </div>
    );
};

export default Portfolio;