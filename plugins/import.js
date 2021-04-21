module.exports = {
  env: {
    es6: true
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': ['error', {
      'commonjs': false,
      'amd': true
    }],
    'import/named': ['error'],
    'import/default': ['error'],
    'import/namespace': ['error'],
    'import/no-restricted-paths': ['off'],
    'import/no-absolute-path': ['error', {
      'esmodule': true,
      'commonjs': true,
      'amd': true
    }],
    'import/no-dynamic-require': ['error'],
    'import/no-internal-modules': ['off'],
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-self-import': ['error'],
    'import/no-cycle': ['error'],
    'import/no-useless-path-segments': ['error', {
      'noUselessIndex': false,
      'commonjs': true
    }],
    'import/no-relative-parent-imports': ['error'],
    'import/no-unused-modules': ['off'],
    'import/export': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-deprecated': ['error'],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': false,
      'optionalDependencies': true,
      'peerDependencies': true,
      'bundledDependencies': true
    }],
    'import/no-mutable-exports': ['error'],
    'import/unambiguous': ['off'],
    'import/no-commonjs': ['off'],
    'import/no-amd': ['error'],
    'import/no-nodejs-modules': ['off'],
    'import/first': ['error'],
    'import/exports-last': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-namespace': ['off'],
    'import/extensions': ['error', 'never'],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],
    'import/newline-after-import': ['error', {
      'count': 1
    }],
    'import/prefer-default-export': ['off'],
    'import/max-dependencies': ['off'],
    'import/no-unassigned-import': ['error'],
    'import/no-named-default': ['error'],
    'import/no-default-export': ['off'],
    'import/no-named-export': ['off'],
    'import/no-anonymous-default-export': ['error'],
    'import/group-exports': ['error'],
    'dynamic-import-chunkname': ['off']
  }
};