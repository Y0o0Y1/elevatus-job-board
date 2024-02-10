module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-typescript/base', 'eslint-config-prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
		"@typescript-eslint/naming-convention": "off",
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': "off",
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    "@typescript-eslint/ban-ts-comment": "off",
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always'
      }
    ],
    'max-len': ['error', { code: 200, ignoreComments: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-danger': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'object-curly-newline': 'off'
  },
	"settings": {
    "react": {
      "version": "detect"
    }
  },
	"env": {
    "node": true,
		"browser": true
  }
}
