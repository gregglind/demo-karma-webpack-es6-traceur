/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	var setup = function() {
	  var tagString = "<h2 id='result'>nothing yet</h2>";
	  var range = document.createRange();
	  var documentFragment = range.createContextualFragment(tagString);
	  var e = document.querySelector("body");
	  e.appendChild(documentFragment);
	};
	setup();
	var A = __webpack_require__(1);
	var el = window.document.querySelector("#result");
	el.style.fontSize = "100px";
	el.style.backgroundColor = "red";
	el.textContent = A.lib2.b;

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	exports.a = 1;
	exports.lib2 = __webpack_require__(2);

	//# sourceMappingURL=<compileOutput>


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	var uncalled_function = (function() {
	  var c = {c: 1 + 2 + 4}.c;
	  return c;
	});
	var string = 'ES6 Forever.  (or at least until es7)';
	exports.b = string;

	//# sourceMappingURL=<compileOutput>


/***/ }
/******/ ])