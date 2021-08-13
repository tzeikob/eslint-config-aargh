module.exports = {
  extends: './index',
  rules: {
    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'all',
      caughtErrors: 'all',
      argsIgnorePattern: 'next',
      ignoreRestSiblings: false
    }]
  }
};