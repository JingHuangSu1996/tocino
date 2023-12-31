const ERROR = 'error';

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['jsx-a11y'],
  rules: {
    'default-case': ERROR,
    'default-case-last': ERROR,
    'dot-notation': [
      ERROR,
      {
        allowKeywords: false,
      },
    ],
    'no-confusing-arrow': ERROR,
    'no-duplicate-imports': ERROR,
    'no-empty-function': ERROR,
    'no-negated-condition': ERROR,
    'no-self-compare': ERROR,
    'no-template-curly-in-string': ERROR,
    'jsx-a11y/no-autofocus': 0,
  },
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['node_modules', 'plop-templates', 'packages/design-tokens', 'packages/css'],
};
