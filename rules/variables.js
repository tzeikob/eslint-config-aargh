module.exports = {
  rules: {
    'init-declarations': ['off'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['off'],
    'no-shadow': ['off'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['off'],
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': false,
      'caughtErrors': 'all'
    }],
    'no-use-before-define': ['error']
  }
};
