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
	
	exports.default = function (repo, options) {
	  var container = document.createElement('div');
	
	  container.className = "debugger-wrapper";
	
	  document.body.appendChild(container);
	
	  function checkout(action) {
	    repo.checkout(action);
	  }
	
	  function render() {
	    _reactDom2.default.render(_react2.default.createElement(_debugger2.default, { history: repo.history, onCheckout: checkout }), container);
	  }
	
	  render();
	
	  repo.on('change', render);
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
	
	var _style = __webpack_require__(21);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Debugger(_ref) {
	  var history = _ref.history,
	      onCheckout = _ref.onCheckout;
	
	
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
	    return Math.max(this.props.history.size * 20, this.props.width, this.state ? this.state.width : 0);
	  },
	  getTree: function getTree(history) {
	    var _props = this.props,
	        height = _props.height,
	        padX = _props.padX,
	        padY = _props.padY;
	
	
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
	    var point = _ref.point,
	        item = _ref.item;
	
	    var active = this.props.history.head === item;
	
	    return _react2.default.createElement(_node2.default, { key: i,
	      ref: active ? this.scrollIntoView : null,
	      x: point[0] || 0,
	      y: point[1] || 0,
	      item: item,
	      active: active,
	      onClick: this.props.onNodeClick });
	  },
	  render: function render() {
	    var _props2 = this.props,
	        history = _props2.history,
	        height = _props2.height;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: _style2.default.tree },
	      _react2.default.createElement(
	        'svg',
	        { ref: 'chart', width: this.state.width, height: height },
	        history.size > 0 ? this.renderTree() : null
	      )
	    );
	  },
	  renderTree: function renderTree() {
	    var _props3 = this.props,
	        history = _props3.history,
	        padX = _props3.padX,
	        padY = _props3.padY;
	
	    var tree = this.getTree(history);
	
	    return _react2.default.createElement(
	      'g',
	      { transform: 'translate(' + padX + ',' + padY + ')' },
	      _react2.default.createElement(
	        'g',
	        { fill: 'none', stroke: 'rgba(125, 225, 255, 0.2)' },
	        tree.curves.map(this.getCurve)
	      ),
	      tree.nodes.map(this.getNode)
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
	
	    var _props = this.props,
	        item = _props.item,
	        active = _props.active,
	        _props$x = _props.x,
	        x = _props$x === undefined ? 0 : _props$x,
	        _props$y = _props.y,
	        y = _props$y === undefined ? 0 : _props$y;
	
	
	    var className = (0, _classnames2.default)(_style2.default.node, (_cx = {}, _defineProperty(_cx, _style2.default.active, active), _defineProperty(_cx, _style2.default.disabled, item.disabled), _defineProperty(_cx, _style2.default.error, item.is('error')), _defineProperty(_cx, _style2.default.loading, item.is('loading')), _defineProperty(_cx, _style2.default.cancelled, item.is('cancelled')), _cx));
	
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
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
	exports.push([module.id, "/**\n * Colors\n */\n@keyframes throb-2-ES1 {\n  0% {\n    opacity: 0;\n    transform: scale(0); }\n  40% {\n    opacity: 1; }\n  70% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    transform: scale(1.5); } }\n\n.tree-2HTA6 {\n  flex-shrink: 0;\n  flex-grow: 0;\n  overflow: auto; }\n  .tree-2HTA6 svg {\n    background: #112;\n    border: 0;\n    display: block;\n    margin: 0; }\n\n.label-1KoKX {\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n  transition: 0.3s all;\n  stroke-width: 0;\n  letter-spacing: 0.2px; }\n\n.node-2jNZw {\n  cursor: pointer; }\n  .node-2jNZw:hover, .node-2jNZw:focus {\n    outline: none; }\n    .node-2jNZw:hover .label-1KoKX, .node-2jNZw:focus .label-1KoKX {\n      opacity: 1; }\n\n.ring-M7Sio,\n.marker-3rIhM {\n  fill: #112;\n  r: 4;\n  stroke: transparent;\n  transform: translateZ(0); }\n\n.marker-3rIhM {\n  fill: #7bfde9;\n  transition: 0.3s all; }\n\n.node-2jNZw:hover .ring-M7Sio,\n.node-2jNZw:focus .ring-M7Sio,\n.node-2jNZw.active-vxtjG .ring-M7Sio {\n  stroke: #7bfde9;\n  stroke-width: 1.5;\n  r: 9;\n  transition: 0.3s all; }\n\n.node-2jNZw.active-vxtjG .ring-M7Sio {\n  stroke: #e39; }\n\n.node-2jNZw.loading-fdUGv .marker-3rIhM {\n  fill: #fe4; }\n\n.node-2jNZw.loading-fdUGv .ring-M7Sio {\n  animation: throb-2-ES1 1.5s infinite;\n  stroke: #fe4; }\n\n.node-2jNZw.error-35cXm .marker-3rIhM {\n  fill: #f55; }\n\n.node-2jNZw.error-35cXm .ring-M7Sio {\n  stroke: #f55; }\n\n.node-2jNZw.disabled-1KCkF .marker-3rIhM {\n  fill: #445; }\n\n.node-2jNZw.cancelled-2-lcp .marker-3rIhM {\n  fill: #f84; }\n", ""]);
	
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
	    toString: function toString() {
	      return undefined.print();
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
	
	var _style = __webpack_require__(19);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(history) {
	  var items = [];
	  var node = history.root;
	
	  while (node) {
	    items.push(node);
	    node = node.next;
	  }
	
	  return items;
	}
	
	function Empty() {
	
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.empty },
	    _react2.default.createElement(
	      'h2',
	      { className: _style2.default.heading },
	      'Nothing has happened'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'Push actions to follow changes to your application over time.'
	    )
	  );
	}
	
	function List(_ref) {
	  var history = _ref.history;
	
	  var items = toArray(history).reduce(function (list, action, i) {
	    return list.concat(_react2.default.createElement(_listItem2.default, { key: i, action: action }));
	  }, []).reverse();
	
	  return items.length ? _react2.default.createElement(
	    'ul',
	    { className: _style2.default.list },
	    items
	  ) : _react2.default.createElement(Empty, null);
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(19);
	
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
	
	
	    return (0, _classnames2.default)(_style2.default.item, (_cx = {}, _defineProperty(_cx, _style2.default.inactive, action.disabled), _defineProperty(_cx, _style2.default.error, action.is('error')), _defineProperty(_cx, _style2.default.loading, action.is('open')), _defineProperty(_cx, _style2.default.complete, action.is('done')), _defineProperty(_cx, _style2.default.cancelled, action.is('cancelled')), _cx));
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
	      _react2.default.createElement(
	        'pre',
	        null,
	        JSON.stringify(action.payload, null, 2)
	      )
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
	          humanize(action.behavior.done)
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
	var update = __webpack_require__(10)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
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
	exports.push([module.id, "/**\n * Colors\n */\n@keyframes loading-NIQfF {\n  0% {\n    transform: scaleX(0); }\n  60% {\n    left: 60%;\n    transform: scaleX(0.5); }\n  100% {\n    left: 100%;\n    transform: scaleX(0); } }\n\n.list-qw8NU {\n  flex-grow: 1;\n  font-family: monospace;\n  font-size: 12px;\n  overflow: auto;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.item-3iuxp {\n  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.14);\n  position: relative;\n  transition: 0.3s all; }\n  .item-3iuxp.complete-3j94g {\n    box-shadow: inset 0 -4px 0 #7f9; }\n  .item-3iuxp.error-3v5Hq {\n    box-shadow: inset 0 -4px 0 #f55; }\n  .item-3iuxp.loading-NIQfF {\n    box-shadow: inset 0 -4px 0 #fe4; }\n    .item-3iuxp.loading-NIQfF:after {\n      animation: loading-NIQfF 0.7s infinite linear;\n      background: #fa4;\n      bottom: 0;\n      content: \"\";\n      height: 4px;\n      left: 0;\n      position: absolute;\n      transform-origin: 0 0;\n      width: 100%; }\n  .item-3iuxp.inactive-FH6fG {\n    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.14); }\n  .item-3iuxp.cancelled-238aH {\n    box-shadow: inset 0 -4px 0 #f84; }\n\n.parameters-llLGU {\n  background: #eee;\n  border-top: 1px solid rgba(0, 0, 0, 0.14);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.14);\n  padding: 12px 16px;\n  overflow: auto;\n  max-height: 400px; }\n\n.menu-29H7M {\n  align-items: center;\n  display: flex;\n  padding: 0 0 0 16px;\n  margin: 0; }\n\n.title-YZlhZ {\n  display: block;\n  flex-grow: 1; }\n\n.button-2-4ku {\n  background: transparent;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  font-weight: bold;\n  color: #444;\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 0;\n  margin: 4px;\n  padding: 12px;\n  transition: 0.3s all;\n  width: 40px;\n  height: 40px; }\n  .button-2-4ku:hover, .button-2-4ku:focus {\n    border: 1px solid rgba(0, 0, 0, 0.14);\n    outline: none; }\n  .button-2-4ku:active {\n    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.14);\n    transition: 0.1s all; }\n\n.empty-2iZdX {\n  color: #555;\n  font-size: 13px;\n  line-height: 1.5;\n  padding: 24px; }\n\n.heading-3GSQs {\n  color: #222;\n  font-size: 18px;\n  margin: 0; }\n", ""]);
	
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
		"button": "button-2-4ku",
		"empty": "empty-2iZdX",
		"heading": "heading-3GSQs"
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {"sourceMap":true});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../node_modules/sass-loader/index.js?sourceMap!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!./../../node_modules/sass-loader/index.js?sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\n  padding-right: 350px; }\n\n.container-gr50w *,\n.container-gr50w *:before,\n.container-gr50w *:after {\n  box-sizing: inherit; }\n\n.container-gr50w {\n  background: white;\n  box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.1);\n  bottom: 0;\n  box-sizing: border-box;\n  color: #112;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  height: 100%;\n  position: fixed;\n  width: 350px;\n  z-index: 1000000; }\n", ""]);
	
	// exports
	exports.locals = {
		"container": "container-gr50w"
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNmZDg0MDY3ZDAwMjgyYTJjNmUiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL2RlYnVnZ2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL25vZGUuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL3N0eWxlLnNjc3M/ZTU2NiIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy90cmVlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYXRocy1qcy90cmVlLmpzIiwid2VicGFjazovLy8uL34vcGF0aHMtanMvY29ubmVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcGF0aHMtanMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL2xpbmVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L3BhdGhzLWpzL3RyZWUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanN4Iiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL2xpc3Qvc3R5bGUuc2Nzcz9kYTNiIiwid2VicGFjazovLy8uL2xpYi9jb21wb25lbnRzL2xpc3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcG9uZW50cy9zdHlsZS5zY3NzPzlkNjgiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBvbmVudHMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJyZXBvIiwib3B0aW9ucyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNoZWNrb3V0IiwiYWN0aW9uIiwicmVuZGVyIiwiaGlzdG9yeSIsIm9uIiwiRGVidWdnZXIiLCJvbkNoZWNrb3V0IiwiVHJlZVZpc3VhbCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwid2lkdGgiLCJnZXRXaWR0aCIsImdldERlZmF1bHRQcm9wcyIsInBhZFgiLCJwYWRZIiwiaGVpZ2h0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNldFN0YXRlIiwiTWF0aCIsIm1heCIsInByb3BzIiwic2l6ZSIsInN0YXRlIiwiZ2V0VHJlZSIsImRhdGEiLCJyb290IiwiZ2V0Q3VydmUiLCJjdXJ2ZSIsImkiLCJjb25uZWN0b3IiLCJwYXRoIiwicHJpbnQiLCJzY3JvbGxJbnRvVmlldyIsImNvbXBvbmVudCIsImVsIiwiZmluZERPTU5vZGUiLCJiZWhhdmlvciIsImJsb2NrIiwiZ2V0Tm9kZSIsInBvaW50IiwiaXRlbSIsImFjdGl2ZSIsImhlYWQiLCJvbk5vZGVDbGljayIsInRyZWUiLCJyZW5kZXJUcmVlIiwiY3VydmVzIiwibWFwIiwibm9kZXMiLCJOb2RlIiwieCIsInkiLCJub2RlIiwiZGlzYWJsZWQiLCJlcnJvciIsImlzIiwibG9hZGluZyIsImNhbmNlbGxlZCIsIm9uQ2xpY2siLCJvbktleURvd24iLCJyaW5nIiwibWFya2VyIiwibGFiZWwiLCJuYW1lIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIkxpc3QiLCJ0b0FycmF5IiwiaXRlbXMiLCJwdXNoIiwibmV4dCIsIkVtcHR5IiwiZW1wdHkiLCJoZWFkaW5nIiwicmVkdWNlIiwibGlzdCIsImNvbmNhdCIsInJldmVyc2UiLCJsZW5ndGgiLCJodW1hbml6ZSIsInRleHQiLCJyZXBsYWNlIiwib3BlbiIsImdldENsYXNzTmFtZXMiLCJpbmFjdGl2ZSIsImNvbXBsZXRlIiwibXV0ZSIsInRvZ2dsZSIsInJlbmRlclBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInBheWxvYWQiLCJtZW51IiwidGl0bGUiLCJkb25lIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7bUJDbENlLFVBQVVBLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RDLE9BQUlDLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7O0FBRUFGLGFBQVVHLFNBQVYsR0FBc0Isa0JBQXRCOztBQUVBRixZQUFTRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFNBQTFCOztBQUVBLFlBQVNNLFFBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3pCVCxVQUFLUSxRQUFMLENBQWNDLE1BQWQ7QUFDRDs7QUFFRCxZQUFTQyxNQUFULEdBQW1CO0FBQ2pCLHdCQUFJQSxNQUFKLENBQVcsb0RBQVUsU0FBU1YsS0FBS1csT0FBeEIsRUFBaUMsWUFBWUgsUUFBN0MsR0FBWCxFQUFzRU4sU0FBdEU7QUFDRDs7QUFFRFE7O0FBRUFWLFFBQUtZLEVBQUwsQ0FBUSxRQUFSLEVBQWtCRixNQUFsQjtBQUNELEU7O0FBdEJEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQ0ZBLHVDOzs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7bUJDS3dCRyxROztB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXFFLGdFQUFnRTtBQUNySTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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O0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFrRixpQkFBaUI7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFnQyx5QkFBeUIsRUFBRSwrRUFBK0Usd0JBQXdCLEVBQUUsc0JBQXNCLHNCQUFzQixtREFBbUQsY0FBYywyQkFBMkIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsYUFBYSxpQkFBaUIsb0JBQW9CLGlCQUFpQixxQkFBcUIsRUFBRTs7QUFFbmM7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJtaWNyb2Nvc20tZGVidWdnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDAzZmQ4NDA2N2QwMDI4MmEyYzZlXG4gKiovIiwiaW1wb3J0IERPTSAgICAgIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdCAgICBmcm9tICdyZWFjdCdcbmltcG9ydCBEZWJ1Z2dlciBmcm9tICcuL2NvbXBvbmVudHMvZGVidWdnZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXBvLCBvcHRpb25zKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlYnVnZ2VyLXdyYXBwZXJcIlxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gIGZ1bmN0aW9uIGNoZWNrb3V0IChhY3Rpb24pIHtcbiAgICByZXBvLmNoZWNrb3V0KGFjdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgRE9NLnJlbmRlcig8RGVidWdnZXIgaGlzdG9yeT17cmVwby5oaXN0b3J5fSBvbkNoZWNrb3V0PXtjaGVja291dH0gLz4sIGNvbnRhaW5lcilcbiAgfVxuXG4gIHJlbmRlcigpXG5cbiAgcmVwby5vbignY2hhbmdlJywgcmVuZGVyKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvaW5kZXguanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyZWUgIGZyb20gJy4vdHJlZSdcbmltcG9ydCBMaXN0ICBmcm9tICcuL2xpc3QnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVidWdnZXIgKHsgaGlzdG9yeSwgb25DaGVja291dCB9KSB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlLmNvbnRhaW5lciB9PlxuICAgICAgPFRyZWUgaGlzdG9yeT17IGhpc3RvcnkgfSBvbk5vZGVDbGljaz17IG9uQ2hlY2tvdXQgfSAvPlxuICAgICAgPExpc3QgaGlzdG9yeT17IGhpc3RvcnkgfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9jb21wb25lbnRzL2RlYnVnZ2VyLmpzeFxuICoqLyIsImltcG9ydCBOb2RlICBmcm9tICcuL25vZGUnXG5pbXBvcnQgRE9NICAgZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRyZWUgIGZyb20gJ3BhdGhzLWpzL3RyZWUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcblxuY29uc3QgVHJlZVZpc3VhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSB9XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWRYICAgIDogNDAsXG4gICAgICBwYWRZICAgIDogNDAsXG4gICAgICBoZWlnaHQgIDogMjAwLFxuICAgICAgd2lkdGggICA6IDM1MFxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogdGhpcy5nZXRXaWR0aCgpIH0pXG4gIH0sXG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRoaXMucHJvcHMuaGlzdG9yeS5zaXplICogMjAsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPyB0aGlzLnN0YXRlLndpZHRoIDogMClcbiAgfSxcblxuICBnZXRUcmVlKGhpc3RvcnkpIHtcbiAgICBsZXQgeyBoZWlnaHQsIHBhZFgsIHBhZFkgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiBUcmVlKHtcbiAgICAgIGRhdGEgICA6IGhpc3Rvcnkucm9vdCxcbiAgICAgIGhlaWdodCA6IGhlaWdodCAtIHBhZFkgKiAyLFxuICAgICAgd2lkdGggIDogdGhpcy5zdGF0ZS53aWR0aCAtIHBhZFggKiAyXG4gICAgfSlcbiAgfSxcblxuICBnZXRDdXJ2ZShjdXJ2ZSwgaSkge1xuICAgIHJldHVybiAoPHBhdGgga2V5PXsgaSB9IGQ9eyBjdXJ2ZS5jb25uZWN0b3IucGF0aC5wcmludCgpIH0gLz4pXG4gIH0sXG5cbiAgc2Nyb2xsSW50b1ZpZXcoY29tcG9uZW50KSB7XG4gICAgY29uc3QgZWwgPSBET00uZmluZERPTU5vZGUoY29tcG9uZW50KVxuXG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zY3JvbGxJbnRvVmlldyh0cnVlLCB7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdlbmQnIH0pXG4gICAgfVxuICB9LFxuXG4gIGdldE5vZGUoeyBwb2ludCwgaXRlbSB9LCBpKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5wcm9wcy5oaXN0b3J5LmhlYWQgPT09IGl0ZW1cblxuICAgIHJldHVybiAoPE5vZGUga2V5PXsgaSB9XG4gICAgICAgICAgICAgICAgICByZWY9eyBhY3RpdmUgPyB0aGlzLnNjcm9sbEludG9WaWV3IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICB4PXsgcG9pbnRbMF0gfHwgMCB9XG4gICAgICAgICAgICAgICAgICB5PXsgcG9pbnRbMV0gfHwgMCB9XG4gICAgICAgICAgICAgICAgICBpdGVtPXsgaXRlbSB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmU9eyBhY3RpdmUgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25Ob2RlQ2xpY2sgfSAvPilcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBoZWlnaHQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlLnRyZWUgfT5cbiAgICAgICAgPHN2ZyByZWY9XCJjaGFydFwiIHdpZHRoPXsgdGhpcy5zdGF0ZS53aWR0aCB9IGhlaWdodD17IGhlaWdodCB9PlxuICAgICAgICAgIHsgaGlzdG9yeS5zaXplID4gMCA/IHRoaXMucmVuZGVyVHJlZSgpIDogbnVsbCB9XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlclRyZWUoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5LCBwYWRYLCBwYWRZIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdHJlZSA9IHRoaXMuZ2V0VHJlZShoaXN0b3J5KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3BhZFh9LCR7cGFkWX0pYH0+XG4gICAgICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmdiYSgxMjUsIDIyNSwgMjU1LCAwLjIpXCI+XG4gICAgICAgICAgeyB0cmVlLmN1cnZlcy5tYXAodGhpcy5nZXRDdXJ2ZSkgfVxuICAgICAgICA8L2c+XG4gICAgICAgIHsgdHJlZS5ub2Rlcy5tYXAodGhpcy5nZXROb2RlKSB9XG4gICAgICA8L2c+XG4gICAgKVxuICB9XG5cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVWaXN1YWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NvbXBvbmVudHMvdHJlZS9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY3ggICAgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xuXG5jb25zdCBOb2RlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGFjdGl2ZSwgeCA9IDAsIHkgPSAwIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChzdHlsZS5ub2RlLCB7XG4gICAgICBbc3R5bGUuYWN0aXZlXSAgICA6IGFjdGl2ZSxcbiAgICAgIFtzdHlsZS5kaXNhYmxlZF0gIDogaXRlbS5kaXNhYmxlZCxcbiAgICAgIFtzdHlsZS5lcnJvcl0gICAgIDogaXRlbS5pcygnZXJyb3InKSxcbiAgICAgIFtzdHlsZS5sb2FkaW5nXSAgIDogaXRlbS5pcygnbG9hZGluZycpLFxuICAgICAgW3N0eWxlLmNhbmNlbGxlZF0gOiBpdGVtLmlzKCdjYW5jZWxsZWQnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGcgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0gdHJhbnNmb3JtPXsgYHRyYW5zbGF0ZSgkeyB4IH0sICR7IHkgfSlgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0gb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfSB0YWJJbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxjaXJjbGUgcj1cIjEwXCIgb3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT17IHN0eWxlLnJpbmcgfSByPVwiM1wiIC8+XG4gICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPXsgc3R5bGUubWFya2VyIH0gcj1cIjNcIiAvPlxuXG4gICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17IHN0eWxlLmxhYmVsIH0gZHk9XCItMThcIiBmb250U2l6ZT1cIjExXCIgdGV4dEFuY2hvcj1cIm1pZGRsZVwiIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgICAgIHsgaXRlbS5iZWhhdmlvci5uYW1lIH1cbiAgICAgICAgPC90ZXh0PlxuICAgICAgPC9nPlxuICAgIClcbiAgfSxcblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5pdGVtKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfSxcblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLml0ZW0pXG4gIH1cblxufSlcblxuZXhwb3J0IGRlZmF1bHQgTm9kZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvY29tcG9uZW50cy90cmVlL25vZGUuanN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7XCJzb3VyY2VNYXBcIjp0cnVlfSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGliL2NvbXBvbmVudHMvdHJlZS9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBDb2xvcnNcXG4gKi9cXG5Aa2V5ZnJhbWVzIHRocm9iLTItRVMxIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNzAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgfSB9XFxuXFxuLnRyZWUtMkhUQTYge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBmbGV4LWdyb3c6IDA7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcbiAgLnRyZWUtMkhUQTYgc3ZnIHtcXG4gICAgYmFja2dyb3VuZDogIzExMjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLmxhYmVsLTFLb0tYIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcbiAgc3Ryb2tlLXdpZHRoOiAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4OyB9XFxuXFxuLm5vZGUtMmpOWncge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubm9kZS0yak5adzpob3ZlciwgLm5vZGUtMmpOWnc6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5ub2RlLTJqTlp3OmhvdmVyIC5sYWJlbC0xS29LWCwgLm5vZGUtMmpOWnc6Zm9jdXMgLmxhYmVsLTFLb0tYIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuXFxuLnJpbmctTTdTaW8sXFxuLm1hcmtlci0zckloTSB7XFxuICBmaWxsOiAjMTEyO1xcbiAgcjogNDtcXG4gIHN0cm9rZTogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7IH1cXG5cXG4ubWFya2VyLTNySWhNIHtcXG4gIGZpbGw6ICM3YmZkZTk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDsgfVxcblxcbi5ub2RlLTJqTlp3OmhvdmVyIC5yaW5nLU03U2lvLFxcbi5ub2RlLTJqTlp3OmZvY3VzIC5yaW5nLU03U2lvLFxcbi5ub2RlLTJqTlp3LmFjdGl2ZS12eHRqRyAucmluZy1NN1NpbyB7XFxuICBzdHJva2U6ICM3YmZkZTk7XFxuICBzdHJva2Utd2lkdGg6IDEuNTtcXG4gIHI6IDk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDsgfVxcblxcbi5ub2RlLTJqTlp3LmFjdGl2ZS12eHRqRyAucmluZy1NN1NpbyB7XFxuICBzdHJva2U6ICNlMzk7IH1cXG5cXG4ubm9kZS0yak5ady5sb2FkaW5nLWZkVUd2IC5tYXJrZXItM3JJaE0ge1xcbiAgZmlsbDogI2ZlNDsgfVxcblxcbi5ub2RlLTJqTlp3LmxvYWRpbmctZmRVR3YgLnJpbmctTTdTaW8ge1xcbiAgYW5pbWF0aW9uOiB0aHJvYi0yLUVTMSAxLjVzIGluZmluaXRlO1xcbiAgc3Ryb2tlOiAjZmU0OyB9XFxuXFxuLm5vZGUtMmpOWncuZXJyb3ItMzVjWG0gLm1hcmtlci0zckloTSB7XFxuICBmaWxsOiAjZjU1OyB9XFxuXFxuLm5vZGUtMmpOWncuZXJyb3ItMzVjWG0gLnJpbmctTTdTaW8ge1xcbiAgc3Ryb2tlOiAjZjU1OyB9XFxuXFxuLm5vZGUtMmpOWncuZGlzYWJsZWQtMUtDa0YgLm1hcmtlci0zckloTSB7XFxuICBmaWxsOiAjNDQ1OyB9XFxuXFxuLm5vZGUtMmpOWncuY2FuY2VsbGVkLTItbGNwIC5tYXJrZXItM3JJaE0ge1xcbiAgZmlsbDogI2Y4NDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRyZWVcIjogXCJ0cmVlLTJIVEE2XCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbC0xS29LWFwiLFxuXHRcIm5vZGVcIjogXCJub2RlLTJqTlp3XCIsXG5cdFwicmluZ1wiOiBcInJpbmctTTdTaW9cIixcblx0XCJtYXJrZXJcIjogXCJtYXJrZXItM3JJaE1cIixcblx0XCJhY3RpdmVcIjogXCJhY3RpdmUtdnh0akdcIixcblx0XCJsb2FkaW5nXCI6IFwibG9hZGluZy1mZFVHdlwiLFxuXHRcInRocm9iXCI6IFwidGhyb2ItMi1FUzFcIixcblx0XCJlcnJvclwiOiBcImVycm9yLTM1Y1htXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJkaXNhYmxlZC0xS0NrRlwiLFxuXHRcImNhbmNlbGxlZFwiOiBcImNhbmNlbGxlZC0yLWxjcFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL2xpYi9jb21wb25lbnRzL3RyZWUvc3R5bGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfY29ubmVjdG9yID0gcmVxdWlyZSgnLi9jb25uZWN0b3InKTtcblxudmFyIF9jb25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29ubmVjdG9yKTtcblxudmFyIF9saW5lYXIgPSByZXF1aXJlKCcuL2xpbmVhcicpO1xuXG52YXIgX2xpbmVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXIpO1xuXG52YXIgX29wcyA9IHJlcXVpcmUoJy4vb3BzJyk7XG5cbnZhciBfdHJlZVV0aWxzID0gcmVxdWlyZSgnLi90cmVlLXV0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBkYXRhID0gX3JlZi5kYXRhO1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciB0ZW5zaW9uID0gX3JlZi50ZW5zaW9uO1xuXG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5jaGlsZHJlbjtcbiAgICB9O1xuICB9XG4gIHZhciB0cmVlID0gKDAsIF90cmVlVXRpbHMuYnVpbGRUcmVlKShkYXRhLCBjaGlsZHJlbik7XG4gIHZhciBsZXZlbHMgPSAoMCwgX3RyZWVVdGlscy50cmVlSGVpZ2h0KSh0cmVlKTtcbiAgdmFyIG1heEhlaWdodHMgPSAoMCwgX3RyZWVVdGlscy5zZXRIZWlnaHQpKHRyZWUpO1xuICB2YXIgaHNwYWNlID0gd2lkdGggLyAobGV2ZWxzIC0gMSk7XG4gIHZhciBoc2NhbGUgPSAoMCwgX2xpbmVhcjJbJ2RlZmF1bHQnXSkoWzAsIGxldmVscyAtIDFdLCBbMCwgd2lkdGhdKTtcbiAgdmFyIHZzY2FsZXMgPSAoMCwgX29wcy5yYW5nZSkoMCwgbGV2ZWxzKS5tYXAoZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgdmFyIGF2YWlsYWJsZUhlaWdodCA9IE1hdGguc3FydChsZXZlbCAvIChsZXZlbHMgLSAxKSkgKiBoZWlnaHQ7XG4gICAgdmFyIHRvcCA9IChoZWlnaHQgLSBhdmFpbGFibGVIZWlnaHQpIC8gMjtcbiAgICB2YXIgYm90dG9tID0gdG9wICsgYXZhaWxhYmxlSGVpZ2h0O1xuICAgIHZhciBtYXhIZWlnaHQgPSBsZXZlbCA+IDAgPyBtYXhIZWlnaHRzW2xldmVsXSArIG1heEhlaWdodHNbbGV2ZWwgLSAxXSA6IG1heEhlaWdodHNbbGV2ZWxdO1xuICAgIGlmIChtYXhIZWlnaHQgPT09IDApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC8gMjtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoMCwgX2xpbmVhcjJbJ2RlZmF1bHQnXSkoWzAsIG1heEhlaWdodF0sIFt0b3AsIGJvdHRvbV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHBvc2l0aW9uID0gZnVuY3Rpb24gcG9zaXRpb24obm9kZSkge1xuICAgIHZhciBsZXZlbCA9IG5vZGUubGV2ZWw7XG4gICAgdmFyIHZzY2FsZSA9IHZzY2FsZXNbbGV2ZWxdO1xuICAgIHJldHVybiBbaHNjYWxlKGxldmVsKSwgdnNjYWxlKG5vZGUuaGVpZ2h0XyldO1xuICB9O1xuXG4gIHZhciBpID0gLTE7XG4gIHZhciBjb25uZWN0b3JzID0gKDAsIF90cmVlVXRpbHMuY29sbGVjdCkodHJlZSwgZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcbiAgICBpICs9IDE7XG4gICAgY2hpbGQuaGVpZ2h0XyA9IGNoaWxkLmhlaWdodCArIHBhcmVudC5oZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3RvcjogKDAsIF9jb25uZWN0b3IyWydkZWZhdWx0J10pKHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uKHBhcmVudCksXG4gICAgICAgIGVuZDogcG9zaXRpb24oY2hpbGQpLFxuICAgICAgICB0ZW5zaW9uOiB0ZW5zaW9uXG4gICAgICB9KSxcbiAgICAgIGluZGV4OiBpLFxuICAgICAgaXRlbToge1xuICAgICAgICBzdGFydDogcGFyZW50Lml0ZW0sXG4gICAgICAgIGVuZDogY2hpbGQuaXRlbVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICB2YXIgY2hpbGROb2RlcyA9ICgwLCBfdHJlZVV0aWxzLmNvbGxlY3QpKHRyZWUsIGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvaW50OiBwb3NpdGlvbihjaGlsZCksXG4gICAgICBpdGVtOiBjaGlsZC5pdGVtXG4gICAgfTtcbiAgfSk7XG4gIHZhciByb290Tm9kZSA9IHtcbiAgICBwb2ludDogcG9zaXRpb24odHJlZSksXG4gICAgaXRlbTogdHJlZS5pdGVtXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjdXJ2ZXM6IGNvbm5lY3RvcnMsXG4gICAgbm9kZXM6IFtyb290Tm9kZV0uY29uY2F0KGNoaWxkTm9kZXMpXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYXRocy1qcy90cmVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfb3BzID0gcmVxdWlyZSgnLi9vcHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9QYXRoJG1vdmV0byRsaW5ldG8kY3VydmV0bywgX1BhdGgkbW92ZXRvLCBfUGF0aDtcblxuICB2YXIgc3RhcnQgPSBfcmVmLnN0YXJ0O1xuICB2YXIgZW5kID0gX3JlZi5lbmQ7XG4gIHZhciB0ZW5zaW9uID0gX3JlZi50ZW5zaW9uO1xuXG4gIGlmICh0ZW5zaW9uID09IG51bGwpIHtcbiAgICB0ZW5zaW9uID0gMC4wNTtcbiAgfVxuXG4gIHZhciBfc3RhcnQgPSBfc2xpY2VkVG9BcnJheShzdGFydCwgMik7XG5cbiAgdmFyIGEgPSBfc3RhcnRbMF07XG4gIHZhciBiID0gX3N0YXJ0WzFdO1xuXG4gIHZhciBfZW5kID0gX3NsaWNlZFRvQXJyYXkoZW5kLCAyKTtcblxuICB2YXIgYyA9IF9lbmRbMF07XG4gIHZhciBkID0gX2VuZFsxXTtcblxuICB2YXIgbGVuZ3RoID0gKGMgLSBhKSAqIHRlbnNpb247XG4gIHZhciBtaWQxID0gW2EgKyBsZW5ndGgsIGJdO1xuICB2YXIgbWlkMiA9IFtjIC0gbGVuZ3RoLCBkXTtcblxuICByZXR1cm4ge1xuICAgIHBhdGg6IChfUGF0aCRtb3ZldG8kbGluZXRvJGN1cnZldG8gPSAoX1BhdGgkbW92ZXRvID0gKF9QYXRoID0gKDAsIF9wYXRoMlsnZGVmYXVsdCddKSgpKS5tb3ZldG8uYXBwbHkoX1BhdGgsIF90b0NvbnN1bWFibGVBcnJheShzdGFydCkpKS5saW5ldG8uYXBwbHkoX1BhdGgkbW92ZXRvLCBtaWQxKS5jdXJ2ZXRvKGEgKyA1ICogbGVuZ3RoLCBiLCBjIC0gNSAqIGxlbmd0aCwgZCwgYyAtIGxlbmd0aCwgZCkpLmxpbmV0by5hcHBseShfUGF0aCRtb3ZldG8kbGluZXRvJGN1cnZldG8sIF90b0NvbnN1bWFibGVBcnJheShlbmQpKSxcbiAgICBjZW50cm9pZDogKDAsIF9vcHMuYXZlcmFnZSkoW3N0YXJ0LCBlbmRdKVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGF0aHMtanMvY29ubmVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgUGF0aCA9IGZ1bmN0aW9uIFBhdGgoaW5pdCkge1xuICB2YXIgX2luc3RydWN0aW9ucyA9IGluaXQgfHwgW107XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGFyciwgZWwpIHtcbiAgICB2YXIgY29weSA9IGFyci5zbGljZSgwLCBhcnIubGVuZ3RoKTtcbiAgICBjb3B5LnB1c2goZWwpO1xuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIHZhciBhcmVFcXVhbFBvaW50cyA9IGZ1bmN0aW9uIGFyZUVxdWFsUG9pbnRzKF9yZWYsIF9yZWYzKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMik7XG5cbiAgICB2YXIgYTEgPSBfcmVmMlswXTtcbiAgICB2YXIgYjEgPSBfcmVmMlsxXTtcblxuICAgIHZhciBfcmVmMzIgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMik7XG5cbiAgICB2YXIgYTIgPSBfcmVmMzJbMF07XG4gICAgdmFyIGIyID0gX3JlZjMyWzFdO1xuICAgIHJldHVybiBhMSA9PT0gYTIgJiYgYjEgPT09IGIyO1xuICB9O1xuXG4gIHZhciB0cmltWmVyb3MgPSBmdW5jdGlvbiB0cmltWmVyb3Moc3RyaW5nLCBjaGFyKSB7XG4gICAgdmFyIGwgPSBzdHJpbmcubGVuZ3RoO1xuICAgIHdoaWxlIChzdHJpbmcuY2hhckF0KGwgLSAxKSA9PT0gJzAnKSB7XG4gICAgICBsID0gbCAtIDE7XG4gICAgfVxuICAgIGlmIChzdHJpbmcuY2hhckF0KGwgLSAxKSA9PT0gJy4nKSB7XG4gICAgICBsID0gbCAtIDE7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyKDAsIGwpO1xuICB9O1xuXG4gIHZhciByb3VuZCA9IGZ1bmN0aW9uIHJvdW5kKG51bWJlciwgZGlnaXRzKSB7XG4gICAgdmFyIHN0ciA9IG51bWJlci50b0ZpeGVkKGRpZ2l0cyk7XG4gICAgcmV0dXJuIHRyaW1aZXJvcyhzdHIpO1xuICB9O1xuXG4gIHZhciBwcmludEluc3RydW5jdGlvbiA9IGZ1bmN0aW9uIHByaW50SW5zdHJ1bmN0aW9uKF9yZWY0KSB7XG4gICAgdmFyIGNvbW1hbmQgPSBfcmVmNC5jb21tYW5kO1xuICAgIHZhciBwYXJhbXMgPSBfcmVmNC5wYXJhbXM7XG5cbiAgICB2YXIgbnVtYmVycyA9IHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICByZXR1cm4gcm91bmQocGFyYW0sIDYpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21tYW5kICsgJyAnICsgbnVtYmVycy5qb2luKCcgJyk7XG4gIH07XG5cbiAgdmFyIHBvaW50ID0gZnVuY3Rpb24gcG9pbnQoX3JlZjUsIF9yZWY2KSB7XG4gICAgdmFyIGNvbW1hbmQgPSBfcmVmNS5jb21tYW5kO1xuICAgIHZhciBwYXJhbXMgPSBfcmVmNS5wYXJhbXM7XG5cbiAgICB2YXIgX3JlZjYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZjYsIDIpO1xuXG4gICAgdmFyIHByZXZYID0gX3JlZjYyWzBdO1xuICAgIHZhciBwcmV2WSA9IF9yZWY2MlsxXTtcblxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzBdLCBwYXJhbXNbMV1dO1xuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzBdLCBwYXJhbXNbMV1dO1xuICAgICAgY2FzZSAnSCc6XG4gICAgICAgIHJldHVybiBbcGFyYW1zWzBdLCBwcmV2WV07XG4gICAgICBjYXNlICdWJzpcbiAgICAgICAgcmV0dXJuIFtwcmV2WCwgcGFyYW1zWzBdXTtcbiAgICAgIGNhc2UgJ1onOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgJ0MnOlxuICAgICAgICByZXR1cm4gW3BhcmFtc1s0XSwgcGFyYW1zWzVdXTtcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICByZXR1cm4gW3BhcmFtc1syXSwgcGFyYW1zWzNdXTtcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gW3BhcmFtc1syXSwgcGFyYW1zWzNdXTtcbiAgICAgIGNhc2UgJ1QnOlxuICAgICAgICByZXR1cm4gW3BhcmFtc1swXSwgcGFyYW1zWzFdXTtcbiAgICAgIGNhc2UgJ0EnOlxuICAgICAgICByZXR1cm4gW3BhcmFtc1s1XSwgcGFyYW1zWzZdXTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlcmJvc2lmeSA9IGZ1bmN0aW9uIHZlcmJvc2lmeShrZXlzLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYXJncyA9IHR5cGVvZiBhID09PSAnb2JqZWN0JyA/IGtleXMubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldHVybiBhW2tdO1xuICAgICAgfSkgOiBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gZi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBwbHVzID0gZnVuY3Rpb24gcGx1cyhpbnN0cnVjdGlvbikge1xuICAgIHJldHVybiBQYXRoKHB1c2goX2luc3RydWN0aW9ucywgaW5zdHJ1Y3Rpb24pKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vdmV0bzogdmVyYm9zaWZ5KFsneCcsICd5J10sIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdNJyxcbiAgICAgICAgcGFyYW1zOiBbeCwgeV1cbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIGxpbmV0bzogdmVyYm9zaWZ5KFsneCcsICd5J10sIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdMJyxcbiAgICAgICAgcGFyYW1zOiBbeCwgeV1cbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIGhsaW5ldG86IHZlcmJvc2lmeShbJ3gnXSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ0gnLFxuICAgICAgICBwYXJhbXM6IFt4XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgdmxpbmV0bzogdmVyYm9zaWZ5KFsneSddLCBmdW5jdGlvbiAoeSkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnVicsXG4gICAgICAgIHBhcmFtczogW3ldXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBjbG9zZXBhdGg6IGZ1bmN0aW9uIGNsb3NlcGF0aCgpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ1onLFxuICAgICAgICBwYXJhbXM6IFtdXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGN1cnZldG86IHZlcmJvc2lmeShbJ3gxJywgJ3kxJywgJ3gyJywgJ3kyJywgJ3gnLCAneSddLCBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ0MnLFxuICAgICAgICBwYXJhbXM6IFt4MSwgeTEsIHgyLCB5MiwgeCwgeV1cbiAgICAgIH0pO1xuICAgIH0pLFxuICAgIHNtb290aGN1cnZldG86IHZlcmJvc2lmeShbJ3gyJywgJ3kyJywgJ3gnLCAneSddLCBmdW5jdGlvbiAoeDIsIHkyLCB4LCB5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdTJyxcbiAgICAgICAgcGFyYW1zOiBbeDIsIHkyLCB4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgcWN1cnZldG86IHZlcmJvc2lmeShbJ3gxJywgJ3kxJywgJ3gnLCAneSddLCBmdW5jdGlvbiAoeDEsIHkxLCB4LCB5KSB7XG4gICAgICByZXR1cm4gcGx1cyh7XG4gICAgICAgIGNvbW1hbmQ6ICdRJyxcbiAgICAgICAgcGFyYW1zOiBbeDEsIHkxLCB4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgc21vb3RocWN1cnZldG86IHZlcmJvc2lmeShbJ3gnLCAneSddLCBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgcmV0dXJuIHBsdXMoe1xuICAgICAgICBjb21tYW5kOiAnVCcsXG4gICAgICAgIHBhcmFtczogW3gsIHldXG4gICAgICB9KTtcbiAgICB9KSxcbiAgICBhcmM6IHZlcmJvc2lmeShbJ3J4JywgJ3J5JywgJ3hyb3QnLCAnbGFyZ2VBcmNGbGFnJywgJ3N3ZWVwRmxhZycsICd4JywgJ3knXSwgZnVuY3Rpb24gKHJ4LCByeSwgeHJvdCwgbGFyZ2VBcmNGbGFnLCBzd2VlcEZsYWcsIHgsIHkpIHtcbiAgICAgIHJldHVybiBwbHVzKHtcbiAgICAgICAgY29tbWFuZDogJ0EnLFxuICAgICAgICBwYXJhbXM6IFtyeCwgcnksIHhyb3QsIGxhcmdlQXJjRmxhZywgc3dlZXBGbGFnLCB4LCB5XVxuICAgICAgfSk7XG4gICAgfSksXG4gICAgcHJpbnQ6IGZ1bmN0aW9uIHByaW50KCkge1xuICAgICAgcmV0dXJuIF9pbnN0cnVjdGlvbnMubWFwKHByaW50SW5zdHJ1bmN0aW9uKS5qb2luKCcgJyk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkLnByaW50KCk7XG4gICAgfSxcbiAgICBwb2ludHM6IGZ1bmN0aW9uIHBvaW50cygpIHtcbiAgICAgIHZhciBwcyA9IFtdO1xuICAgICAgdmFyIHByZXYgPSBbMCwgMF07XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2luc3RydWN0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgaW5zdHJ1Y3Rpb24gPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIHZhciBwID0gcG9pbnQoaW5zdHJ1Y3Rpb24sIHByZXYpO1xuICAgICAgICAgIHByZXYgPSBwO1xuICAgICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgICBwcy5wdXNoKHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3JbJ3JldHVybiddKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcztcbiAgICB9LFxuICAgIGluc3RydWN0aW9uczogZnVuY3Rpb24gaW5zdHJ1Y3Rpb25zKCkge1xuICAgICAgcmV0dXJuIF9pbnN0cnVjdGlvbnMuc2xpY2UoMCwgX2luc3RydWN0aW9ucy5sZW5ndGgpO1xuICAgIH0sXG4gICAgY29ubmVjdDogZnVuY3Rpb24gY29ubmVjdChwYXRoKSB7XG4gICAgICB2YXIgcHMgPSB0aGlzLnBvaW50cygpO1xuICAgICAgdmFyIGxhc3QgPSBwc1twcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBmaXJzdCA9IHBhdGgucG9pbnRzKClbMF07XG4gICAgICB2YXIgbmV3SW5zdHJ1Y3Rpb25zID0gcGF0aC5pbnN0cnVjdGlvbnMoKS5zbGljZSgxKTtcbiAgICAgIGlmICghYXJlRXF1YWxQb2ludHMobGFzdCwgZmlyc3QpKSB7XG4gICAgICAgIG5ld0luc3RydWN0aW9ucy51bnNoaWZ0KHtcbiAgICAgICAgICBjb21tYW5kOiBcIkxcIixcbiAgICAgICAgICBwYXJhbXM6IGZpcnN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFBhdGgodGhpcy5pbnN0cnVjdGlvbnMoKS5jb25jYXQobmV3SW5zdHJ1Y3Rpb25zKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUGF0aCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcGF0aHMtanMvcGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0pKCk7XG5cbnZhciBzdW0gPSBmdW5jdGlvbiBzdW0oeHMpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbiAgfSwgMCk7XG59O1xuXG52YXIgbWluID0gZnVuY3Rpb24gbWluKHhzKSB7XG4gIHJldHVybiB4cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oYSwgYik7XG4gIH0pO1xufTtcblxudmFyIG1heCA9IGZ1bmN0aW9uIG1heCh4cykge1xuICByZXR1cm4geHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KGEsIGIpO1xuICB9KTtcbn07XG5cbnZhciBzdW1CeSA9IGZ1bmN0aW9uIHN1bUJ5KHhzLCBmKSB7XG4gIHJldHVybiB4cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSArIGYoYik7XG4gIH0sIDApO1xufTtcblxudmFyIG1pbkJ5ID0gZnVuY3Rpb24gbWluQnkoeHMsIGYpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLm1pbihhLCBmKGIpKTtcbiAgfSwgSW5maW5pdHkpO1xufTtcblxudmFyIG1heEJ5ID0gZnVuY3Rpb24gbWF4QnkoeHMsIGYpIHtcbiAgcmV0dXJuIHhzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLm1heChhLCBmKGIpKTtcbiAgfSwgLUluZmluaXR5KTtcbn07XG5cbnZhciBwbHVzID0gZnVuY3Rpb24gcGx1cyhfcmVmLCBfcmVmMykge1xuICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKTtcblxuICB2YXIgYSA9IF9yZWYyWzBdO1xuICB2YXIgYiA9IF9yZWYyWzFdO1xuXG4gIHZhciBfcmVmMzIgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMik7XG5cbiAgdmFyIGMgPSBfcmVmMzJbMF07XG4gIHZhciBkID0gX3JlZjMyWzFdO1xuICByZXR1cm4gW2EgKyBjLCBiICsgZF07XG59O1xuXG52YXIgbWludXMgPSBmdW5jdGlvbiBtaW51cyhfcmVmNCwgX3JlZjUpIHtcbiAgdmFyIF9yZWY0MiA9IF9zbGljZWRUb0FycmF5KF9yZWY0LCAyKTtcblxuICB2YXIgYSA9IF9yZWY0MlswXTtcbiAgdmFyIGIgPSBfcmVmNDJbMV07XG5cbiAgdmFyIF9yZWY1MiA9IF9zbGljZWRUb0FycmF5KF9yZWY1LCAyKTtcblxuICB2YXIgYyA9IF9yZWY1MlswXTtcbiAgdmFyIGQgPSBfcmVmNTJbMV07XG4gIHJldHVybiBbYSAtIGMsIGIgLSBkXTtcbn07XG5cbnZhciB0aW1lcyA9IGZ1bmN0aW9uIHRpbWVzKGssIF9yZWY2KSB7XG4gIHZhciBfcmVmNjIgPSBfc2xpY2VkVG9BcnJheShfcmVmNiwgMik7XG5cbiAgdmFyIGEgPSBfcmVmNjJbMF07XG4gIHZhciBiID0gX3JlZjYyWzFdO1xuICByZXR1cm4gW2sgKiBhLCBrICogYl07XG59O1xuXG52YXIgbGVuZ3RoID0gZnVuY3Rpb24gbGVuZ3RoKF9yZWY3KSB7XG4gIHZhciBfcmVmNzIgPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMik7XG5cbiAgdmFyIGEgPSBfcmVmNzJbMF07XG4gIHZhciBiID0gX3JlZjcyWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxudmFyIHN1bVZlY3RvcnMgPSBmdW5jdGlvbiBzdW1WZWN0b3JzKHhzKSB7XG4gIHJldHVybiB4cy5yZWR1Y2UocGx1cywgWzAsIDBdKTtcbn07XG5cbnZhciBhdmVyYWdlID0gZnVuY3Rpb24gYXZlcmFnZShwb2ludHMpIHtcbiAgcmV0dXJuIHRpbWVzKDEgLyBwb2ludHMubGVuZ3RoLCBwb2ludHMucmVkdWNlKHBsdXMpKTtcbn07XG5cbnZhciBvbkNpcmNsZSA9IGZ1bmN0aW9uIG9uQ2lyY2xlKHIsIGFuZ2xlKSB7XG4gIHJldHVybiB0aW1lcyhyLCBbTWF0aC5zaW4oYW5nbGUpLCAtTWF0aC5jb3MoYW5nbGUpXSk7XG59O1xuXG52YXIgZW5oYW5jZSA9IGZ1bmN0aW9uIGVuaGFuY2UoY29tcHV0ZSwgY3VydmUpIHtcbiAgdmFyIG9iaiA9IGNvbXB1dGUgfHwge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgbWV0aG9kID0gb2JqW2tleV07XG4gICAgY3VydmVba2V5XSA9IG1ldGhvZChjdXJ2ZS5pbmRleCwgY3VydmUuaXRlbSwgY3VydmUuZ3JvdXApO1xuICB9XG4gIHJldHVybiBjdXJ2ZTtcbn07XG5cbnZhciByYW5nZSA9IGZ1bmN0aW9uIHJhbmdlKGEsIGIsIGluY2x1c2l2ZSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSBhOyBpIDwgYjsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goaSk7XG4gIH1cbiAgaWYgKGluY2x1c2l2ZSkge1xuICAgIHJlc3VsdC5wdXNoKGIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgbWFwT2JqZWN0ID0gZnVuY3Rpb24gbWFwT2JqZWN0KG9iaiwgZikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5rZXlzKG9iailbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICB2YXIgdiA9IG9ialtrXTtcbiAgICAgIHJlc3VsdC5wdXNoKGYoaywgdikpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBwYWlycyA9IGZ1bmN0aW9uIHBhaXJzKG9iaikge1xuICByZXR1cm4gbWFwT2JqZWN0KG9iaiwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICByZXR1cm4gW2ssIHZdO1xuICB9KTtcbn07XG5cbnZhciBpZCA9IGZ1bmN0aW9uIGlkKHgpIHtcbiAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnRzLnN1bSA9IHN1bTtcbmV4cG9ydHMubWluID0gbWluO1xuZXhwb3J0cy5tYXggPSBtYXg7XG5leHBvcnRzLnN1bUJ5ID0gc3VtQnk7XG5leHBvcnRzLm1pbkJ5ID0gbWluQnk7XG5leHBvcnRzLm1heEJ5ID0gbWF4Qnk7XG5leHBvcnRzLnBsdXMgPSBwbHVzO1xuZXhwb3J0cy5taW51cyA9IG1pbnVzO1xuZXhwb3J0cy50aW1lcyA9IHRpbWVzO1xuZXhwb3J0cy5pZCA9IGlkO1xuZXhwb3J0cy5sZW5ndGggPSBsZW5ndGg7XG5leHBvcnRzLnN1bVZlY3RvcnMgPSBzdW1WZWN0b3JzO1xuZXhwb3J0cy5hdmVyYWdlID0gYXZlcmFnZTtcbmV4cG9ydHMub25DaXJjbGUgPSBvbkNpcmNsZTtcbmV4cG9ydHMuZW5oYW5jZSA9IGVuaGFuY2U7XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5leHBvcnRzLm1hcE9iamVjdCA9IG1hcE9iamVjdDtcbmV4cG9ydHMucGFpcnMgPSBwYWlycztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0geyBzdW06IHN1bSwgbWluOiBtaW4sIG1heDogbWF4LCBzdW1CeTogc3VtQnksIG1pbkJ5OiBtaW5CeSwgbWF4Qnk6IG1heEJ5LCBwbHVzOiBwbHVzLCBtaW51czogbWludXMsIHRpbWVzOiB0aW1lcywgaWQ6IGlkLFxuICBsZW5ndGg6IGxlbmd0aCwgc3VtVmVjdG9yczogc3VtVmVjdG9ycywgYXZlcmFnZTogYXZlcmFnZSwgb25DaXJjbGU6IG9uQ2lyY2xlLCBlbmhhbmNlOiBlbmhhbmNlLCByYW5nZTogcmFuZ2UsIG1hcE9iamVjdDogbWFwT2JqZWN0LCBwYWlyczogcGFpcnMgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYXRocy1qcy9vcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KSgpO1xuXG52YXIgbGluZWFyID0gZnVuY3Rpb24gbGluZWFyKF9yZWYsIF9yZWYzKSB7XG4gIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpO1xuXG4gIHZhciBhID0gX3JlZjJbMF07XG4gIHZhciBiID0gX3JlZjJbMV07XG5cbiAgdmFyIF9yZWYzMiA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKTtcblxuICB2YXIgYyA9IF9yZWYzMlswXTtcbiAgdmFyIGQgPSBfcmVmMzJbMV07XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKHgpIHtcbiAgICByZXR1cm4gYyArIChkIC0gYykgKiAoeCAtIGEpIC8gKGIgLSBhKTtcbiAgfTtcblxuICBmLmludmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxpbmVhcihbYywgZF0sIFthLCBiXSk7XG4gIH07XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBsaW5lYXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BhdGhzLWpzL2xpbmVhci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBtYXhCeSA9IGZ1bmN0aW9uIG1heEJ5KGl0ZW1zLCBmKSB7XG4gIGlmIChpdGVtcyA9PT0gdW5kZWZpbmVkKSBpdGVtcyA9IFtdO1xuXG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKG0sIGkpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobSwgZihpKSk7XG4gIH0sIDApO1xufTtcblxudmFyIHRyZWVIZWlnaHQgPSBmdW5jdGlvbiB0cmVlSGVpZ2h0KHJvb3QpIHtcbiAgcmV0dXJuIDEgKyBtYXhCeShyb290LmNoaWxkcmVuLCB0cmVlSGVpZ2h0KTtcbn07XG5cbnZhciBidWlsZFRyZWUgPSBmdW5jdGlvbiBidWlsZFRyZWUoZGF0YSwgY2hpbGRyZW4pIHtcbiAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGl0ZW06IGRhdGEsXG4gICAgbGV2ZWw6IGxldmVsXG4gIH07XG4gIHZhciBjcyA9IGNoaWxkcmVuKGRhdGEpO1xuICBpZiAoY3MgJiYgY3MubGVuZ3RoKSB7XG4gICAgcmVzdWx0LmNoaWxkcmVuID0gY3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYnVpbGRUcmVlKGMsIGNoaWxkcmVuLCBsZXZlbCArIDEpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gc2V0SGVpZ2h0KHJvb3QpIHtcbiAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIG1heEhlaWdodHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1syXTtcblxuICBpZiAobWF4SGVpZ2h0c1tsZXZlbF0gIT0gbnVsbCkge1xuICAgIHJvb3QuaGVpZ2h0ID0gbWF4SGVpZ2h0c1tsZXZlbF0gKyAxO1xuICAgIG1heEhlaWdodHNbbGV2ZWxdICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgbWF4SGVpZ2h0c1tsZXZlbF0gPSAwO1xuICAgIHJvb3QuaGVpZ2h0ID0gMDtcbiAgfVxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSAocm9vdC5jaGlsZHJlbiB8fCBbXSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgY2hpbGQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgc2V0SGVpZ2h0KGNoaWxkLCBsZXZlbCArIDEsIG1heEhlaWdodHMpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcltcInJldHVyblwiXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heEhlaWdodHM7XG59O1xuXG4vLyBmIGlzIGEgZnVuY3Rpb24gb2YgKHBhcmVudCwgY2hpbGQpXG52YXIgY29sbGVjdCA9IGZ1bmN0aW9uIGNvbGxlY3Qocm9vdCwgZikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSAocm9vdC5jaGlsZHJlbiB8fCBbXSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgIHZhciBjaGlsZCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgcmVzdWx0LnB1c2goZihyb290LCBjaGlsZCkpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjb2xsZWN0KGNoaWxkLCBmKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIF9pdGVyYXRvcjJbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMudHJlZUhlaWdodCA9IHRyZWVIZWlnaHQ7XG5leHBvcnRzLmJ1aWxkVHJlZSA9IGJ1aWxkVHJlZTtcbmV4cG9ydHMuc2V0SGVpZ2h0ID0gc2V0SGVpZ2h0O1xuZXhwb3J0cy5jb2xsZWN0ID0gY29sbGVjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wYXRocy1qcy90cmVlLXV0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJdGVtICBmcm9tICcuL2xpc3QtaXRlbSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xuXG5mdW5jdGlvbiB0b0FycmF5IChoaXN0b3J5KSB7XG4gIGxldCBpdGVtcyA9IFtdXG4gIGxldCBub2RlID0gaGlzdG9yeS5yb290XG5cbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpdGVtcy5wdXNoKG5vZGUpXG4gICAgbm9kZSA9IG5vZGUubmV4dFxuICB9XG5cbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmZ1bmN0aW9uIEVtcHR5KCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5lbXB0eSB9PlxuICAgICAgPGgyIGNsYXNzTmFtZT17IHN0eWxlLmhlYWRpbmcgfT5Ob3RoaW5nIGhhcyBoYXBwZW5lZDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgUHVzaCBhY3Rpb25zIHRvIGZvbGxvdyBjaGFuZ2VzIHRvIHlvdXIgYXBwbGljYXRpb24gb3ZlciB0aW1lLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QgKHsgaGlzdG9yeSB9KSB7XG4gIGxldCBpdGVtcyA9IHRvQXJyYXkoaGlzdG9yeSkucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBhY3Rpb24sIGkpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoPEl0ZW0ga2V5PXsgaSB9IGFjdGlvbj17IGFjdGlvbiB9IC8+KVxuICB9LCBbXSkucmV2ZXJzZSgpXG5cbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA/ICg8dWwgY2xhc3NOYW1lPXsgc3R5bGUubGlzdCB9PnsgaXRlbXMgfTwvdWw+KSA6IDxFbXB0eSAvPlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvY29tcG9uZW50cy9saXN0L2luZGV4LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCAgICBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnXG5cbmZ1bmN0aW9uIGh1bWFuaXplICh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcX1xcZCskLywgJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGdldENsYXNzTmFtZXMoKSB7XG4gICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gY3goc3R5bGUuaXRlbSwge1xuICAgICAgW3N0eWxlLmluYWN0aXZlXSAgOiBhY3Rpb24uZGlzYWJsZWQsXG4gICAgICBbc3R5bGUuZXJyb3JdICAgICA6IGFjdGlvbi5pcygnZXJyb3InKSxcbiAgICAgIFtzdHlsZS5sb2FkaW5nXSAgIDogYWN0aW9uLmlzKCdvcGVuJyksXG4gICAgICBbc3R5bGUuY29tcGxldGVdICA6IGFjdGlvbi5pcygnZG9uZScpLFxuICAgICAgW3N0eWxlLmNhbmNlbGxlZF0gOiBhY3Rpb24uaXMoJ2NhbmNlbGxlZCcpXG4gICAgfSlcbiAgfSxcblxuICBtdXRlKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9uLnRvZ2dsZSgpXG4gIH0sXG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pXG4gIH0sXG5cbiAgcmVuZGVyUGFyYW1ldGVycygpIHtcbiAgICBjb25zdCB7IGFjdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGUucGFyYW1ldGVycyB9PlxuICAgICAgICA8cHJlPnsgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQsIG51bGwsIDIpIH08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgdGhpcy5nZXRDbGFzc05hbWVzKCkgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZS5tZW51IH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgc3R5bGUudGl0bGUgfT5cbiAgICAgICAgICAgIHsgaHVtYW5pemUoYWN0aW9uLmJlaGF2aW9yLmRvbmUpIH1cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17IHN0eWxlLmJ1dHRvbiB9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5tdXRlIH0+XG4gICAgICAgICAgICB7IGFjdGlvbi5pcygnZGlzYWJsZWQnKSA/IFwi4peHXCIgOiBcIuKXhlwiIH1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgc3R5bGUuYnV0dG9uIH0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZSB9PlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm9wZW4gPyBcIuKWtFwiIDogXCLilr5cIiB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsgdGhpcy5zdGF0ZS5vcGVuID8gdGhpcy5yZW5kZXJQYXJhbWV0ZXJzKCkgOiBudWxsIH1cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS5qc3hcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHtcInNvdXJjZU1hcFwiOnRydWV9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvY29tcG9uZW50cy9saXN0L3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBDb2xvcnNcXG4gKi9cXG5Aa2V5ZnJhbWVzIGxvYWRpbmctTklRZkYge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgfVxcbiAgNjAlIHtcXG4gICAgbGVmdDogNjAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7IH0gfVxcblxcbi5saXN0LXF3OE5VIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLml0ZW0tM2l1eHAge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsOyB9XFxuICAuaXRlbS0zaXV4cC5jb21wbGV0ZS0zajk0ZyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICM3Zjk7IH1cXG4gIC5pdGVtLTNpdXhwLmVycm9yLTN2NUhxIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDAgI2Y1NTsgfVxcbiAgLml0ZW0tM2l1eHAubG9hZGluZy1OSVFmRiB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICNmZTQ7IH1cXG4gICAgLml0ZW0tM2l1eHAubG9hZGluZy1OSVFmRjphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nLU5JUWZGIDAuN3MgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmYTQ7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgLml0ZW0tM2l1eHAuaW5hY3RpdmUtRkg2Zkcge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpOyB9XFxuICAuaXRlbS0zaXV4cC5jYW5jZWxsZWQtMjM4YUgge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggMCAjZjg0OyB9XFxuXFxuLnBhcmFtZXRlcnMtbGxMR1Uge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDQwMHB4OyB9XFxuXFxuLm1lbnUtMjlIN00ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLnRpdGxlLVlabGhaIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleC1ncm93OiAxOyB9XFxuXFxuLmJ1dHRvbi0yLTRrdSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzQ0NDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiA0cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDsgfVxcbiAgLmJ1dHRvbi0yLTRrdTpob3ZlciwgLmJ1dHRvbi0yLTRrdTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5idXR0b24tMi00a3U6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbDsgfVxcblxcbi5lbXB0eS0yaVpkWCB7XFxuICBjb2xvcjogIzU1NTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBwYWRkaW5nOiAyNHB4OyB9XFxuXFxuLmhlYWRpbmctM0dTUXMge1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJsaXN0XCI6IFwibGlzdC1xdzhOVVwiLFxuXHRcIml0ZW1cIjogXCJpdGVtLTNpdXhwXCIsXG5cdFwiY29tcGxldGVcIjogXCJjb21wbGV0ZS0zajk0Z1wiLFxuXHRcImVycm9yXCI6IFwiZXJyb3ItM3Y1SHFcIixcblx0XCJsb2FkaW5nXCI6IFwibG9hZGluZy1OSVFmRlwiLFxuXHRcImluYWN0aXZlXCI6IFwiaW5hY3RpdmUtRkg2ZkdcIixcblx0XCJjYW5jZWxsZWRcIjogXCJjYW5jZWxsZWQtMjM4YUhcIixcblx0XCJwYXJhbWV0ZXJzXCI6IFwicGFyYW1ldGVycy1sbExHVVwiLFxuXHRcIm1lbnVcIjogXCJtZW51LTI5SDdNXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZS1ZWmxoWlwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbi0yLTRrdVwiLFxuXHRcImVtcHR5XCI6IFwiZW1wdHktMmlaZFhcIixcblx0XCJoZWFkaW5nXCI6IFwiaGVhZGluZy0zR1NRc1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL2xpYi9jb21wb25lbnRzL2xpc3Qvc3R5bGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHtcInNvdXJjZU1hcFwiOnRydWV9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9saWIvY29tcG9uZW50cy9zdHlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzNTBweDsgfVxcblxcbi5jb250YWluZXItZ3I1MHcgKixcXG4uY29udGFpbmVyLWdyNTB3ICo6YmVmb3JlLFxcbi5jb250YWluZXItZ3I1MHcgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLmNvbnRhaW5lci1ncjUwdyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3R0b206IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMxMTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgei1pbmRleDogMTAwMDAwMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lci1ncjUwd1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL2xpYi9jb21wb25lbnRzL3N0eWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==