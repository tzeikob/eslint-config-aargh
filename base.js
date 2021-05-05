module.exports = {
  extends: [
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/practices',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
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
  rules: {}
};
