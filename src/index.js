import {getWeather} from './weather.js';
import {converttoCelsius, converttoFahrenheit} from './Conversion.js';
import {renderApp} from './dom.js';

getWeather('kampala');
const fahrenheitTemp = 68;
const celsiusTemp = converttoCelsius(fahrenheitTemp);
console.log(`${fahrenheitTemp}°F is equal to ${celsiusTemp.toFixed(2)}°C`);
const celsiusTemp2 = 20;
const fahrenheitTemp2 = converttoFahrenheit(celsiusTemp2);
console.log(`${celsiusTemp2}°C is equal to ${fahrenheitTemp2.toFixed(2)}°F`);

getWeather('kampala').then(weatherData => {
    const fahrenheitTemp = weatherData.currentConditions.temp;
    const celsiusTemp = converttoCelsius(fahrenheitTemp);
    console.log(`Current temperature in ${weatherData.resolvedAddress} is ${fahrenheitTemp}°F, which is ${celsiusTemp.toFixed(2)}°C`);
});

renderApp();