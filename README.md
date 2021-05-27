# eslint-config-aargh

[![npm version](https://img.shields.io/npm/v/eslint-config-aargh.svg)](https://www.npmjs.com/package/eslint-config-aargh)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-aargh.svg)](https://www.npmjs.com/package/eslint-config-aargh)

![AARGH](./banner.png)

This package provides a strongly opinionated eslint configuration for seriously taken cartoonish javascript development.

## How to install

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires the eslint package along with the following eslint plugins,

 * eslint-plugin-import,
 * eslint-plugin-node,
 * eslint-plugin-promise

Install the correct versions of each package, which are listed by the following command.

```sh
npm info "eslint-config-aargh@latest" peerDependencies
```

If you are using **npm 5+**, use can use the following shortcut instead.

```sh
npx install-peerdeps --dev eslint-config-aargh
```

In case you are using **npm < 5** you can run the following command,

```sh
(
  export PKG=eslint-config-aargh;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

which produces and runs a command as the following.

```sh
  npm install --save-dev eslint-config-aargh eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-promise@^#.#.#
```

## How to use

Create an `.eslintrc` file under the root folder of your project and add the following lines.

```json
{
  "extends": ["aargh"],
  "rules": {}
}
```

Add rules into the `rules` property to override any default rules set by this configuration.