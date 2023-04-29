module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'next',
		'@feature-sliced',
		'plugin:react-hooks/recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		//
		'comma-dangle': [
			// последняя запятая в массивах ...
			1,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'never',
				functions: 'never',
			},
		],
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
			},
		],
		// off
		'@typescript-eslint/no-empty-interface': [0], // разрешаем пустые интерфейсы
		'react/react-in-jsx-scope': [0], // разрешаем глобальный реакт
		'no-empty-pattern': [0], // разрешаем пустую деструктуризацию "{}"
		'react/prop-types': [0], // выключаем проверку на типизацию пропсов
		'react/display-name': [0], // разрешаем компонетну возращать калбэк , пример "/src/core/providers/*"
	},
}
