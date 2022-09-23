const path = require('path');

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true
	},
	globals: {
		vue: true,
		uni: true,
		wx: true,
		window: true
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:prettier/recommended'
	],
	settings: {
		'import/extensions': ['.js', '.vue'],
		'import/resolver': {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		}
	},
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
		ecmaVersion: 6
	},
	plugins: ['prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { args: 'none' }],
		'import/extensions': 'off',
		'global-require': 'off',
		'import/no-unresolved': [
			'error',
			{
				ignore: ['^./'] // 忽略./路径使用的异常
			}
		]
	}
};
