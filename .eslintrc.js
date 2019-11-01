module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': 'warn',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '(^_|_$)',
        ignoreRestSiblings: true
      }
    ]
  },
  plugins: ['prettier']
};
