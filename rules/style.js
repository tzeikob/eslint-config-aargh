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
    'camelcase': 'error',

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
    'consistent-this': 'off',

    // Require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'never'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // Require or disallow named function expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // Enforce the consistent use of either function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': 'off',

    // Enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': 'off',

    // Enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'off',

    // Disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // Enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

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
    'jsx-quotes': 'off',

    // Enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', { before: true, after: true }],

    // Enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ['error', 'above'],

    // Enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false
    }],

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always'],

    // Enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['error', { max: 4 }],

    // Εnforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', {
      code: 100,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    // Enforce a maximum file length
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // Enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': ['error', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true
    }],

    // Enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', { max: 4 }],

    // Enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': ['error', { max: 6 }],

    // Enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // Enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // Enforce or disallow newlines between operands of ternary expressions
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true
    }],

    // Require parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // Require a newline after each call in a method chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow Array constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // Disallow continue statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'error',

    // Disallow if statements as the only statement in else blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: true
    }],

    // Disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // Disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],

    // Disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow Object constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Disallow specified syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error', 'ForInStatement', 'ForOfStatement'],

    // Disallow all tabs
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // Disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],

    // Disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', {
      allowAfterThis: false,
      allowAfterSuper: false,
      allowAfterThisConstructor: false,
      enforceInMethodNames: true,
      allowFunctionParams: false
    }],

    // Disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'error',

    // Disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // Enforce consistent line breaks after opening and before closing braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['error', {
      minProperties: 6,
      multiline: true,
      consistent: true
    }],

    // Enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    // Enforce variables to be declared either together or separately in functions
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // Require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Enforce consistent linebreak style for operators
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

    // Require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // Enforce spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // Require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // Variable sorting
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // Require Or disallow space before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ['error', 'always'],

    // Require or disallow a space before function parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }],

    // Disallow or enforce spaces inside of parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': ['error'],

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    // Requires or disallows a whitespace (space or tab) beginning a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow the Unicode Byte Order Mark (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // Require Regex literals to be wrapped
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off'
  }
};