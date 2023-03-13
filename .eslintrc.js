module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		projects: ['./tsconfig.json'],
	},
	globals: {
		React: 'readonly',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'next',
		// 'next/core-web-vitals',
		'eslint:recommended',
		'@feature-sliced',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:eslint-comments/recommended',
	],
	plugins: ['import'],
	rules: {
		quotes: ['off', 'single'],
		indent: ['warn', 'tab'],
		'comma-dangle': ['warn', 'always-multiline'],
		'no-unused-vars': 'off',
		'no-undef': ['off'],
		'no-empty-pattern': ['off'],
		'boundaries/element-types': ['off'],
		'no-mixed-spaces-and-tabs': ['off'],

		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				groups: [
					'external',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
					'builtin',
				],
				pathGroups: [
					{
						pattern: '@/**/**',
						group: 'parent',
						position: 'before',
					},
					{
						pattern: './**',
						group: 'builtin',
					},
				],
				// alphabetize: {
				// 	order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
				// 	caseInsensitive: true /* ignore case. Options: [true, false] */
				// }
			},
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

		'import/no-internal-modules': 'off',
	},
}
