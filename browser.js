module.exports = {
  extends: './index',
  env: {
    browser: true
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  rules: {}
};