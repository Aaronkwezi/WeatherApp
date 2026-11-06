
import { getWeather } from './weather.js';

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

    const tempParagraph = document.createElement('p');
    tempParagraph.textContent = `Temperature: ${weatherData.currentConditions.temp}°F`;
    weatherDisplay.appendChild(tempParagraph);
}