module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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
	exports.default = Debugger;

	__webpack_require__(1);

	var _console = __webpack_require__(5);

	var _console2 = _interopRequireDefault(_console);

	var _reactDom = __webpack_require__(15);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Debugger(app, options, next) {
	  var container = document.createElement('div');

	  container.className = "debugger-wrapper";

	  document.body.appendChild(container);

	  function render() {
	    _reactDom2.default.render(_react2.default.createElement(_console2.default, { app: app }), container);
	  }

	  render();

	  app.listen(render);

	  next();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\n  padding-right: 275px;\n}\n\n.debugger {\n  box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.1);\n  border-top: 4px solid #337;\n  bottom: 0;\n  box-sizing: border-box;\n  color: #112;\n  right: 0;\n  height: 100%;\n  position: fixed;\n  width: 275px;\n  z-index: 1000000;\n}\n\n.debugger *,\n.debugger *:before,\n.debugger *:after {\n  box-sizing: inherit;\n}\n\n.debugger-list {\n  list-style: none;\n  margin: 0;\n  padding: 0\n}\n\n.debugger-list li {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  padding: 8px 16px;\n  transition: 0.1s all;\n}\n\n.debugger-list li:active {\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.debugger svg {\n  background: #112;\n  border: 0;\n  display: block;\n  margin: 0;\n  width: 100%;\n}\n\n.debugger .debugger-node {\n  cursor: pointer;\n}\n\n.debugger .debugger-node-label {\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.debugger .debugger-node-marker,\n.debugger .debugger-node-label {\n  transition: 0.2s r cubic-bezier(0.54,-0.12, 0.32, 1.28), 0.2s fill, 0.3s opacity;\n}\n\n.debugger .debugger-node:hover .debugger-node-label {\n  opacity: 1;\n}\n\n.debugger .debugger-node:hover .debugger-node-marker {\n  r: 5;\n}\n\n.debugger .debugger-node:active .debugger-node-marker {\n  r: 4;\n}\n\n.debugger-tabs {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  display: table;\n  width: 100%;\n}\n\n.debugger-tabs a {\n  display: table-cell;\n  font-weight: 600;\n  padding: 8px 0;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.debugger-entry {\n  padding: 8px 16px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _tree = __webpack_require__(7);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function humanize(text) {
	  return text.replace(/\_\d+$/, '');
	}

	var Console = _react2.default.createClass({
	  displayName: 'Console',


	  propTypes: {
	    app: _react2.default.PropTypes.object.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      focus: null
	    };
	  },
	  checkout: function checkout(node) {
	    this.props.app.history.checkout(node);
	    this.props.app.rollforward();
	  },
	  renderFocus: function renderFocus() {
	    var _this = this;

	    var focus = this.state.focus;


	    return _react2.default.createElement(
	      'section',
	      { className: 'debugger-entry' },
	      _react2.default.createElement(
	        'header',
	        { className: 'debugger-entry__header' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this.setState({ focus: null });
	              } },
	            '←'
	          ),
	          humanize(focus.type)
	        )
	      ),
	      _react2.default.createElement(
	        'pre',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          JSON.stringify(focus.payload, null, 2) || 'Empty'
	        )
	      )
	    );
	  },
	  renderList: function renderList() {
	    var _this2 = this;

	    var items = [];
	    var start = this.props.app.history.anchor;

	    var _loop = function _loop() {
	      var transaction = start.value;

	      items.unshift(_react2.default.createElement(
	        'li',
	        { key: items.length, onClick: function onClick() {
	            return _this2.setState({ focus: transaction });
	          } },
	        humanize(transaction.type),
	        ' (i)'
	      ));

	      start = start.next;
	    };

	    while (start) {
	      _loop();
	    }

	    return _react2.default.createElement(
	      'ul',
	      { className: 'debugger-list' },
	      items
	    );
	  },
	  render: function render() {

	    return _react2.default.createElement(
	      'div',
	      { className: 'debugger', ref: 'frame' },
	      _react2.default.createElement(_tree2.default, { history: this.props.app.history, onNodeClick: this.checkout, width: '275' }),
	      this.state.focus ? this.renderFocus() : this.renderList()
	    );
	  }
	});

	exports.default = Console;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _node = __webpack_require__(8);

	var _node2 = _interopRequireDefault(_node);

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _tree = __webpack_require__(9);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TreeVisual = _react2.default.createClass({
	  displayName: 'TreeVisual',
	  getDefaultProps: function getDefaultProps() {
	    return {
	      padding: 25,
	      height: 100,
	      width: 275
	    };
	  },
	  getTree: function getTree(history) {
	    var _props = this.props;
	    var height = _props.height;
	    var padding = _props.padding;
	    var width = _props.width;


	    return (0, _tree2.default)({
	      data: history.root(),
	      height: height - padding * 2,
	      width: width - padding * 2
	    });
	  },
	  getCurve: function getCurve(curve, i) {
	    return _react2.default.createElement('path', { key: i, d: curve.connector.path.print() });
	  },
	  getNode: function getNode(_ref, i) {
	    var point = _ref.point;
	    var item = _ref.item;

	    return _react2.default.createElement(_node2.default, { key: i,
	      x: point[0],
	      y: point[1],
	      item: item,
	      active: this.props.history.focus === item,
	      onHover: this.setFocus,
	      onClick: this.props.onNodeClick });
	  },
	  render: function render() {
	    var history = this.props.history;


	    return _react2.default.createElement(
	      'div',
	      { className: 'tree-view' },
	      history.size() ? this.renderTree() : null
	    );
	  },
	  renderTree: function renderTree() {
	    var _props2 = this.props;
	    var history = _props2.history;
	    var padding = _props2.padding;
	    var width = _props2.width;
	    var height = _props2.height;


	    var tree = this.getTree(history);

	    return _react2.default.createElement(
	      'svg',
	      { width: width, height: height },
	      _react2.default.createElement(
	        'g',
	        { transform: 'translate(' + padding + ',' + padding + ')' },
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Node = _react2.default.createClass({
	  displayName: 'Node',
	  getTransform: function getTransform() {
	    var _props = this.props;
	    var x = _props.x;
	    var y = _props.y;

	    return 'translate(' + (x || 0) + ', ' + (y || 0) + ')';
	  },
	  humanizeAction: function humanizeAction(text) {
	    return text.replace(/\_\d+$/, '').replace(/([A-Z])/g, ' $1').toLowerCase();
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var item = _props2.item;
	    var active = _props2.active;

	    var fill = active ? '#E39' : '#7BFDE9';
	    var radius = active ? 5 : 3;

	    return _react2.default.createElement(
	      'g',
	      { className: 'debugger-node', transform: this.getTransform(), onClick: this.onClick },
	      _react2.default.createElement('circle', { className: 'debugger-node-marker', r: radius, fill: fill, stroke: '#001', strokeOpacity: '0.9' }),
	      _react2.default.createElement(
	        'text',
	        { className: 'debugger-node-label', dy: '-14', fontSize: '11', textAnchor: 'middle', fill: 'white' },
	        this.humanizeAction(item.value.type)
	      )
	    );
	  },
	  onClick: function onClick(event) {
	    event.preventDefault();
	    this.props.onClick(this.props.item);
	  }
	});

	exports.default = Node;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _connector = __webpack_require__(10);

	var _connector2 = _interopRequireDefault(_connector);

	var _linear = __webpack_require__(13);

	var _linear2 = _interopRequireDefault(_linear);

	var _ops = __webpack_require__(12);

	var _treeUtils = __webpack_require__(14);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _path = __webpack_require__(11);

	var _path2 = _interopRequireDefault(_path);

	var _ops = __webpack_require__(12);

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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);