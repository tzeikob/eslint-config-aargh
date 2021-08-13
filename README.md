[![npm version](https://img.shields.io/npm/v/eslint-config-aargh.svg)](https://www.npmjs.com/package/eslint-config-aargh)
[![downloads](https://img.shields.io/npm/dm/eslint-config-aargh.svg)](https://www.npmjs.com/package/eslint-config-aargh)

![AARGH](./banner.png)

# eslint-config-aargh

This package provides a strongly opinionated eslint configuration for seriously taken cartoonish javascript development.

## How to install

Our default export contains all of the ESLint rules, including ECMAScript 6+, so it requires the eslint package along with the following eslint plugins:

 * eslint-plugin-import
 * eslint-plugin-node
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

You can add rules into the `rules` property to override any default rules set by the configuration.

## How to use it for more specific environments

Currently the aargh config is supporting the following entries:

* `aargh/express`: a configuration for express based apps
* `aargh/browser`: a configuration for browser based apps

All entries are based on the default configuration `aargh` extending and overriding rules and settings with respect to the corresponding environment.

For instance if you want to lint an express based project you can extend in your `.eslintrc` like so:

```json
{
  "extends": ["aargh/express"],
  "rules": {}
}
```