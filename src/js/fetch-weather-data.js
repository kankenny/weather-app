// API request by city name of openweathermap
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=c8709181029e1ea48c87fe0fcf79c76e
import { displayWeather } from './display-weather-data'

const city = 'las vegas'

export const fetchWeather = {
	apiKey: 'c8709181029e1ea48c87fe0fcf79c76e',
	fetch: async function () {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`

		const response = await fetch(url)
		const weatherData = await response.json()
		displayWeather(weatherData)
		console.log(weatherData)
	},
}
