/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function nodeLoader() {
  return (
    `try {global.process.dlopen(module, ${JSON.stringify(
      this.resourcePath
    )}); } catch(e) {` +
    `throw new Error('node-loader: Cannot open ' + ${JSON.stringify(
      this.resourcePath
    )} + ': ' + e);}`
  );
};
