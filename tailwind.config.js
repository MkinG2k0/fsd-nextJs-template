/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./pages/**', './app/**', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					500: '#1677ff',
				},
				gray: {
					900: '#001529',
				},
			},
		},
	},
	plugins: [],
}
