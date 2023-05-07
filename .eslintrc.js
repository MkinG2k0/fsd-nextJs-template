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
// 		'@feature-sliced/eslint-config/rules/import-order',
		'@feature-sliced/eslint-config/rules/layers-slices',
		//
		// 'plugin:prettier/recommended',
		// test
		// '@feature-sliced', // warn import
	],
	overrides: [],
	parser: '@typescript-eslint/parser',

	plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'promise', 'prettier'],
	rules: {

		indent: [
			// отступы
			'off', // варн в файлах rtqApi
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 'first',
				MemberExpression: 1,
				outerIIFEBody: 1,
				FunctionDeclaration: {parameters: 'first'},
				StaticBlock: {body: 1},
				CallExpression: {arguments: 1},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: true,
			},
		],
		quotes: ['warn', 'single'],
		semi: ['warn', 'never'],
		// test
		// 'import/no-internal-modules': [1], // импорт внутренних слоев FSD // выключаем из за ошибки плагина
		// OFF
		'@typescript-eslint/no-empty-interface': [0], // разрешаем пустые интерфейсы
		'react/react-in-jsx-scope': [0], // разрешаем глобальный реакт
		'no-empty-pattern': [0], // разрешаем пустую деструктуризацию "{}"
		'react/prop-types': [0], // выключаем проверку на типизацию пропсов
		'react/display-name': [0], // разрешаем компонетну возращать калбэк , пример "/src/core/providers/*"
		'no-mixed-spaces-and-tabs': [0], // смешивание табов и пробелов , временно
		// WARN
		'react/jsx-curly-brace-presence': [1, {props: 'always', propElementValues: 'always'}], // фигурные скобки в jsx
		// 'jsx-quotes': [1, 'prefer-single'], // TODO Err prettier
		'max-len': [1, {code: 100, tabWidth: 2, comments: 120}], // Принудительно установите максимальную длину строки
		'prettier/prettier': [1], // отсупы
		'@typescript-eslint/no-empty-function': [1], // пустые функции
		'import/order': [1], // сорировка импортов
		'no-unused-vars': [1], // не используемые переменные
		'comma-dangle': [1, 'always-multiline'], // последняя запятая в массивах ...
		camelcase: [1], // переменные пишутся в стиле camelCase
		curly: [1, 'all'], // запретить if в одну строку
		'dot-notation': [1], // если возможно то читать свойство обьекта через точку "obj.name"
		'new-cap': [1], // конструктор класс с большой буквы
		'no-console': [1], // без консоли "console.log"
		'no-empty': [1], // пустые функции
		'no-floating-decimal': [1], // запретить числа без 0 ".3 -.5"
		'no-implicit-coercion': [1], // явное приведение типов "Number("1")"
		'no-magic-numbers': [1], // TODO? запретить магические числа , нужно завернуть числа в переменные
		'no-mixed-operators': [1], // запретить смешивание операторов
		'no-unneeded-ternary': [1], // Запрещайте троичные операторы, когда существуют более простые альтернативы
		'no-useless-computed-key': [1], // Запретить ненужные вычисляемые ключи свойств в объектах и классах "{['name']:1}"
		'prefer-const': [1], // Требовать const объявления для переменных, которые никогда не переназначаются после объявления
		'prefer-template': [1], // Требовать шаблонные литералы вместо конкатенации строк
		'space-in-parens': [1, 'never'], // Обеспечить согласованный интервал внутри круглых скобок
		'space-before-blocks': [1, 'always'], // Обеспечить согласованный интервал перед блоками
		// ERROR
		'no-param-reassign': [2], // TODO?  запретить переопределение аргуменов функции
		'no-implied-eval': [2], // запретить непреднамеренный eval "setTimeout("alert('Hi!');", 100)"
		eqeqeq: [2], // только 3ое равенство "true === true"
		'no-multi-assign': [2], // запретить множественное присвоение "const foo = bar = 0"
		'default-param-last': [2], // дефолтные парметры функции пишутся в конце
		'max-lines': [2, {max: 100, skipBlankLines: true}], // максимальная длина строк в файле
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
