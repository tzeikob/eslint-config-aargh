module.exports = {
  extends: [
    './rules/errors',
    './rules/practices',
    './rules/strict',
    './rules/variables',
    './rules/style',
    './rules/es6',
    './rules/node',
    './rules/promise',
    './rules/import'
  ].map(require.resolve),
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    node: true,
    worker: true,
    es2021: true
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {}
};