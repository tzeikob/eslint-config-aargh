module.exports = {
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.json']
      }
    },
    'import/extensions': ['.js', '.mjs'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(scss|css|less|svg|json)$']
  },
  rules: {
    // Ensures an imported module can be resolved to a module on the local filesystem
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, amd: false }],

    // Verifies that all named imports are part of the set of named exports in the referenced module
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    'import/named': 'error',

    // If a default import is requested, this rule will report if there is no default export in the imported module
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': 'error',

    // Restrict which files can be imported in a given folder
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
    'import/no-absolute-path': ['error', {
      esmodule: true,
      commonjs: true,
      amd: false
    }],

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Use this rule to prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Ensures that there is no resolvable path back to this module via its dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // Use this rule to prevent unnecessary path segments in import and require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', {
      noUselessIndex: true,
      commonjs: true
    }],

    // Use this rule to prevent imports to folders in relative parent paths
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'error',

    // Use this rule to prevent importing packages through relative paths
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',

    // Reports funny business with exports, like repeated exports of names or defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
    'import/export': 'error',

    // Reports use of an exported name as the locally imported name of a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Reports use of an exported name as a property on the default export
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // Reports use of a deprecated name, as indicated by a JSDoc block with a @deprecated tag or TomDoc Deprecated: comment
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
    'import/no-deprecated': 'error',

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: true,
      peerDependencies: true,
      bundledDependencies: true
    }],

    // Forbids the use of mutable exports with var or let
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Reports modules without any exports and individual exports not being statically imported from other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
    'import/no-unused-modules': 'off',

    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // Reports require([string]) function calls
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // Reports require([array], ...) and define([array], ...) function calls at the module scope
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // Forbid the use of Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',

    // Reports the use of import declarations with CommonJS exports in any module except for the main module
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'error',

    // This rule reports any imports that come after non-import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md
    'import/first': 'error',

    // This rule enforces that all exports are declared at the bottom of the file
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
    'import/exports-last': 'error',

    // Reports if a resolved path is imported more than once
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Enforce a convention of not using namespace (a.k.a. "wildcard" *) imports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
    'import/extensions': ['error', 'never'],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    'import/order': ['error', {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      warnOnUnassignedImports: true,
      'newlines-between': 'never'
    }],

    // Enforces having one or more empty lines after the last top-level import statement or require call
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error', { count: 1 }],

    // When there is only a single export from a module, prefer using default export over named export
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Forbid modules to have too many dependencies (import or require statements)
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
    'import/max-dependencies': ['error', { max: 10 }],

    // Forbid unassigned imports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'error',

    // Reports use of a default export as a locally named import
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Prohibit default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // Prohibit named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // Reports if a module's default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',

    // Reports when named exports are not grouped together in a single export declaration
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
    'import/group-exports': 'error',

    // This rule reports any dynamic imports without a webpackChunkName specified in a leading block comment in the proper format
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off'
  }
};