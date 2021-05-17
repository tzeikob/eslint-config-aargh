module.exports = {
  rules: {
    // Enforce "for" loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    "for-direction": ["error"],

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    "getter-return": ["error"],

    // Disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    "no-async-promise-executor": ["error"],

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": ["error"],

    // Disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    "no-compare-neg-zero": ["error"],

    // Disallow assignment operators in conditional statements
    // https://eslint.org/docs/rules/no-cond-assign
    "no-cond-assign": ["error", "always"],

    // Disallow the use of console
    // https://eslint.org/docs/rules/no-console
    "no-console": ["error"],

    // Disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    "no-constant-condition": ["error"],

    // Disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    "no-control-regex": ["error"],

    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': ['error', 'all', { 'nestedBinaryExpressions': false }],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-import-assign': ['error'],
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-misleading-character-class': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-setter-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error', { 'enforceForOrderingRelations': true }],
    'require-atomic-updates': ['off'],
    'use-isnan': ['error'],
    'valid-typeof': ['error', { 'requireStringLiterals': true }]
  }
};
