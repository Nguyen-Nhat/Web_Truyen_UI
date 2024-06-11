module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		"react/prop-types": "off",
		'react-hooks/exhaustive-deps': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'camelcase': ['error', { properties: 'always' }],
		'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
		'quotes': ['error', 'single',{ allowTemplateLiterals: true }],
		'semi': ['error', 'always'],
		'no-unused-vars': ['warn'],
		'no-console': ['warn'],
		'array-bracket-spacing': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'block-spacing': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-multi-spaces': ['error'],
		'spaced-comment': ['error', 'always', { markers: ['/'] }],
		'no-trailing-spaces': ['error'],
		'space-infix-ops': ['error'],
		'space-in-parens': ['error', 'never'],
		'space-before-blocks': ['error', 'always'],
	},
	overrides: [
        {
            files: ['*.jsx', '*.js'],
        },
    ],
}