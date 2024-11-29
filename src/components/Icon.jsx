import React from 'react';

const Icon = ({ src, alt}) => {
    return (
        <img src={src} alt={`Icone ${alt}`} />
    );
};

export default Icon;