import '../css/style.css'
import { fetchWeather } from './fetch-weather-data'
import { displayWeather } from './display-weather-data'
import { searchButton } from './obtain-city-input'
import { darkToggle } from './toggle-dark-mode'

fetchWeather.fetch('new york')
