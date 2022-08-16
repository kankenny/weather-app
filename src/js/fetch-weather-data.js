// API request by city name of openweathermap
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=c8709181029e1ea48c87fe0fcf79c76e
import { displayWeather } from './display-weather-data'

let city = 'denver'

export let weatherData = {
	apiKey: 'c8709181029e1ea48c87fe0fcf79c76e',
	fetchWeather: async function () {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`

		let response = await fetch(url)
		let weatherData = await response.json()
		console.log(weatherData)
		displayWeather()
	},
}

// async function getCats() {
// 	const response = await fetch(
// 		'https://api.giphy.com/v1/gifs/translate?api_key=te4JZG3AydFSNI2KlWEDk4lkptn5JoHx&s=decapitation&weirdness=10'
// 	)
// 	const catData = await response.json()
// 	img.src = catData.data.images.original.url
// }
