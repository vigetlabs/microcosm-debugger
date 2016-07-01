module.exports =
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (app, options) {
	  var container = document.createElement('div');
	
	  container.className = "debugger-wrapper";
	
	  document.body.appendChild(container);
	
	  function checkout(transaction) {
	    app.history.checkout(transaction);
	    app.rollforward();
	  }
	
	  function render() {
	    _reactDom2.default.render(_react2.default.createElement(_debugger2.default, { history: app.history, onCheckout: checkout }), container);
	  }
	
	  render();
	
	  app.on('change', render);
	};
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _debugger = __webpack_require__(3);
	
	var _debugger2 = _interopRequireDefault(_debugger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Debugger;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tree = __webpack_require__(4);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _list = __webpack_require__(17);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _style = __webpack_require__(38);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Debugger(_ref) {
	  var history = _ref.history;
	  var onCheckout = _ref.onCheckout;
	
	
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.container },
	    _react2.default.createElement(_tree2.default, { history: history, onNodeClick: onCheckout }),
	    _react2.default.createElement(_list2.default, { history: history })
	  );
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _node = __webpack_require__(5);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tree = __webpack_require__(11);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _style = __webpack_require__(7);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TreeVisual = _react2.default.createClass({
	  displayName: 'TreeVisual',
	  getInitialState: function getInitialState() {
	    return { width: this.getWidth() };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      padX: 40,
	      padY: 40,
	      height: 200,
	      width: 350
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps() {
	    this.setState({ width: this.getWidth() });
	  },
	  getWidth: function getWidth() {
	    return Math.max(this.props.history.size() * 20, this.props.width, this.state ? this.state.width : 0);
	  },
	  getTree: function getTree(history) {
	    var _props = this.props;
	    var height = _props.height;
	    var padX = _props.padX;
	    var padY = _props.padY;
	
	
	    return (0, _tree2.default)({
	      data: history.root,
	      height: height - padY * 2,
	      width: this.state.width - padX * 2
	    });
	  },
	  getCurve: function getCurve(curve, i) {
	    return _react2.default.createElement('path', { key: i, d: curve.connector.path.print() });
	  },
	  scrollIntoView: function scrollIntoView(component) {
	    var el = _reactDom2.default.findDOMNode(component);
	
	    if (el) {
	      el.scrollIntoView(true, { behavior: 'smooth', block: 'end' });
	    }
	  },
	  getNode: function getNode(_ref, i) {
	    var point = _ref.point;
	    var item = _ref.item;
	
	    var active = this.props.history.focus === item;
	
	    return _react2.default.createElement(_node2.default, { key: i,
	      ref: active ? this.scrollIntoView : null,
	      x: point[0] || 0,
	      y: point[1] || 0,
	      item: item,
	      active: active,
	      onHover: this.setFocus,
	      onClick: this.props.onNodeClick });
	  },
	  render: function render() {
	    var history = this.props.history;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: _style2.default.tree },
	      history.size() ? this.renderTree() : null
	    );
	  },
	  renderTree: function renderTree() {
	    var _props2 = this.props;
	    var history = _props2.history;
	    var padX = _props2.padX;
	    var padY = _props2.padY;
	    var height = _props2.height;
	
	
	    var tree = this.getTree(history);
	
	    return _react2.default.createElement(
	      'svg',
	      { ref: 'chart', width: this.state.width, height: height },
	      _react2.default.createElement(
	        'g',
	        { transform: 'translate(' + padX + ',' + padY + ')' },
	        _react2.default.createElement(
	          'g',
	          { fill: 'none', stroke: 'rgba(125, 225, 255, 0.2)' },
	          tree.curves.map(this.getCurve)
	        ),
	        tree.nodes.map(this.getNode)
	      )
	    );
	  }
	});
	
	exports.default = TreeVisual;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(7);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Node = _react2.default.createClass({
	  displayName: 'Node',
	  render: function render() {
	    var _cx;
	
	    var _props = this.props;
	    var item = _props.item;
	    var active = _props.active;
	    var _props$x = _props.x;
	    var x = _props$x === undefined ? 0 : _props$x;
	    var _props$y = _props.y;
	    var y = _props$y === undefined ? 0 : _props$y;
	
	
	    var className = (0, _classnames2.default)(_style2.default.node, (_cx = {}, _defineProperty(_cx, _style2.default.active, active), _defineProperty(_cx, _style2.default.disabled, item.is('disabled')), _defineProperty(_cx, _style2.default.error, item.is('failed')), _defineProperty(_cx, _style2.default.loading, item.is('loading')), _defineProperty(_cx, _style2.default.cancelled, item.is('cancelled')), _cx));
	
	    return _react2.default.createElement(
	      'g',
	      { className: className, transform: 'translate(' + x + ', ' + y + ')', onClick: this.onClick, onKeyDown: this.onKeyDown, tabIndex: '0', role: 'button' },
	      _react2.default.createElement('circle', { r: '10', opacity: '0' }),
	      _react2.default.createElement('circle', { className: _style2.default.ring, r: '3' }),
	      _react2.default.createElement('circle', { className: _style2.default.marker, r: '3' }),
	      _react2.default.createElement(
	        'text',
	        { className: _style2.default.label, dy: '-18', fontSize: '11', textAnchor: 'middle', fill: 'white' },
	        item.behavior.name
	      )
	    );
	  },
	  onKeyDown: function onKeyDown(event) {
	    if (event.key === ' ' || event.key === 'Enter') {
	      this.props.onClick(this.props.item);
	      event.preventDefault();
	    }
	  },
	  onClick: function onClick() {
	    this.props.onClick(this.props.item);
	  }
	});
	
	exports.default = Node;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Colors\n */\n\n@keyframes throb-2-ES1 {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  40% {\n    opacity: 1;\n  }\n\n  70% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n\n.tree-2HTA6 {\n  flex-shrink: 0;\n  flex-grow: 0;\n  overflow: auto;\n}\n\n.tree-2HTA6 svg {\n  background: #112;\n  border: 0;\n  display: block;\n  margin: 0;\n}\n\n.label-1KoKX {\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n  transition: 0.3s all;\n  stroke-width: 0;\n  letter-spacing: 0.2px;\n}\n\n.node-2jNZw {\n  cursor: pointer;\n}\n\n.node-2jNZw:hover,\n.node-2jNZw:focus {\n  outline: none;\n}\n\n.node-2jNZw:hover .label-1KoKX,\n.node-2jNZw:focus .label-1KoKX {\n  opacity: 1;\n}\n\n.ring-M7Sio,\n.marker-3rIhM {\n  fill: #112;\n  r: 4;\n  stroke: transparent;\n  transform: translateZ(0);\n}\n\n.marker-3rIhM {\n  fill: #7bfde9;\n  transition: 0.3s all;\n}\n\n.node-2jNZw:hover .ring-M7Sio,\n.node-2jNZw:focus .ring-M7Sio,\n.node-2jNZw.active-vxtjG .ring-M7Sio {\n  stroke: #7bfde9;\n  stroke-width: 1.5;\n  r: 9;\n  transition: 0.3s all;\n}\n\n.node-2jNZw.active-vxtjG .ring-M7Sio {\n  stroke: #e39;\n}\n\n.node-2jNZw.loading-fdUGv .marker-3rIhM {\n  fill: #fe4;\n}\n\n.node-2jNZw.loading-fdUGv .ring-M7Sio {\n  animation: throb-2-ES1 1.5s infinite;\n  stroke: #fe4;\n}\n\n.node-2jNZw.error-35cXm .marker-3rIhM {\n  fill: #f55;\n}\n\n.node-2jNZw.error-35cXm .ring-M7Sio {\n  stroke: #f55;\n}\n\n.node-2jNZw.disabled-1KCkF .marker-3rIhM {\n  fill: #445;\n}\n\n.node-2jNZw.cancelled-2-lcp .marker-3rIhM {\n  fill: #f84;\n}\n\n", ""]);
	
	// exports
	exports.locals = {
		"tree": "tree-2HTA6",
		"label": "label-1KoKX",
		"node": "node-2jNZw",
		"ring": "ring-M7Sio",
		"marker": "marker-3rIhM",
		"active": "active-vxtjG",
		"loading": "loading-fdUGv",
		"throb": "throb-2-ES1",
		"error": "error-35cXm",
		"disabled": "disabled-1KCkF",
		"cancelled": "cancelled-2-lcp"
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _connector = __webpack_require__(12);
	
	var _connector2 = _interopRequireDefault(_connector);
	
	var _linear = __webpack_require__(15);
	
	var _linear2 = _interopRequireDefault(_linear);
	
	var _ops = __webpack_require__(14);
	
	var _treeUtils = __webpack_require__(16);
	
	exports['default'] = function (_ref) {
	  var data = _ref.data;
	  var width = _ref.width;
	  var height = _ref.height;
	  var children = _ref.children;
	  var tension = _ref.tension;
	
	  if (!children) {
	    children = function (x) {
	      return x.children;
	    };
	  }
	  var tree = (0, _treeUtils.buildTree)(data, children);
	  var levels = (0, _treeUtils.treeHeight)(tree);
	  var maxHeights = (0, _treeUtils.setHeight)(tree);
	  var hspace = width / (levels - 1);
	  var hscale = (0, _linear2['default'])([0, levels - 1], [0, width]);
	  var vscales = (0, _ops.range)(0, levels).map(function (level) {
	    var availableHeight = Math.sqrt(level / (levels - 1)) * height;
	    var top = (height - availableHeight) / 2;
	    var bottom = top + availableHeight;
	    var maxHeight = level > 0 ? maxHeights[level] + maxHeights[level - 1] : maxHeights[level];
	    if (maxHeight === 0) {
	      return function (x) {
	        return height / 2;
	      };
	    } else {
	      return (0, _linear2['default'])([0, maxHeight], [top, bottom]);
	    }
	  });
	
	  var position = function position(node) {
	    var level = node.level;
	    var vscale = vscales[level];
	    return [hscale(level), vscale(node.height_)];
	  };
	
	  var i = -1;
	  var connectors = (0, _treeUtils.collect)(tree, function (parent, child) {
	    i += 1;
	    child.height_ = child.height + parent.height;
	    return {
	      connector: (0, _connector2['default'])({
	        start: position(parent),
	        end: position(child),
	        tension: tension
	      }),
	      index: i,
	      item: {
	        start: parent.item,
	        end: child.item
	      }
	    };
	  });
	  var childNodes = (0, _treeUtils.collect)(tree, function (parent, child) {
	    return {
	      point: position(child),
	      item: child.item
	    };
	  });
	  var rootNode = {
	    point: position(tree),
	    item: tree.item
	  };
	
	  return {
	    curves: connectors,
	    nodes: [rootNode].concat(childNodes)
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _path = __webpack_require__(13);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _ops = __webpack_require__(14);
	
	exports['default'] = function (_ref) {
	  var _Path$moveto$lineto$curveto, _Path$moveto, _Path;
	
	  var start = _ref.start;
	  var end = _ref.end;
	  var tension = _ref.tension;
	
	  if (tension == null) {
	    tension = 0.05;
	  }
	
	  var _start = _slicedToArray(start, 2);
	
	  var a = _start[0];
	  var b = _start[1];
	
	  var _end = _slicedToArray(end, 2);
	
	  var c = _end[0];
	  var d = _end[1];
	
	  var length = (c - a) * tension;
	  var mid1 = [a + length, b];
	  var mid2 = [c - length, d];
	
	  return {
	    path: (_Path$moveto$lineto$curveto = (_Path$moveto = (_Path = (0, _path2['default'])()).moveto.apply(_Path, _toConsumableArray(start))).lineto.apply(_Path$moveto, mid1).curveto(a + 5 * length, b, c - 5 * length, d, c - length, d)).lineto.apply(_Path$moveto$lineto$curveto, _toConsumableArray(end)),
	    centroid: (0, _ops.average)([start, end])
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var Path = function Path(init) {
	  var _instructions = init || [];
	
	  var push = function push(arr, el) {
	    var copy = arr.slice(0, arr.length);
	    copy.push(el);
	    return copy;
	  };
	
	  var areEqualPoints = function areEqualPoints(_ref, _ref3) {
	    var _ref2 = _slicedToArray(_ref, 2);
	
	    var a1 = _ref2[0];
	    var b1 = _ref2[1];
	
	    var _ref32 = _slicedToArray(_ref3, 2);
	
	    var a2 = _ref32[0];
	    var b2 = _ref32[1];
	    return a1 === a2 && b1 === b2;
	  };
	
	  var trimZeros = function trimZeros(string, char) {
	    var l = string.length;
	    while (string.charAt(l - 1) === '0') {
	      l = l - 1;
	    }
	    if (string.charAt(l - 1) === '.') {
	      l = l - 1;
	    }
	    return string.substr(0, l);
	  };
	
	  var round = function round(number, digits) {
	    var str = number.toFixed(digits);
	    return trimZeros(str);
	  };
	
	  var printInstrunction = function printInstrunction(_ref4) {
	    var command = _ref4.command;
	    var params = _ref4.params;
	
	    var numbers = params.map(function (param) {
	      return round(param, 6);
	    });
	    return command + ' ' + numbers.join(' ');
	  };
	
	  var point = function point(_ref5, _ref6) {
	    var command = _ref5.command;
	    var params = _ref5.params;
	
	    var _ref62 = _slicedToArray(_ref6, 2);
	
	    var prevX = _ref62[0];
	    var prevY = _ref62[1];
	
	    switch (command) {
	      case 'M':
	        return [params[0], params[1]];
	      case 'L':
	        return [params[0], params[1]];
	      case 'H':
	        return [params[0], prevY];
	      case 'V':
	        return [prevX, params[0]];
	      case 'Z':
	        return null;
	      case 'C':
	        return [params[4], params[5]];
	      case 'S':
	        return [params[2], params[3]];
	      case 'Q':
	        return [params[2], params[3]];
	      case 'T':
	        return [params[0], params[1]];
	      case 'A':
	        return [params[5], params[6]];
	    }
	  };
	
	  var verbosify = function verbosify(keys, f) {
	    return function (a) {
	      var args = typeof a === 'object' ? keys.map(function (k) {
	        return a[k];
	      }) : arguments;
	      return f.apply(null, args);
	    };
	  };
	
	  var plus = function plus(instruction) {
	    return Path(push(_instructions, instruction));
	  };
	
	  return {
	    moveto: verbosify(['x', 'y'], function (x, y) {
	      return plus({
	        command: 'M',
	        params: [x, y]
	      });
	    }),
	    lineto: verbosify(['x', 'y'], function (x, y) {
	      return plus({
	        command: 'L',
	        params: [x, y]
	      });
	    }),
	    hlineto: verbosify(['x'], function (x) {
	      return plus({
	        command: 'H',
	        params: [x]
	      });
	    }),
	    vlineto: verbosify(['y'], function (y) {
	      return plus({
	        command: 'V',
	        params: [y]
	      });
	    }),
	    closepath: function closepath() {
	      return plus({
	        command: 'Z',
	        params: []
	      });
	    },
	    curveto: verbosify(['x1', 'y1', 'x2', 'y2', 'x', 'y'], function (x1, y1, x2, y2, x, y) {
	      return plus({
	        command: 'C',
	        params: [x1, y1, x2, y2, x, y]
	      });
	    }),
	    smoothcurveto: verbosify(['x2', 'y2', 'x', 'y'], function (x2, y2, x, y) {
	      return plus({
	        command: 'S',
	        params: [x2, y2, x, y]
	      });
	    }),
	    qcurveto: verbosify(['x1', 'y1', 'x', 'y'], function (x1, y1, x, y) {
	      return plus({
	        command: 'Q',
	        params: [x1, y1, x, y]
	      });
	    }),
	    smoothqcurveto: verbosify(['x', 'y'], function (x, y) {
	      return plus({
	        command: 'T',
	        params: [x, y]
	      });
	    }),
	    arc: verbosify(['rx', 'ry', 'xrot', 'largeArcFlag', 'sweepFlag', 'x', 'y'], function (rx, ry, xrot, largeArcFlag, sweepFlag, x, y) {
	      return plus({
	        command: 'A',
	        params: [rx, ry, xrot, largeArcFlag, sweepFlag, x, y]
	      });
	    }),
	    print: function print() {
	      return _instructions.map(printInstrunction).join(' ');
	    },
	    points: function points() {
	      var ps = [];
	      var prev = [0, 0];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = _instructions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var instruction = _step.value;
	
	          var p = point(instruction, prev);
	          prev = p;
	          if (p) {
	            ps.push(p);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return ps;
	    },
	    instructions: function instructions() {
	      return _instructions.slice(0, _instructions.length);
	    },
	    connect: function connect(path) {
	      var ps = this.points();
	      var last = ps[ps.length - 1];
	      var first = path.points()[0];
	      var newInstructions = path.instructions().slice(1);
	      if (!areEqualPoints(last, first)) {
	        newInstructions.unshift({
	          command: "L",
	          params: first
	        });
	      }
	      return Path(this.instructions().concat(newInstructions));
	    }
	  };
	};
	
	exports['default'] = function () {
	  return Path();
	};
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var sum = function sum(xs) {
	  return xs.reduce(function (a, b) {
	    return a + b;
	  }, 0);
	};
	
	var min = function min(xs) {
	  return xs.reduce(function (a, b) {
	    return Math.min(a, b);
	  });
	};
	
	var max = function max(xs) {
	  return xs.reduce(function (a, b) {
	    return Math.max(a, b);
	  });
	};
	
	var sumBy = function sumBy(xs, f) {
	  return xs.reduce(function (a, b) {
	    return a + f(b);
	  }, 0);
	};
	
	var minBy = function minBy(xs, f) {
	  return xs.reduce(function (a, b) {
	    return Math.min(a, f(b));
	  }, Infinity);
	};
	
	var maxBy = function maxBy(xs, f) {
	  return xs.reduce(function (a, b) {
	    return Math.max(a, f(b));
	  }, -Infinity);
	};
	
	var plus = function plus(_ref, _ref3) {
	  var _ref2 = _slicedToArray(_ref, 2);
	
	  var a = _ref2[0];
	  var b = _ref2[1];
	
	  var _ref32 = _slicedToArray(_ref3, 2);
	
	  var c = _ref32[0];
	  var d = _ref32[1];
	  return [a + c, b + d];
	};
	
	var minus = function minus(_ref4, _ref5) {
	  var _ref42 = _slicedToArray(_ref4, 2);
	
	  var a = _ref42[0];
	  var b = _ref42[1];
	
	  var _ref52 = _slicedToArray(_ref5, 2);
	
	  var c = _ref52[0];
	  var d = _ref52[1];
	  return [a - c, b - d];
	};
	
	var times = function times(k, _ref6) {
	  var _ref62 = _slicedToArray(_ref6, 2);
	
	  var a = _ref62[0];
	  var b = _ref62[1];
	  return [k * a, k * b];
	};
	
	var length = function length(_ref7) {
	  var _ref72 = _slicedToArray(_ref7, 2);
	
	  var a = _ref72[0];
	  var b = _ref72[1];
	  return Math.sqrt(a * a + b * b);
	};
	
	var sumVectors = function sumVectors(xs) {
	  return xs.reduce(plus, [0, 0]);
	};
	
	var average = function average(points) {
	  return times(1 / points.length, points.reduce(plus));
	};
	
	var onCircle = function onCircle(r, angle) {
	  return times(r, [Math.sin(angle), -Math.cos(angle)]);
	};
	
	var enhance = function enhance(compute, curve) {
	  var obj = compute || {};
	  for (var key in obj) {
	    var method = obj[key];
	    curve[key] = method(curve.index, curve.item, curve.group);
	  }
	  return curve;
	};
	
	var range = function range(a, b, inclusive) {
	  var result = [];
	  for (var i = a; i < b; i++) {
	    result.push(i);
	  }
	  if (inclusive) {
	    result.push(b);
	  }
	  return result;
	};
	
	var mapObject = function mapObject(obj, f) {
	  var result = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var k = _step.value;
	
	      var v = obj[k];
	      result.push(f(k, v));
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator["return"]) {
	        _iterator["return"]();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return result;
	};
	
	var pairs = function pairs(obj) {
	  return mapObject(obj, function (k, v) {
	    return [k, v];
	  });
	};
	
	var id = function id(x) {
	  return x;
	};
	
	exports.sum = sum;
	exports.min = min;
	exports.max = max;
	exports.sumBy = sumBy;
	exports.minBy = minBy;
	exports.maxBy = maxBy;
	exports.plus = plus;
	exports.minus = minus;
	exports.times = times;
	exports.id = id;
	exports.length = length;
	exports.sumVectors = sumVectors;
	exports.average = average;
	exports.onCircle = onCircle;
	exports.enhance = enhance;
	exports.range = range;
	exports.mapObject = mapObject;
	exports.pairs = pairs;
	exports["default"] = { sum: sum, min: min, max: max, sumBy: sumBy, minBy: minBy, maxBy: maxBy, plus: plus, minus: minus, times: times, id: id,
	  length: length, sumVectors: sumVectors, average: average, onCircle: onCircle, enhance: enhance, range: range, mapObject: mapObject, pairs: pairs };

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var linear = function linear(_ref, _ref3) {
	  var _ref2 = _slicedToArray(_ref, 2);
	
	  var a = _ref2[0];
	  var b = _ref2[1];
	
	  var _ref32 = _slicedToArray(_ref3, 2);
	
	  var c = _ref32[0];
	  var d = _ref32[1];
	
	  var f = function f(x) {
	    return c + (d - c) * (x - a) / (b - a);
	  };
	
	  f.inverse = function () {
	    return linear([c, d], [a, b]);
	  };
	  return f;
	};
	
	exports["default"] = linear;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var maxBy = function maxBy(items, f) {
	  if (items === undefined) items = [];
	
	  return items.reduce(function (m, i) {
	    return Math.max(m, f(i));
	  }, 0);
	};
	
	var treeHeight = function treeHeight(root) {
	  return 1 + maxBy(root.children, treeHeight);
	};
	
	var buildTree = function buildTree(data, children) {
	  var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	  var result = {
	    item: data,
	    level: level
	  };
	  var cs = children(data);
	  if (cs && cs.length) {
	    result.children = cs.map(function (c) {
	      return buildTree(c, children, level + 1);
	    });
	  }
	  return result;
	};
	
	var setHeight = function setHeight(root) {
	  var level = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	  var maxHeights = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	  if (maxHeights[level] != null) {
	    root.height = maxHeights[level] + 1;
	    maxHeights[level] += 1;
	  } else {
	    maxHeights[level] = 0;
	    root.height = 0;
	  }
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (root.children || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var child = _step.value;
	
	      setHeight(child, level + 1, maxHeights);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator["return"]) {
	        _iterator["return"]();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return maxHeights;
	};
	
	// f is a function of (parent, child)
	var collect = function collect(root, f) {
	  var result = [];
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = (root.children || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var child = _step2.value;
	
	      result.push(f(root, child));
	      result = result.concat(collect(child, f));
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	        _iterator2["return"]();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  return result;
	};
	
	exports.treeHeight = treeHeight;
	exports.buildTree = buildTree;
	exports.setHeight = setHeight;
	exports.collect = collect;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = List;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _listItem = __webpack_require__(18);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	var _style = __webpack_require__(36);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function List(_ref) {
	  var history = _ref.history;
	
	  var timeline = history.toArray().reverse();
	
	  var items = timeline.map(function (action, i) {
	    return _react2.default.createElement(_listItem2.default, { key: i, action: action });
	  });
	
	  return _react2.default.createElement(
	    'ul',
	    { className: _style2.default.list },
	    items
	  );
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(19);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactJsonInspector = __webpack_require__(21);
	
	var _reactJsonInspector2 = _interopRequireDefault(_reactJsonInspector);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(36);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function humanize(text) {
	  return text.replace(/\_\d+$/, '');
	}
	
	exports.default = _react2.default.createClass({
	  displayName: 'list-item',
	  getInitialState: function getInitialState() {
	    return {
	      open: false
	    };
	  },
	  getClassNames: function getClassNames() {
	    var _cx;
	
	    var action = this.props.action;
	
	
	    return (0, _classnames2.default)(_style2.default.item, (_cx = {}, _defineProperty(_cx, _style2.default.inactive, action.is('disabled')), _defineProperty(_cx, _style2.default.error, action.is('failed')), _defineProperty(_cx, _style2.default.loading, action.is('open')), _defineProperty(_cx, _style2.default.complete, action.is('done')), _defineProperty(_cx, _style2.default.cancelled, action.is('cancelled')), _cx));
	  },
	  mute: function mute() {
	    this.props.action.toggle();
	  },
	  toggle: function toggle() {
	    this.setState({ open: !this.state.open });
	  },
	  renderParameters: function renderParameters() {
	    var action = this.props.action;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: _style2.default.parameters },
	      _react2.default.createElement(_reactJsonInspector2.default, { data: action.payload, search: null })
	    );
	  },
	  render: function render() {
	    var action = this.props.action;
	
	
	    return _react2.default.createElement(
	      'li',
	      { className: this.getClassNames() },
	      _react2.default.createElement(
	        'div',
	        { className: _style2.default.menu },
	        _react2.default.createElement(
	          'span',
	          { className: _style2.default.title },
	          humanize(action.behavior.name)
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: _style2.default.button, type: 'button', onClick: this.mute },
	          action.is('disabled') ? "◇" : "◆"
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: _style2.default.button, type: 'button', onClick: this.toggle },
	          this.state.open ? "▴" : "▾"
	        )
	      ),
	      this.state.open ? this.renderParameters() : null
	    );
	  }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./json-inspector.css", function() {
				var newContent = require("!!./../css-loader/index.js!./json-inspector.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".json-inspector,\n.json-inspector__selection {\n    font: 14px/1.4 Consolas, monospace;\n}\n\n.json-inspector__leaf {\n    padding-left: 10px;\n}\n\n.json-inspector__line {\n    display: block;\n    position: relative;\n\n    cursor: default;\n}\n\n.json-inspector__line:after {\n    content: '';\n\n    position: absolute;\n    top: 0;\n    left: -200px;\n    right: -50px;\n    bottom: 0;\n    z-index: -1;\n\n    pointer-events: none;\n}\n\n.json-inspector__line:hover:after {\n    background: rgba(0, 0, 0, 0.06);\n}\n\n.json-inspector__leaf_composite > .json-inspector__line {\n    cursor: pointer;\n}\n\n.json-inspector__radio,\n.json-inspector__flatpath {\n    display: none;\n}\n\n.json-inspector__value {\n    margin-left: 5px;\n}\n\n.json-inspector__search {\n    min-width: 300px;\n    margin: 0 10px 10px 0;\n    padding: 2px;\n}\n\n.json-inspector__key {\n    color: #505050;\n}\n\n.json-inspector__value_helper,\n.json-inspector__value_null,\n.json-inspector__not-found {\n    color: #b0b0b0;\n}\n\n.json-inspector__value_string {\n    color: #798953;\n}\n\n.json-inspector__value_boolean {\n    color: #75b5aa;\n}\n\n.json-inspector__value_number {\n    color: #d28445;\n}\n\n.json-inspector__hl {\n    background: #ff0;\n    box-shadow: 0 -1px 0 2px #ff0;\n    border-radius: 2px;\n}\n\n.json-inspector__show-original {\n    display: inline-block;\n    padding: 0 6px;\n\n    color: #666;\n    cursor: pointer;\n}\n\n.json-inspector__show-original:hover {\n    color: #111;\n}\n\n.json-inspector__show-original:before {\n    content: '\\2942';\n}\n\n.json-inspector__show-original:hover:after {\n    content: ' expand'\n}\n", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var D = React.DOM;
	
	var Leaf = __webpack_require__(22);
	var leaf = React.createFactory(Leaf);
	var SearchBar = __webpack_require__(28);
	var searchBar = React.createFactory(SearchBar);
	
	var filterer = __webpack_require__(32);
	var isEmpty = __webpack_require__(34);
	var lens = __webpack_require__(35);
	var noop = __webpack_require__(31);
	
	module.exports = React.createClass({
	    propTypes: {
	        data: React.PropTypes.any.isRequired,
	        // For now it expects a factory function, not element.
	        search: React.PropTypes.oneOfType([
	            React.PropTypes.func,
	            React.PropTypes.bool
	        ]),
	        onClick: React.PropTypes.func,
	        validateQuery: React.PropTypes.func,
	        isExpanded: React.PropTypes.func,
	        filterOptions: React.PropTypes.object,
	        query: React.PropTypes.string
	    },
	
	    getDefaultProps: function() {
	        return {
	            data: null,
	            search: searchBar,
	            className: '',
	            id: 'json-' + Date.now(),
	            onClick: noop,
	            filterOptions: {},
	            validateQuery: function(query) {
	                return query.length >= 2;
	            },
	            /**
	             * Decide whether the leaf node at given `keypath` should be
	             * expanded initially.
	             * @param  {String} keypath
	             * @param  {Any} value
	             * @return {Boolean}
	             */
	            isExpanded: function(keypath, value) {
	                return false;
	            }
	        };
	    },
	    getInitialState: function() {
	        return {
	            query: this.props.query || ''
	        };
	    },
	    render: function() {
	        var p = this.props;
	        var s = this.state;
	
	        var isQueryValid = (
	            s.query !== '' &&
	            p.validateQuery(s.query)
	        );
	
	        var data = (
	            isQueryValid ?
	                s.filterer(s.query) :
	                p.data
	        );
	
	        var isNotFound = (
	            isQueryValid &&
	            isEmpty(data)
	        );
	
	        return D.div({ className: 'json-inspector ' + p.className },
	            this.renderToolbar(),
	            (
	                isNotFound ?
	                    D.div({ className: 'json-inspector__not-found' }, 'Nothing found') :
	                    leaf({
	                        data: data,
	                        onClick: p.onClick,
	                        id: p.id,
	                        getOriginal: this.getOriginal,
	                        query: (
	                            isQueryValid ?
	                                s.query :
	                                null
	                        ),
	                        label: 'root',
	                        root: true,
	                        isExpanded: p.isExpanded,
	                        interactiveLabel: p.interactiveLabel
	                    })
	            )
	        );
	    },
	    renderToolbar: function() {
	        var search = this.props.search;
	
	        if (search) {
	            return D.div({ className: 'json-inspector__toolbar' },
	                search({
	                    onChange: this.search,
	                    data: this.props.data,
	                    query: this.state.query
	                })
	            );
	        }
	    },
	    search: function(query) {
	        this.setState({
	            query: query
	        });
	    },
	    componentWillMount: function() {
	        this.createFilterer(this.props.data, this.props.filterOptions);
	    },
	    componentWillReceiveProps: function(p) {
	        this.createFilterer(p.data, p.filterOptions);
	
	        var isReceivingNewQuery = (
	            typeof p.query === 'string' &&
	            p.query !== this.state.query
	        );
	
	        if (isReceivingNewQuery) {
	            this.setState({
	                query: p.query
	            });
	        }
	    },
	    shouldComponentUpdate: function (p, s) {
	        return (
	            p.query !== this.props.query ||
	            s.query !== this.state.query ||
	            p.data !== this.props.data ||
	            p.onClick !== this.props.onClick
	        );
	    },
	    createFilterer: function(data, options) {
	        this.setState({
	            filterer: filterer(data, options)
	        });
	    },
	    getOriginal: function(path) {
	        return lens(this.props.data, path);
	    }
	});


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var D = React.DOM;
	
	var md5omatic = __webpack_require__(23);
	
	var uid = __webpack_require__(24);
	var type = __webpack_require__(25);
	var isPrimitive = __webpack_require__(26);
	
	var Highlighter = __webpack_require__(27);
	var highlighter = React.createFactory(Highlighter);
	
	var PATH_PREFIX = '.root.';
	
	var Leaf = React.createClass({
	    getInitialState: function() {
	        return {
	            expanded: this._isInitiallyExpanded(this.props)
	        };
	    },
	    getDefaultProps: function() {
	        return {
	            root: false,
	            prefix: ''
	        };
	    },
	    render: function() {
	        var id = 'id_' + uid();
	        var p = this.props;
	
	        var d = {
	            path: this.keypath(),
	            key: p.label.toString(),
	            value: p.data
	        };
	
	        var onLabelClick = this._onClick.bind(this, d);
	
	        return D.div({ className: this.getClassName(), id: 'leaf-' + this._rootPath() },
	            D.input({ className: 'json-inspector__radio', type: 'radio', name: p.id, id: id, tabIndex: -1 }),
	            D.label({ className: 'json-inspector__line', htmlFor: id, onClick: onLabelClick },
	                D.div({ className: 'json-inspector__flatpath' },
	                    d.path),
	                D.span({ className: 'json-inspector__key' },
	                    this.format(d.key),
	                    ':',
	                    this.renderInteractiveLabel(d.key, true)),
	                this.renderTitle(),
	                this.renderShowOriginalButton()),
	            this.renderChildren());
	    },
	    renderTitle: function() {
	        var data = this.data();
	        var t = type(data);
	
	        switch (t) {
	            case 'Array':
	                return D.span({ className: 'json-inspector__value json-inspector__value_helper' },
	                    '[] ' + items(data.length));
	            case 'Object':
	                return D.span({ className: 'json-inspector__value json-inspector__value_helper' },
	                    '{} ' + items(Object.keys(data).length));
	            default:
	                return D.span({ className: 'json-inspector__value json-inspector__value_' + t.toLowerCase() },
	                    this.format(String(data)),
	                    this.renderInteractiveLabel(data, false));
	        }
	    },
	    renderChildren: function() {
	        var p = this.props;
	        var childPrefix = this._rootPath();
	        var data = this.data();
	
	        if (this.state.expanded && !isPrimitive(data)) {
	            return Object.keys(data).map(function(key) {
	                var value = data[key];
	
	                return leaf({
	                    data: value,
	                    label: key,
	                    prefix: childPrefix,
	                    onClick: p.onClick,
	                    id: p.id,
	                    query: p.query,
	                    getOriginal: this.state.original ? null : p.getOriginal,
	                    key: getLeafKey(key, value),
	                    isExpanded: p.isExpanded,
	                    interactiveLabel: p.interactiveLabel
	                });
	            }, this);
	        }
	
	        return null;
	    },
	    renderShowOriginalButton: function() {
	        var p = this.props;
	
	        if (isPrimitive(p.data) || this.state.original || !p.getOriginal || !p.query || contains(this.keypath(), p.query)) {
	            return null;
	        }
	
	        return D.span({
	            className: 'json-inspector__show-original',
	            onClick: this._onShowOriginalClick
	        });
	    },
	    renderInteractiveLabel: function(originalValue, isKey) {
	        if (typeof this.props.interactiveLabel === 'function') {
	            return this.props.interactiveLabel({
	                // The distinction between `value` and `originalValue` is
	                // provided to have backwards compatibility.
	                value: String(originalValue),
	                originalValue: originalValue,
	                isKey: isKey,
	                keypath: this.keypath()
	            });
	        }
	
	        return null;
	    },
	    componentWillReceiveProps: function(p) {
	        if (p.query) {
	            this.setState({
	                expanded: !contains(p.label, p.query)
	            });
	        }
	
	        // Restore original expansion state when switching from search mode
	        // to full browse mode.
	        if (this.props.query && !p.query) {
	            this.setState({
	                expanded: this._isInitiallyExpanded(p)
	            });
	        }
	    },
	    _rootPath: function() {
	        return this.props.prefix + '.' + this.props.label;
	    },
	    keypath: function() {
	        return this._rootPath().substr(PATH_PREFIX.length);
	    },
	    data: function() {
	        return this.state.original || this.props.data;
	    },
	    format: function(string) {
	        return highlighter({
	            string: string,
	            highlight: this.props.query
	        });
	    },
	    getClassName: function() {
	        var cn = 'json-inspector__leaf';
	
	        if (this.props.root) {
	            cn += ' json-inspector__leaf_root';
	        }
	
	        if (this.state.expanded) {
	            cn += ' json-inspector__leaf_expanded';
	        }
	
	        if (!isPrimitive(this.props.data)) {
	            cn += ' json-inspector__leaf_composite';
	        }
	
	        return cn;
	    },
	    toggle: function() {
	        this.setState({
	            expanded: !this.state.expanded
	        });
	    },
	    _onClick: function(data, e) {
	        this.toggle();
	        this.props.onClick(data);
	
	        e.stopPropagation();
	    },
	    _onShowOriginalClick: function(e) {
	        this.setState({
	            original: this.props.getOriginal(this.keypath())
	        });
	
	        e.stopPropagation();
	    },
	    _isInitiallyExpanded: function(p) {
	        var keypath = this.keypath();
	
	        if (p.root) {
	            return true;
	        }
	
	        if (!p.query) {
	            return p.isExpanded(keypath, p.data);
	        } else {
	            // When a search query is specified, first check if the keypath
	            // contains the search query: if it does, then the current leaf
	            // is itself a search result and there is no need to expand further.
	            //
	            // Having a `getOriginal` function passed signalizes that current
	            // leaf only displays a subset of data, thus should be rendered
	            // expanded to reveal the children that is being searched for.
	            return !contains(keypath, p.query) && (typeof p.getOriginal === 'function');
	        }
	    }
	});
	
	// FIXME: There should be a better way to call a component factory from inside
	// component definition.
	var leaf = React.createFactory(Leaf);
	
	function items(count) {
	    return count + (count === 1 ? ' item' : ' items');
	}
	
	function getLeafKey(key, value) {
	    if (isPrimitive(value)) {
	        // TODO: Sanitize `value` better.
	        var hash = md5omatic(String(value));
	        return key + ':' + hash;
	    } else {
	        return key + '[' + type(value) + ']';
	    }
	}
	
	function contains(string, substring) {
	    return string.indexOf(substring) !== -1;
	}
	
	module.exports = Leaf;


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Expose `md5omatic(str)`.
	 */
	 
	module.exports = md5omatic;
	
	/**
	 * Hash any string using message digest.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api public
	 */
	 
	function md5omatic(str) {
	    var x = str2blks_MD5(str);
	    var a =  1732584193;
	    var b = -271733879;
	    var c = -1732584194;
	    var d =  271733878;
	
	    for(var i=0; i<x.length; i += 16)
	    {
	        var olda = a;
	        var oldb = b;
	        var oldc = c;
	        var oldd = d;
	
	        a = ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	        d = ff(d, a, b, c, x[i+ 1], 12, -389564586);
	        c = ff(c, d, a, b, x[i+ 2], 17,  606105819);
	        b = ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	        a = ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	        d = ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	        c = ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	        b = ff(b, c, d, a, x[i+ 7], 22, -45705983);
	        a = ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	        d = ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	        c = ff(c, d, a, b, x[i+10], 17, -42063);
	        b = ff(b, c, d, a, x[i+11], 22, -1990404162);
	        a = ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	        d = ff(d, a, b, c, x[i+13], 12, -40341101);
	        c = ff(c, d, a, b, x[i+14], 17, -1502002290);
	        b = ff(b, c, d, a, x[i+15], 22,  1236535329);
	        a = gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	        d = gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	        c = gg(c, d, a, b, x[i+11], 14,  643717713);
	        b = gg(b, c, d, a, x[i+ 0], 20, -373897302);
	        a = gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	        d = gg(d, a, b, c, x[i+10], 9 ,  38016083);
	        c = gg(c, d, a, b, x[i+15], 14, -660478335);
	        b = gg(b, c, d, a, x[i+ 4], 20, -405537848);
	        a = gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	        d = gg(d, a, b, c, x[i+14], 9 , -1019803690);
	        c = gg(c, d, a, b, x[i+ 3], 14, -187363961);
	        b = gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	        a = gg(a, b, c, d, x[i+13], 5 , -1444681467);
	        d = gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	        c = gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	        b = gg(b, c, d, a, x[i+12], 20, -1926607734);
	        a = hh(a, b, c, d, x[i+ 5], 4 , -378558);
	        d = hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	        c = hh(c, d, a, b, x[i+11], 16,  1839030562);
	        b = hh(b, c, d, a, x[i+14], 23, -35309556);
	        a = hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	        d = hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	        c = hh(c, d, a, b, x[i+ 7], 16, -155497632);
	        b = hh(b, c, d, a, x[i+10], 23, -1094730640);
	        a = hh(a, b, c, d, x[i+13], 4 ,  681279174);
	        d = hh(d, a, b, c, x[i+ 0], 11, -358537222);
	        c = hh(c, d, a, b, x[i+ 3], 16, -722521979);
	        b = hh(b, c, d, a, x[i+ 6], 23,  76029189);
	        a = hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	        d = hh(d, a, b, c, x[i+12], 11, -421815835);
	        c = hh(c, d, a, b, x[i+15], 16,  530742520);
	        b = hh(b, c, d, a, x[i+ 2], 23, -995338651);
	        a = ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	        d = ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	        c = ii(c, d, a, b, x[i+14], 15, -1416354905);
	        b = ii(b, c, d, a, x[i+ 5], 21, -57434055);
	        a = ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	        d = ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	        c = ii(c, d, a, b, x[i+10], 15, -1051523);
	        b = ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	        a = ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	        d = ii(d, a, b, c, x[i+15], 10, -30611744);
	        c = ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	        b = ii(b, c, d, a, x[i+13], 21,  1309151649);
	        a = ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	        d = ii(d, a, b, c, x[i+11], 10, -1120210379);
	        c = ii(c, d, a, b, x[i+ 2], 15,  718787259);
	        b = ii(b, c, d, a, x[i+ 9], 21, -343485551);
	
	        a = addme(a, olda);
	        b = addme(b, oldb);
	        c = addme(c, oldc);
	        d = addme(d, oldd);
	    }
	
	    return rhex(a) + rhex(b) + rhex(c) + rhex(d);
	};
	
	var hex_chr = "0123456789abcdef";
	
	function bitOR(a, b)
	{
	    var lsb = (a & 0x1) | (b & 0x1);
	    var msb31 = (a >>> 1) | (b >>> 1);
	
	    return (msb31 << 1) | lsb;
	}
	
	function bitXOR(a, b)
	{
	    var lsb = (a & 0x1) ^ (b & 0x1);
	    var msb31 = (a >>> 1) ^ (b >>> 1);
	
	    return (msb31 << 1) | lsb;
	}
	
	function bitAND(a, b)
	{
	    var lsb = (a & 0x1) & (b & 0x1);
	    var msb31 = (a >>> 1) & (b >>> 1);
	
	    return (msb31 << 1) | lsb;
	}
	
	function addme(x, y)
	{
	    var lsw = (x & 0xFFFF)+(y & 0xFFFF);
	    var msw = (x >> 16)+(y >> 16)+(lsw >> 16);
	
	    return (msw << 16) | (lsw & 0xFFFF);
	}
	
	function rhex(num)
	{
	    var str = "";
	    var j;
	
	    for(j=0; j<=3; j++)
	        str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F);
	
	    return str;
	}
	
	function str2blks_MD5(str)
	{
	    var nblk = ((str.length + 8) >> 6) + 1;
	    var blks = new Array(nblk * 16);
	    var i;
	
	    for(i=0; i<nblk * 16; i++)
	        blks[i] = 0;
	
	    for(i=0; i<str.length; i++)
	        blks[i >> 2] |= str.charCodeAt(i) << (((str.length * 8 + i) % 4) * 8);
	
	    blks[i >> 2] |= 0x80 << (((str.length * 8 + i) % 4) * 8);
	
	    var l = str.length * 8;
	    blks[nblk * 16 - 2] = (l & 0xFF);
	    blks[nblk * 16 - 2] |= ((l >>> 8) & 0xFF) << 8;
	    blks[nblk * 16 - 2] |= ((l >>> 16) & 0xFF) << 16;
	    blks[nblk * 16 - 2] |= ((l >>> 24) & 0xFF) << 24;
	
	    return blks;
	}
	
	function rol(num, cnt)
	{
	    return (num << cnt) | (num >>> (32 - cnt));
	}
	
	function cmn(q, a, b, x, s, t)
	{
	    return addme(rol((addme(addme(a, q), addme(x, t))), s), b);
	}
	
	function ff(a, b, c, d, x, s, t)
	{
	    return cmn(bitOR(bitAND(b, c), bitAND((~b), d)), a, b, x, s, t);
	}
	
	function gg(a, b, c, d, x, s, t)
	{
	    return cmn(bitOR(bitAND(b, d), bitAND(c, (~d))), a, b, x, s, t);
	}
	
	function hh(a, b, c, d, x, s, t)
	{
	    return cmn(bitXOR(bitXOR(b, c), d), a, b, x, s, t);
	}
	
	function ii(a, b, c, d, x, s, t)
	{
	    return cmn(bitXOR(c, bitOR(b, (~d))), a, b, x, s, t);
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	var id = Math.ceil(Math.random() * 10);
	
	module.exports = function() {
	    return ++id;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(value) {
	    return Object.prototype.toString.call(value).slice(8, -1);
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var type = __webpack_require__(25);
	
	function isPrimitive(value) {
	    var t = type(value);
	    return t !== 'Object' && t !== 'Array';
	}
	
	module.exports = isPrimitive;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var span = React.DOM.span;
	
	module.exports = React.createClass({
	    getDefaultProps: function() {
	        return {
	            string: '',
	            highlight: ''
	        };
	    },
	    shouldComponentUpdate: function(p) {
	        return p.highlight !== this.props.highlight;
	    },
	    render: function() {
	        var p = this.props;
	
	        if (!p.highlight || p.string.indexOf(p.highlight) === -1) {
	            return span(null, p.string);
	        }
	
	        return span(null,
	            p.string.split(p.highlight).map(function(part, index) {
	                return span({ key: index },
	                    index > 0 ?
	                        span({ className: 'json-inspector__hl' }, p.highlight) :
	                        null,
	                    part);
	            }));
	    }
	});


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(29);
	var React = __webpack_require__(2);
	var input = React.DOM.input;
	
	var noop = __webpack_require__(31);
	
	module.exports = React.createClass({
	    getDefaultProps: function() {
	        return {
	            onChange: noop
	        };
	    },
	    render: function() {
	        return input({
	            className: 'json-inspector__search',
	            type: 'search',
	            placeholder: 'Search',
	            value: this.props.query,
	            onChange: this.onChange
	        });
	    },
	    onChange: function(e) {
	        this.props.onChange(e.target.value);
	    }
	});


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(30);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function() {};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var assign = __webpack_require__(33);
	var keys = Object.keys;
	
	var isPrimitive = __webpack_require__(26);
	var isEmpty = __webpack_require__(34);
	
	module.exports = function(data, options) {
	    options || (options = {});
	    var cache = {};
	
	    return function(query) {
	        var subquery;
	
	        if (!cache[query]) {
	            for (var i = query.length - 1; i > 0; i -= 1) {
	                subquery = query.substr(0, i);
	
	                if (cache[subquery]) {
	                    cache[query] = find(cache[subquery], query, options);
	                    break;
	                }
	            }
	        }
	
	        if (!cache[query]) {
	            cache[query] = find(data, query, options);
	        }
	
	        return cache[query];
	    };
	};
	
	function find(data, query, options) {
	    return keys(data).reduce(function(acc, key) {
	        var value = data[key];
	        var matches;
	
	        if (isPrimitive(value)) {
	            if (contains(query, key, options) || contains(query, value, options)) {
	                acc[key] = value;
	            }
	        } else {
	            if (contains(query, key, options)) {
	                acc[key] = value;
	            } else {
	                matches = find(value, query, options);
	
	                if (!isEmpty(matches)) {
	                    assign(acc, pair(key, matches));
	                }
	            }
	        }
	
	        return acc;
	    }, {});
	}
	
	function contains(query, string, options) {
	    if (string) {
	        var haystack = String(string);
	        var needle = query;
	
	        if (options.ignoreCase) {
	            haystack = haystack.toLowerCase();
	            needle = needle.toLowerCase();
	        }
	
	        return haystack.indexOf(needle) !== -1;
	    }
	}
	
	function pair(key, value) {
	    var p = {};
	    p[key] = value;
	    return p;
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(object) {
	    return Object.keys(object).length === 0;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var type = __webpack_require__(25);
	
	var PATH_DELIMITER = '.';
	
	function lens(data, path) {
	    var p = path.split(PATH_DELIMITER);
	    var segment = p.shift();
	
	    if (!segment) {
	        return data;
	    }
	
	    var t = type(data);
	
	    if (t === 'Array' && data[integer(segment)]) {
	        return lens(data[integer(segment)], p.join(PATH_DELIMITER));
	    } else if (t === 'Object' && data[segment]) {
	        return lens(data[segment], p.join(PATH_DELIMITER));
	    }
	}
	
	function integer(string) {
	    return parseInt(string, 10);
	}
	
	module.exports = lens;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Colors\n */\n\n@keyframes loading-NIQfF {\n  0% {\n    transform: scaleX(0);\n  }\n\n  60% {\n    left: 60%;\n    transform: scaleX(0.5);\n  }\n\n  100% {\n    left: 100%;\n    transform: scaleX(0);\n  }\n}\n\n.list-qw8NU {\n  flex-grow: 1;\n  font-family: monospace;\n  font-size: 12px;\n  overflow: auto;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.item-3iuxp {\n  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.14);\n  position: relative;\n  transition: 0.3s all;\n}\n\n.item-3iuxp.complete-3j94g {\n  box-shadow: inset 0 -4px 0 #7f9;\n}\n\n.item-3iuxp.error-3v5Hq {\n  box-shadow: inset 0 -4px 0 #f55;\n}\n\n.item-3iuxp.loading-NIQfF {\n  box-shadow: inset 0 -4px 0 #fe4;\n}\n\n.item-3iuxp.loading-NIQfF:after {\n  animation: loading-NIQfF 0.7s infinite linear;\n  background: #fa4;\n  bottom: 0;\n  content: \"\";\n  height: 4px;\n  left: 0;\n  position: absolute;\n  transform-origin: 0 0;\n  width: 100%;\n}\n\n.item-3iuxp.inactive-FH6fG {\n  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.item-3iuxp.cancelled-238aH {\n  box-shadow: inset 0 -4px 0 #f84;\n}\n\n.parameters-llLGU {\n  background: #eee;\n  border-top: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.14);\n  padding: 12px 4px 16px;\n  overflow: auto;\n  max-height: 400px;\n}\n\n.menu-29H7M {\n  align-items: center;\n  display: flex;\n  padding: 0 0 0 16px;\n  margin: 0;\n}\n\n.title-YZlhZ {\n  display: block;\n  flex-grow: 1;\n}\n\n.button-2-4ku {\n  background: transparent;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  font-weight: bold;\n  color: #444;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 0;\n  margin: 4px;\n  padding: 12px;\n  transition: 0.3s all;\n  width: 40px;\n  height: 40px;\n}\n\n.button-2-4ku:hover,\n.button-2-4ku:focus {\n  border: 1px solid rgba(0, 0, 0, 0.14);\n  outline: none;\n}\n\n.button-2-4ku:active {\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.14);\n  transition: 0.1s all;\n}\n\n", ""]);
	
	// exports
	exports.locals = {
		"list": "list-qw8NU",
		"item": "item-3iuxp",
		"complete": "complete-3j94g",
		"error": "error-3v5Hq",
		"loading": "loading-NIQfF",
		"inactive": "inactive-FH6fG",
		"cancelled": "cancelled-238aH",
		"parameters": "parameters-llLGU",
		"menu": "menu-29H7M",
		"title": "title-YZlhZ",
		"button": "button-2-4ku"
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  padding-right: 350px;\n}\n\n.container-gr50w *,\n.container-gr50w *:before,\n.container-gr50w *:after {\n  box-sizing: inherit;\n}\n\n.container-gr50w {\n  background: white;\n  box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.1);\n  bottom: 0;\n  box-sizing: border-box;\n  color: #112;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  height: 100%;\n  position: fixed;\n  width: 350px;\n  z-index: 1000000;\n}\n\n", ""]);
	
	// exports
	exports.locals = {
		"container": "container-gr50w"
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjk1OTc1ZDhiMWUyNTk3MzkyZmMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL2RlYnVnZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL25vZGUuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL3N0eWxlLnNjc3M/OTQyYyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRocy1qcy90cmVlLmpzIiwid2VicGFjazovLy8uL34vcGF0aHMtanMvY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcGF0aHMtanMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL3RyZWUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvanNvbi1pbnNwZWN0b3IuY3NzP2Q2NDEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9qc29uLWluc3BlY3Rvci5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9qc29uLWluc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi9sZWFmLmpzIiwid2VicGFjazovLy8uL34vbWQ1LW8tbWF0aWMvbGliL21kNW9tYXRpYy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi91aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi9pcy1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvaGlnaGxpZ2h0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvc2VhcmNoLWJhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlYm91bmNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZGVib3VuY2Uvfi9kYXRlLW5vdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi9ub29wLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL2ZpbHRlcmVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtanNvbi1pbnNwZWN0b3Ivfi9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL2lzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL2xlbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9zdHlsZS5zY3NzPzNkZTYiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL3N0eWxlLnNjc3M/NjdiMiIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OzttQkNsQ2UsVUFBVSxHQUFWLEVBQWUsT0FBZixFQUF3QjtBQUNyQyxPQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVosQ0FEaUM7O0FBR3JDLGFBQVUsU0FBVixHQUFzQixrQkFBdEIsQ0FIcUM7O0FBS3JDLFlBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsU0FBMUIsRUFMcUM7O0FBT3JDLFlBQVMsUUFBVCxDQUFrQixXQUFsQixFQUErQjtBQUM3QixTQUFJLE9BQUosQ0FBWSxRQUFaLENBQXFCLFdBQXJCLEVBRDZCO0FBRTdCLFNBQUksV0FBSixHQUY2QjtJQUEvQjs7QUFLQSxZQUFTLE1BQVQsR0FBbUI7QUFDakIsd0JBQUksTUFBSixDQUFXLG9EQUFVLFNBQVUsSUFBSSxPQUFKLEVBQWMsWUFBYSxRQUFiLEVBQWxDLENBQVgsRUFBeUUsU0FBekUsRUFEaUI7SUFBbkI7O0FBSUEsWUFoQnFDOztBQWtCckMsT0FBSSxFQUFKLENBQU8sUUFBUCxFQUFpQixNQUFqQixFQWxCcUM7RUFBeEI7O0FBSmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FDRkEsdUM7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OzttQkNLd0I7O0FBTHhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxVQUFTLFFBQVQsT0FBNEM7T0FBdkIsdUJBQXVCO09B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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFxRSxnRUFBZ0U7QUFDckk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDL05BOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELG9DQUFtQyxpQ0FBaUMsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0seUNBQXlDLEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBMkIsMEJBQTBCLFlBQVksRUFBRSwyQ0FBMkMsOEJBQThCLEVBQUUsT0FBTyw2RUFBNkUsRUFBRSxHQUFHLEVBQUU7O0FBRXRwQjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQW9FLGdFQUFnRTtBQUNwSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEIsc0o7Ozs7OztBQ2xMQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxvQ0FBbUMsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUV0cEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQXlFLGdFQUFnRTtBQUN6STs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUEyRSxtRUFBbUU7QUFDOUk7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7OzttQkN2R3dCOztBQUp4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFVBQVMsSUFBVCxPQUE0QjtPQUFYLHVCQUFXOztBQUN6QyxPQUFJLFdBQVcsUUFBUSxPQUFSLEdBQWtCLE9BQWxCLEVBQVgsQ0FEcUM7O0FBR3pDLE9BQUksUUFBUSxTQUFTLEdBQVQsQ0FBYSxVQUFVLE1BQVYsRUFBa0IsQ0FBbEIsRUFBcUI7QUFDNUMsWUFBTyxvREFBTSxLQUFNLENBQU4sRUFBVSxRQUFTLE1BQVQsRUFBaEIsQ0FBUCxDQUQ0QztJQUFyQixDQUFyQixDQUhxQzs7QUFPekMsVUFDRTs7T0FBSSxXQUFZLGdCQUFNLElBQU4sRUFBaEI7S0FDSSxLQURKO0lBREYsQ0FQeUM7Ozs7Ozs7Ozs7Ozs7QUNKM0M7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsVUFBUyxRQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQ3ZCLFVBQU8sS0FBSyxPQUFMLENBQWEsUUFBYixFQUF1QixFQUF2QixDQUFQLENBRHVCO0VBQXpCOzttQkFJZSxnQkFBTSxXQUFOLENBQWtCOztBQUUvQiwrQ0FBa0I7QUFDaEIsWUFBTztBQUNMLGFBQU0sS0FBTjtNQURGLENBRGdCO0lBRmE7QUFRL0IsMkNBQWdCOzs7U0FDUixTQUFXLEtBQUssS0FBTCxDQUFYLE9BRFE7OztBQUdkLFlBQU8sMEJBQUcsZ0JBQU0sSUFBTixrQ0FDUCxnQkFBTSxRQUFOLEVBQW1CLE9BQU8sRUFBUCxDQUFVLFVBQVYseUJBQ25CLGdCQUFNLEtBQU4sRUFBbUIsT0FBTyxFQUFQLENBQVUsUUFBVix5QkFDbkIsZ0JBQU0sT0FBTixFQUFtQixPQUFPLEVBQVAsQ0FBVSxNQUFWLHlCQUNuQixnQkFBTSxRQUFOLEVBQW1CLE9BQU8sRUFBUCxDQUFVLE1BQVYseUJBQ25CLGdCQUFNLFNBQU4sRUFBbUIsT0FBTyxFQUFQLENBQVUsV0FBVixRQUxmLENBQVAsQ0FIYztJQVJlO0FBb0IvQix5QkFBTztBQUNMLFVBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsTUFBbEIsR0FESztJQXBCd0I7QUF3Qi9CLDZCQUFTO0FBQ1AsVUFBSyxRQUFMLENBQWMsRUFBRSxNQUFNLENBQUMsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUF2QixFQURPO0lBeEJzQjtBQTRCL0IsaURBQW1CO1NBQ1QsU0FBVyxLQUFLLEtBQUwsQ0FBWCxPQURTOzs7QUFHakIsWUFDRTs7U0FBSyxXQUFZLGdCQUFNLFVBQU4sRUFBakI7T0FDRSw4REFBVyxNQUFPLE9BQU8sT0FBUCxFQUFpQixRQUFTLElBQVQsRUFBbkMsQ0FERjtNQURGLENBSGlCO0lBNUJZO0FBc0MvQiw2QkFBUztTQUNDLFNBQVcsS0FBSyxLQUFMLENBQVgsT0FERDs7O0FBR1AsWUFDRTs7U0FBSSxXQUFZLEtBQUssYUFBTCxFQUFaLEVBQUo7T0FDRTs7V0FBSyxXQUFZLGdCQUFNLElBQU4sRUFBakI7U0FDRTs7YUFBTSxXQUFZLGdCQUFNLEtBQU4sRUFBbEI7V0FDSSxTQUFTLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQURiO1VBREY7U0FLRTs7YUFBUSxXQUFZLGdCQUFNLE1BQU4sRUFBZSxNQUFLLFFBQUwsRUFBYyxTQUFVLEtBQUssSUFBTCxFQUEzRDtXQUNJLE9BQU8sRUFBUCxDQUFVLFVBQVYsSUFBd0IsR0FBeEIsR0FBOEIsR0FBOUI7VUFOTjtTQVFFOzthQUFRLFdBQVksZ0JBQU0sTUFBTixFQUFlLE1BQUssUUFBTCxFQUFjLFNBQVUsS0FBSyxNQUFMLEVBQTNEO1dBQ0ksS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixHQUFsQixHQUF3QixHQUF4QjtVQVROO1FBREY7T0FjSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssZ0JBQUwsRUFBbEIsR0FBNEMsSUFBNUM7TUFmTixDQUhPO0lBdENzQjtFQUFsQixFOzs7Ozs7QUNYZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EseUVBQXdFLHlDQUF5QyxHQUFHLDJCQUEyQix5QkFBeUIsR0FBRywyQkFBMkIscUJBQXFCLHlCQUF5Qix3QkFBd0IsR0FBRyxpQ0FBaUMsa0JBQWtCLDJCQUEyQixhQUFhLG1CQUFtQixtQkFBbUIsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsR0FBRyx1Q0FBdUMsc0NBQXNDLEdBQUcsNkRBQTZELHNCQUFzQixHQUFHLHdEQUF3RCxvQkFBb0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcsNkJBQTZCLHVCQUF1Qiw0QkFBNEIsbUJBQW1CLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLDhGQUE4RixxQkFBcUIsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsb0NBQW9DLHFCQUFxQixHQUFHLG1DQUFtQyxxQkFBcUIsR0FBRyx5QkFBeUIsdUJBQXVCLG9DQUFvQyx5QkFBeUIsR0FBRyxvQ0FBb0MsNEJBQTRCLHFCQUFxQixvQkFBb0Isc0JBQXNCLEdBQUcsMENBQTBDLGtCQUFrQixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRyxnREFBZ0QsMkJBQTJCOztBQUUvbkQ7Ozs7Ozs7QUNQQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixPQUFPO0FBQy9CLHlCQUF3QixJQUFJO0FBQzVCLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUFzQiw2Q0FBNkM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHlDQUF5QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQix1Q0FBdUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDdEpEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUFzQixpRUFBaUU7QUFDdkYsc0JBQXFCLHNGQUFzRjtBQUMzRyxzQkFBcUIsd0VBQXdFO0FBQzdGLHdCQUF1Qix3Q0FBd0M7QUFDL0Q7QUFDQSx5QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUErQixrRUFBa0U7QUFDakc7QUFDQTtBQUNBLGdDQUErQixrRUFBa0U7QUFDakcsd0JBQXVCO0FBQ3ZCO0FBQ0EsZ0NBQStCLDhFQUE4RTtBQUM3RztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQVksTUFBTTtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBWSxhQUFhO0FBQ3pCOztBQUVBLGFBQVksY0FBYztBQUMxQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDeE1BOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDUEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQTZCLGFBQWE7QUFDMUM7QUFDQSwrQkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxFQUFDOzs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUcsMEJBQTBCLGtEQUFrRCx5QkFBeUIsR0FBRzs7QUFFMzhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWtGLGlCQUFpQjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWdDLHlCQUF5QixHQUFHLCtFQUErRSx3QkFBd0IsR0FBRyxzQkFBc0Isc0JBQXNCLG1EQUFtRCxjQUFjLDJCQUEyQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixhQUFhLGlCQUFpQixvQkFBb0IsaUJBQWlCLHFCQUFxQixHQUFHOztBQUV0YztBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6Im1pY3JvY29zbS1kZWJ1Z2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjk1OTc1ZDhiMWUyNTk3MzkyZmNcbiAqKi8iLCJpbXBvcnQgRE9NICAgICAgZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0ICAgIGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlYnVnZ2VyIGZyb20gJy4vY29tcG9uZW50cy9kZWJ1Z2dlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCwgb3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJkZWJ1Z2dlci13cmFwcGVyXCJcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuICBmdW5jdGlvbiBjaGVja291dCh0cmFuc2FjdGlvbikge1xuICAgIGFwcC5oaXN0b3J5LmNoZWNrb3V0KHRyYW5zYWN0aW9uKVxuICAgIGFwcC5yb2xsZm9yd2FyZCgpXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIERPTS5yZW5kZXIoPERlYnVnZ2VyIGhpc3Rvcnk9eyBhcHAuaGlzdG9yeSB9IG9uQ2hlY2tvdXQ9eyBjaGVja291dCB9IC8+LCBjb250YWluZXIpXG4gIH1cblxuICByZW5kZXIoKVxuXG4gIGFwcC5vbignY2hhbmdlJywgcmVuZGVyKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvaW5kZXguanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyZWUgIGZyb20gJy4vdHJlZSdcbmltcG9ydCBMaXN0ICBmcm9tICcuL2xpc3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVidWdnZXIgKHsgaGlzdG9yeSwgb25DaGVja291dCB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlLmNvbnRhaW5lciB9PlxuICAgICAgPFRyZWUgaGlzdG9yeT17IGhpc3RvcnkgfSBvbk5vZGVDbGljaz17IG9uQ2hlY2tvdXQgfSAvPlxuICAgICAgPExpc3QgaGlzdG9yeT17IGhpc3RvcnkgfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9jb21wb25lbnRzL2RlYnVnZ2VyLmpzeFxuICoqLyIsImltcG9ydCBOb2RlICBmcm9tICcuL25vZGUnXG5pbXBvcnQgRE9NICAgZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyZWUgIGZyb20gJ3BhdGhzLWpzL3RyZWUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcblxuY29uc3QgVHJlZVZpc3VhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWRYICAgIDogNDAsXG4gICAgICBwYWRZICAgIDogNDAsXG4gICAgICBoZWlnaHQgIDogMjAwLFxuICAgICAgd2lkdGggICA6IDM1MFxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5nZXRXaWR0aCgpIH0pXG4gIH0sXG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRoaXMucHJvcHMuaGlzdG9yeS5zaXplKCkgKiAyMCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA/IHRoaXMuc3RhdGUud2lkdGggOiAwKVxuICB9LFxuXG4gIGdldFRyZWUoaGlzdG9yeSkge1xuICAgIGxldCB7IGhlaWdodCwgcGFkWCwgcGFkWSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIFRyZWUoe1xuICAgICAgZGF0YSAgIDogaGlzdG9yeS5yb290LFxuICAgICAgaGVpZ2h0IDogaGVpZ2h0IC0gcGFkWSAqIDIsXG4gICAgICB3aWR0aCAgOiB0aGlzLnN0YXRlLndpZHRoIC0gcGFkWCAqIDJcbiAgICB9KVxuICB9LFxuXG4gIGdldEN1cnZlKGN1cnZlLCBpKSB7XG4gICAgcmV0dXJuICg8cGF0aCBrZXk9eyBpIH0gZD17IGN1cnZlLmNvbm5lY3Rvci5wYXRoLnByaW50KCkgfSAvPilcbiAgfSxcblxuICBzY3JvbGxJbnRvVmlldyhjb21wb25lbnQpIHtcbiAgICBjb25zdCBlbCA9IERPTS5maW5kRE9NTm9kZShjb21wb25lbnQpXG5cbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KHRydWUsIHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2VuZCcgfSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0Tm9kZSh7IHBvaW50LCBpdGVtIH0sIGkpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLnByb3BzLmhpc3RvcnkuZm9jdXMgPT09IGl0ZW1cblxuICAgIHJldHVybiAoPE5vZGUga2V5PXsgaSB9XG4gICAgICAgICAgICAgICAgICByZWY9eyBhY3RpdmUgPyB0aGlzLnNjcm9sbEludG9WaWV3IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICB4PXsgcG9pbnRbMF0gfHwgMCB9XG4gICAgICAgICAgICAgICAgICB5PXsgcG9pbnRbMV0gfHwgMCB9XG4gICAgICAgICAgICAgICAgICBpdGVtPXsgaXRlbSB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9eyBhY3RpdmUgfVxuICAgICAgICAgICAgICAgICAgb25Ib3Zlcj17IHRoaXMuc2V0Rm9jdXMgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25Ob2RlQ2xpY2sgfSAvPilcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS50cmVlIH0+XG4gICAgICAgIHsgaGlzdG9yeS5zaXplKCkgPyB0aGlzLnJlbmRlclRyZWUoKSA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlclRyZWUoKSB7XG4gICAgbGV0IHsgaGlzdG9yeSwgcGFkWCwgcGFkWSwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdHJlZSA9IHRoaXMuZ2V0VHJlZShoaXN0b3J5KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgcmVmPVwiY2hhcnRcIiB3aWR0aD17IHRoaXMuc3RhdGUud2lkdGggfSBoZWlnaHQ9eyBoZWlnaHQgfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cGFkWH0sJHtwYWRZfSlgIH0+XG4gICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJyZ2JhKDEyNSwgMjI1LCAyNTUsIDAuMilcIj5cbiAgICAgICAgICAgIHsgdHJlZS5jdXJ2ZXMubWFwKHRoaXMuZ2V0Q3VydmUpIH1cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgeyB0cmVlLm5vZGVzLm1hcCh0aGlzLmdldE5vZGUpIH1cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVWaXN1YWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NvbXBvbmVudHMvdHJlZS9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggICAgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xuXG5jb25zdCBOb2RlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGFjdGl2ZSwgeCA9IDAsIHkgPSAwIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChzdHlsZS5ub2RlLCB7XG4gICAgICBbc3R5bGUuYWN0aXZlXSAgICA6IGFjdGl2ZSxcbiAgICAgIFtzdHlsZS5kaXNhYmxlZF0gIDogaXRlbS5pcygnZGlzYWJsZWQnKSxcbiAgICAgIFtzdHlsZS5lcnJvcl0gICAgIDogaXRlbS5pcygnZmFpbGVkJyksXG4gICAgICBbc3R5bGUubG9hZGluZ10gICA6IGl0ZW0uaXMoJ2xvYWRpbmcnKSxcbiAgICAgIFtzdHlsZS5jYW5jZWxsZWRdIDogaXRlbS5pcygnY2FuY2VsbGVkJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxnIGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IHRyYW5zZm9ybT17IGB0cmFuc2xhdGUoJHsgeCB9LCAkeyB5IH0pYH0gb25DbGljaz17IHRoaXMub25DbGljayB9IG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duIH0gdGFiSW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICA8Y2lyY2xlIHI9XCIxMFwiIG9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9eyBzdHlsZS5yaW5nIH0gcj1cIjNcIiAvPlxuICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT17IHN0eWxlLm1hcmtlciB9IHI9XCIzXCIgLz5cblxuICAgICAgICA8dGV4dCBjbGFzc05hbWU9eyBzdHlsZS5sYWJlbCB9IGR5PVwiLTE4XCIgZm9udFNpemU9XCIxMVwiIHRleHRBbmNob3I9XCJtaWRkbGVcIiBmaWxsPVwid2hpdGVcIj5cbiAgICAgICAgICB7IGl0ZW0uYmVoYXZpb3IubmFtZSB9XG4gICAgICAgIDwvdGV4dD5cbiAgICAgIDwvZz5cbiAgICApXG4gIH0sXG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJyAnIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuaXRlbSlcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gIH0sXG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5pdGVtKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NvbXBvbmVudHMvdHJlZS9ub2RlLmpzeFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHtcInNvdXJjZU1hcFwiOnRydWV9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9jb21wb25lbnRzL3RyZWUvc3R5bGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQ29sb3JzXFxuICovXFxuXFxuQGtleWZyYW1lcyB0aHJvYi0yLUVTMSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxufVxcblxcbi50cmVlLTJIVEE2IHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZmxleC1ncm93OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50cmVlLTJIVEE2IHN2ZyB7XFxuICBiYWNrZ3JvdW5kOiAjMTEyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5sYWJlbC0xS29LWCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIHN0cm9rZS13aWR0aDogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcXG59XFxuXFxuLm5vZGUtMmpOWncge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm9kZS0yak5adzpob3ZlcixcXG4ubm9kZS0yak5adzpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubm9kZS0yak5adzpob3ZlciAubGFiZWwtMUtvS1gsXFxuLm5vZGUtMmpOWnc6Zm9jdXMgLmxhYmVsLTFLb0tYIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yaW5nLU03U2lvLFxcbi5tYXJrZXItM3JJaE0ge1xcbiAgZmlsbDogIzExMjtcXG4gIHI6IDQ7XFxuICBzdHJva2U6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG5cXG4ubWFya2VyLTNySWhNIHtcXG4gIGZpbGw6ICM3YmZkZTk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuXFxuLm5vZGUtMmpOWnc6aG92ZXIgLnJpbmctTTdTaW8sXFxuLm5vZGUtMmpOWnc6Zm9jdXMgLnJpbmctTTdTaW8sXFxuLm5vZGUtMmpOWncuYWN0aXZlLXZ4dGpHIC5yaW5nLU03U2lvIHtcXG4gIHN0cm9rZTogIzdiZmRlOTtcXG4gIHN0cm9rZS13aWR0aDogMS41O1xcbiAgcjogOTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcbn1cXG5cXG4ubm9kZS0yak5ady5hY3RpdmUtdnh0akcgLnJpbmctTTdTaW8ge1xcbiAgc3Ryb2tlOiAjZTM5O1xcbn1cXG5cXG4ubm9kZS0yak5ady5sb2FkaW5nLWZkVUd2IC5tYXJrZXItM3JJaE0ge1xcbiAgZmlsbDogI2ZlNDtcXG59XFxuXFxuLm5vZGUtMmpOWncubG9hZGluZy1mZFVHdiAucmluZy1NN1NpbyB7XFxuICBhbmltYXRpb246IHRocm9iLTItRVMxIDEuNXMgaW5maW5pdGU7XFxuICBzdHJva2U6ICNmZTQ7XFxufVxcblxcbi5ub2RlLTJqTlp3LmVycm9yLTM1Y1htIC5tYXJrZXItM3JJaE0ge1xcbiAgZmlsbDogI2Y1NTtcXG59XFxuXFxuLm5vZGUtMmpOWncuZXJyb3ItMzVjWG0gLnJpbmctTTdTaW8ge1xcbiAgc3Ryb2tlOiAjZjU1O1xcbn1cXG5cXG4ubm9kZS0yak5ady5kaXNhYmxlZC0xS0NrRiAubWFya2VyLTNySWhNIHtcXG4gIGZpbGw6ICM0NDU7XFxufVxcblxcbi5ub2RlLTJqTlp3LmNhbmNlbGxlZC0yLWxjcCAubWFya2VyLTNySWhNIHtcXG4gIGZpbGw6ICNmODQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRyZWVcIjogXCJ0cmVlLTJIVEE2XCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbC0xS29LWFwiLFxuXHRcIm5vZGVcIjogXCJub2RlLTJqTlp3XCIsXG5cdFwicmluZ1wiOiBcInJpbmctTTdTaW9cIixcblx0XCJtYXJrZXJcIjogXCJtYXJrZXItM3JJaE1cIixcblx0XCJhY3RpdmVcIjogXCJhY3RpdmUtdnh0akdcIixcblx0XCJsb2FkaW5nXCI6IFwibG9hZGluZy1mZFVHdlwiLFxuXHRcInRocm9iXCI6IFwidGhyb2ItMi1FUzFcIixcblx0XCJlcnJvclwiOiBcImVycm9yLTM1Y1htXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJkaXNhYmxlZC0xS0NrRlwiLFxuXHRcImNhbmNlbGxlZFwiOiBcImNhbmNlbGxlZC0yLWxjcFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Jlc29sdmUtdXJsLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vbGliL2NvbXBvbmVudHMvdHJlZS9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jb25uZWN0b3IgPSByZXF1aXJlKCcuL2Nvbm5lY3RvcicpO1xuXG52YXIgX2Nvbm5lY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25uZWN0b3IpO1xuXG52YXIgX2xpbmVhciA9IHJlcXVpcmUoJy4vbGluZWFyJyk7XG5cbnZhciBfbGluZWFyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcik7XG5cbnZhciBfb3BzID0gcmVxdWlyZSgnLi9vcHMnKTtcblxudmFyIF90cmVlVXRpbHMgPSByZXF1aXJlKCcuL3RyZWUtdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBfcmVmLmhlaWdodDtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHRlbnNpb24gPSBfcmVmLnRlbnNpb247XG5cbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LmNoaWxkcmVuO1xuICAgIH07XG4gIH1cbiAgdmFyIHRyZWUgPSAoMCwgX3RyZWVVdGlscy5idWlsZFRyZWUpKGRhdGEsIGNoaWxkcmVuKTtcbiAgdmFyIGxldmVscyA9ICgwLCBfdHJlZVV0aWxzLnRyZWVIZWlnaHQpKHRyZWUpO1xuICB2YXIgbWF4SGVpZ2h0cyA9ICgwLCBfdHJlZVV0aWxzLnNldEhlaWdodCkodHJlZSk7XG4gIHZhciBoc3BhY2UgPSB3aWR0aCAvIChsZXZlbHMgLSAxKTtcbiAgdmFyIGhzY2FsZSA9ICgwLCBfbGluZWFyMlsnZGVmYXVsdCddKShbMCwgbGV2ZWxzIC0gMV0sIFswLCB3aWR0aF0pO1xuICB2YXIgdnNjYWxlcyA9ICgwLCBfb3BzLnJhbmdlKSgwLCBsZXZlbHMpLm1hcChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICB2YXIgYXZhaWxhYmxlSGVpZ2h0ID0gTWF0aC5zcXJ0KGxldmVsIC8gKGxldmVscyAtIDEpKSAqIGhlaWdodDtcbiAgICB2YXIgdG9wID0gKGhlaWdodCAtIGF2YWlsYWJsZUhlaWdodCkgLyAyO1xuICAgIHZhciBib3R0b20gPSB0b3AgKyBhdmFpbGFibGVIZWlnaHQ7XG4gICAgdmFyIG1heEhlaWdodCA9IGxldmVsID4gMCA/IG1heEhlaWdodHNbbGV2ZWxdICsgbWF4SGVpZ2h0c1tsZXZlbCAtIDFdIDogbWF4SGVpZ2h0c1tsZXZlbF07XG4gICAgaWYgKG1heEhlaWdodCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLyAyO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgwLCBfbGluZWFyMlsnZGVmYXVsdCddKShbMCwgbWF4SGVpZ2h0XSwgW3RvcCwgYm90dG9tXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgcG9zaXRpb24gPSBmdW5jdGlvbiBwb3NpdGlvbihub2RlKSB7XG4gICAgdmFyIGxldmVsID0gbm9kZS5sZXZlbDtcbiAgICB2YXIgdnNjYWxlID0gdnNjYWxlc1tsZXZlbF07XG4gICAgcmV0dXJuIFtoc2NhbGUobGV2ZWwpLCB2c2NhbGUobm9kZS5oZWlnaHRfKV07XG4gIH07XG5cbiAgdmFyIGkgPSAtMTtcbiAgdmFyIGNvbm5lY3RvcnMgPSAoMCwgX3RyZWVVdGlscy5jb2xsZWN0KSh0cmVlLCBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCkge1xuICAgIGkgKz0gMTtcbiAgICBjaGlsZC5oZWlnaHRfID0gY2hpbGQuaGVpZ2h0ICsgcGFyZW50LmhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdG9yOiAoMCwgX2Nvbm5lY3RvcjJbJ2RlZmF1bHQnXSkoe1xuICAgICAgICBzdGFydDogcG9zaXRpb24ocGFyZW50KSxcbiAgICAgICAgZW5kOiBwb3NpdGlvbihjaGlsZCksXG4gICAgICAgIHRlbnNpb246IHRlbnNpb25cbiAgICAgIH0pLFxuICAgICAgaW5kZXg6IGksXG4gICAgICBpdGVtOiB7XG4gICAgICAgIHN0YXJ0OiBwYXJlbnQuaXRlbSxcbiAgICAgICAgZW5kOiBjaGlsZC5pdGVtXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIHZhciBjaGlsZE5vZGVzID0gKDAsIF90cmVlVXRpbHMuY29sbGVjdCkodHJlZSwgZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9pbnQ6IHBvc2l0aW9uKGNoaWxkKSxcbiAgICAgIGl0ZW06IGNoaWxkLml0ZW1cbiAgICB9O1xuICB9KTtcbiAgdmFyIHJvb3ROb2RlID0ge1xuICAgIHBvaW50OiBwb3NpdGlvbih0cmVlKSxcbiAgICBpdGVtOiB0cmVlLml0ZW1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGN1cnZlczogY29ubmVjdG9ycyxcbiAgICBub2RlczogW3Jvb3ROb2RlXS5jb25jYXQoY2hpbGROb2RlcylcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhdGhzLWpzL3RyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9vcHMgPSByZXF1aXJlKCcuL29wcycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgX1BhdGgkbW92ZXRvJGxpbmV0byRjdXJ2ZXRvLCBfUGF0aCRtb3ZldG8sIF9QYXRoO1xuXG4gIHZhciBzdGFydCA9IF9yZWYuc3RhcnQ7XG4gIHZhciBlbmQgPSBfcmVmLmVuZDtcbiAgdmFyIHRlbnNpb24gPSBfcmVmLnRlbnNpb247XG5cbiAgaWYgKHRlbnNpb24gPT0gbnVsbCkge1xuICAgIHRlbnNpb24gPSAwLjA1O1xuICB9XG5cbiAgdmFyIF9zdGFydCA9IF9zbGljZWRUb0FycmF5KHN0YXJ0LCAyKTtcblxuICB2YXIgYSA9IF9zdGFydFswXTtcbiAgdmFyIGIgPSBfc3RhcnRbMV07XG5cbiAgdmFyIF9lbmQgPSBfc2xpY2VkVG9BcnJheShlbmQsIDIpO1xuXG4gIHZhciBjID0gX2VuZFswXTtcbiAgdmFyIGQgPSBfZW5kWzFdO1xuXG4gIHZhciBsZW5ndGggPSAoYyAtIGEpICogdGVuc2lvbjtcbiAgdmFyIG1pZDEgPSBbYSArIGxlbmd0aCwgYl07XG4gIHZhciBtaWQyID0gW2MgLSBsZW5ndGgsIGRdO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aDogKF9QYXRoJG1vdmV0byRsaW5ldG8kY3VydmV0byA9IChfUGF0aCRtb3ZldG8gPSAoX1BhdGggPSAoMCwgX3BhdGgyWydkZWZhdWx0J10pKCkpLm1vdmV0by5hcHBseShfUGF0aCwgX3RvQ29uc3VtYWJsZUFycmF5KHN0YXJ0KSkpLmxpbmV0by5hcHBseShfUGF0aCRtb3ZldG8sIG1pZDEpLmN1cnZldG8oYSArIDUgKiBsZW5ndGgsIGIsIGMgLSA1ICogbGVuZ3RoLCBkLCBjIC0gbGVuZ3RoLCBkKSkubGluZXRvLmFwcGx5KF9QYXRoJG1vdmV0byRsaW5ldG8kY3VydmV0bywgX3RvQ29uc3VtYWJsZUFycmF5KGVuZCkpLFxuICAgIGNlbnRyb2lkOiAoMCwgX29wcy5hdmVyYWdlKShbc3RhcnQsIGVuZF0pXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYXRocy1qcy9jb25uZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbnZhciBQYXRoID0gZnVuY3Rpb24gUGF0aChpbml0KSB7XG4gIHZhciBfaW5zdHJ1Y3Rpb25zID0gaW5pdCB8fCBbXTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goYXJyLCBlbCkge1xuICAgIHZhciBjb3B5ID0gYXJyLnNsaWNlKDAsIGFyci5sZW5ndGgpO1xuICAgIGNvcHkucHVzaChlbCk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgdmFyIGFyZUVxdWFsUG9pbnRzID0gZnVuY3Rpb24gYXJlRXF1YWxQb2ludHMoX3JlZiwgX3JlZjMpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKTtcblxuICAgIHZhciBhMSA9IF9yZWYyWzBdO1xuICAgIHZhciBiMSA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIF9yZWYzMiA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKTtcblxuICAgIHZhciBhMiA9IF9yZWYzMlswXTtcbiAgICB2YXIgYjIgPSBfcmVmMzJbMV07XG4gICAgcmV0dXJuIGExID09PSBhMiAmJiBiMSA9PT0gYjI7XG4gIH07XG5cbiAgdmFyIHRyaW1aZXJvcyA9IGZ1bmN0aW9uIHRyaW1aZXJvcyhzdHJpbmcsIGNoYXIpIHtcbiAgICB2YXIgbCA9IHN0cmluZy5sZW5ndGg7XG4gICAgd2hpbGUgKHN0cmluZy5jaGFyQXQobCAtIDEpID09PSAnMCcpIHtcbiAgICAgIGwgPSBsIC0gMTtcbiAgICB9XG4gICAgaWYgKHN0cmluZy5jaGFyQXQobCAtIDEpID09PSAnLicpIHtcbiAgICAgIGwgPSBsIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgbCk7XG4gIH07XG5cbiAgdmFyIHJvdW5kID0gZnVuY3Rpb24gcm91bmQobnVtYmVyLCBkaWdpdHMpIHtcbiAgICB2YXIgc3RyID0gbnVtYmVyLnRvRml4ZWQoZGlnaXRzKTtcbiAgICByZXR1cm4gdHJpbVplcm9zKHN0cik7XG4gIH07XG5cbiAgdmFyIHByaW50SW5zdHJ1bmN0aW9uID0gZnVuY3Rpb24gcHJpbnRJbnN0cnVuY3Rpb24oX3JlZjQpIHtcbiAgICB2YXIgY29tbWFuZCA9IF9yZWY0LmNvbW1hbmQ7XG4gICAgdmFyIHBhcmFtcyA9IF9yZWY0LnBhcmFtcztcblxuICAgIHZhciBudW1iZXJzID0gcGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHJldHVybiByb3VuZChwYXJhbSwgNik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbW1hbmQgKyAnICcgKyBudW1iZXJzLmpvaW4oJyAnKTtcbiAgfTtcblxuICB2YXIgcG9pbnQgPSBmdW5jdGlvbiBwb2ludChfcmVmNSwgX3JlZjYpIHtcbiAgICB2YXIgY29tbWFuZCA9IF9yZWY1LmNvbW1hbmQ7XG4gICAgdmFyIHBhcmFtcyA9IF9yZWY1LnBhcmFtcztcblxuICAgIHZhciBfcmVmNjIgPSBfc2xpY2VkVG9BcnJheShfcmVmNiwgMik7XG5cbiAgICB2YXIgcHJldlggPSBfcmVmNjJbMF07XG4gICAgdmFyIHByZXZZID0gX3JlZjYyWzFdO1xuXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIFtwYXJhbXNbMF0sIHBhcmFtc1sxXV07XG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFtwYXJhbXNbMF0sIHBhcmFtc1sxXV07XG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgcmV0dXJuIFtwYXJhbXNbMF0sIHByZXZZXTtcbiAgICAgIGNhc2UgJ1YnOlxuICAgICAgICByZXR1cm4gW3ByZXZYLCBwYXJhbXNbMF1dO1xuICAgICAgY2FzZSAnWic6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSAnQyc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzRdLCBwYXJhbXNbNV1dO1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzJdLCBwYXJhbXNbM11dO1xuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzJdLCBwYXJhbXNbM11dO1xuICAgICAgY2FzZSAnVCc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzBdLCBwYXJhbXNbMV1dO1xuICAgICAgY2FzZSAnQSc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzVdLCBwYXJhbXNbNl1dO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdmVyYm9zaWZ5ID0gZnVuY3Rpb24gdmVyYm9zaWZ5KGtleXMsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBhcmdzID0gdHlwZW9mIGEgPT09ICdvYmplY3QnID8ga2V5cy5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuIGFba107XG4gICAgICB9KSA6IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHBsdXMgPSBmdW5jdGlvbiBwbHVzKGluc3RydWN0aW9uKSB7XG4gICAgcmV0dXJuIFBhdGgocHVzaChfaW5zdHJ1Y3Rpb25zLCBpbnN0cnVjdGlvbikpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW92ZXRvOiB2ZXJib3NpZnkoWyd4JywgJ3knXSwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ00nLFxuICAgICAgICBwYXJhbXM6IFt4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgbGluZXRvOiB2ZXJib3NpZnkoWyd4JywgJ3knXSwgZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ0wnLFxuICAgICAgICBwYXJhbXM6IFt4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgaGxpbmV0bzogdmVyYm9zaWZ5KFsneCddLCBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnSCcsXG4gICAgICAgIHBhcmFtczogW3hdXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICB2bGluZXRvOiB2ZXJib3NpZnkoWyd5J10sIGZ1bmN0aW9uICh5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdWJyxcbiAgICAgICAgcGFyYW1zOiBbeV1cbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIGNsb3NlcGF0aDogZnVuY3Rpb24gY2xvc2VwYXRoKCkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnWicsXG4gICAgICAgIHBhcmFtczogW11cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY3VydmV0bzogdmVyYm9zaWZ5KFsneDEnLCAneTEnLCAneDInLCAneTInLCAneCcsICd5J10sIGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeCwgeSkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnQycsXG4gICAgICAgIHBhcmFtczogW3gxLCB5MSwgeDIsIHkyLCB4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgc21vb3RoY3VydmV0bzogdmVyYm9zaWZ5KFsneDInLCAneTInLCAneCcsICd5J10sIGZ1bmN0aW9uICh4MiwgeTIsIHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ1MnLFxuICAgICAgICBwYXJhbXM6IFt4MiwgeTIsIHgsIHldXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBxY3VydmV0bzogdmVyYm9zaWZ5KFsneDEnLCAneTEnLCAneCcsICd5J10sIGZ1bmN0aW9uICh4MSwgeTEsIHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ1EnLFxuICAgICAgICBwYXJhbXM6IFt4MSwgeTEsIHgsIHldXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBzbW9vdGhxY3VydmV0bzogdmVyYm9zaWZ5KFsneCcsICd5J10sIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdUJyxcbiAgICAgICAgcGFyYW1zOiBbeCwgeV1cbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIGFyYzogdmVyYm9zaWZ5KFsncngnLCAncnknLCAneHJvdCcsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJywgJ3gnLCAneSddLCBmdW5jdGlvbiAocngsIHJ5LCB4cm90LCBsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZywgeCwgeSkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnQScsXG4gICAgICAgIHBhcmFtczogW3J4LCByeSwgeHJvdCwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcsIHgsIHldXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBwcmludDogZnVuY3Rpb24gcHJpbnQoKSB7XG4gICAgICByZXR1cm4gX2luc3RydWN0aW9ucy5tYXAocHJpbnRJbnN0cnVuY3Rpb24pLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIHBvaW50czogZnVuY3Rpb24gcG9pbnRzKCkge1xuICAgICAgdmFyIHBzID0gW107XG4gICAgICB2YXIgcHJldiA9IFswLCAwXTtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfaW5zdHJ1Y3Rpb25zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBpbnN0cnVjdGlvbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgdmFyIHAgPSBwb2ludChpbnN0cnVjdGlvbiwgcHJldik7XG4gICAgICAgICAgcHJldiA9IHA7XG4gICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIHBzLnB1c2gocCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBzO1xuICAgIH0sXG4gICAgaW5zdHJ1Y3Rpb25zOiBmdW5jdGlvbiBpbnN0cnVjdGlvbnMoKSB7XG4gICAgICByZXR1cm4gX2luc3RydWN0aW9ucy5zbGljZSgwLCBfaW5zdHJ1Y3Rpb25zLmxlbmd0aCk7XG4gICAgfSxcbiAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KHBhdGgpIHtcbiAgICAgIHZhciBwcyA9IHRoaXMucG9pbnRzKCk7XG4gICAgICB2YXIgbGFzdCA9IHBzW3BzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIGZpcnN0ID0gcGF0aC5wb2ludHMoKVswXTtcbiAgICAgIHZhciBuZXdJbnN0cnVjdGlvbnMgPSBwYXRoLmluc3RydWN0aW9ucygpLnNsaWNlKDEpO1xuICAgICAgaWYgKCFhcmVFcXVhbFBvaW50cyhsYXN0LCBmaXJzdCkpIHtcbiAgICAgICAgbmV3SW5zdHJ1Y3Rpb25zLnVuc2hpZnQoe1xuICAgICAgICAgIGNvbW1hbmQ6IFwiTFwiLFxuICAgICAgICAgIHBhcmFtczogZmlyc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUGF0aCh0aGlzLmluc3RydWN0aW9ucygpLmNvbmNhdChuZXdJbnN0cnVjdGlvbnMpKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQYXRoKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYXRocy1qcy9wYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSkoKTtcblxudmFyIHN1bSA9IGZ1bmN0aW9uIHN1bSh4cykge1xuICByZXR1cm4geHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xuICB9LCAwKTtcbn07XG5cbnZhciBtaW4gPSBmdW5jdGlvbiBtaW4oeHMpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLm1pbihhLCBiKTtcbiAgfSk7XG59O1xuXG52YXIgbWF4ID0gZnVuY3Rpb24gbWF4KHhzKSB7XG4gIHJldHVybiB4cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoYSwgYik7XG4gIH0pO1xufTtcblxudmFyIHN1bUJ5ID0gZnVuY3Rpb24gc3VtQnkoeHMsIGYpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhICsgZihiKTtcbiAgfSwgMCk7XG59O1xuXG52YXIgbWluQnkgPSBmdW5jdGlvbiBtaW5CeSh4cywgZikge1xuICByZXR1cm4geHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKGEsIGYoYikpO1xuICB9LCBJbmZpbml0eSk7XG59O1xuXG52YXIgbWF4QnkgPSBmdW5jdGlvbiBtYXhCeSh4cywgZikge1xuICByZXR1cm4geHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KGEsIGYoYikpO1xuICB9LCAtSW5maW5pdHkpO1xufTtcblxudmFyIHBsdXMgPSBmdW5jdGlvbiBwbHVzKF9yZWYsIF9yZWYzKSB7XG4gIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpO1xuXG4gIHZhciBhID0gX3JlZjJbMF07XG4gIHZhciBiID0gX3JlZjJbMV07XG5cbiAgdmFyIF9yZWYzMiA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKTtcblxuICB2YXIgYyA9IF9yZWYzMlswXTtcbiAgdmFyIGQgPSBfcmVmMzJbMV07XG4gIHJldHVybiBbYSArIGMsIGIgKyBkXTtcbn07XG5cbnZhciBtaW51cyA9IGZ1bmN0aW9uIG1pbnVzKF9yZWY0LCBfcmVmNSkge1xuICB2YXIgX3JlZjQyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjQsIDIpO1xuXG4gIHZhciBhID0gX3JlZjQyWzBdO1xuICB2YXIgYiA9IF9yZWY0MlsxXTtcblxuICB2YXIgX3JlZjUyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjUsIDIpO1xuXG4gIHZhciBjID0gX3JlZjUyWzBdO1xuICB2YXIgZCA9IF9yZWY1MlsxXTtcbiAgcmV0dXJuIFthIC0gYywgYiAtIGRdO1xufTtcblxudmFyIHRpbWVzID0gZnVuY3Rpb24gdGltZXMoaywgX3JlZjYpIHtcbiAgdmFyIF9yZWY2MiA9IF9zbGljZWRUb0FycmF5KF9yZWY2LCAyKTtcblxuICB2YXIgYSA9IF9yZWY2MlswXTtcbiAgdmFyIGIgPSBfcmVmNjJbMV07XG4gIHJldHVybiBbayAqIGEsIGsgKiBiXTtcbn07XG5cbnZhciBsZW5ndGggPSBmdW5jdGlvbiBsZW5ndGgoX3JlZjcpIHtcbiAgdmFyIF9yZWY3MiA9IF9zbGljZWRUb0FycmF5KF9yZWY3LCAyKTtcblxuICB2YXIgYSA9IF9yZWY3MlswXTtcbiAgdmFyIGIgPSBfcmVmNzJbMV07XG4gIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG52YXIgc3VtVmVjdG9ycyA9IGZ1bmN0aW9uIHN1bVZlY3RvcnMoeHMpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShwbHVzLCBbMCwgMF0pO1xufTtcblxudmFyIGF2ZXJhZ2UgPSBmdW5jdGlvbiBhdmVyYWdlKHBvaW50cykge1xuICByZXR1cm4gdGltZXMoMSAvIHBvaW50cy5sZW5ndGgsIHBvaW50cy5yZWR1Y2UocGx1cykpO1xufTtcblxudmFyIG9uQ2lyY2xlID0gZnVuY3Rpb24gb25DaXJjbGUociwgYW5nbGUpIHtcbiAgcmV0dXJuIHRpbWVzKHIsIFtNYXRoLnNpbihhbmdsZSksIC1NYXRoLmNvcyhhbmdsZSldKTtcbn07XG5cbnZhciBlbmhhbmNlID0gZnVuY3Rpb24gZW5oYW5jZShjb21wdXRlLCBjdXJ2ZSkge1xuICB2YXIgb2JqID0gY29tcHV0ZSB8fCB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciBtZXRob2QgPSBvYmpba2V5XTtcbiAgICBjdXJ2ZVtrZXldID0gbWV0aG9kKGN1cnZlLmluZGV4LCBjdXJ2ZS5pdGVtLCBjdXJ2ZS5ncm91cCk7XG4gIH1cbiAgcmV0dXJuIGN1cnZlO1xufTtcblxudmFyIHJhbmdlID0gZnVuY3Rpb24gcmFuZ2UoYSwgYiwgaW5jbHVzaXZlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IGE7IGkgPCBiOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChpKTtcbiAgfVxuICBpZiAoaW5jbHVzaXZlKSB7XG4gICAgcmVzdWx0LnB1c2goYik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBtYXBPYmplY3QgPSBmdW5jdGlvbiBtYXBPYmplY3Qob2JqLCBmKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmtleXMob2JqKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHZhciB2ID0gb2JqW2tdO1xuICAgICAgcmVzdWx0LnB1c2goZihrLCB2KSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHBhaXJzID0gZnVuY3Rpb24gcGFpcnMob2JqKSB7XG4gIHJldHVybiBtYXBPYmplY3Qob2JqLCBmdW5jdGlvbiAoaywgdikge1xuICAgIHJldHVybiBbaywgdl07XG4gIH0pO1xufTtcblxudmFyIGlkID0gZnVuY3Rpb24gaWQoeCkge1xuICByZXR1cm4geDtcbn07XG5cbmV4cG9ydHMuc3VtID0gc3VtO1xuZXhwb3J0cy5taW4gPSBtaW47XG5leHBvcnRzLm1heCA9IG1heDtcbmV4cG9ydHMuc3VtQnkgPSBzdW1CeTtcbmV4cG9ydHMubWluQnkgPSBtaW5CeTtcbmV4cG9ydHMubWF4QnkgPSBtYXhCeTtcbmV4cG9ydHMucGx1cyA9IHBsdXM7XG5leHBvcnRzLm1pbnVzID0gbWludXM7XG5leHBvcnRzLnRpbWVzID0gdGltZXM7XG5leHBvcnRzLmlkID0gaWQ7XG5leHBvcnRzLmxlbmd0aCA9IGxlbmd0aDtcbmV4cG9ydHMuc3VtVmVjdG9ycyA9IHN1bVZlY3RvcnM7XG5leHBvcnRzLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuZXhwb3J0cy5vbkNpcmNsZSA9IG9uQ2lyY2xlO1xuZXhwb3J0cy5lbmhhbmNlID0gZW5oYW5jZTtcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcbmV4cG9ydHMubWFwT2JqZWN0ID0gbWFwT2JqZWN0O1xuZXhwb3J0cy5wYWlycyA9IHBhaXJzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7IHN1bTogc3VtLCBtaW46IG1pbiwgbWF4OiBtYXgsIHN1bUJ5OiBzdW1CeSwgbWluQnk6IG1pbkJ5LCBtYXhCeTogbWF4QnksIHBsdXM6IHBsdXMsIG1pbnVzOiBtaW51cywgdGltZXM6IHRpbWVzLCBpZDogaWQsXG4gIGxlbmd0aDogbGVuZ3RoLCBzdW1WZWN0b3JzOiBzdW1WZWN0b3JzLCBhdmVyYWdlOiBhdmVyYWdlLCBvbkNpcmNsZTogb25DaXJjbGUsIGVuaGFuY2U6IGVuaGFuY2UsIHJhbmdlOiByYW5nZSwgbWFwT2JqZWN0OiBtYXBPYmplY3QsIHBhaXJzOiBwYWlycyB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhdGhzLWpzL29wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0pKCk7XG5cbnZhciBsaW5lYXIgPSBmdW5jdGlvbiBsaW5lYXIoX3JlZiwgX3JlZjMpIHtcbiAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMik7XG5cbiAgdmFyIGEgPSBfcmVmMlswXTtcbiAgdmFyIGIgPSBfcmVmMlsxXTtcblxuICB2YXIgX3JlZjMyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpO1xuXG4gIHZhciBjID0gX3JlZjMyWzBdO1xuICB2YXIgZCA9IF9yZWYzMlsxXTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYoeCkge1xuICAgIHJldHVybiBjICsgKGQgLSBjKSAqICh4IC0gYSkgLyAoYiAtIGEpO1xuICB9O1xuXG4gIGYuaW52ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGluZWFyKFtjLCBkXSwgW2EsIGJdKTtcbiAgfTtcbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGxpbmVhcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGF0aHMtanMvbGluZWFyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIG1heEJ5ID0gZnVuY3Rpb24gbWF4QnkoaXRlbXMsIGYpIHtcbiAgaWYgKGl0ZW1zID09PSB1bmRlZmluZWQpIGl0ZW1zID0gW107XG5cbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAobSwgaSkge1xuICAgIHJldHVybiBNYXRoLm1heChtLCBmKGkpKTtcbiAgfSwgMCk7XG59O1xuXG52YXIgdHJlZUhlaWdodCA9IGZ1bmN0aW9uIHRyZWVIZWlnaHQocm9vdCkge1xuICByZXR1cm4gMSArIG1heEJ5KHJvb3QuY2hpbGRyZW4sIHRyZWVIZWlnaHQpO1xufTtcblxudmFyIGJ1aWxkVHJlZSA9IGZ1bmN0aW9uIGJ1aWxkVHJlZShkYXRhLCBjaGlsZHJlbikge1xuICB2YXIgbGV2ZWwgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgaXRlbTogZGF0YSxcbiAgICBsZXZlbDogbGV2ZWxcbiAgfTtcbiAgdmFyIGNzID0gY2hpbGRyZW4oZGF0YSk7XG4gIGlmIChjcyAmJiBjcy5sZW5ndGgpIHtcbiAgICByZXN1bHQuY2hpbGRyZW4gPSBjcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBidWlsZFRyZWUoYywgY2hpbGRyZW4sIGxldmVsICsgMSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiBzZXRIZWlnaHQocm9vdCkge1xuICB2YXIgbGV2ZWwgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzFdO1xuICB2YXIgbWF4SGVpZ2h0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzJdO1xuXG4gIGlmIChtYXhIZWlnaHRzW2xldmVsXSAhPSBudWxsKSB7XG4gICAgcm9vdC5oZWlnaHQgPSBtYXhIZWlnaHRzW2xldmVsXSArIDE7XG4gICAgbWF4SGVpZ2h0c1tsZXZlbF0gKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBtYXhIZWlnaHRzW2xldmVsXSA9IDA7XG4gICAgcm9vdC5oZWlnaHQgPSAwO1xuICB9XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IChyb290LmNoaWxkcmVuIHx8IFtdKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBjaGlsZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBzZXRIZWlnaHQoY2hpbGQsIGxldmVsICsgMSwgbWF4SGVpZ2h0cyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4SGVpZ2h0cztcbn07XG5cbi8vIGYgaXMgYSBmdW5jdGlvbiBvZiAocGFyZW50LCBjaGlsZClcbnZhciBjb2xsZWN0ID0gZnVuY3Rpb24gY29sbGVjdChyb290LCBmKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IChyb290LmNoaWxkcmVuIHx8IFtdKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIGNoaWxkID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICByZXN1bHQucHVzaChmKHJvb3QsIGNoaWxkKSk7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNvbGxlY3QoY2hpbGQsIGYpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgX2l0ZXJhdG9yMltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy50cmVlSGVpZ2h0ID0gdHJlZUhlaWdodDtcbmV4cG9ydHMuYnVpbGRUcmVlID0gYnVpbGRUcmVlO1xuZXhwb3J0cy5zZXRIZWlnaHQgPSBzZXRIZWlnaHQ7XG5leHBvcnRzLmNvbGxlY3QgPSBjb2xsZWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhdGhzLWpzL3RyZWUtdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEl0ZW0gIGZyb20gJy4vbGlzdC1pdGVtJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QgKHsgaGlzdG9yeSB9KSB7XG4gIGxldCB0aW1lbGluZSA9IGhpc3RvcnkudG9BcnJheSgpLnJldmVyc2UoKVxuXG4gIGxldCBpdGVtcyA9IHRpbWVsaW5lLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgcmV0dXJuIDxJdGVtIGtleT17IGkgfSBhY3Rpb249eyBhY3Rpb24gfSAvPlxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17IHN0eWxlLmxpc3QgfT5cbiAgICAgIHsgaXRlbXMgfVxuICAgIDwvdWw+XG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgJ3JlYWN0LWpzb24taW5zcGVjdG9yL2pzb24taW5zcGVjdG9yLmNzcydcblxuaW1wb3J0IFJlYWN0ICAgICBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnNwZWN0b3IgZnJvbSAncmVhY3QtanNvbi1pbnNwZWN0b3InXG5pbXBvcnQgY3ggICAgICAgIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgc3R5bGUgICAgIGZyb20gJy4vc3R5bGUnXG5cbmZ1bmN0aW9uIGh1bWFuaXplICh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcX1xcZCskLywgJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGdldENsYXNzTmFtZXMoKSB7XG4gICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gY3goc3R5bGUuaXRlbSwge1xuICAgICAgW3N0eWxlLmluYWN0aXZlXSAgOiBhY3Rpb24uaXMoJ2Rpc2FibGVkJyksXG4gICAgICBbc3R5bGUuZXJyb3JdICAgICA6IGFjdGlvbi5pcygnZmFpbGVkJyksXG4gICAgICBbc3R5bGUubG9hZGluZ10gICA6IGFjdGlvbi5pcygnb3BlbicpLFxuICAgICAgW3N0eWxlLmNvbXBsZXRlXSAgOiBhY3Rpb24uaXMoJ2RvbmUnKSxcbiAgICAgIFtzdHlsZS5jYW5jZWxsZWRdIDogYWN0aW9uLmlzKCdjYW5jZWxsZWQnKVxuICAgIH0pXG4gIH0sXG5cbiAgbXV0ZSgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbi50b2dnbGUoKVxuICB9LFxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuICB9LFxuXG4gIHJlbmRlclBhcmFtZXRlcnMoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlLnBhcmFtZXRlcnMgfT5cbiAgICAgICAgPEluc3BlY3RvciBkYXRhPXsgYWN0aW9uLnBheWxvYWQgfSBzZWFyY2g9eyBudWxsIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgdGhpcy5nZXRDbGFzc05hbWVzKCkgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5tZW51IH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgc3R5bGUudGl0bGUgfT5cbiAgICAgICAgICAgIHsgaHVtYW5pemUoYWN0aW9uLmJlaGF2aW9yLm5hbWUpIH1cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IHN0eWxlLmJ1dHRvbiB9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5tdXRlIH0+XG4gICAgICAgICAgICB7IGFjdGlvbi5pcygnZGlzYWJsZWQnKSA/IFwi4peHXCIgOiBcIuKXhlwiIH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IHN0eWxlLmJ1dHRvbiB9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy50b2dnbGUgfT5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5vcGVuID8gXCLilrRcIiA6IFwi4pa+XCIgfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7IHRoaXMuc3RhdGUub3BlbiA/IHRoaXMucmVuZGVyUGFyYW1ldGVycygpIDogbnVsbCB9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanN4XG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2pzb24taW5zcGVjdG9yLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vanNvbi1pbnNwZWN0b3IuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9qc29uLWluc3BlY3Rvci5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2pzb24taW5zcGVjdG9yLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzb24taW5zcGVjdG9yLFxcbi5qc29uLWluc3BlY3Rvcl9fc2VsZWN0aW9uIHtcXG4gICAgZm9udDogMTRweC8xLjQgQ29uc29sYXMsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX19sZWFmIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX2xpbmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5qc29uLWluc3BlY3Rvcl9fbGluZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTIwMHB4O1xcbiAgICByaWdodDogLTUwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX2xpbmU6aG92ZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX2xlYWZfY29tcG9zaXRlID4gLmpzb24taW5zcGVjdG9yX19saW5lIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX3JhZGlvLFxcbi5qc29uLWluc3BlY3Rvcl9fZmxhdHBhdGgge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX3ZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX19zZWFyY2gge1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX19rZXkge1xcbiAgICBjb2xvcjogIzUwNTA1MDtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX192YWx1ZV9oZWxwZXIsXFxuLmpzb24taW5zcGVjdG9yX192YWx1ZV9udWxsLFxcbi5qc29uLWluc3BlY3Rvcl9fbm90LWZvdW5kIHtcXG4gICAgY29sb3I6ICNiMGIwYjA7XFxufVxcblxcbi5qc29uLWluc3BlY3Rvcl9fdmFsdWVfc3RyaW5nIHtcXG4gICAgY29sb3I6ICM3OTg5NTM7XFxufVxcblxcbi5qc29uLWluc3BlY3Rvcl9fdmFsdWVfYm9vbGVhbiB7XFxuICAgIGNvbG9yOiAjNzViNWFhO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX3ZhbHVlX251bWJlciB7XFxuICAgIGNvbG9yOiAjZDI4NDQ1O1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX2hsIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgMnB4ICNmZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX19zaG93LW9yaWdpbmFsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDZweDtcXG5cXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmpzb24taW5zcGVjdG9yX19zaG93LW9yaWdpbmFsOmhvdmVyIHtcXG4gICAgY29sb3I6ICMxMTE7XFxufVxcblxcbi5qc29uLWluc3BlY3Rvcl9fc2hvdy1vcmlnaW5hbDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnXFxcXDI5NDInO1xcbn1cXG5cXG4uanNvbi1pbnNwZWN0b3JfX3Nob3ctb3JpZ2luYWw6aG92ZXI6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIGV4cGFuZCdcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvanNvbi1pbnNwZWN0b3IuY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRCA9IFJlYWN0LkRPTTtcblxudmFyIExlYWYgPSByZXF1aXJlKCcuL2xpYi9sZWFmJyk7XG52YXIgbGVhZiA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoTGVhZik7XG52YXIgU2VhcmNoQmFyID0gcmVxdWlyZSgnLi9saWIvc2VhcmNoLWJhcicpO1xudmFyIHNlYXJjaEJhciA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoU2VhcmNoQmFyKTtcblxudmFyIGZpbHRlcmVyID0gcmVxdWlyZSgnLi9saWIvZmlsdGVyZXInKTtcbnZhciBpc0VtcHR5ID0gcmVxdWlyZSgnLi9saWIvaXMtZW1wdHknKTtcbnZhciBsZW5zID0gcmVxdWlyZSgnLi9saWIvbGVucycpO1xudmFyIG5vb3AgPSByZXF1aXJlKCcuL2xpYi9ub29wJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgICAgIC8vIEZvciBub3cgaXQgZXhwZWN0cyBhIGZhY3RvcnkgZnVuY3Rpb24sIG5vdCBlbGVtZW50LlxuICAgICAgICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgICAgICBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICAgICAgICBdKSxcbiAgICAgICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHZhbGlkYXRlUXVlcnk6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICBpc0V4cGFuZGVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZmlsdGVyT3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWFyY2g6IHNlYXJjaEJhcixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICBpZDogJ2pzb24tJyArIERhdGUubm93KCksXG4gICAgICAgICAgICBvbkNsaWNrOiBub29wLFxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uczoge30sXG4gICAgICAgICAgICB2YWxpZGF0ZVF1ZXJ5OiBmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeS5sZW5ndGggPj0gMjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlY2lkZSB3aGV0aGVyIHRoZSBsZWFmIG5vZGUgYXQgZ2l2ZW4gYGtleXBhdGhgIHNob3VsZCBiZVxuICAgICAgICAgICAgICogZXhwYW5kZWQgaW5pdGlhbGx5LlxuICAgICAgICAgICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXlwYXRoXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtBbnl9IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc0V4cGFuZGVkOiBmdW5jdGlvbihrZXlwYXRoLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5wcm9wcy5xdWVyeSB8fCAnJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcyA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgdmFyIGlzUXVlcnlWYWxpZCA9IChcbiAgICAgICAgICAgIHMucXVlcnkgIT09ICcnICYmXG4gICAgICAgICAgICBwLnZhbGlkYXRlUXVlcnkocy5xdWVyeSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgZGF0YSA9IChcbiAgICAgICAgICAgIGlzUXVlcnlWYWxpZCA/XG4gICAgICAgICAgICAgICAgcy5maWx0ZXJlcihzLnF1ZXJ5KSA6XG4gICAgICAgICAgICAgICAgcC5kYXRhXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIGlzTm90Rm91bmQgPSAoXG4gICAgICAgICAgICBpc1F1ZXJ5VmFsaWQgJiZcbiAgICAgICAgICAgIGlzRW1wdHkoZGF0YSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gRC5kaXYoeyBjbGFzc05hbWU6ICdqc29uLWluc3BlY3RvciAnICsgcC5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9vbGJhcigpLFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIGlzTm90Rm91bmQgP1xuICAgICAgICAgICAgICAgICAgICBELmRpdih7IGNsYXNzTmFtZTogJ2pzb24taW5zcGVjdG9yX19ub3QtZm91bmQnIH0sICdOb3RoaW5nIGZvdW5kJykgOlxuICAgICAgICAgICAgICAgICAgICBsZWFmKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBwLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsOiB0aGlzLmdldE9yaWdpbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1F1ZXJ5VmFsaWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnF1ZXJ5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAncm9vdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFeHBhbmRlZDogcC5pc0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RpdmVMYWJlbDogcC5pbnRlcmFjdGl2ZUxhYmVsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSxcbiAgICByZW5kZXJUb29sYmFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IHRoaXMucHJvcHMuc2VhcmNoO1xuXG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBELmRpdih7IGNsYXNzTmFtZTogJ2pzb24taW5zcGVjdG9yX190b29sYmFyJyB9LFxuICAgICAgICAgICAgICAgIHNlYXJjaCh7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5zdGF0ZS5xdWVyeVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWFyY2g6IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVGaWx0ZXJlcih0aGlzLnByb3BzLmRhdGEsIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucyk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRmlsdGVyZXIocC5kYXRhLCBwLmZpbHRlck9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBpc1JlY2VpdmluZ05ld1F1ZXJ5ID0gKFxuICAgICAgICAgICAgdHlwZW9mIHAucXVlcnkgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICBwLnF1ZXJ5ICE9PSB0aGlzLnN0YXRlLnF1ZXJ5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzUmVjZWl2aW5nTmV3UXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBwLnF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiAocCwgcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgcC5xdWVyeSAhPT0gdGhpcy5wcm9wcy5xdWVyeSB8fFxuICAgICAgICAgICAgcy5xdWVyeSAhPT0gdGhpcy5zdGF0ZS5xdWVyeSB8fFxuICAgICAgICAgICAgcC5kYXRhICE9PSB0aGlzLnByb3BzLmRhdGEgfHxcbiAgICAgICAgICAgIHAub25DbGljayAhPT0gdGhpcy5wcm9wcy5vbkNsaWNrXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBjcmVhdGVGaWx0ZXJlcjogZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmVyOiBmaWx0ZXJlcihkYXRhLCBvcHRpb25zKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE9yaWdpbmFsOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIHJldHVybiBsZW5zKHRoaXMucHJvcHMuZGF0YSwgcGF0aCk7XG4gICAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9qc29uLWluc3BlY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEQgPSBSZWFjdC5ET007XG5cbnZhciBtZDVvbWF0aWMgPSByZXF1aXJlKCdtZDUtby1tYXRpYycpO1xuXG52YXIgdWlkID0gcmVxdWlyZSgnLi91aWQnKTtcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyk7XG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2lzLXByaW1pdGl2ZScpO1xuXG52YXIgSGlnaGxpZ2h0ZXIgPSByZXF1aXJlKCcuL2hpZ2hsaWdodGVyJyk7XG52YXIgaGlnaGxpZ2h0ZXIgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEhpZ2hsaWdodGVyKTtcblxudmFyIFBBVEhfUFJFRklYID0gJy5yb290Lic7XG5cbnZhciBMZWFmID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHBhbmRlZDogdGhpcy5faXNJbml0aWFsbHlFeHBhbmRlZCh0aGlzLnByb3BzKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgcHJlZml4OiAnJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlkID0gJ2lkXycgKyB1aWQoKTtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHZhciBkID0ge1xuICAgICAgICAgICAgcGF0aDogdGhpcy5rZXlwYXRoKCksXG4gICAgICAgICAgICBrZXk6IHAubGFiZWwudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlOiBwLmRhdGFcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25MYWJlbENsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMsIGQpO1xuXG4gICAgICAgIHJldHVybiBELmRpdih7IGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSwgaWQ6ICdsZWFmLScgKyB0aGlzLl9yb290UGF0aCgpIH0sXG4gICAgICAgICAgICBELmlucHV0KHsgY2xhc3NOYW1lOiAnanNvbi1pbnNwZWN0b3JfX3JhZGlvJywgdHlwZTogJ3JhZGlvJywgbmFtZTogcC5pZCwgaWQ6IGlkLCB0YWJJbmRleDogLTEgfSksXG4gICAgICAgICAgICBELmxhYmVsKHsgY2xhc3NOYW1lOiAnanNvbi1pbnNwZWN0b3JfX2xpbmUnLCBodG1sRm9yOiBpZCwgb25DbGljazogb25MYWJlbENsaWNrIH0sXG4gICAgICAgICAgICAgICAgRC5kaXYoeyBjbGFzc05hbWU6ICdqc29uLWluc3BlY3Rvcl9fZmxhdHBhdGgnIH0sXG4gICAgICAgICAgICAgICAgICAgIGQucGF0aCksXG4gICAgICAgICAgICAgICAgRC5zcGFuKHsgY2xhc3NOYW1lOiAnanNvbi1pbnNwZWN0b3JfX2tleScgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtYXQoZC5rZXkpLFxuICAgICAgICAgICAgICAgICAgICAnOicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW50ZXJhY3RpdmVMYWJlbChkLmtleSwgdHJ1ZSkpLFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGl0bGUoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNob3dPcmlnaW5hbEJ1dHRvbigpKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSk7XG4gICAgfSxcbiAgICByZW5kZXJUaXRsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgICAgIHZhciB0ID0gdHlwZShkYXRhKTtcblxuICAgICAgICBzd2l0Y2ggKHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gRC5zcGFuKHsgY2xhc3NOYW1lOiAnanNvbi1pbnNwZWN0b3JfX3ZhbHVlIGpzb24taW5zcGVjdG9yX192YWx1ZV9oZWxwZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICdbXSAnICsgaXRlbXMoZGF0YS5sZW5ndGgpKTtcbiAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEQuc3Bhbih7IGNsYXNzTmFtZTogJ2pzb24taW5zcGVjdG9yX192YWx1ZSBqc29uLWluc3BlY3Rvcl9fdmFsdWVfaGVscGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAne30gJyArIGl0ZW1zKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gRC5zcGFuKHsgY2xhc3NOYW1lOiAnanNvbi1pbnNwZWN0b3JfX3ZhbHVlIGpzb24taW5zcGVjdG9yX192YWx1ZV8nICsgdC50b0xvd2VyQ2FzZSgpIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0KFN0cmluZyhkYXRhKSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW50ZXJhY3RpdmVMYWJlbChkYXRhLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGNoaWxkUHJlZml4ID0gdGhpcy5fcm9vdFBhdGgoKTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5leHBhbmRlZCAmJiAhaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlYWYoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBjaGlsZFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogcC5vbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBpZDogcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHAucXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsOiB0aGlzLnN0YXRlLm9yaWdpbmFsID8gbnVsbCA6IHAuZ2V0T3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgICAgIGtleTogZ2V0TGVhZktleShrZXksIHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgaXNFeHBhbmRlZDogcC5pc0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZUxhYmVsOiBwLmludGVyYWN0aXZlTGFiZWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW5kZXJTaG93T3JpZ2luYWxCdXR0b246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcCA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHAuZGF0YSkgfHwgdGhpcy5zdGF0ZS5vcmlnaW5hbCB8fCAhcC5nZXRPcmlnaW5hbCB8fCAhcC5xdWVyeSB8fCBjb250YWlucyh0aGlzLmtleXBhdGgoKSwgcC5xdWVyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEQuc3Bhbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdqc29uLWluc3BlY3Rvcl9fc2hvdy1vcmlnaW5hbCcsXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9vblNob3dPcmlnaW5hbENsaWNrXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVuZGVySW50ZXJhY3RpdmVMYWJlbDogZnVuY3Rpb24ob3JpZ2luYWxWYWx1ZSwgaXNLZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmludGVyYWN0aXZlTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmludGVyYWN0aXZlTGFiZWwoe1xuICAgICAgICAgICAgICAgIC8vIFRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIGB2YWx1ZWAgYW5kIGBvcmlnaW5hbFZhbHVlYCBpc1xuICAgICAgICAgICAgICAgIC8vIHByb3ZpZGVkIHRvIGhhdmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgICAgdmFsdWU6IFN0cmluZyhvcmlnaW5hbFZhbHVlKSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiBvcmlnaW5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIGlzS2V5OiBpc0tleSxcbiAgICAgICAgICAgICAgICBrZXlwYXRoOiB0aGlzLmtleXBhdGgoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgaWYgKHAucXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkOiAhY29udGFpbnMocC5sYWJlbCwgcC5xdWVyeSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBleHBhbnNpb24gc3RhdGUgd2hlbiBzd2l0Y2hpbmcgZnJvbSBzZWFyY2ggbW9kZVxuICAgICAgICAvLyB0byBmdWxsIGJyb3dzZSBtb2RlLlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5xdWVyeSAmJiAhcC5xdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRoaXMuX2lzSW5pdGlhbGx5RXhwYW5kZWQocClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfcm9vdFBhdGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmVmaXggKyAnLicgKyB0aGlzLnByb3BzLmxhYmVsO1xuICAgIH0sXG4gICAga2V5cGF0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb290UGF0aCgpLnN1YnN0cihQQVRIX1BSRUZJWC5sZW5ndGgpO1xuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9yaWdpbmFsIHx8IHRoaXMucHJvcHMuZGF0YTtcbiAgICB9LFxuICAgIGZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBoaWdobGlnaHRlcih7XG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZyxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldENsYXNzTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjbiA9ICdqc29uLWluc3BlY3Rvcl9fbGVhZic7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMucm9vdCkge1xuICAgICAgICAgICAgY24gKz0gJyBqc29uLWluc3BlY3Rvcl9fbGVhZl9yb290JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICBjbiArPSAnIGpzb24taW5zcGVjdG9yX19sZWFmX2V4cGFuZGVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodGhpcy5wcm9wcy5kYXRhKSkge1xuICAgICAgICAgICAgY24gKz0gJyBqc29uLWluc3BlY3Rvcl9fbGVhZl9jb21wb3NpdGUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNuO1xuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBfb25DbGljazogZnVuY3Rpb24oZGF0YSwgZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZGF0YSk7XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuICAgIF9vblNob3dPcmlnaW5hbENsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3JpZ2luYWw6IHRoaXMucHJvcHMuZ2V0T3JpZ2luYWwodGhpcy5rZXlwYXRoKCkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBfaXNJbml0aWFsbHlFeHBhbmRlZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIga2V5cGF0aCA9IHRoaXMua2V5cGF0aCgpO1xuXG4gICAgICAgIGlmIChwLnJvb3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwLnF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gcC5pc0V4cGFuZGVkKGtleXBhdGgsIHAuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXaGVuIGEgc2VhcmNoIHF1ZXJ5IGlzIHNwZWNpZmllZCwgZmlyc3QgY2hlY2sgaWYgdGhlIGtleXBhdGhcbiAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBzZWFyY2ggcXVlcnk6IGlmIGl0IGRvZXMsIHRoZW4gdGhlIGN1cnJlbnQgbGVhZlxuICAgICAgICAgICAgLy8gaXMgaXRzZWxmIGEgc2VhcmNoIHJlc3VsdCBhbmQgdGhlcmUgaXMgbm8gbmVlZCB0byBleHBhbmQgZnVydGhlci5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBIYXZpbmcgYSBgZ2V0T3JpZ2luYWxgIGZ1bmN0aW9uIHBhc3NlZCBzaWduYWxpemVzIHRoYXQgY3VycmVudFxuICAgICAgICAgICAgLy8gbGVhZiBvbmx5IGRpc3BsYXlzIGEgc3Vic2V0IG9mIGRhdGEsIHRodXMgc2hvdWxkIGJlIHJlbmRlcmVkXG4gICAgICAgICAgICAvLyBleHBhbmRlZCB0byByZXZlYWwgdGhlIGNoaWxkcmVuIHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQgZm9yLlxuICAgICAgICAgICAgcmV0dXJuICFjb250YWlucyhrZXlwYXRoLCBwLnF1ZXJ5KSAmJiAodHlwZW9mIHAuZ2V0T3JpZ2luYWwgPT09ICdmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vIEZJWE1FOiBUaGVyZSBzaG91bGQgYmUgYSBiZXR0ZXIgd2F5IHRvIGNhbGwgYSBjb21wb25lbnQgZmFjdG9yeSBmcm9tIGluc2lkZVxuLy8gY29tcG9uZW50IGRlZmluaXRpb24uXG52YXIgbGVhZiA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkoTGVhZik7XG5cbmZ1bmN0aW9uIGl0ZW1zKGNvdW50KSB7XG4gICAgcmV0dXJuIGNvdW50ICsgKGNvdW50ID09PSAxID8gJyBpdGVtJyA6ICcgaXRlbXMnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGVhZktleShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAvLyBUT0RPOiBTYW5pdGl6ZSBgdmFsdWVgIGJldHRlci5cbiAgICAgICAgdmFyIGhhc2ggPSBtZDVvbWF0aWMoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBrZXkgKyAnOicgKyBoYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnWycgKyB0eXBlKHZhbHVlKSArICddJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHN0cmluZywgc3Vic3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5pbmRleE9mKHN1YnN0cmluZykgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExlYWY7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvbGVhZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBFeHBvc2UgYG1kNW9tYXRpYyhzdHIpYC5cbiAqL1xuIFxubW9kdWxlLmV4cG9ydHMgPSBtZDVvbWF0aWM7XG5cbi8qKlxuICogSGFzaCBhbnkgc3RyaW5nIHVzaW5nIG1lc3NhZ2UgZGlnZXN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbiBcbmZ1bmN0aW9uIG1kNW9tYXRpYyhzdHIpIHtcbiAgICB2YXIgeCA9IHN0cjJibGtzX01ENShzdHIpO1xuICAgIHZhciBhID0gIDE3MzI1ODQxOTM7XG4gICAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICAgIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gICAgdmFyIGQgPSAgMjcxNzMzODc4O1xuXG4gICAgZm9yKHZhciBpPTA7IGk8eC5sZW5ndGg7IGkgKz0gMTYpXG4gICAge1xuICAgICAgICB2YXIgb2xkYSA9IGE7XG4gICAgICAgIHZhciBvbGRiID0gYjtcbiAgICAgICAgdmFyIG9sZGMgPSBjO1xuICAgICAgICB2YXIgb2xkZCA9IGQ7XG5cbiAgICAgICAgYSA9IGZmKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDcgLCAtNjgwODc2OTM2KTtcbiAgICAgICAgZCA9IGZmKGQsIGEsIGIsIGMsIHhbaSsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICAgICAgYyA9IGZmKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSBmZihhLCBiLCBjLCBkLCB4W2krIDRdLCA3ICwgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSBmZihkLCBhLCBiLCBjLCB4W2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xuICAgICAgICBjID0gZmYoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICAgICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgICAgICBhID0gZmYoYSwgYiwgYywgZCwgeFtpKyA4XSwgNyAsICAxNzcwMDM1NDE2KTtcbiAgICAgICAgZCA9IGZmKGQsIGEsIGIsIGMsIHhbaSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgICAgIGMgPSBmZihjLCBkLCBhLCBiLCB4W2krMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IGZmKGIsIGMsIGQsIGEsIHhbaSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgICAgIGEgPSBmZihhLCBiLCBjLCBkLCB4W2krMTJdLCA3ICwgIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gZmYoZCwgYSwgYiwgYywgeFtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgICAgIGMgPSBmZihjLCBkLCBhLCBiLCB4W2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgICAgICBiID0gZmYoYiwgYywgZCwgYSwgeFtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcbiAgICAgICAgYSA9IGdnKGEsIGIsIGMsIGQsIHhbaSsgMV0sIDUgLCAtMTY1Nzk2NTEwKTtcbiAgICAgICAgZCA9IGdnKGQsIGEsIGIsIGMsIHhbaSsgNl0sIDkgLCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSBnZyhjLCBkLCBhLCBiLCB4W2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSBnZyhhLCBiLCBjLCBkLCB4W2krIDVdLCA1ICwgLTcwMTU1ODY5MSk7XG4gICAgICAgIGQgPSBnZyhkLCBhLCBiLCBjLCB4W2krMTBdLCA5ICwgIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IGdnKGMsIGQsIGEsIGIsIHhbaSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICAgICAgYiA9IGdnKGIsIGMsIGQsIGEsIHhbaSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICAgICAgYSA9IGdnKGEsIGIsIGMsIGQsIHhbaSsgOV0sIDUgLCAgNTY4NDQ2NDM4KTtcbiAgICAgICAgZCA9IGdnKGQsIGEsIGIsIGMsIHhbaSsxNF0sIDkgLCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSBnZyhjLCBkLCBhLCBiLCB4W2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgICAgIGIgPSBnZyhiLCBjLCBkLCBhLCB4W2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xuICAgICAgICBhID0gZ2coYSwgYiwgYywgZCwgeFtpKzEzXSwgNSAsIC0xNDQ0NjgxNDY3KTtcbiAgICAgICAgZCA9IGdnKGQsIGEsIGIsIGMsIHhbaSsgMl0sIDkgLCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gZ2coYywgZCwgYSwgYiwgeFtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcbiAgICAgICAgYiA9IGdnKGIsIGMsIGQsIGEsIHhbaSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSBoaChhLCBiLCBjLCBkLCB4W2krIDVdLCA0ICwgLTM3ODU1OCk7XG4gICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgICAgICBjID0gaGgoYywgZCwgYSwgYiwgeFtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IGhoKGIsIGMsIGQsIGEsIHhbaSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gaGgoYSwgYiwgYywgZCwgeFtpKyAxXSwgNCAsIC0xNTMwOTkyMDYwKTtcbiAgICAgICAgZCA9IGhoKGQsIGEsIGIsIGMsIHhbaSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XG4gICAgICAgIGMgPSBoaChjLCBkLCBhLCBiLCB4W2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgICAgIGIgPSBoaChiLCBjLCBkLCBhLCB4W2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgICAgICBhID0gaGgoYSwgYiwgYywgZCwgeFtpKzEzXSwgNCAsICA2ODEyNzkxNzQpO1xuICAgICAgICBkID0gaGgoZCwgYSwgYiwgYywgeFtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gaGgoYywgZCwgYSwgYiwgeFtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gaGgoYiwgYywgZCwgYSwgeFtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSBoaChhLCBiLCBjLCBkLCB4W2krIDldLCA0ICwgLTY0MDM2NDQ4Nyk7XG4gICAgICAgIGQgPSBoaChkLCBhLCBiLCBjLCB4W2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgICAgIGMgPSBoaChjLCBkLCBhLCBiLCB4W2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSBoaChiLCBjLCBkLCBhLCB4W2krIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgICAgIGEgPSBpaShhLCBiLCBjLCBkLCB4W2krIDBdLCA2ICwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSBpaShkLCBhLCBiLCBjLCB4W2krIDddLCAxMCwgIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gaWkoYywgZCwgYSwgYiwgeFtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IGlpKGIsIGMsIGQsIGEsIHhbaSsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gaWkoYSwgYiwgYywgZCwgeFtpKzEyXSwgNiAsICAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IGlpKGQsIGEsIGIsIGMsIHhbaSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgICAgIGMgPSBpaShjLCBkLCBhLCBiLCB4W2krMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gaWkoYiwgYywgZCwgYSwgeFtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IGlpKGEsIGIsIGMsIGQsIHhbaSsgOF0sIDYgLCAgMTg3MzMxMzM1OSk7XG4gICAgICAgIGQgPSBpaShkLCBhLCBiLCBjLCB4W2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICAgICAgYyA9IGlpKGMsIGQsIGEsIGIsIHhbaSsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSBpaShiLCBjLCBkLCBhLCB4W2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xuICAgICAgICBhID0gaWkoYSwgYiwgYywgZCwgeFtpKyA0XSwgNiAsIC0xNDU1MjMwNzApO1xuICAgICAgICBkID0gaWkoZCwgYSwgYiwgYywgeFtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IGlpKGMsIGQsIGEsIGIsIHhbaSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcbiAgICAgICAgYiA9IGlpKGIsIGMsIGQsIGEsIHhbaSsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcblxuICAgICAgICBhID0gYWRkbWUoYSwgb2xkYSk7XG4gICAgICAgIGIgPSBhZGRtZShiLCBvbGRiKTtcbiAgICAgICAgYyA9IGFkZG1lKGMsIG9sZGMpO1xuICAgICAgICBkID0gYWRkbWUoZCwgb2xkZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJoZXgoYSkgKyByaGV4KGIpICsgcmhleChjKSArIHJoZXgoZCk7XG59O1xuXG52YXIgaGV4X2NociA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuXG5mdW5jdGlvbiBiaXRPUihhLCBiKVxue1xuICAgIHZhciBsc2IgPSAoYSAmIDB4MSkgfCAoYiAmIDB4MSk7XG4gICAgdmFyIG1zYjMxID0gKGEgPj4+IDEpIHwgKGIgPj4+IDEpO1xuXG4gICAgcmV0dXJuIChtc2IzMSA8PCAxKSB8IGxzYjtcbn1cblxuZnVuY3Rpb24gYml0WE9SKGEsIGIpXG57XG4gICAgdmFyIGxzYiA9IChhICYgMHgxKSBeIChiICYgMHgxKTtcbiAgICB2YXIgbXNiMzEgPSAoYSA+Pj4gMSkgXiAoYiA+Pj4gMSk7XG5cbiAgICByZXR1cm4gKG1zYjMxIDw8IDEpIHwgbHNiO1xufVxuXG5mdW5jdGlvbiBiaXRBTkQoYSwgYilcbntcbiAgICB2YXIgbHNiID0gKGEgJiAweDEpICYgKGIgJiAweDEpO1xuICAgIHZhciBtc2IzMSA9IChhID4+PiAxKSAmIChiID4+PiAxKTtcblxuICAgIHJldHVybiAobXNiMzEgPDwgMSkgfCBsc2I7XG59XG5cbmZ1bmN0aW9uIGFkZG1lKHgsIHkpXG57XG4gICAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSsoeSAmIDB4RkZGRik7XG4gICAgdmFyIG1zdyA9ICh4ID4+IDE2KSsoeSA+PiAxNikrKGxzdyA+PiAxNik7XG5cbiAgICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcbn1cblxuZnVuY3Rpb24gcmhleChudW0pXG57XG4gICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgdmFyIGo7XG5cbiAgICBmb3Ioaj0wOyBqPD0zOyBqKyspXG4gICAgICAgIHN0ciArPSBoZXhfY2hyLmNoYXJBdCgobnVtID4+IChqICogOCArIDQpKSAmIDB4MEYpICsgaGV4X2Noci5jaGFyQXQoKG51bSA+PiAoaiAqIDgpKSAmIDB4MEYpO1xuXG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gc3RyMmJsa3NfTUQ1KHN0cilcbntcbiAgICB2YXIgbmJsayA9ICgoc3RyLmxlbmd0aCArIDgpID4+IDYpICsgMTtcbiAgICB2YXIgYmxrcyA9IG5ldyBBcnJheShuYmxrICogMTYpO1xuICAgIHZhciBpO1xuXG4gICAgZm9yKGk9MDsgaTxuYmxrICogMTY7IGkrKylcbiAgICAgICAgYmxrc1tpXSA9IDA7XG5cbiAgICBmb3IoaT0wOyBpPHN0ci5sZW5ndGg7IGkrKylcbiAgICAgICAgYmxrc1tpID4+IDJdIHw9IHN0ci5jaGFyQ29kZUF0KGkpIDw8ICgoKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0KSAqIDgpO1xuXG4gICAgYmxrc1tpID4+IDJdIHw9IDB4ODAgPDwgKCgoc3RyLmxlbmd0aCAqIDggKyBpKSAlIDQpICogOCk7XG5cbiAgICB2YXIgbCA9IHN0ci5sZW5ndGggKiA4O1xuICAgIGJsa3NbbmJsayAqIDE2IC0gMl0gPSAobCAmIDB4RkYpO1xuICAgIGJsa3NbbmJsayAqIDE2IC0gMl0gfD0gKChsID4+PiA4KSAmIDB4RkYpIDw8IDg7XG4gICAgYmxrc1tuYmxrICogMTYgLSAyXSB8PSAoKGwgPj4+IDE2KSAmIDB4RkYpIDw8IDE2O1xuICAgIGJsa3NbbmJsayAqIDE2IC0gMl0gfD0gKChsID4+PiAyNCkgJiAweEZGKSA8PCAyNDtcblxuICAgIHJldHVybiBibGtzO1xufVxuXG5mdW5jdGlvbiByb2wobnVtLCBjbnQpXG57XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuXG5mdW5jdGlvbiBjbW4ocSwgYSwgYiwgeCwgcywgdClcbntcbiAgICByZXR1cm4gYWRkbWUocm9sKChhZGRtZShhZGRtZShhLCBxKSwgYWRkbWUoeCwgdCkpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBmZihhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICAgIHJldHVybiBjbW4oYml0T1IoYml0QU5EKGIsIGMpLCBiaXRBTkQoKH5iKSwgZCkpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gZ2coYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgICByZXR1cm4gY21uKGJpdE9SKGJpdEFORChiLCBkKSwgYml0QU5EKGMsICh+ZCkpKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIGhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gICAgcmV0dXJuIGNtbihiaXRYT1IoYml0WE9SKGIsIGMpLCBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIGlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gICAgcmV0dXJuIGNtbihiaXRYT1IoYywgYml0T1IoYiwgKH5kKSkpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tZDUtby1tYXRpYy9saWIvbWQ1b21hdGljLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiArK2lkO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi91aWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHZhciB0ID0gdHlwZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHQgIT09ICdPYmplY3QnICYmIHQgIT09ICdBcnJheSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcmltaXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvaXMtcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3BhbiA9IFJlYWN0LkRPTS5zcGFuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyaW5nOiAnJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodDogJydcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gcC5oaWdobGlnaHQgIT09IHRoaXMucHJvcHMuaGlnaGxpZ2h0O1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHAgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghcC5oaWdobGlnaHQgfHwgcC5zdHJpbmcuaW5kZXhPZihwLmhpZ2hsaWdodCkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BhbihudWxsLCBwLnN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BhbihudWxsLFxuICAgICAgICAgICAgcC5zdHJpbmcuc3BsaXQocC5oaWdobGlnaHQpLm1hcChmdW5jdGlvbihwYXJ0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGFuKHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbih7IGNsYXNzTmFtZTogJ2pzb24taW5zcGVjdG9yX19obCcgfSwgcC5oaWdobGlnaHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBhcnQpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL2hpZ2hsaWdodGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJ2RlYm91bmNlJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGlucHV0ID0gUmVhY3QuRE9NLmlucHV0O1xuXG52YXIgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25DaGFuZ2U6IG5vb3BcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCh7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdqc29uLWluc3BlY3Rvcl9fc2VhcmNoJyxcbiAgICAgICAgICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMucXVlcnksXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL3NlYXJjaC1iYXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIG5vdyA9IHJlcXVpcmUoJ2RhdGUtbm93Jyk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICogTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gKiBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICpcbiAqIEBzb3VyY2UgdW5kZXJzY29yZS5qc1xuICogQHNlZSBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS8yMDA5LzAzLzIwL2RlYm91bmNpbmctamF2YXNjcmlwdC1tZXRob2RzL1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gd3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgaW4gbXMgKGAxMDBgKVxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRvIGV4ZWN1dGUgYXQgdGhlIGJlZ2lubmluZyAoYGZhbHNlYClcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID4gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVzdGFtcCA9IG5vdygpO1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVib3VuY2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBEYXRlLm5vdyB8fCBub3dcblxuZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVib3VuY2Uvfi9kYXRlLW5vdy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge307XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1qc29uLWluc3BlY3Rvci9saWIvbm9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGtleXMgPSBPYmplY3Qua2V5cztcblxudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9pcy1wcmltaXRpdmUnKTtcbnZhciBpc0VtcHR5ID0gcmVxdWlyZSgnLi9pcy1lbXB0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgIHZhciBjYWNoZSA9IHt9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBzdWJxdWVyeTtcblxuICAgICAgICBpZiAoIWNhY2hlW3F1ZXJ5XSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHF1ZXJ5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICBzdWJxdWVyeSA9IHF1ZXJ5LnN1YnN0cigwLCBpKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWNoZVtzdWJxdWVyeV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbcXVlcnldID0gZmluZChjYWNoZVtzdWJxdWVyeV0sIHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjYWNoZVtxdWVyeV0pIHtcbiAgICAgICAgICAgIGNhY2hlW3F1ZXJ5XSA9IGZpbmQoZGF0YSwgcXVlcnksIG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlW3F1ZXJ5XTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZmluZChkYXRhLCBxdWVyeSwgb3B0aW9ucykge1xuICAgIHJldHVybiBrZXlzKGRhdGEpLnJlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgIHZhciBtYXRjaGVzO1xuXG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwga2V5LCBvcHRpb25zKSB8fCBjb250YWlucyhxdWVyeSwgdmFsdWUsIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwga2V5LCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBmaW5kKHZhbHVlLCBxdWVyeSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkobWF0Y2hlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduKGFjYywgcGFpcihrZXksIG1hdGNoZXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMocXVlcnksIHN0cmluZywgb3B0aW9ucykge1xuICAgIGlmIChzdHJpbmcpIHtcbiAgICAgICAgdmFyIGhheXN0YWNrID0gU3RyaW5nKHN0cmluZyk7XG4gICAgICAgIHZhciBuZWVkbGUgPSBxdWVyeTtcblxuICAgICAgICBpZiAob3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBoYXlzdGFjayA9IGhheXN0YWNrLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBuZWVkbGUgPSBuZWVkbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgIT09IC0xO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFpcihrZXksIHZhbHVlKSB7XG4gICAgdmFyIHAgPSB7fTtcbiAgICBwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcDtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi9maWx0ZXJlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIga2V5cztcblx0dmFyIHRvID0gVG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBhcmd1bWVudHNbc107XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtanNvbi1pbnNwZWN0b3Ivfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubGVuZ3RoID09PSAwO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWpzb24taW5zcGVjdG9yL2xpYi9pcy1lbXB0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG52YXIgUEFUSF9ERUxJTUlURVIgPSAnLic7XG5cbmZ1bmN0aW9uIGxlbnMoZGF0YSwgcGF0aCkge1xuICAgIHZhciBwID0gcGF0aC5zcGxpdChQQVRIX0RFTElNSVRFUik7XG4gICAgdmFyIHNlZ21lbnQgPSBwLnNoaWZ0KCk7XG5cbiAgICBpZiAoIXNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgdmFyIHQgPSB0eXBlKGRhdGEpO1xuXG4gICAgaWYgKHQgPT09ICdBcnJheScgJiYgZGF0YVtpbnRlZ2VyKHNlZ21lbnQpXSkge1xuICAgICAgICByZXR1cm4gbGVucyhkYXRhW2ludGVnZXIoc2VnbWVudCldLCBwLmpvaW4oUEFUSF9ERUxJTUlURVIpKTtcbiAgICB9IGVsc2UgaWYgKHQgPT09ICdPYmplY3QnICYmIGRhdGFbc2VnbWVudF0pIHtcbiAgICAgICAgcmV0dXJuIGxlbnMoZGF0YVtzZWdtZW50XSwgcC5qb2luKFBBVEhfREVMSU1JVEVSKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbnRlZ2VyKHN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUludChzdHJpbmcsIDEwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsZW5zO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtanNvbi1pbnNwZWN0b3IvbGliL2xlbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge1wic291cmNlTWFwXCI6dHJ1ZX0pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2NvbXBvbmVudHMvbGlzdC9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQ29sb3JzXFxuICovXFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nLU5JUWZGIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBsZWZ0OiA2MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB9XFxufVxcblxcbi5saXN0LXF3OE5VIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaXRlbS0zaXV4cCB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxufVxcblxcbi5pdGVtLTNpdXhwLmNvbXBsZXRlLTNqOTRnIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICM3Zjk7XFxufVxcblxcbi5pdGVtLTNpdXhwLmVycm9yLTN2NUhxIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICNmNTU7XFxufVxcblxcbi5pdGVtLTNpdXhwLmxvYWRpbmctTklRZkYge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDAgI2ZlNDtcXG59XFxuXFxuLml0ZW0tM2l1eHAubG9hZGluZy1OSVFmRjphZnRlciB7XFxuICBhbmltYXRpb246IGxvYWRpbmctTklRZkYgMC43cyBpbmZpbml0ZSBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kOiAjZmE0O1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLml0ZW0tM2l1eHAuaW5hY3RpdmUtRkg2Zkcge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG59XFxuXFxuLml0ZW0tM2l1eHAuY2FuY2VsbGVkLTIzOGFIIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICNmODQ7XFxufVxcblxcbi5wYXJhbWV0ZXJzLWxsTEdVIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgcGFkZGluZzogMTJweCA0cHggMTZweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxufVxcblxcbi5tZW51LTI5SDdNIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpdGxlLVlabGhaIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uYnV0dG9uLTItNGt1IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDRweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uYnV0dG9uLTItNGt1OmhvdmVyLFxcbi5idXR0b24tMi00a3U6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idXR0b24tMi00a3U6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIHRyYW5zaXRpb246IDAuMXMgYWxsO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsaXN0XCI6IFwibGlzdC1xdzhOVVwiLFxuXHRcIml0ZW1cIjogXCJpdGVtLTNpdXhwXCIsXG5cdFwiY29tcGxldGVcIjogXCJjb21wbGV0ZS0zajk0Z1wiLFxuXHRcImVycm9yXCI6IFwiZXJyb3ItM3Y1SHFcIixcblx0XCJsb2FkaW5nXCI6IFwibG9hZGluZy1OSVFmRlwiLFxuXHRcImluYWN0aXZlXCI6IFwiaW5hY3RpdmUtRkg2ZkdcIixcblx0XCJjYW5jZWxsZWRcIjogXCJjYW5jZWxsZWQtMjM4YUhcIixcblx0XCJwYXJhbWV0ZXJzXCI6IFwicGFyYW1ldGVycy1sbExHVVwiLFxuXHRcIm1lbnVcIjogXCJtZW51LTI5SDdNXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZS1ZWmxoWlwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbi0yLTRrdVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Jlc29sdmUtdXJsLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vbGliL2NvbXBvbmVudHMvbGlzdC9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHtcInNvdXJjZU1hcFwiOnRydWV9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2xpYi9jb21wb25lbnRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4uY29udGFpbmVyLWdyNTB3ICosXFxuLmNvbnRhaW5lci1ncjUwdyAqOmJlZm9yZSxcXG4uY29udGFpbmVyLWdyNTB3ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmNvbnRhaW5lci1ncjUwdyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3R0b206IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMxMTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgei1pbmRleDogMTAwMDAwMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyLWdyNTB3XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXAhLi9saWIvY29tcG9uZW50cy9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=