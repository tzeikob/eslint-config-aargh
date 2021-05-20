module.exports = {
  rules: {
    // Enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // Disallow or enforce spaces inside of brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', 'consistent'],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Require brace style
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs'],

    // Require CamelCase
    // https://eslint.org/docs/rules/camelcase
    'camelcase': ['error'],

    // Enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['error', 'always'],

    // Require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'never'],

    // Enforces spacing around commas
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // Comma style
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // Disallow or enforce spaces inside of computed properties
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // Require consistent this
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['off'],

    // Require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'never'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off'],

    // Require or disallow named function expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': ['off'],

    // Enforce the consistent use of either function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['off'],

    // Enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['off'],

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['off'],

    // Disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': ['off'],

    // Enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': ['off'],

    // Require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': ['off'],

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      offsetTernaryExpressions: true,
      ignoredNodes: ['TemplateLiteral *'],
      ignoreComments: false
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off'],

    // Enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', { before: true, after: true }],

    // Enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', 'above'],

    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['off'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 4],
    'max-len': ['error', {
      'code': 120,
      'tabWidth': 4,
      'comments': 120,
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true
    }],
    'max-lines': ['error', {
      'max': 300,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'max-lines-per-function': ['error', {
      'max': 65,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 6],
    'max-statements': ['off'],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['off'],
    'new-cap': ['error'],
    'new-parens': ['error'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-inline-comments': ['error'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': ['error', {
      'groups': [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 0,
      'maxBOF': 0
    }],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-restricted-syntax': ['off'],
    'no-tabs': ['error'],
    'no-ternary': ['error'],
    'no-trailing-spaces': ['error'],
    'no-underscore-dangle': ['off'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': ['off'],
    'object-curly-newline': ['error', { 'minProperties': 6, 'consistent': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
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
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'semi-style': ['error', 'last'],
    'sort-keys': ['off'],
    'sort-vars': ['off'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': ['error', {
      'after': true,
      'before': false
    }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': ['error']
  }
};