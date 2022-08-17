import { fetchWeather } from './fetch-weather-data'

export async function displayWeather(fetchWeather) {
	const name = await fetchWeather.name
	const iconCode = await fetchWeather.weather[0].icon
	const cloud = await fetchWeather.weather[0].description
	const temp = await fetchWeather.main.temp
	const humidity = await fetchWeather.main.humidity
	const speed = await fetchWeather.wind.speed
	const feelsLike = await fetchWeather.main.feels_like

	let cityInput = document.querySelector('.name-output')
	cityInput.innerHTML = name
	let descInput = document.querySelector('.cloud-output')
	descInput.innerHTML = cloud.replace(/\b\w/g, (l) => l.toUpperCase())
	let tempInput = document.querySelector('.temp-output')
	tempInput.innerHTML = temp
	let feelsLikeInput = document.querySelector('.feels-like-output')
	feelsLikeInput.innerHTML = feelsLike
	let humidInput = document.querySelector('.humid-output')
	humidInput.innerHTML = humidity
	let speedInput = document.querySelector('.speed-output')
	speedInput.innerHTML = speed
	let iconInput = document.querySelector('.icon-output')
	iconInput.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}
