module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		projects: ['./tsconfig.json']
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:eslint-comments/recommended',
		'@feature-sliced'
	],
	plugins: ['import'],
	rules: {
		quotes: ['off', 'single'],
		indent: ['warn', 'tab'],
		'comma-dangle': ['warn', 'always-multiline'],
		'no-unused-vars': 'off',

		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'parent',
					'sibling',
					'index',
					'object',
					'type'
				],
				pathGroups: [
					{
						pattern: '@/**/**',
						group: 'parent',
						position: 'before'
					}
				],
				alphabetize: { order: 'asc' }
			}
		],

		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',

		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-empty-interface': ['off'],
		'@typescript-eslint/ban-ts-comment': ['off'],
		'@typescript-eslint/ban-types': 'off',

		'import/first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-duplicates': 'warn',

		'react-hooks/exhaustive-deps': 'off',

		'import/no-internal-modules': 'off'
	}
}
