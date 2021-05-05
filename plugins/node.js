module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: ['node'],
  rules: {
    'node/no-callback-literal': ['error'],
    'node/no-exports-assign': ['error'],
    'node/no-extraneous-import': ['error', {
      'allowModules': [],
      'resolvePaths': [],
      'tryExtensions': []
    }],
    'node/no-extraneous-require': ['error', {
      'allowModules': [],
      'resolvePaths': [],
      'tryExtensions': []
    }],
    'node/no-missing-import': ['error'],
    'node/no-missing-require': ['error'],
    'node/no-unpublished-bin': ['error'],
    'node/no-unpublished-import': ['error'],
    'node/no-unpublished-require': ['error'],
    'node/no-unsupported-features/es-builtins': ['error'],
    'node/no-unsupported-features/es-syntax': ['error'],
    'node/no-unsupported-features/node-builtins': ['error'],
    'node/process-exit-as-throw': ['off'],
    'node/shebang': ['error'],
    'node/no-deprecated-api': ['error'],
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'never'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': ['error'],
    'node/prefer-promises/fs': ['error']
  }
};
