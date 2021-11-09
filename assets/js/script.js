/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/card-author.js":
/*!***************************************!*\
  !*** ./assets/scripts/card-author.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var CardAuthor = /*#__PURE__*/function (_window$Slim) {
  _inherits(CardAuthor, _window$Slim);

  var _super = _createSuper(CardAuthor);

  function CardAuthor() {
    var _this;

    _classCallCheck(this, CardAuthor);

    _this = _super.call(this);
    if (!_this.author) return _possibleConstructorReturn(_this);

    _this.parseAvatar();

    return _this;
  }

  _createClass(CardAuthor, [{
    key: "parseAvatar",
    value: function parseAvatar() {
      if (!this.author.avatar || !this.author.avatar.hasOwnProperty('full')) return;
      this.author.avatar = this.author.avatar.full;
    }
  }]);

  return CardAuthor;
}(window.Slim);

CardAuthor.useShadow = false;
CardAuthor.template =
/*html*/
"\n    <div class=\"pa-author-item pa-blog-item\">\n        <a href=\"{{ this.author.link }}\" title=\"{{ this.author.name }}\">\n            <div class=\"row align-items-start align-items-sm-start\">\n                <div class=\"col-auto pe-3\">\n                    <div class=\"ratio ratio-1x1\">\n                        <figure class=\"figure m-0\">\n                            <img src=\"{{ this.author.avatar ? this.author.avatar : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj4KICA8cmVjdCBpZD0iUmV0w6JuZ3Vsb18xIiBkYXRhLW5hbWU9IlJldMOibmd1bG8gMSIgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjOTA5MDkwIi8+Cjwvc3ZnPg==' }}\" class=\"figure-img rounded-circle m-0 h-100 w-100\" alt=\"{{ this.author.name }}\" />\n                        </figure>\t\n                    </div>\n                </div>\n\n                <div class=\"col pe-sm-0 ps-0 ps-sm-3\">\n                    <div class=\"{{ this.author.featured_media_url['pa-block-render'] ? 'card-body p-0' : 'card-body ps-4 pe-0 py-4 border-start border-5 pa-border' }}\">                        \n                        <h3 class=\"fw-bold h5\">{{ this.author.name }}</h3>\n\n                        <span *if=\"{{ this.author.column.name }}\" class=\"h5 mb-2 pa-truncate-3\">{{ this.author.column.name }}</span>\n\n                        <p *if=\"{{ this.author.column.excerpt }}\" class=\"m-0 pa-truncate-3\">{{ this.author.column.excerpt }}</p>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n";
customElements.define('card-author', CardAuthor);

/***/ }),

/***/ "./assets/scripts/card-post.js":
/*!*************************************!*\
  !*** ./assets/scripts/card-post.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var CardPost = /*#__PURE__*/function (_window$Slim) {
  _inherits(CardPost, _window$Slim);

  var _super = _createSuper(CardPost);

  function CardPost() {
    var _this;

    _classCallCheck(this, CardPost);

    _this = _super.call(this);
    if (!_this.post) return _possibleConstructorReturn(_this);

    _this.parseExcerpt();

    return _this;
  }

  _createClass(CardPost, [{
    key: "parseExcerpt",
    value: function parseExcerpt() {
      if (!this.post.hasOwnProperty('excerpt')) return;
      this.post.excerpt.rendered = this.post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');
      this.post.excerpt.rendered = this.post.excerpt.rendered.replace('[&hellip;]', '');
    }
  }]);

  return CardPost;
}(window.Slim);

CardPost.useShadow = false;
CardPost.template =
/*html*/
"\n    <div class=\"pa-blog-item mb-3 border-0\">\n        <a href=\"{{ this.post.link }}\" title=\"{{ this.post.title.rendered }}\">\n            <div class=\"row align-items-center\">\n                <div class=\"{{ this.post.featured_media_url['pa-block-render'] ? 'img-container' : 'd-none' }}\">\n                    <div class=\"ratio ratio-16x9\">\n                        <figure class=\"figure m-xl-0\">\n                            <img *if=\"{{ this.post.featured_media_url['pa-block-render'] }}\" src=\"{{ this.post.featured_media_url['pa-block-render'] }}\" class=\"figure-img img-fluid rounded m-0 h-100 w-100\" alt=\"{{ this.post.title.rendered }}\" />\n\n                            <figcaption *if=\"{{ this.post.terms.editorial }}\" class=\"pa-img-tag figure-caption text-uppercase d-table-cell\">{{ this.post.terms.editorial }}</figcaption>\n                        </figure>\t\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <div class=\"{{ this.post.featured_media_url['pa-block-render'] ? 'card-body p-0' : 'card-body ps-4 pe-0 py-4 border-start border-5 pa-border' }}\">\n                        <span *if=\"{{ this.post.terms.format }}\" class=\"pa-tag text-uppercase d-table-cell rounded py-0\">{{ this.post.terms.format }}</span>\n\n                        <h3 class=\"fw-bold h6 mt-2 pa-truncate-4\">{{ this.post.title.rendered }}</h3>\n\n                        <p *if=\"{{ this.post.excerpt.rendered }}\" class=\"m-0 pa-truncate-3\">{{ this.post.excerpt.rendered }}</p>\n                    </div>\n                </div>\n            </div>\n        </a>\n    </div>\n";
customElements.define('card-post', CardPost);

/***/ }),

/***/ "./assets/scripts/load-more.js":
/*!*************************************!*\
  !*** ./assets/scripts/load-more.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-author */ "./assets/scripts/card-author.js");
/* harmony import */ var _card_author__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_author__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-post */ "./assets/scripts/card-post.js");
/* harmony import */ var _card_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_post__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




var LoadMore = /*#__PURE__*/function (_window$Slim) {
  _inherits(LoadMore, _window$Slim);

  var _super = _createSuper(LoadMore);

  function LoadMore() {
    var _this$attributes$getN, _this$attributes$getN2, _this$attributes$getN3, _this$attributes$getN4;

    var _this;

    _classCallCheck(this, LoadMore);

    _this = _super.call(this);
    _this.url = (_this$attributes$getN = _this.attributes.getNamedItem('url')) === null || _this$attributes$getN === void 0 ? void 0 : _this$attributes$getN.nodeValue;
    if (!_this.isUrl(_this.url)) return _possibleConstructorReturn(_this);
    _this.items = [];
    _this.totalPages = 0;
    _this.args = (_this.args = (_this$attributes$getN2 = _this.attributes.getNamedItem('args')) === null || _this$attributes$getN2 === void 0 ? void 0 : _this$attributes$getN2.nodeValue).startsWith('?') ? _this.args : "?".concat(_this.args);
    _this.method = _this.method = (_this$attributes$getN3 = _this.attributes.getNamedItem('method')) !== null && _this$attributes$getN3 !== void 0 && _this$attributes$getN3.nodeValue ? _this.method.toUpperCase() : 'GET';
    _this.nonce = (_this$attributes$getN4 = _this.attributes.getNamedItem('nonce')) === null || _this$attributes$getN4 === void 0 ? void 0 : _this$attributes$getN4.nodeValue;
    _this.url = new URL("".concat(_this.url).concat(_this.args));
    if (_this.args) _this.loadMoreData();
    return _this;
  }

  _createClass(LoadMore, [{
    key: "onBeforeCreated",
    value: function onBeforeCreated() {
      this.template = this.attributes.getNamedItem('template').nodeValue;
      this.template = document.getElementById(this.template);
      this.constructor.template = '<div class="position-relative">';
      if (this.template) this.constructor.template += this.template.innerHTML;
      this.constructor.template += '<div class="load-more-trigger position-absolute bottom-0 w-100" style="height: 320px; z-index: -1;"></div></div>';
    }
  }, {
    key: "registerObserver",
    value: function registerObserver() {
      var _this2 = this;

      this.trigger = this.querySelector('.load-more-trigger');
      this.observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) _this2.loadMoreData();
      }, {
        threshold: [0]
      });
      this.observer.observe(this.trigger);
    }
  }, {
    key: "loadMoreData",
    value: function loadMoreData() {
      var _this3 = this;

      var request = new XMLHttpRequest();
      this.url.searchParams.set('page', this.url.searchParams.has('page') ? parseInt(this.url.searchParams.get('page')) + 1 : 1);
      request.responseType = 'json';
      request.open(this.method, this.method == 'GET' ? this.url.href : "".concat(this.url.origin).concat(this.url.pathname), true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      if (this.nonce) request.setRequestHeader('X-WP-Nonce', this.nonce);

      request.onreadystatechange = function () {
        if (request.readyState !== 4 || request.status !== 200 || !Array.isArray(request.response)) return;
        request.response.forEach(function (item) {
          return _this3.items = [].concat(_toConsumableArray(_this3.items), [item]);
        });
        if (_this3.totalPages == 0) _this3.totalPages = parseInt(request.getResponseHeader('X-WP-TotalPages'));
        if (!_this3.observer) _this3.registerObserver();
        if (_this3.totalPages == parseInt(_this3.url.searchParams.get('page'))) _this3.observer.unobserve(_this3.trigger);
      };

      request.send(this.method != 'GET' ? this.url.search.substring(1) : '');
    }
  }, {
    key: "isUrl",
    value: function isUrl() {
      try {
        return Boolean(new URL(this.url));
      } catch (e) {
        return false;
      }
    }
  }]);

  return LoadMore;
}(window.Slim);

LoadMore.useShadow = false;
customElements.define('load-more', LoadMore);

/***/ }),

/***/ "./assets/scripts/script.js":
/*!**********************************!*\
  !*** ./assets/scripts/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slim_js_dist_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-js/dist/index */ "./node_modules/slim-js/dist/index.js");
/* harmony import */ var slim_js_dist_directives_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slim-js/dist/directives/all */ "./node_modules/slim-js/dist/directives/all.js");
/* harmony import */ var _load_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-more */ "./assets/scripts/load-more.js");




/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/slim-js/dist/directives/all.js":
/*!*****************************************************!*\
  !*** ./node_modules/slim-js/dist/directives/all.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/slim-js/dist/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var M = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].block,
    E = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].repeatCtx,
    p = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].internals,
    ie = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].index,
    A = "*foreach",
    h = Symbol(),
    b = new Range(),
    T = {
  attribute: function attribute(t, e) {
    return e === A;
  },
  process: function process(_ref) {
    var t = _ref.targetNode,
        e = _ref.scopeNode,
        r = _ref.expression;
    var o = document.createElement("template");
    t[M] = "abort", t.removeAttribute(A);
    var i = t.outerHTML,
        a = document.createComment("*foreach"),
        u = t.parentElement || t.parentNode || e.shadowRoot || e;
    u.insertBefore(a, t);
    var n = [];

    function f() {
      var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var c = l.length,
          v = n.length;

      if (c < v) {
        var s = n[c],
            d = n[v - 1];
        b.setStartBefore(s), b.setEndAfter(d), b.deleteContents(), n.slice(c).forEach(function (m) {
          m[p][h].clear(), Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["removeBindings"])(e, m);
        }), n.length = c;
      }

      v = n.length, o.innerHTML = i.repeat(Math.max(0, c - v)), b.selectNodeContents(o.content);
      var x = b.extractContents(),
          y = Array.from(x.children);
      y.forEach(function (s, d) {
        s[E] = l[n.length + d];

        var _C = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["processDOM"])(e, s),
            m = _C.bounds,
            j = _C.clear;

        s[p] = s[p] || {}, s[p][h] = {
          bounds: m,
          clear: j
        }, m.forEach(function (R) {
          return R();
        });
      }), u.insertBefore(x, a), n.forEach(function (s, d) {
        s[E] = l[d], s[p][h].bounds.forEach(function (m) {
          return m();
        });
      }), n.push.apply(n, _toConsumableArray(y));
    }

    return {
      update: f,
      removeNode: !0
    };
  }
};
_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(T, !0);


var O = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].block,
    w = function w(t, e) {
  var r = t.cloneNode(!0),
      _I = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["processDOM"])(e, r),
      o = _I.clear,
      i = _I.bounds;

  return {
    clear: o,
    bounds: i,
    copy: r
  };
},
    L = {
  attribute: function attribute(t, e) {
    return e === "*if";
  },
  process: function process(_ref2) {
    var _e$parentNode;

    var t = _ref2.scopeNode,
        e = _ref2.targetNode,
        r = _ref2.expression;
    var o = document.createComment("*if");
    e[O] = "abort", e.removeAttribute("*if"), (_e$parentNode = e.parentNode) === null || _e$parentNode === void 0 ? void 0 : _e$parentNode.insertBefore(o, e);
    var i, a, u;
    return {
      update: function update(f) {
        var _w, _o$parentNode;

        f ? (!i && (_w = w(e, t), i = _w.copy, a = _w.bounds, u = _w.clear, _w), a.forEach(function (l) {
          return l();
        }), (_o$parentNode = o.parentNode) === null || _o$parentNode === void 0 ? void 0 : _o$parentNode.insertBefore(i, o)) : i && (i.remove(), u(), i = a = u = void 0);
      },
      removeNode: !0,
      removeAttribute: !0
    };
  },
  noExecution: !1
};

_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(L);


var z = _index_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].dashToCamel,
    S = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].debug,
    $ = _index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].block,
    q = {
  attribute: function attribute(t, e) {
    return e.startsWith(".");
  },
  process: function process(_ref3) {
    var t = _ref3.attributeName,
        e = _ref3.targetNode;
    var r = z(t.slice(1));
    return {
      update: function update(o) {
        e[$] !== "abort" && (e[r] = o);
      },
      removeAttribute: !_index_js__WEBPACK_IMPORTED_MODULE_0__["Slim"][S]
    };
  }
};
_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(q);

var J = {
  attribute: function attribute(t, e) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var o = e[0];
    return r && o !== "@" && o !== "." && o !== "*" && r.slice(0, 2) === "{{" && r.slice(-2) === "}}";
  },
  process: function process(_ref4) {
    var t = _ref4.attributeName,
        e = _ref4.targetNode;
    return e[_index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].block] === "abort" ? {} : {
      update: function update(r) {
        if (e[_index_js__WEBPACK_IMPORTED_MODULE_0__["Internals"].block] === "abort") return e.removeAttribute(t);
        typeof r == "boolean" || typeof r == "undefined" || r === null ? r ? e.setAttribute(t, "") : e.removeAttribute(t) : e.setAttribute(t, "" + r);
      },
      removeNode: !1,
      removeAttribute: !0
    };
  }
};
_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(J);

var V = _index_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].dashToCamel,
    X = _index_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].memoize,
    Y = _index_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].createFunction,
    Z = X(V),
    N = /(.+)(\((.*)\)){1}/,
    ee = {
  attribute: function attribute(t, e) {
    return e.startsWith("@");
  },
  process: function process(_ref5) {
    var t = _ref5.attributeName,
        e = _ref5.targetNode,
        r = _ref5.scopeNode,
        o = _ref5.expression,
        i = _ref5.context;

    var a = Z(t.slice(1)),
        u = N.test(o || ""),
        n = function n(f) {
      var l = Y("event", "item", "return ".concat(o, ";")),
          c;
      return u || (c = l.call(r)), c ? c(f, i) : l.call(r, f, i());
    };

    return e.addEventListener(a, n), {
      removeAttribute: !0
    };
  }
};
_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(ee);

var re = {
  attribute: function attribute(t, e) {
    return e === "#ref";
  },
  process: function process(_ref6) {
    var t = _ref6.attribute,
        e = _ref6.targetNode,
        r = _ref6.scopeNode;
    var o = t.value;
    return Object.defineProperty(r, o, {
      value: e,
      configurable: !0
    }), {
      removeAttribute: !0
    };
  },
  noExecution: !0
};
_index_js__WEBPACK_IMPORTED_MODULE_0__["DirectiveRegistry"].add(re);

/***/ }),

/***/ "./node_modules/slim-js/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/slim-js/dist/index.js ***!
  \********************************************/
/*! exports provided: Component, DirectiveRegistry, Internals, Phase, PluginRegistry, Slim, Utils, createBind, processDOM, removeBindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveRegistry", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Internals", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phase", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginRegistry", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slim", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBind", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processDOM", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBindings", function() { return Re; });
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = Object.defineProperty;

var De = function De(e, t, o) {
  return t in e ? $(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
  }) : e[t] = o;
};

var Oe = function Oe(e) {
  return $(e, "__esModule", {
    value: !0
  });
};

var Se = function Se(e, t) {
  Oe(e);

  for (var o in t) {
    $(e, o, {
      get: t[o],
      enumerable: !0
    });
  }
};

var q = function q(e, t, o) {
  return De(e, _typeof(t) != "symbol" ? t + "" : t, o), o;
};

var pe = {};
Se(pe, {
  NOOP: function NOOP() {
    return R;
  },
  createFunction: function createFunction() {
    return M;
  },
  dashToCamel: function dashToCamel() {
    return Ae;
  },
  findCtx: function findCtx() {
    return H;
  },
  forceUpdate: function forceUpdate() {
    return je;
  },
  isForcedUpdate: function isForcedUpdate() {
    return Q;
  },
  lazyQueue: function lazyQueue() {
    return Y;
  },
  markFlush: function markFlush() {
    return X;
  },
  memoize: function memoize() {
    return D;
  },
  normalize: function normalize() {
    return J;
  },
  requestIdleCallback: function requestIdleCallback() {
    return k;
  }
});

var p = Symbol,
    a = p("block"),
    E = p("repeat"),
    k = window.requestIdleCallback || function (e) {
  return setTimeout(e);
},
    N = p("internals"),
    v = p(),
    A = p(),
    y = p(),
    F = p(),
    U = p(),
    le = p();

var _ = new WeakSet(),
    de = new WeakMap();

function je(e) {
  for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    t[_key - 1] = arguments[_key];
  }

  var o = Array.prototype.slice.call(arguments).slice(1),
      n = de.get(e);
  if (!n) return console.error("Flush error");
  _.add(e), o.length ? n.apply(void 0, _toConsumableArray(o)) : n(), requestAnimationFrame(function () {
    return _["delete"](e);
  });
}

var H = function H(e) {
  var _e;

  for (; e && !e[E];) {
    e = e.parentElement;
  }

  return (_e = e) === null || _e === void 0 ? void 0 : _e[E];
},
    Q = function Q(e) {
  return _.has(e);
},
    X = function X(e, t) {
  return de.set(e, t);
},
    ve = /-[a-z]/g,
    Ae = function Ae(e) {
  return e.indexOf("-") < 0 ? e : e.replace(ve, function (t) {
    return t[1].toUpperCase();
  });
},
    ye = {
  timeRemaining: function timeRemaining() {
    return !0;
  }
},
    Y = function Y(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : R;

  var n = {
    timeout: t
  },
      i = e[Symbol.iterator](),
      r = i.next(),
      l = function l() {
    return k(d, n);
  },
      d = function d() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ye;

    for (; s.timeRemaining() && !r.done;) {
      r.value(), r = i.next();
    }

    s !== null && s !== void 0 && s.didTimeout && !r.done && (r.value(), r = i.next()), r.done ? o() : l();
  };

  l();
},
    J = function J(e) {
  return e.replace(/\n/g, "").replace(/[\t ]+\</g, "<").replace(/\>[\t ]+\</g, "><").replace(/\>[\t ]+$/g, ">");
},
    D = function D(e) {
  var t = {};
  return function (o) {
    return t[o] || (t[o] = e(o));
  };
},
    me = {},
    M = function M() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }

  var t = e.join("$");
  return me[t] || (me[t] = _construct(Function, e));
},
    R = function R() {};

var Fe = Symbol(),
    Me = /(\{\{([^\{|^\}]+)\}\})/gi,
    ue = /(this\.[\w+|\d*]*)+/gi,
    fe = /item(\.[\w+|\d*]*)*/gi,
    Pe = function Pe() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = [],
      o = null;

  for (ue.lastIndex = fe.lastIndex = 0; o = ue.exec(e);) {
    t.push(o[1].split(".")[1]);
  }

  return fe.test(e) && t.push(Fe), {
    paths: t,
    expressions: t.length ? e.match(Me) || [] : []
  };
},
    G = D(Pe);

var O = Symbol(),
    K = /*#__PURE__*/function () {
  function K() {
    _classCallCheck(this, K);

    this[O] = [];
  }

  _createClass(K, [{
    key: "add",
    value: function add(t) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      o ? this[O].unshift(t) : this[O].push(t);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return _toConsumableArray(this[O]);
    }
  }]);

  return K;
}(),
    he = /*#__PURE__*/function (_K) {
  _inherits(he, _K);

  var _super = _createSuper(he);

  function he() {
    _classCallCheck(this, he);

    return _super.apply(this, arguments);
  }

  _createClass(he, [{
    key: "exec",
    value: function exec(t, o) {
      this[O].forEach(function (n) {
        return n(t, o);
      });
    }
  }]);

  return he;
}(K),
    Z = new K(),
    C = new he();

var xe = [],
    Ee = {},
    ee = "abort",
    P = console,
    ge = function ge(e, t) {
  for (var _len3 = arguments.length, o = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    o[_key3 - 2] = arguments[_key3];
  }

  return u[U] && (P.group(e), P.error(t), P.info.apply(P, o), P.groupEnd());
},
    Ie = D(function (e) {
  return "`" + e.replaceAll("{{", "${").replaceAll("}}", "}") + "`";
}),
    ze = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    be = function be(e) {
  return document.createTreeWalker(e, ze);
},
    I = function I(e, t) {
  return _typeof(e) === t;
},
    S = new WeakMap(),
    Be = function Be(e) {
  return I(e, "function") ? e() : e;
},
    te = function te(e, t, o, n) {
  var i = S.get(e) || S.set(e, {}).get(e);

  if (!i[o]) {
    var l = (Object.getOwnPropertyDescriptor(e, o) || Ee).set,
        d = e[o];
    Object.defineProperty(e, o, {
      get: function get() {
        return d;
      },
      set: function set(s) {
        (s !== d || I(s, "object")) && (d = s, l && l(s), oe(e, o, d));
      }
    });
  }

  (i[o] = i[o] || new Set()).add(t);
  var r = t[N] = t[N] || {};
  return I(o, "symbol") ? R : ((r[o] = r[o] || new Set()).add(n), function () {
    r[o]["delete"](n);
  });
},
    Ne = function Ne(e, t, o) {
  (e[t] || xe).forEach(function (n) {
    var i = n[E] || o;
    n[N][t].forEach(function (r) {
      return r(i);
    });
  });
},
    oe = function oe(e, t, o) {
  var n = S.get(e) || S.set(e, {}).get(e);
  t !== "*" ? Ne(n, t, o) : Object.keys(n).forEach(function (i) {
    return Ne(n, i, e[i]);
  });
},
    Re = function Re(e, t) {
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "*";
  var n = S.get(e) || Ee;

  if (o === "*") {
    Object.keys(n).forEach(function (r) {
      return Re(e, t, r);
    });
    return;
  }

  var i = n[o];

  if (i) {
    var r = be(t),
        l = r.currentNode;

    for (; l;) {
      i["delete"](l), l = r.nextNode();
    }
  }
},
    ne = function ne(e, t) {
  var o = new Set(),
      n = new Set(),
      i = new Set(),
      r = new Set(),
      l = Z.getAll(),
      d = be(t),
      s = d.currentNode || d.nextNode();

  var _loop = function _loop() {
    var m = s;
    s.nodeType, s.nodeValue, s.addEventListener;

    var w = s.nodeName,
        z = function z() {
      return H(m);
    };

    if (s.nodeType === Node.ELEMENT_NODE) {
      var _ret2 = function () {
        var c = s;
        if (w.includes("-") && I(c[a], "undefined") && (c[a] = !0, requestAnimationFrame(function () {
          return c[a] = !1;
        })), c[a] === ee) return {
          v: "continue"
        };
        var T = Array.from(c.attributes),
            g = 0,
            B = T.length;

        var _loop2 = function _loop2() {
          var f = T[g],
              b = f.nodeName,
              h = f.nodeValue || "";
          if (s[a] === ee) return "break|e";
          var x = h.trim(),
              j = x.slice(0, 2) === "{{" && x.slice(-2) === "}}" ? x.slice(2, -2) : x,
              re = ~x.indexOf("{{") ? G(j).paths : xe;

          var _iterator = _createForOfIteratorHelper(l),
              _step;

          try {
            t: for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var L = _step.value;
              if (s[a] === ee) break t;

              if (L.attribute(f, b, h)) {
                (function () {
                  var _L$process = L.process({
                    attribute: f,
                    attributeName: b,
                    attributeValue: h,
                    context: z,
                    expression: j,
                    props: re,
                    scopeNode: e,
                    targetNode: c,
                    targetNodeName: w
                  }),
                      ie = _L$process.update,
                      Te = _L$process.removeAttribute,
                      ke = _L$process.removeNode;

                  if (Te && i.add(f), ke && r.add(c), ie) {
                    var ce = L.noExecution ? R : M("item", "return ".concat(j)),
                        ae = function ae() {
                      var W = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : z();

                      try {
                        var V = ce === R ? void 0 : ce.call(e, Be(W));
                        ie(V, Q(e));
                      } catch (V) {
                        ge("Directive Error ".concat(b), V.message, "Expression: ".concat(j), "Node", c);
                      }
                    };

                    n.add(ae), re.forEach(function (W) {
                      o.add(te(e, s, W, ae));
                    });
                  }
                })();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };

        e: for (g; g < B; g++) {
          var _ret3 = _loop2();

          if (_ret3 === "break|e") break e;
        }
      }();

      if (_typeof(_ret2) === "object") return _ret2.v;
    } else if (s.nodeType === Node.TEXT_NODE) {
      var c = s.textContent;
      if (!~c.indexOf("{{")) return "continue";

      var T = s,
          _G = G(c),
          g = _G.paths,
          B = Ie(c),
          f = M("item", "return ".concat(B)),
          b = function b() {
        var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : z();

        try {
          T.nodeValue = f.call(e, h);
        } catch (x) {
          ge("Expression error: ".concat(c), x.message, "Node", T.parentElement);
        }
      };

      n.add(b), g.forEach(function (h) {
        return o.add(te(e, s, h, b));
      });
    }
  };

  for (; s; s = d.nextNode()) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }

  return r.forEach(function (m) {
    return m.remove();
  }), u[U] || i.forEach(function (m) {
    try {
      m.ownerElement.removeAttribute(m.nodeName);
    } catch (w) {}
  }), {
    flush: function flush() {
      for (var _len4 = arguments.length, m = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        m[_key4] = arguments[_key4];
      }

      m.length ? m.forEach(function (w) {
        return oe(e, w);
      }) : oe(e, "*");
    },
    clear: function clear() {
      return Y(o);
    },
    bounds: n
  };
};

var Ce = Symbol,
    se = Ce(),
    we = Ce(),
    u = /*#__PURE__*/function (_HTMLElement) {
  _inherits(u, _HTMLElement);

  var _super2 = _createSuper(u);

  function u() {
    var _this;

    _classCallCheck(this, u);

    _this = _super2.call(this);

    _this[se]();

    return _this;
  }

  _createClass(u, [{
    key: "onBeforeCreated",
    value: function onBeforeCreated() {}
  }, {
    key: "onCreated",
    value: function onCreated() {}
  }, {
    key: "onAdded",
    value: function onAdded() {}
  }, {
    key: "onRemoved",
    value: function onRemoved() {}
  }, {
    key: "onRender",
    value: function onRender() {}
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.onAdded(), C.exec(y, this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.onRemoved(), C.exec(F, this);
    }
  }, {
    key: se,
    value: function value() {
      var _this2 = this;

      if (this[a] !== "abort") {
        if (this[a]) return requestAnimationFrame(function () {
          return _this2[se]();
        });
        this.onBeforeCreated(), this.constructor.useShadow && !this.shadowRoot && this.attachShadow({
          mode: "open"
        }), C.exec(v, this), this[we]();
      }
    }
  }, {
    key: we,
    value: function value() {
      var _this3 = this;

      var t = J(this.constructor.template);

      if (t) {
        var o = document.createElement("template");
        o.innerHTML = t, Promise.resolve().then(function () {
          var _ne = ne(_this3, o.content),
              n = _ne.flush;

          X(_this3, n), n(), _this3.onCreated(), C.exec(A, _this3), (_this3.shadowRoot || _this3).appendChild(o.content), _this3.onRender();
        });
      }
    }
  }], [{
    key: "element",
    value: function element(t, o) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /*#__PURE__*/function (_Slim) {
        _inherits(_class, _Slim);

        var _super3 = _createSuper(_class);

        function _class() {
          _classCallCheck(this, _class);

          return _super3.apply(this, arguments);
        }

        return _class;
      }(Slim);
      n.template = o, customElements.define(t, n);
    }
  }]);

  return u;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

q(u, "template", ""), q(u, "useShadow", !0);
var st = {
  ADDED: y,
  CREATE: v,
  RENDER: A,
  REMOVED: F
},
    rt = {
  repeatCtx: E,
  internals: N,
  block: a,
  index: le,
  requestIdleCallback: k
};
Window.prototype.Slim = u;


/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./assets/scripts/script.js ./assets/scss/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/eli/Dropbox (ComunicaDSA)/projects/deploy-noticias.adventistas.org/app/pt/wp-content/themes/pa-theme-noticias/assets/scripts/script.js */"./assets/scripts/script.js");
module.exports = __webpack_require__(/*! /Users/eli/Dropbox (ComunicaDSA)/projects/deploy-noticias.adventistas.org/app/pt/wp-content/themes/pa-theme-noticias/assets/scss/style.scss */"./assets/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map