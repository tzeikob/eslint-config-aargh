module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': ['error'],
    'capitalized-comments': ['error'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never', { 'enforceForClassMembers': true }],
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
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'MemberExpression': 1,
      'FunctionDeclaration': { 'parameters': 1, 'body': 1 },
      'FunctionExpression': { 'parameters': 1, 'body': 1 },
      'CallExpression': { 'arguments': 1 },
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1,
      'flatTernaryExpressions': false,
      'ignoredNodes': ['TemplateLiteral *'],
      'ignoreComments': false
    }],
    'jsx-quotes': ['off'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
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