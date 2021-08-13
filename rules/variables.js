const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // Disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow labels that are variables names
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // Disallow shadowing of restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow undeclared variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow initializing to undefined
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // Disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'all',
      caughtErrors: 'all',
      ignoreRestSiblings: false
    }],

    // Disallow early use
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error'
  }
};