module.exports = {
  extends: [
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/practices',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './plugins/promise',
    './plugins/node',
    './plugins/import'
  ].map(require.resolve),
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {}
};
