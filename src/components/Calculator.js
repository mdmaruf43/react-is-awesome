import React, { Component } from 'react';
import { convert, toCelcius, toFahrenheit } from '../lib/convert';
import BolingVerdict from './BolingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    state = {
        tempreture: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            tempreture: e.target.value,
            scale,
        });
    };

    render() {
        const { tempreture, scale } = this.state;
        const celcius = scale === 'f' ? convert(tempreture, toCelcius) : tempreture;
        const fahrenheit = scale === 'c' ? convert(tempreture, toFahrenheit) : tempreture;
        return (
            <>
                <TemperatureInput scale="c" tempreture={celcius} handleChange={this.handleChange} />
                <TemperatureInput
                    scale="f"
                    tempreture={fahrenheit}
                    handleChange={this.handleChange}
                />
                <BolingVerdict celcius={parseFloat(tempreture)} />
            </>
        );
    }
}

export default Calculator;
