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
  ],
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    node: true,
    jest: true,
    worker: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {}
};