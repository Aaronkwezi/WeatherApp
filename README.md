# KWEZI Weather App

A simple weather application built with JavaScript, HTML, CSS, and Webpack. Search for a location or use your current location to view the weather and daily forecasts.

## Features

- Search for weather by location.
- Automatically load local weather with browser location permission.
- View temperature, wind speed, humidity, and timezone.
- Browse daily forecasts with high and low temperatures.
- Switch temperatures between Celsius and Fahrenheit.
- Display weather icons and backgrounds based on current conditions.

## Getting Started

Install Node.js and npm, then run these commands from the project folder:

`npm install`
`npm run dev`

The development server opens the app in your browser. Allow location access to see local weather, or enter a location in the search box.

## Weather Data

The app uses the Visual Crossing Weather API for weather data and BigDataCloud for location names. An internet connection is required.

The Visual Crossing API key is currently configured in `src/weather.js`. Replace the value of the `key` query parameter with your own API key when setting up your copy.

## Scripts

- `npm run dev` starts the development server and opens the browser.
- `npm run build` starts the development server without automatically opening the browser.
- `npx webpack --mode production` creates a production bundle in `dist/`.
