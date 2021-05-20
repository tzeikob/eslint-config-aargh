module.exports = {
  extends: [
    './rules/errors',
    './rules/practices',
    './rules/strict',
    './rules/variables',
    './rules/style',
    './rules/es6',
    './rules/node',
    './plugins/promise',
    './plugins/node',
    './plugins/import'
  ].map(require.resolve),
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    node: true,
    amd: true,
    worker: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {}
};
