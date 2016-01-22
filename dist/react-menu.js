(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Menu"] = factory(require("react"));
	else
		root["Menu"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var React = __webpack_require__(1);
	var Menu = __webpack_require__(2);
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var React = __webpack_require__(1);
	
	var Menu = React.createClass({
		displayName: 'Menu',
	
		getInitialState: function getInitialState() {
			return { focused: 0 };
		},
	
		clicked: function clicked(index) {
			this.setState({ focused: index });
		},
	
		render: function render() {
			var self = this;
	
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					null,
					this.props.items.map(function (m, index) {
						var style = '';
	
						if (self.state.focused === index) {
							style = 'focused';
						}
	
						return React.createElement(
							'li',
							{ className: style, onClick: self.clicked.bind(self, index) },
							m
						);
					})
				)
			);
		}
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-menu.js.map