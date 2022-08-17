import { fetchWeather } from './fetch-weather-data'

export let searchButton = document.querySelector('.search-button')
export let searchBar = document.querySelector('.search-bar')

searchButton.addEventListener('click', () => {
	search()
})

searchBar.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		search()
	}
})

function search() {
	const searchInput = searchBar.value
	document.querySelector('.search-bar').value = ''
	fetchWeather.fetch(searchInput)
}
