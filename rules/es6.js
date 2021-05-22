module.exports = {
  rules: {
    // Require braces in arrow function body
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],

    // Require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // Verify calls of super() in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': ['error'],

    // Enforce spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: true, after: false }],

    // Disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': ['error'],

    // Disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['off'],

    // Disallow modifying variables that are declared using const
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': ['error'],

    // Disallow duplicate name in class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': ['error'],

    // Disallow duplicate imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': ['error', { includeExports: true }],

    // Disallow Symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': ['error'],

    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': ['off'],

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
