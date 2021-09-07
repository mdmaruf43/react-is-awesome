export function toCelcius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

export function convert(tempreture, convertTo) {
    const input = parseFloat(tempreture);
    if (Number.isNaN(tempreture)) {
        return '';
    }
    const output = convertTo(input);
    const round = Math.round(output * 1000) / 1000;
    return round.toString();
}
