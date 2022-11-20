module.exports = {
  "*.js": ["prettier --write", "eslint --fix", "cspell"],
  "*.{json,md,yml,css,ts}": ["prettier --write"],
};
