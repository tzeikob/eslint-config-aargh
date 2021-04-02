module.exports = {
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  env: {
    es6: true,
    node: true,
    commonjs: true,
    mongo: true,
    mocha: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  }
}