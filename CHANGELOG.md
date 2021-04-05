# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/webpack-contrib/node-loader/compare/v1.0.3...v2.0.0) (2021-04-05)


### ⚠ BREAKING CHANGES

* minimum supported webpack version is `5`

* dropped webpack@4 ([#33](https://github.com/webpack-contrib/node-loader/issues/33)) ([de9d1a5](https://github.com/webpack-contrib/node-loader/commit/de9d1a5a2ec39868217d03569352811fc0df1a8f))

### [1.0.3](https://github.com/webpack-contrib/node-loader/compare/v1.0.2...v1.0.3) (2021-04-05)


### Bug Fixes

* concat directory separators instead of "/" to make it work on Windows [#39](https://github.com/webpack-contrib/node-loader/issues/39) ([#40](https://github.com/webpack-contrib/node-loader/issues/40)) ([3eb7041](https://github.com/webpack-contrib/node-loader/commit/3eb7041089b2f17b7125aba38670d63166b9a5c9))

### [1.0.2](https://github.com/webpack-contrib/node-loader/compare/v1.0.1...v1.0.2) (2020-10-09)

### Chore

* update `schema-utils`

### [1.0.1](https://github.com/webpack-contrib/node-loader/compare/v1.0.0...v1.0.1) (2020-07-28)


### Bug Fixes

* compatibility with `electron` ([#27](https://github.com/webpack-contrib/node-loader/issues/27)) ([9e32a3c](https://github.com/webpack-contrib/node-loader/commit/9e32a3cc46c4d846d0c4b1c76a5b29d60ad83929))

### [1.0.0](https://github.com/webpack-contrib/node-loader/compare/v0.6.0...v1.0.0) (2020-06-26)

### ⚠ BREAKING CHANGES

* minimum supported Node.js version is `10.13`
* minimum supported `webpack` version is `4`

### Features

* support webpack 5
* `flags` option ([#20](https://github.com/webpack-contrib/node-loader/issues/20)) ([afc43f8](https://github.com/webpack-contrib/node-loader/commit/afc43f80046402774037a8c0de5e513f2795ffa1))
* `name` option ([#20](https://github.com/webpack-contrib/node-loader/issues/20)) ([afc43f8](https://github.com/webpack-contrib/node-loader/commit/afc43f80046402774037a8c0de5e513f2795ffa1))

### Fixes

* copy `.node` files to the build directory
* do not put absolute paths in the bundle file (no problems with `[contenthash]`)

# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
