module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'all',
      'ignoreRestSiblings': false,
      'argsIgnorePattern': '^_',
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.{js,ts}',
          '**/*.spec.{ts,tsx}',
          '**/*.stories.{ts,tsx}',
        ],
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'no-unused-vars': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    // FixMe https://github.com/yannickcr/eslint-plugin-react/issues/1846
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        paths: ['./src', './node_modules'],
      },
    },
  },
}
