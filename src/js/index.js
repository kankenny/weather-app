import '../css/style.css'
import { fetchWeather } from './fetch-weather-data'
import { displayWeather } from './display-weather-data'
import { searchButton } from './obtain-city-input'

fetchWeather.fetch('new york')
