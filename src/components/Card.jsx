import React from 'react';

const Card = ({ projet }) => {
    return (
        <div>
            <img src={projet.cover} alt={projet.title} />
            <h3>{projet.title}</h3>
            <div>
                {projet.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default Card;