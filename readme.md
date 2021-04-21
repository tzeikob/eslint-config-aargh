# eslint-config-aargh #

[![npm version](https://badge.fury.io/js/eslint-config-aargh.svg)](https://badge.fury.io/js/eslint-config-aargh)

This package provides an extensible ESLint base configuration for general purposes.

## How to install ##

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` along with the following eslint plugins,

 * `eslint-plugin-import`,
 * `eslint-plugin-node`,
 * `eslint-plugin-promise`

Install the correct versions of each package, which are listed by the following command.

```sh
npm info "eslint-config-aargh@latest" peerDependencies
```

If you are using **npm 5+**, use can use the following shortcut instead.

```sh
npx install-peerdeps --dev eslint-config-aargh
```

In case you are using **npm < 5** you can run the following command.

```sh
(
  export PKG=eslint-config-aargh;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like so.

```sh
  npm install --save-dev eslint-config-aargh eslint@^#.#.# eslint-plugin-import@^#.#.#
```

### How to use ###

Create an `.eslintrc` file under the root folder of your project and add the following into it.

```javascript
{
  "extends": "aargh",
  "rules": {}
}
```

Use the `rules` property to override the default rules set by this configuration.