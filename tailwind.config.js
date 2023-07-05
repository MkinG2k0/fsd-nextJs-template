/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	corePlugins: { preflight: false },
	mode: 'jit',
	plugins: [],
	theme: {
		extend: {
			colors: {},
		},
	},
}
