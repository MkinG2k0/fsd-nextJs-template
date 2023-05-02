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
		'plugin:react-hooks/recommended',
		'plugin:import/typescript',
		//
		'plugin:prettier/recommended',
		// test
		// '@feature-sliced', // warn import
	],
	overrides: [],
	parser: '@typescript-eslint/parser',

	plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'promise', 'prettier'],
	rules: {
		indent: ['warn', 'tab'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'never'],
		// test
		// 'import/no-internal-modules': [1], // импорт внутренних слоев FSD // выключаем из за ошибки плагина
		// off
		'@typescript-eslint/no-empty-interface': [0], // разрешаем пустые интерфейсы
		'react/react-in-jsx-scope': [0], // разрешаем глобальный реакт
		'no-empty-pattern': [0], // разрешаем пустую деструктуризацию "{}"
		'react/prop-types': [0], // выключаем проверку на типизацию пропсов
		'react/display-name': [0], // разрешаем компонетну возращать калбэк , пример "/src/core/providers/*"
		'no-mixed-spaces-and-tabs': [0], // смешивание табов и пробелов , временно
		// warn
		'prettier/prettier': [1], // отсупы
		'@typescript-eslint/no-empty-function': [1], // пустые функции
		'import/order': [1], // сорировка импортов
		'no-unused-vars': [1], // не используемые переменные
		'comma-dangle': [1, 'always-multiline'], // последняя запятая в массивах ...
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
