module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'constructor-super': ['error'],
    'generator-star-spacing': ['error', {
      'before': true,
      'after': false
    }],
    'no-class-assign': ['error'],
    'no-confusing-arrow': ['off'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': ['error', { 'includeExports': true }],
    'no-new-symbol': ['error'],
    'no-restricted-imports': ['off'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error', { 'enforceForClassMembers': true }],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error', { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }],
    'prefer-destructuring': ['off'],
    'prefer-numeric-literals': ['off'],
    'prefer-rest-params': ['off'],
    'prefer-spread': ['off'],
    'prefer-template': ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['off'],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', { 'before': false, 'after': true }]
  }
};