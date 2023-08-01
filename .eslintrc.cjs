/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react', 'react-refresh'],
	rules: {
		'no-unused-vars': [
			'error',
			{
				varsIgnorePattern: 'React',
			},
		],
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react-refresh/only-export-components': [{ allowConstantExport: true }],
		'react-hooks/exhaustive-deps': 'warn',
	},
}
