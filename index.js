module.exports = {
  extends: [
    'eslint:recommended'
  ],
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    es6: true,
    node: true,
    commonjs: true,
    mongo: true,
    mocha: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    // Possible Errors
    'for-direction': ['error'],
    'getter-return': ['error'],
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error'],
    'no-constant-condition': ['error'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': [
      'error',
      'all',
      { 'nestedBinaryExpressions': false }
    ],
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
    'no-unsafe-negation': [
      'error',
      { 'enforceForOrderingRelations': true }
    ],
    'require-atomic-updates': ['off'],
    'use-isnan': ['error'],
    'valid-typeof': [
      'error',
      { 'requireStringLiterals': true }
    ],

    // Best Practices
    'accessor-pairs': ['error'],
    'array-callback-return': ['error'],
    'block-scoped-var': ['off'],
    'class-methods-use-this': ['off'],
    'complexity': ['off'],
    'consistent-return': ['error'],
    'curly': ['error', 'all'],
    'default-case': ['error'],
    'default-param-last': ['error'],
    'dot-location': ['error', 'property'],
    'dot-notation': [
      'error',
      { 'allowKeywords': true }
    ],
    'eqeqeq': ['error'],
    'grouped-accessor-pairs': ['error', 'setBeforeGet'],
    'guard-for-in': ['error'],
    'max-classes-per-file': ['error', 1],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-constructor-return': ['error'],
    'no-div-regex': ['error'],
    'no-else-return': ['off'],
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
    'yoda': ['error'],

    // Strict
    'strict': ['off'],

    // Variables
    'init-declarations': ['off'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['off'],
    'no-shadow': ['off'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['off'],
    'no-unused-vars': [
      'error',
      { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false, 'caughtErrors': 'all' }
    ],
    'no-use-before-define': ['error'],

    // Node.js and CommonJS
    'callback-return': ['off'],
    'global-require': ['error'],
    'handle-callback-err': ['error', 'error'],
    'no-buffer-constructor': ['error'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['off'],
    'no-process-exit': ['off'],
    'no-restricted-modules': ['off'],
    'no-sync': ['error'],

    // Stylistic Issues
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error'],
    'capitalized-comments': ['error'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      { 'before': false, 'after': true }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      { 'enforceForClassMembers': true }
    ],
    'consistent-this': ['error', 'that'],
    'eol-last': ['error'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off'],
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'],
    'function-call-argument-newline': ['off'],
    'function-paren-newline': ['off'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
        'outerIIFEBody': 1,
        'MemberExpression': 1,
        'FunctionDeclaration': {
          'parameters': 1,
          'body': 1
        },
        'FunctionExpression': {
          'parameters': 1,
          'body': 1
        },
        'CallExpression': {
          'arguments': 1
        },
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': false,
        'ignoredNodes': ['TemplateLiteral *'],
        'ignoreComments': false
      }
    ],
    'jsx-quotes': ['off'],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'line-comment-position': ['error', 'above'],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['off'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 4],
    'max-len': [
      'error', {
        'code': 120,
        'tabWidth': 4,
        'comments': 120,
        'ignoreComments': false,
        'ignoreTrailingComments': false,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'max-lines': [
      'error', {
        'max': 300,
        'skipBlankLines': true,
        'skipComments': true
      }
    ],
    'max-lines-per-function': [
      'error', {
        'max': 65,
        'skipBlankLines': true,
        'skipComments': true
      }
    ],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 6],
    'max-statements': ['off'],
    'max-statements-per-line': [
      'error', {
        'max': 1
      }
    ],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['off'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'newline-per-chained-call': [
      'error', {
        'ignoreChainWithDepth': 4
      }
    ],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-inline-comments': ['error'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': [
      'error', {
        'groups': [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        'allowSamePrecedence': true
      }
    ],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
      'error', {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
      }
    ],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': [
      'error', {
        'allowForLoopAfterthoughts': true
      }
    ],
    'no-restricted-syntax': ['off'],
    'no-tabs': ['error'],
    'no-ternary': ['error'],
    'no-trailing-spaces': ['error'],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': [
      'error', {
        'minProperties': 6,
        'consistent': true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error', {
        'allowAllPropertiesOnSameLine': true
      }
    ],
    'one-var': ['off'],
    'one-var-declaration-per-line': ['off'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'none'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['off'],
    'prefer-exponentiation-operator': ['error'],
    'prefer-object-spread': ['error'],
    'quote-props': ['off'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': [
      'error', {
        'before': false,
        'after': true
      }
    ],
    'semi-style': ['error', 'last'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error', {
        'anonymous': 'always',
        'named': 'always',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error', {
        'words': true,
        'nonwords': false
      }
    ],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': [
      'error', {
        'after': true,
        'before': false
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': ['error'],

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error', {
        'before': true,
        'after': true
      }
    ],
    'constructor-super': ['error'],
    'generator-star-spacing': [
      'error', {
        'before': true,
        'after': false
      }
    ],
    'no-class-assign': ['error'],
    'no-confusing-arrow': ['off'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': [
      'error',
      { 'includeExports': true }
    ],
    'no-new-symbol': ['error'],
    'no-restricted-imports': ['off'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': [
      'error',
      { 'enforceForClassMembers': true }
    ],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': [
      'error',
      { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }
    ],
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
    'yield-star-spacing': [
      'error',
      { 'before': false, 'after': true }
    ]
  }
};
