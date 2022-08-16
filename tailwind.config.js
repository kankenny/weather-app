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
	variants: {
		extend: {},
	},
	plugins: [],
}
