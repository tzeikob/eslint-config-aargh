module.exports = {
  extends: [
    './rules/style'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {}
};
