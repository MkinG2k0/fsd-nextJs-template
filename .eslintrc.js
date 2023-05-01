module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
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
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		// '@feature-sliced', // warn import
		'plugin:react-hooks/recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',

	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		//
		// 'import/no-internal-modules': [1], // импорт внутренних слоев FSD // выключаем из за ошибки плагина
		'comma-dangle': [1, 'always-multiline'], // последняя запятая в массивах ...

		// off
		'@typescript-eslint/no-empty-interface': [0], // разрешаем пустые интерфейсы
		'react/react-in-jsx-scope': [0], // разрешаем глобальный реакт
		'no-empty-pattern': [0], // разрешаем пустую деструктуризацию "{}"
		'react/prop-types': [0], // выключаем проверку на типизацию пропсов
		'react/display-name': [0], // разрешаем компонетну возращать калбэк , пример "/src/core/providers/*"
		'no-mixed-spaces-and-tabs': [0], //смешивание табов и пробелов , временно
		//
		'import/order': [1],
		// 'import/order': [
		// 	'warn', // сортировка иипортов
		// 	{
		// 		'newlines-between': 'always',
		// 		groups: [
		// 			'external',
		// 			'parent',
		// 			'sibling',
		// 			'index',
		// 			'object',
		// 			'type',
		// 			'builtin',
		// 		],
		// 		pathGroups: [
		// 			{
		// 				pattern: '@/**/**',
		// 				group: 'parent',
		// 				position: 'before',
		// 			},
		// 			{
		// 				pattern: './**',
		// 				group: 'builtin',
		// 			},
		// 		],
		// 	},
		// ],
	},
}
