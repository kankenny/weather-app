module.exports = {
	mode: 'jit',
	content: ['./src/*.html', './src/js/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Open Sans'],
			},
		},
	},
	darkMode: 'class',
	variants: {
		extend: {},
	},
	plugins: [],
}
