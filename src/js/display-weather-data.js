import { weatherData } from './fetch-weather-data'

export async function displayWeather() {
	const name = await weatherData.name
	const icon = await weatherData.weather[0].icon
	const description = await weatherData.weather[0].description
	const temp = await weatherData.main.temp
	const humidity = await weatherData.main.humidity
	const speed = await weatherData.wind.speed
	const feelsLike = await weatherData.main.feels_like

	let cityInput = document.querySelector('.name-output')
	cityInput.innerHTML = name
	// let tempInput = document.querySelector('.city-name')
	// tempInput.innerHTML = temp
	// let iconInput = document.querySelector('.city-name')
	// iconInput.innerHTML = icon
	// let humidInput = document.querySelector('.city-name')
	// humidInput.innerHTML = humidity
	// let speedInput = document.querySelector('.city-name')
	// speedInput.innerHTML = speed
	// let descInput = document.querySelector('.city-name')
	// descInput.innerHTML = name
}
