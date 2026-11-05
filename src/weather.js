export async function getWeather() {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=FA3TURQUQ4VUL8WVYXZJHR5N5&unitGroup=us&contentType=json');
        const weatherData = await response.json();
        console.log("Weather data fetched successfully:", weatherData);
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}