import { defineConfig } from 'cypress'

export default defineConfig({
	component: {
		devServer: {
			bundler: 'webpack',
			framework: 'next',
		},
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
