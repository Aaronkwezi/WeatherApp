export async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=FA3TURQUQ4VUL8WVYXZJHR5N5&unitGroup=us&contentType=json`);
        if (!response.ok) {
            throw new Error(`Weather request failed: ${response.status}`);
        }

        const weatherData = await response.json();
        console.log("Weather data fetched successfully:", weatherData);
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}