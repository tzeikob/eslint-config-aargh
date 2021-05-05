module.exports = {
  env: {
    es6: true
  },
  plugins: ['promise'],
  rules: {
    'promise/catch-or-return': ['error'],
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/always-return': ['off'],
    'promise/no-native': ['off'],
    'promise/no-nesting': ['error'],
    'promise/no-promise-in-callback': ['warn'],
    'promise/no-callback-in-promise': ['off'],
    'promise/avoid-new': ['off'],
    'promise/no-new-statics': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/valid-params': ['error'],
    'promise/prefer-await-to-then': ['off'],
    'promise/prefer-await-to-callbacks': ['off']
  }
};
