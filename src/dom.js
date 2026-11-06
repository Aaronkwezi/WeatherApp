
import { getWeather } from './weather.js';
import { converttoCelsius } from './Conversion.js';
export function renderApp(){
    const appContainer = document.createElement('div');
    appContainer.id = 'app';
    const weatherDisplay = createWeatherDisplay();
    const searchForm = createSearchForm(weatherDisplay);

    appContainer.appendChild(searchForm);
    appContainer.appendChild(weatherDisplay);
    document.body.appendChild(appContainer);
}

function createSearchForm(weatherDisplay) {
    const form = document.createElement('form');
    form.id = 'search-form';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.required = true;
    searchInput.placeholder = 'Enter location...';
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Search';
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const location = searchInput.value.trim();

        if (!location) {
            return;
        }

        submitButton.disabled = true;
        try {
            const weatherData = await getWeather(location);
            updateWeatherDisplay(weatherDisplay, weatherData);
        } catch (error) {
            weatherDisplay.textContent = 'Unable to load weather. Please try again.';
            console.error('Weather search failed:', error);
        } finally {
            submitButton.disabled = false;
        }
    });
    form.appendChild(searchInput);
    form.appendChild(submitButton);
    return form;
}

function createWeatherDisplay(weatherData) {
    const weatherDisplay = document.createElement('div');
    weatherDisplay.id = 'weather-display';
    updateWeatherDisplay(weatherDisplay, weatherData);
    return weatherDisplay;
}

function togglecelsiusFahrenheit(weatherDisplay, weatherData) {
    const tempParagraph = weatherDisplay.querySelector('p');
    if(!tempParagraph) return;
    const currentTemp = weatherData.currentConditions.temp;
   
    const isCelsius = tempParagraph.textContent.includes('°C');
    if (isCelsius) {
        tempParagraph.textContent = `Temperature: ${currentTemp.toFixed(1)}°F`;
    } else {
        const celsiusTemp = converttoCelsius(currentTemp);
        tempParagraph.textContent = `Temperature: ${celsiusTemp.toFixed(1)}°C`;
    }
    const listItems = weatherDisplay.querySelectorAll('#future-forecast-list li');
    listItems.forEach((item, index) => {
        const dayData = weatherData.days[index];
        const isCelsius = item.textContent.includes('°C');
        if (isCelsius) {
            item.textContent = `${dayData.datetime}: High ${dayData.tempmax}°F, Low ${dayData.tempmin}°F`;
        }
        else {
            const highCelsius = converttoCelsius(dayData.tempmax);
            const lowCelsius = converttoCelsius(dayData.tempmin);
            item.textContent = `${dayData.datetime}: High ${highCelsius.toFixed(1)}°C, Low ${lowCelsius.toFixed(1)}°C`;
        }
    }); 
};


function updateWeatherDisplay(weatherDisplay, weatherData) {
    weatherDisplay.replaceChildren();
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = weatherData
        ? `Weather in ${weatherData.resolvedAddress}`
        : 'Weather Information';
    weatherDisplay.appendChild(locationHeader);

    if (!weatherData) {
        return;
    }
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle °C/°F';
    toggleButton.addEventListener('click', () => togglecelsiusFahrenheit(weatherDisplay, weatherData));
    const tempParagraph = document.createElement('p');
    tempParagraph.textContent = `Temperature: ${weatherData.currentConditions.temp}°F`;
    const timezoneParagraph = document.createElement('p');
    timezoneParagraph.textContent = `Timezone: ${weatherData.timezone}`;
    const windParagraph = document.createElement('p');
    windParagraph.textContent = `Wind Speed: ${weatherData.currentConditions.windspeed} mph`;
    const humidityParagraph = document.createElement('p');
    humidityParagraph.textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;
    const futureForecastHeader = document.createElement('h3');
    futureForecastHeader.textContent = 'Future Forecast';
    const forcastContainer = document.createElement('div');
    forcastContainer.id = 'forecast-container';
    const futureForecastList = document.createElement('ul');
    futureForecastList.id = 'future-forecast-list';
    for (const day of weatherData.days) {
        const listItem = document.createElement('li');
        listItem.textContent = `${day.datetime}: High ${day.tempmax}°F, Low ${day.tempmin}°F`;
        futureForecastList.appendChild(listItem);
    }
    forcastContainer.appendChild(futureForecastList);
    weatherDisplay.appendChild(toggleButton);
    weatherDisplay.appendChild(tempParagraph);
    weatherDisplay.appendChild(timezoneParagraph);
    weatherDisplay.appendChild(windParagraph);
    weatherDisplay.appendChild(humidityParagraph);
    weatherDisplay.appendChild(futureForecastHeader);
    weatherDisplay.appendChild(forcastContainer);
}