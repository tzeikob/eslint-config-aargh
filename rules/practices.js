module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': ['error'],

    // Enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', {
      checkForEach: true
    }],

    // Treat var as block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': ['error'],

    // Enforce that class methods utilize this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error'],

    // Limit cyclomatic complexity
    // https://eslint.org/docs/rules/complexity
    'complexity': ['error', {
      max: 10
    }],

    // Require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ['error'],

    // Require Following Curly Brace Conventions
    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // Require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error'],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": ["error"],

    // Enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': ['error'],

    // Enforce newline before and after dot
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // Require dot notation
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error'],

    // Require === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', "always"],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],

    // Require guarding for-in
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': ['error'],

    // Enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Disallow use of alert
    // https://eslint.org/docs/rules/no-alert
    'no-alert': ['error'],

    // Disallow use of caller/callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': ['error'],

    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': ['error'],

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': ['error'],

    // Disallow regular expressions that look like division
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': ['error'],

    // Disallow return before else
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error'],

    // Disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error'],

    'no-empty-pattern': ['error'],
    'no-eq-null': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': ['off'],
    'no-implicit-globals': ['off'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['off'],
    'no-iterator': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': ['off'],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': ['off'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-restricted-properties': ['off'],
    'no-return-assign': ['error', 'always'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-labels': ['error'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-warning-comments': ['error'],
    'no-with': ['error'],
    'prefer-named-capture-group': ['off'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-regex-literals': ['error'],
    'radix': ['error'],
    'require-await': ['off'],
    'require-unicode-regexp': ['off'],
    'vars-on-top': ['off'],
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error']
  }
};
