export const darkToggle = document.querySelector('.dark-mode-button')

darkToggle.addEventListener('click', () => {
	const body = document.querySelector('body')
	body.classList.toggle('dark')
})
