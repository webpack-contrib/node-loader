/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {
	return "try {process.dlopen(" + JSON.stringify(this.resourcePath) + ", module.exports); } catch(e) {" +
		"throw new Error('Cannot open ' + " + JSON.stringify(this.resourcePath) + " + ': ' + e);}";
}