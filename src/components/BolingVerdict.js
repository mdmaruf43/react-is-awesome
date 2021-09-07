import React from 'react';

const BolingVerdict = ({ celcius = 0 }) => {
    if (celcius >= 100) {
        return <p>Water would boild</p>;
    }
    return <p>Water would not boild</p>;
};

export default BolingVerdict;
