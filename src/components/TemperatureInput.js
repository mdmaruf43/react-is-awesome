import React from 'react';

const scleNames = {
    c: 'Celcius',
    f: 'Fahrenheit',
};

function TemperatureInput({ tempreture, scale, handleChange }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {scleNames[scale]}</legend>
            <input
                name="text"
                type="text"
                value={tempreture}
                onChange={(e) => handleChange(e, scale)}
            />
        </fieldset>
    );
}

export default TemperatureInput;
