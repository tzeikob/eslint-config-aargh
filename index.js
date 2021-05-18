module.exports = {
  extends: [
    './rules/errors',
    './rules/practices',
    './rules/es6',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
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
