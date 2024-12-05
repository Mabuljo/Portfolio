import React from 'react';

const Icon = ({ src, alt}) => {
    return (
        <img src={src} alt={`Icone ${alt}`} className='competences_icon' />
    );
};

export default Icon;