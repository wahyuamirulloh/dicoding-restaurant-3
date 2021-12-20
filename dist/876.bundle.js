"use strict";
{

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */

var Deferred =
/**
 * Creates a promise and exposes its resolve and reject functions as methods.
 */
function Deferred() {
  var _this = this;

  _classCallCheck(this, Deferred);

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};



/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


function stripParams(fullURL, ignoreParams) {
  var strippedURL = new URL(fullURL);

  var _iterator = _createForOfIteratorHelper(ignoreParams),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;
      strippedURL.searchParams["delete"](param);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */


function cacheMatchIgnoreParams(_x, _x2, _x3, _x4) {
  return _cacheMatchIgnoreParams.apply(this, arguments);
}

function _cacheMatchIgnoreParams() {
  _cacheMatchIgnoreParams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cache, request, ignoreParams, matchOptions) {
    var strippedRequestURL, keysOptions, cacheKeys, _iterator2, _step2, cacheKey, strippedCacheKeyURL;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            strippedRequestURL = stripParams(request.url, ignoreParams); // If the request doesn't include any ignored params, match as normal.

            if (!(request.url === strippedRequestURL)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", cache.match(request, matchOptions));

          case 3:
            // Otherwise, match by comparing keys
            keysOptions = Object.assign(Object.assign({}, matchOptions), {
              ignoreSearch: true
            });
            _context.next = 6;
            return cache.keys(request, keysOptions);

          case 6:
            cacheKeys = _context.sent;
            _iterator2 = _createForOfIteratorHelper(cacheKeys);
            _context.prev = 8;

            _iterator2.s();

          case 10:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 17;
              break;
            }

            cacheKey = _step2.value;
            strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);

            if (!(strippedRequestURL === strippedCacheKeyURL)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", cache.match(cacheKey, matchOptions));

          case 15:
            _context.next = 10;
            break;

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);

            _iterator2.e(_context.t0);

          case 22:
            _context.prev = 22;

            _iterator2.f();

            return _context.finish(22);

          case 25:
            return _context.abrupt("return");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 19, 22, 25]]);
  }));
  return _cacheMatchIgnoreParams.apply(this, arguments);
}



/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */

function canConstructResponseFromBodyStream() {
  if (supportStatus === undefined) {
    var testResponse = new Response('');

    if ('body' in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }

    supportStatus = false;
  }

  return supportStatus;
}



/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(833);
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */

function executeQuotaErrorCallbacks() {
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}

function _executeQuotaErrorCallbacks() {
  _executeQuotaErrorCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _iterator, _step, callback;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            _iterator = _createForOfIteratorHelper(_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__/* .quotaErrorCallbacks */ .f);
            _context.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context.next = 11;
              break;
            }

            callback = _step.value;
            _context.next = 8;
            return callback();

          case 8:
            if (false) {}

          case 9:
            _context.next = 4;
            break;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            _iterator.e(_context.t0);

          case 16:
            _context.prev = 16;

            _iterator.f();

            return _context.finish(16);

          case 19:
            if (false) {}

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13, 16, 19]]);
  }));
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}



/***/ }),

/***/ 436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */

function waitUntil(event, asyncFn) {
  var returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}



/***/ }),

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */

function copyResponse(_x, _x2) {
  return _copyResponse.apply(this, arguments);
}

function _copyResponse() {
  _copyResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, modifier) {
    var origin, responseURL, clonedResponse, responseInit, modifiedResponseInit, body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            origin = null; // If response.url isn't set, assume it's cross-origin and keep origin null.

            if (response.url) {
              responseURL = new URL(response.url);
              origin = responseURL.origin;
            }

            if (!(origin !== self.location.origin)) {
              _context.next = 4;
              break;
            }

            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('cross-origin-copy-response', {
              origin: origin
            });

          case 4:
            clonedResponse = response.clone(); // Create a fresh `ResponseInit` object by cloning the headers.

            responseInit = {
              headers: new Headers(clonedResponse.headers),
              status: clonedResponse.status,
              statusText: clonedResponse.statusText
            }; // Apply any user modifications.

            modifiedResponseInit = modifier ? modifier(responseInit) : responseInit; // Create the new response from the body stream and `ResponseInit`
            // modifications. Note: not all browsers support the Response.body stream,
            // so fall back to reading the entire body into memory as a blob.

            if (!(0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__/* .canConstructResponseFromBodyStream */ .x)()) {
              _context.next = 11;
              break;
            }

            _context.t0 = clonedResponse.body;
            _context.next = 14;
            break;

          case 11:
            _context.next = 13;
            return clonedResponse.blob();

          case 13:
            _context.t0 = _context.sent;

          case 14:
            body = _context.t0;
            return _context.abrupt("return", new Response(body, modifiedResponseInit));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _copyResponse.apply(this, arguments);
}



/***/ }),

/***/ 416:
/***/ (() => {

 // @ts-ignore

try {
  self['workbox:precaching:6.4.0'] && _();
} catch (e) {}

/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(833);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */

var RegExpRoute = /*#__PURE__*/function (_Route) {
  _inherits(RegExpRoute, _Route);

  var _super = _createSuper(RegExpRoute);

  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * [handler's]{@link module:workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function RegExpRoute(regExp, handler, method) {
    _classCallCheck(this, RegExpRoute);

    if (false) {}

    var match = function match(_ref) {
      var url = _ref.url;
      var result = regExp.exec(url.href); // Return immediately if there's no match.

      if (!result) {
        return;
      } // Require that the match start at the first character in the URL string
      // if it's a cross-origin request.
      // See https://github.com/GoogleChrome/workbox/issues/281 for the context
      // behind this behavior.


      if (url.origin !== location.origin && result.index !== 0) {
        if (false) {}

        return;
      } // If the route matches, but there aren't any capture groups defined, then
      // this will return [], which is truthy and therefore sufficient to
      // indicate a match.
      // If there are capture groups, then it will return their values.


      return result.slice(1);
    };

    return _super.call(this, match, handler, method);
  }

  return RegExpRoute;
}(_Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A);



/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(525);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */

var Route = /*#__PURE__*/function () {
  /**
   * Constructor for Route class.
   *
   * @param {module:workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function Route(match, handler) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultMethod */ .g;

    _classCallCheck(this, Route);

    if (false) {} // These values are referenced directly by Router so cannot be
    // altered by minificaton.


    this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeHandler */ .M)(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {module:workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */


  _createClass(Route, [{
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeHandler */ .M)(handler);
    }
  }]);

  return Route;
}();



/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(257);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(525);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(570);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */

var Router = /*#__PURE__*/function () {
  /**
   * Initializes a new Router.
   */
  function Router() {
    _classCallCheck(this, Router);

    this._routes = new Map();
    this._defaultHandlerMap = new Map();
  }
  /**
   * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */


  _createClass(Router, [{
    key: "routes",
    get: function get() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */

  }, {
    key: "addFetchListener",
    value: function addFetchListener() {
      var _this = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('fetch', function (event) {
        var request = event.request;

        var responsePromise = _this.handleRequest({
          request: request,
          event: event
        });

        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */

  }, {
    key: "addCacheListener",
    value: function addCacheListener() {
      var _this2 = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('message', function (event) {
        // event.data is type 'any'
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (event.data && event.data.type === 'CACHE_URLS') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          var payload = event.data.payload;

          if (false) {}

          var requestPromises = Promise.all(payload.urlsToCache.map(function (entry) {
            if (typeof entry === 'string') {
              entry = [entry];
            }

            var request = _construct(Request, _toConsumableArray(entry));

            return _this2.handleRequest({
              request: request,
              event: event
            }); // TODO(philipwalton): TypeScript errors without this typecast for
            // some reason (probably a bug). The real type here should work but
            // doesn't: `Array<Promise<Response> | undefined>`.
          })); // TypeScript

          event.waitUntil(requestPromises); // If a MessageChannel was used, reply to the message on success.

          if (event.ports && event.ports[0]) {
            void requestPromises.then(function () {
              return event.ports[0].postMessage(true);
            });
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */

  }, {
    key: "handleRequest",
    value: function handleRequest(_ref) {
      var _this3 = this;

      var request = _ref.request,
          event = _ref.event;

      if (false) {}

      var url = new URL(request.url, location.href);

      if (!url.protocol.startsWith('http')) {
        if (false) {}

        return;
      }

      var sameOrigin = url.origin === location.origin;

      var _this$findMatchingRou = this.findMatchingRoute({
        event: event,
        request: request,
        sameOrigin: sameOrigin,
        url: url
      }),
          params = _this$findMatchingRou.params,
          route = _this$findMatchingRou.route;

      var handler = route && route.handler;
      var debugMessages = [];

      if (false) {} // If we don't have a handler because there was no matching route, then
      // fall back to defaultHandler if that's defined.


      var method = request.method;

      if (!handler && this._defaultHandlerMap.has(method)) {
        if (false) {}

        handler = this._defaultHandlerMap.get(method);
      }

      if (!handler) {
        if (false) {}

        return;
      }

      if (false) {} // Wrap in try and catch in case the handle method throws a synchronous
      // error. It should still callback to the catch handler.


      var responsePromise;

      try {
        responsePromise = handler.handle({
          url: url,
          request: request,
          event: event,
          params: params
        });
      } catch (err) {
        responsePromise = Promise.reject(err);
      } // Get route's catch handler, if it exists


      var catchHandler = route && route.catchHandler;

      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise["catch"]( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!catchHandler) {
                      _context.next = 11;
                      break;
                    }

                    if (false) {}

                    _context.prev = 2;
                    _context.next = 5;
                    return catchHandler.handle({
                      url: url,
                      request: request,
                      event: event,
                      params: params
                    });

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](2);

                    if (_context.t0 instanceof Error) {
                      err = _context.t0;
                    }

                  case 11:
                    if (!_this3._catchHandler) {
                      _context.next = 14;
                      break;
                    }

                    if (false) {}

                    return _context.abrupt("return", _this3._catchHandler.handle({
                      url: url,
                      request: request,
                      event: event
                    }));

                  case 14:
                    throw err;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 8]]);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }

      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */

  }, {
    key: "findMatchingRoute",
    value: function findMatchingRoute(_ref3) {
      var url = _ref3.url,
          sameOrigin = _ref3.sameOrigin,
          request = _ref3.request,
          event = _ref3.event;
      var routes = this._routes.get(request.method) || [];

      var _iterator = _createForOfIteratorHelper(routes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var route = _step.value;
          var params = void 0; // route.match returns type any, not possible to change right now.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          var matchResult = route.match({
            url: url,
            sameOrigin: sameOrigin,
            request: request,
            event: event
          });

          if (matchResult) {
            if (false) {} // See https://github.com/GoogleChrome/workbox/issues/2079
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


            params = matchResult;

            if (Array.isArray(params) && params.length === 0) {
              // Instead of passing an empty array in as params, use undefined.
              params = undefined;
            } else if (matchResult.constructor === Object && // eslint-disable-line
            Object.keys(matchResult).length === 0) {
              // Instead of passing an empty object in as params, use undefined.
              params = undefined;
            } else if (typeof matchResult === 'boolean') {
              // For the boolean value true (rather than just something truth-y),
              // don't set params.
              // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
              params = undefined;
            } // Return early if have a match.


            return {
              route: route,
              params: params
            };
          }
        } // If no match was found above, return and empty object.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */

  }, {
    key: "setDefaultHandler",
    value: function setDefaultHandler(handler) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultMethod */ .g;

      this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeHandler */ .M)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */

  }, {
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeHandler */ .M)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */

  }, {
    key: "registerRoute",
    value: function registerRoute(route) {
      if (false) {}

      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      } // Give precedence to all of the earlier routes by adding this additional
      // route to the end of the array.


      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */

  }, {
    key: "unregisterRoute",
    value: function unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__/* .WorkboxError */ .V('unregister-route-but-not-found-with-method', {
          method: route.method
        });
      }

      var routeIndex = this._routes.get(route.method).indexOf(route);

      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__/* .WorkboxError */ .V('unregister-route-route-not-registered');
      }
    }
  }]);

  return Router;
}();



/***/ }),

/***/ 409:
/***/ (() => {

 // @ts-ignore

try {
  self['workbox:routing:6.4.0'] && _();
} catch (e) {}

/***/ }),

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(852);
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */

function registerRoute(capture, handler, method) {
  var route;

  if (typeof capture === 'string') {
    var captureUrl = new URL(capture, location.href);

    if (false) { var wildcards, valueToCheck; }

    var matchCallback = function matchCallback(_ref) {
      var url = _ref.url;

      if (false) {}

      return url.href === captureUrl.href;
    }; // If `capture` is a string then `handler` and `method` must be present.


    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    // If `capture` is a `RegExp` then `handler` and `method` must be present.
    route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__/* .RegExpRoute */ .t(capture, handler, method);
  } else if (typeof capture === 'function') {
    // If `capture` is a function then `handler` and `method` must be present.
    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A(capture, handler, method);
  } else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A) {
    route = capture;
  } else {
    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('unsupported-route-type', {
      moduleName: 'workbox-routing',
      funcName: 'registerRoute',
      paramName: 'capture'
    });
  }

  var defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__/* .getOrCreateDefaultRouter */ .u)();
  defaultRouter.registerRoute(route);
  return route;
}



/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ defaultMethod)
/* harmony export */ });
/* unused harmony export validMethods */
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */

var defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */

var validMethods = (/* unused pure expression or super */ null && (['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT']));

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(938);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */

var getOrCreateDefaultRouter = function getOrCreateDefaultRouter() {
  if (!defaultRouter) {
    defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .F(); // The helpers that use the default Router assume these listeners exist.

    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }

  return defaultRouter;
};

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */

var normalizeHandler = function normalizeHandler(handler) {
  if (handler && _typeof(handler) === 'object') {
    if (false) {}

    return handler;
  } else {
    if (false) {}

    return {
      handle: handler
    };
  }
};

/***/ }),

/***/ 466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(782);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(257);
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(264);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */

var Strategy = /*#__PURE__*/function () {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  function Strategy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Strategy);

    /**
     * Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     *
     * @type {string}
     */
    this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__/* .cacheNames.getRuntimeName */ .x.getRuntimeName(options.cacheName);
    /**
     * The list
     * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * used by this strategy.
     *
     * @type {Array<Object>}
     */

    this.plugins = options.plugins || [];
    /**
     * Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     *
     * @type {Object}
     */

    this.fetchOptions = options.fetchOptions;
    /**
     * The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     *
     * @type {Object}
     */

    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * [route]{@link module:workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */


  _createClass(Strategy, [{
    key: "handle",
    value: function handle(options) {
      var _this$handleAll = this.handleAll(options),
          _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
          responseDone = _this$handleAll2[0];

      return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */

  }, {
    key: "handleAll",
    value: function handleAll(options) {
      // Allow for flexible options to be passed.
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }

      var event = options.event;
      var request = typeof options.request === 'string' ? new Request(options.request) : options.request;
      var params = 'params' in options ? options.params : undefined;
      var handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .StrategyHandler */ .G(this, {
        event: event,
        request: request,
        params: params
      });

      var responseDone = this._getResponse(handler, request, event);

      var handlerDone = this._awaitComplete(responseDone, handler, request, event); // Return an array of promises, suitable for use with Promise.all().


      return [responseDone, handlerDone];
    }
  }, {
    key: "_getResponse",
    value: function () {
      var _getResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handler, request, event) {
        var response, _iterator, _step, callback, _iterator2, _step2, _callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handler.runCallbacks('handlerWillStart', {
                  event: event,
                  request: request
                });

              case 2:
                response = undefined;
                _context.prev = 3;
                _context.next = 6;
                return this._handle(request, handler);

              case 6:
                response = _context.sent;

                if (!(!response || response.type === 'error')) {
                  _context.next = 9;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('no-response', {
                  url: request.url
                });

              case 9:
                _context.next = 39;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);

                if (!(_context.t0 instanceof Error)) {
                  _context.next = 34;
                  break;
                }

                _iterator = _createForOfIteratorHelper(handler.iterateCallbacks('handlerDidError'));
                _context.prev = 15;

                _iterator.s();

              case 17:
                if ((_step = _iterator.n()).done) {
                  _context.next = 26;
                  break;
                }

                callback = _step.value;
                _context.next = 21;
                return callback({
                  error: _context.t0,
                  event: event,
                  request: request
                });

              case 21:
                response = _context.sent;

                if (!response) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("break", 26);

              case 24:
                _context.next = 17;
                break;

              case 26:
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context["catch"](15);

                _iterator.e(_context.t1);

              case 31:
                _context.prev = 31;

                _iterator.f();

                return _context.finish(31);

              case 34:
                if (response) {
                  _context.next = 38;
                  break;
                }

                throw _context.t0;

              case 38:
                if (false) {}

              case 39:
                _iterator2 = _createForOfIteratorHelper(handler.iterateCallbacks('handlerWillRespond'));
                _context.prev = 40;

                _iterator2.s();

              case 42:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 49;
                  break;
                }

                _callback = _step2.value;
                _context.next = 46;
                return _callback({
                  event: event,
                  request: request,
                  response: response
                });

              case 46:
                response = _context.sent;

              case 47:
                _context.next = 42;
                break;

              case 49:
                _context.next = 54;
                break;

              case 51:
                _context.prev = 51;
                _context.t2 = _context["catch"](40);

                _iterator2.e(_context.t2);

              case 54:
                _context.prev = 54;

                _iterator2.f();

                return _context.finish(54);

              case 57:
                return _context.abrupt("return", response);

              case 58:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11], [15, 28, 31, 34], [40, 51, 54, 57]]);
      }));

      function _getResponse(_x, _x2, _x3) {
        return _getResponse2.apply(this, arguments);
      }

      return _getResponse;
    }()
  }, {
    key: "_awaitComplete",
    value: function () {
      var _awaitComplete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(responseDone, handler, request, event) {
        var response, error;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return responseDone;

              case 3:
                response = _context2.sent;
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

              case 8:
                _context2.prev = 8;
                _context2.next = 11;
                return handler.runCallbacks('handlerDidRespond', {
                  event: event,
                  request: request,
                  response: response
                });

              case 11:
                _context2.next = 13;
                return handler.doneWaiting();

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t1 = _context2["catch"](8);

                if (_context2.t1 instanceof Error) {
                  error = _context2.t1;
                }

              case 18:
                _context2.next = 20;
                return handler.runCallbacks('handlerDidComplete', {
                  event: event,
                  request: request,
                  response: response,
                  error: error
                });

              case 20:
                handler.destroy();

                if (!error) {
                  _context2.next = 23;
                  break;
                }

                throw error;

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6], [8, 15]]);
      }));

      function _awaitComplete(_x4, _x5, _x6, _x7) {
        return _awaitComplete2.apply(this, arguments);
      }

      return _awaitComplete;
    }()
  }]);

  return Strategy;
}();


/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */

/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(676);
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(453);
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(436);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(264);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










function toRequest(input) {
  return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */


var StrategyHandler = /*#__PURE__*/function () {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {module:workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   *     [match callback]{@link module:workbox-routing~matchCallback},
   *     (if applicable).
   */
  function StrategyHandler(strategy, options) {
    _classCallCheck(this, StrategyHandler);

    this._cacheKeys = {};
    /**
     * The request the strategy is performing (passed to the strategy's
     * `handle()` or `handleAll()` method).
     * @name request
     * @instance
     * @type {Request}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * The event associated with this request.
     * @name event
     * @instance
     * @type {ExtendableEvent}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `URL` instance of `request.url` (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `url` param will be present if the strategy was invoked
     * from a workbox `Route` object.
     * @name url
     * @instance
     * @type {URL|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `param` value (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `param` param will be present if the strategy was invoked
     * from a workbox `Route` object and the
     * [match callback]{@link module:workbox-routing~matchCallback} returned
     * a truthy value (it will be that value).
     * @name params
     * @instance
     * @type {*|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    if (false) {}

    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__/* .Deferred */ .B();
    this._extendLifetimePromises = []; // Copy the plugins list (since it's mutable on the strategy),
    // so any mutations don't affect this handler instance.

    this._plugins = _toConsumableArray(strategy.plugins);
    this._pluginStateMap = new Map();

    var _iterator = _createForOfIteratorHelper(this._plugins),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var plugin = _step.value;

        this._pluginStateMap.set(plugin, {});
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */


  _createClass(StrategyHandler, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input) {
        var event, request, possiblePreloadResponse, originalRequest, _iterator2, _step2, cb, pluginFilteredRequest, fetchResponse, _iterator3, _step3, callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = this.event;
                request = toRequest(input);

                if (!(request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return event.preloadResponse;

              case 5:
                possiblePreloadResponse = _context.sent;

                if (!possiblePreloadResponse) {
                  _context.next = 9;
                  break;
                }

                if (false) {}

                return _context.abrupt("return", possiblePreloadResponse);

              case 9:
                // If there is a fetchDidFail plugin, we need to save a clone of the
                // original request before it's either modified by a requestWillFetch
                // plugin or before the original request's body is consumed via fetch().
                originalRequest = this.hasCallback('fetchDidFail') ? request.clone() : null;
                _context.prev = 10;
                _iterator2 = _createForOfIteratorHelper(this.iterateCallbacks('requestWillFetch'));
                _context.prev = 12;

                _iterator2.s();

              case 14:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 21;
                  break;
                }

                cb = _step2.value;
                _context.next = 18;
                return cb({
                  request: request.clone(),
                  event: event
                });

              case 18:
                request = _context.sent;

              case 19:
                _context.next = 14;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](12);

                _iterator2.e(_context.t0);

              case 26:
                _context.prev = 26;

                _iterator2.f();

                return _context.finish(26);

              case 29:
                _context.next = 35;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](10);

                if (!(_context.t1 instanceof Error)) {
                  _context.next = 35;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('plugin-error-request-will-fetch', {
                  thrownErrorMessage: _context.t1.message
                });

              case 35:
                // The request can be altered by plugins with `requestWillFetch` making
                // the original request (most likely from a `fetch` event) different
                // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
                pluginFilteredRequest = request.clone();
                _context.prev = 36;
                _context.next = 39;
                return fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);

              case 39:
                fetchResponse = _context.sent;

                if (false) {}

                _iterator3 = _createForOfIteratorHelper(this.iterateCallbacks('fetchDidSucceed'));
                _context.prev = 42;

                _iterator3.s();

              case 44:
                if ((_step3 = _iterator3.n()).done) {
                  _context.next = 51;
                  break;
                }

                callback = _step3.value;
                _context.next = 48;
                return callback({
                  event: event,
                  request: pluginFilteredRequest,
                  response: fetchResponse
                });

              case 48:
                fetchResponse = _context.sent;

              case 49:
                _context.next = 44;
                break;

              case 51:
                _context.next = 56;
                break;

              case 53:
                _context.prev = 53;
                _context.t2 = _context["catch"](42);

                _iterator3.e(_context.t2);

              case 56:
                _context.prev = 56;

                _iterator3.f();

                return _context.finish(56);

              case 59:
                return _context.abrupt("return", fetchResponse);

              case 62:
                _context.prev = 62;
                _context.t3 = _context["catch"](36);

                if (false) {} // `originalRequest` will only exist if a `fetchDidFail` callback
                // is being used (see above).


                if (!originalRequest) {
                  _context.next = 68;
                  break;
                }

                _context.next = 68;
                return this.runCallbacks('fetchDidFail', {
                  error: _context.t3,
                  event: event,
                  originalRequest: originalRequest.clone(),
                  request: pluginFilteredRequest.clone()
                });

              case 68:
                throw _context.t3;

              case 69:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 31], [12, 23, 26, 29], [36, 62], [42, 53, 56, 59]]);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    )
  }, {
    key: "fetchAndCachePut",
    value: function () {
      var _fetchAndCachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input) {
        var response, responseClone;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetch(input);

              case 2:
                response = _context2.sent;
                responseClone = response.clone();
                void this.waitUntil(this.cachePut(input, responseClone));
                return _context2.abrupt("return", response);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchAndCachePut(_x3) {
        return _fetchAndCachePut.apply(this, arguments);
      }

      return fetchAndCachePut;
    }()
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */

  }, {
    key: "cacheMatch",
    value: function () {
      var _cacheMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key) {
        var request, cachedResponse, _this$_strategy, cacheName, matchOptions, effectiveRequest, multiMatchOptions, _iterator4, _step4, callback;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                request = toRequest(key);
                _this$_strategy = this._strategy, cacheName = _this$_strategy.cacheName, matchOptions = _this$_strategy.matchOptions;
                _context3.next = 4;
                return this.getCacheKey(request, 'read');

              case 4:
                effectiveRequest = _context3.sent;
                multiMatchOptions = Object.assign(Object.assign({}, matchOptions), {
                  cacheName: cacheName
                });
                _context3.next = 8;
                return caches.match(effectiveRequest, multiMatchOptions);

              case 8:
                cachedResponse = _context3.sent;

                if (false) {}

                _iterator4 = _createForOfIteratorHelper(this.iterateCallbacks('cachedResponseWillBeUsed'));
                _context3.prev = 11;

                _iterator4.s();

              case 13:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 23;
                  break;
                }

                callback = _step4.value;
                _context3.next = 17;
                return callback({
                  cacheName: cacheName,
                  matchOptions: matchOptions,
                  cachedResponse: cachedResponse,
                  request: effectiveRequest,
                  event: this.event
                });

              case 17:
                _context3.t0 = _context3.sent;

                if (_context3.t0) {
                  _context3.next = 20;
                  break;
                }

                _context3.t0 = undefined;

              case 20:
                cachedResponse = _context3.t0;

              case 21:
                _context3.next = 13;
                break;

              case 23:
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](11);

                _iterator4.e(_context3.t1);

              case 28:
                _context3.prev = 28;

                _iterator4.f();

                return _context3.finish(28);

              case 31:
                return _context3.abrupt("return", cachedResponse);

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 25, 28, 31]]);
      }));

      function cacheMatch(_x4) {
        return _cacheMatch.apply(this, arguments);
      }

      return cacheMatch;
    }()
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */

  }, {
    key: "cachePut",
    value: function () {
      var _cachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, response) {
        var request, effectiveRequest, vary, responseToCache, _this$_strategy2, cacheName, matchOptions, cache, hasCacheUpdateCallback, oldResponse, _iterator5, _step5, callback;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                request = toRequest(key); // Run in the next task to avoid blocking other cache reads.
                // https://github.com/w3c/ServiceWorker/issues/1397

                _context4.next = 3;
                return (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__/* .timeout */ .V)(0);

              case 3:
                _context4.next = 5;
                return this.getCacheKey(request, 'write');

              case 5:
                effectiveRequest = _context4.sent;

                if (true) {
                  _context4.next = 11;
                  break;
                }

                if (!(effectiveRequest.method && effectiveRequest.method !== 'GET')) {
                  _context4.next = 9;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('attempt-to-cache-non-get-request', {
                  url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url),
                  method: effectiveRequest.method
                });

              case 9:
                // See https://github.com/GoogleChrome/workbox/issues/2818
                vary = response.headers.get('Vary');

                if (vary) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__/* .logger.debug */ .k.debug("The response for ".concat((0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url), " ") + "has a 'Vary: ".concat(vary, "' header. ") + "Consider setting the {ignoreVary: true} option on your strategy " + "to ensure cache matching and deletion works as expected.");
                }

              case 11:
                if (response) {
                  _context4.next = 14;
                  break;
                }

                if (false) {}

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('cache-put-with-no-response', {
                  url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url)
                });

              case 14:
                _context4.next = 16;
                return this._ensureResponseSafeToCache(response);

              case 16:
                responseToCache = _context4.sent;

                if (responseToCache) {
                  _context4.next = 20;
                  break;
                }

                if (false) {}

                return _context4.abrupt("return", false);

              case 20:
                _this$_strategy2 = this._strategy, cacheName = _this$_strategy2.cacheName, matchOptions = _this$_strategy2.matchOptions;
                _context4.next = 23;
                return self.caches.open(cacheName);

              case 23:
                cache = _context4.sent;
                hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');

                if (!hasCacheUpdateCallback) {
                  _context4.next = 31;
                  break;
                }

                _context4.next = 28;
                return (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__/* .cacheMatchIgnoreParams */ .F)( // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
                // feature. Consider into ways to only add this behavior if using
                // precaching.
                cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions);

              case 28:
                _context4.t0 = _context4.sent;
                _context4.next = 32;
                break;

              case 31:
                _context4.t0 = null;

              case 32:
                oldResponse = _context4.t0;

                if (false) {}

                _context4.prev = 34;
                _context4.next = 37;
                return cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);

              case 37:
                _context4.next = 46;
                break;

              case 39:
                _context4.prev = 39;
                _context4.t1 = _context4["catch"](34);

                if (!(_context4.t1 instanceof Error)) {
                  _context4.next = 46;
                  break;
                }

                if (!(_context4.t1.name === 'QuotaExceededError')) {
                  _context4.next = 45;
                  break;
                }

                _context4.next = 45;
                return (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__/* .executeQuotaErrorCallbacks */ .Y)();

              case 45:
                throw _context4.t1;

              case 46:
                _iterator5 = _createForOfIteratorHelper(this.iterateCallbacks('cacheDidUpdate'));
                _context4.prev = 47;

                _iterator5.s();

              case 49:
                if ((_step5 = _iterator5.n()).done) {
                  _context4.next = 55;
                  break;
                }

                callback = _step5.value;
                _context4.next = 53;
                return callback({
                  cacheName: cacheName,
                  oldResponse: oldResponse,
                  newResponse: responseToCache.clone(),
                  request: effectiveRequest,
                  event: this.event
                });

              case 53:
                _context4.next = 49;
                break;

              case 55:
                _context4.next = 60;
                break;

              case 57:
                _context4.prev = 57;
                _context4.t2 = _context4["catch"](47);

                _iterator5.e(_context4.t2);

              case 60:
                _context4.prev = 60;

                _iterator5.f();

                return _context4.finish(60);

              case 63:
                return _context4.abrupt("return", true);

              case 64:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[34, 39], [47, 57, 60, 63]]);
      }));

      function cachePut(_x5, _x6) {
        return _cachePut.apply(this, arguments);
      }

      return cachePut;
    }()
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */

  }, {
    key: "getCacheKey",
    value: function () {
      var _getCacheKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, mode) {
        var key, effectiveRequest, _iterator6, _step6, callback;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                key = "".concat(request.url, " | ").concat(mode);

                if (this._cacheKeys[key]) {
                  _context5.next = 24;
                  break;
                }

                effectiveRequest = request;
                _iterator6 = _createForOfIteratorHelper(this.iterateCallbacks('cacheKeyWillBeUsed'));
                _context5.prev = 4;

                _iterator6.s();

              case 6:
                if ((_step6 = _iterator6.n()).done) {
                  _context5.next = 15;
                  break;
                }

                callback = _step6.value;
                _context5.t0 = toRequest;
                _context5.next = 11;
                return callback({
                  mode: mode,
                  request: effectiveRequest,
                  event: this.event,
                  // params has a type any can't change right now.
                  params: this.params // eslint-disable-line

                });

              case 11:
                _context5.t1 = _context5.sent;
                effectiveRequest = (0, _context5.t0)(_context5.t1);

              case 13:
                _context5.next = 6;
                break;

              case 15:
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t2 = _context5["catch"](4);

                _iterator6.e(_context5.t2);

              case 20:
                _context5.prev = 20;

                _iterator6.f();

                return _context5.finish(20);

              case 23:
                this._cacheKeys[key] = effectiveRequest;

              case 24:
                return _context5.abrupt("return", this._cacheKeys[key]);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 17, 20, 23]]);
      }));

      function getCacheKey(_x7, _x8) {
        return _getCacheKey.apply(this, arguments);
      }

      return getCacheKey;
    }()
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */

  }, {
    key: "hasCallback",
    value: function hasCallback(name) {
      var _iterator7 = _createForOfIteratorHelper(this._strategy.plugins),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var plugin = _step7.value;

          if (name in plugin) {
            return true;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */

  }, {
    key: "runCallbacks",
    value: function () {
      var _runCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name, param) {
        var _iterator8, _step8, callback;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _iterator8 = _createForOfIteratorHelper(this.iterateCallbacks(name));
                _context6.prev = 1;

                _iterator8.s();

              case 3:
                if ((_step8 = _iterator8.n()).done) {
                  _context6.next = 9;
                  break;
                }

                callback = _step8.value;
                _context6.next = 7;
                return callback(param);

              case 7:
                _context6.next = 3;
                break;

              case 9:
                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);

                _iterator8.e(_context6.t0);

              case 14:
                _context6.prev = 14;

                _iterator8.f();

                return _context6.finish(14);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 11, 14, 17]]);
      }));

      function runCallbacks(_x9, _x10) {
        return _runCallbacks.apply(this, arguments);
      }

      return runCallbacks;
    }()
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */

  }, {
    key: "iterateCallbacks",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function iterateCallbacks(name) {
      var _this = this;

      var _iterator9, _step9, _loop;

      return regeneratorRuntime.wrap(function iterateCallbacks$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _iterator9 = _createForOfIteratorHelper(this._strategy.plugins);
              _context8.prev = 1;
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var plugin, state, statefulCallback;
                return regeneratorRuntime.wrap(function _loop$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        plugin = _step9.value;

                        if (!(typeof plugin[name] === 'function')) {
                          _context7.next = 6;
                          break;
                        }

                        state = _this._pluginStateMap.get(plugin);

                        statefulCallback = function statefulCallback(param) {
                          var statefulParam = Object.assign(Object.assign({}, param), {
                            state: state
                          }); // TODO(philipwalton): not sure why `any` is needed. It seems like
                          // this should work with `as WorkboxPluginCallbackParam[C]`.

                          return plugin[name](statefulParam);
                        };

                        _context7.next = 6;
                        return statefulCallback;

                      case 6:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _loop);
              });

              _iterator9.s();

            case 4:
              if ((_step9 = _iterator9.n()).done) {
                _context8.next = 8;
                break;
              }

              return _context8.delegateYield(_loop(), "t0", 6);

            case 6:
              _context8.next = 4;
              break;

            case 8:
              _context8.next = 13;
              break;

            case 10:
              _context8.prev = 10;
              _context8.t1 = _context8["catch"](1);

              _iterator9.e(_context8.t1);

            case 13:
              _context8.prev = 13;

              _iterator9.f();

              return _context8.finish(13);

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, iterateCallbacks, this, [[1, 10, 13, 16]]);
    })
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */

  }, {
    key: "waitUntil",
    value: function waitUntil(promise) {
      this._extendLifetimePromises.push(promise);

      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */

  }, {
    key: "doneWaiting",
    value: function () {
      var _doneWaiting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var promise;
        return regeneratorRuntime.wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(promise = this._extendLifetimePromises.shift())) {
                  _context9.next = 5;
                  break;
                }

                _context9.next = 3;
                return promise;

              case 3:
                _context9.next = 0;
                break;

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, this);
      }));

      function doneWaiting() {
        return _doneWaiting.apply(this, arguments);
      }

      return doneWaiting;
    }()
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */

  }, {
    key: "_ensureResponseSafeToCache",
    value: function () {
      var _ensureResponseSafeToCache2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(response) {
        var responseToCache, pluginsUsed, _iterator10, _step10, callback;

        return regeneratorRuntime.wrap(function _callee8$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                responseToCache = response;
                pluginsUsed = false;
                _iterator10 = _createForOfIteratorHelper(this.iterateCallbacks('cacheWillUpdate'));
                _context10.prev = 3;

                _iterator10.s();

              case 5:
                if ((_step10 = _iterator10.n()).done) {
                  _context10.next = 18;
                  break;
                }

                callback = _step10.value;
                _context10.next = 9;
                return callback({
                  request: this.request,
                  response: responseToCache,
                  event: this.event
                });

              case 9:
                _context10.t0 = _context10.sent;

                if (_context10.t0) {
                  _context10.next = 12;
                  break;
                }

                _context10.t0 = undefined;

              case 12:
                responseToCache = _context10.t0;
                pluginsUsed = true;

                if (responseToCache) {
                  _context10.next = 16;
                  break;
                }

                return _context10.abrupt("break", 18);

              case 16:
                _context10.next = 5;
                break;

              case 18:
                _context10.next = 23;
                break;

              case 20:
                _context10.prev = 20;
                _context10.t1 = _context10["catch"](3);

                _iterator10.e(_context10.t1);

              case 23:
                _context10.prev = 23;

                _iterator10.f();

                return _context10.finish(23);

              case 26:
                if (!pluginsUsed) {
                  if (responseToCache && responseToCache.status !== 200) {
                    responseToCache = undefined;
                  }

                  if (false) {}
                }

                return _context10.abrupt("return", responseToCache);

              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this, [[3, 20, 23, 26]]);
      }));

      function _ensureResponseSafeToCache(_x11) {
        return _ensureResponseSafeToCache2.apply(this, arguments);
      }

      return _ensureResponseSafeToCache;
    }()
  }]);

  return StrategyHandler;
}();



/***/ }),

/***/ 264:
/***/ (() => {

 // @ts-ignore

try {
  self['workbox:strategies:6.4.0'] && _();
} catch (e) {}

/***/ }),

/***/ 876:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PrecacheController": () => (/* reexport */ PrecacheController),
  "PrecacheFallbackPlugin": () => (/* reexport */ PrecacheFallbackPlugin),
  "PrecacheRoute": () => (/* reexport */ PrecacheRoute),
  "PrecacheStrategy": () => (/* reexport */ PrecacheStrategy),
  "addPlugins": () => (/* reexport */ addPlugins),
  "addRoute": () => (/* reexport */ addRoute),
  "cleanupOutdatedCaches": () => (/* reexport */ cleanupOutdatedCaches),
  "createHandlerBoundToURL": () => (/* reexport */ createHandlerBoundToURL),
  "getCacheKeyForURL": () => (/* reexport */ getCacheKeyForURL),
  "matchPrecache": () => (/* reexport */ matchPrecache),
  "precache": () => (/* reexport */ precache),
  "precacheAndRoute": () => (/* reexport */ precacheAndRoute)
});

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__(511);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheNames.js
var cacheNames = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var _private_logger = __webpack_require__(833);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__(609);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/waitUntil.js
var waitUntil = __webpack_require__(851);
// EXTERNAL MODULE: ./node_modules/workbox-precaching/_version.js
var _version = __webpack_require__(416);
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/createCacheKey.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

 // Name of the search parameter used to store revision info.

var REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */

function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError/* WorkboxError */.V('add-to-cache-list-unexpected-type', {
      entry: entry
    });
  } // If a precache manifest entry is a string, it's assumed to be a versioned
  // URL, like '/app.abcd1234.js'. Return as-is.


  if (typeof entry === 'string') {
    var urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }

  var revision = entry.revision,
      url = entry.url;

  if (!url) {
    throw new WorkboxError/* WorkboxError */.V('add-to-cache-list-unexpected-type', {
      entry: entry
    });
  } // If there's just a URL and no revision, then it's also assumed to be a
  // versioned URL.


  if (!revision) {
    var _urlObject = new URL(url, location.href);

    return {
      cacheKey: _urlObject.href,
      url: _urlObject.href
    };
  } // Otherwise, construct a properly versioned URL using the custom Workbox
  // search parameter along with the revision info.


  var cacheKeyURL = new URL(url, location.href);
  var originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */

var PrecacheInstallReportPlugin = function PrecacheInstallReportPlugin() {
  var _this = this;

  _classCallCheck(this, PrecacheInstallReportPlugin);

  this.updatedURLs = [];
  this.notUpdatedURLs = [];

  this.handlerWillStart = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var request, state;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request, state = _ref.state;

              // TODO: `state` should never be undefined...
              if (state) {
                state.originalRequest = request;
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.cachedResponseWillBeUsed = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
      var event, state, cachedResponse, url;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event = _ref3.event, state = _ref3.state, cachedResponse = _ref3.cachedResponse;

              if (event.type === 'install') {
                if (state && state.originalRequest && state.originalRequest instanceof Request) {
                  // TODO: `state` should never be undefined...
                  url = state.originalRequest.url;

                  if (cachedResponse) {
                    _this.notUpdatedURLs.push(url);
                  } else {
                    _this.updatedURLs.push(url);
                  }
                }
              }

              return _context2.abrupt("return", cachedResponse);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
};


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
function PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheCacheKeyPlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheCacheKeyPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */

var PrecacheCacheKeyPlugin = function PrecacheCacheKeyPlugin(_ref) {
  var _this = this;

  var precacheController = _ref.precacheController;

  PrecacheCacheKeyPlugin_classCallCheck(this, PrecacheCacheKeyPlugin);

  this.cacheKeyWillBeUsed = /*#__PURE__*/function () {
    var _ref3 = PrecacheCacheKeyPlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var request, params, cacheKey;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref2.request, params = _ref2.params;
              // Params is type any, can't change right now.

              /* eslint-disable */
              cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || _this._precacheController.getCacheKeyForURL(request.url);
              /* eslint-enable */

              return _context.abrupt("return", cacheKey ? new Request(cacheKey, {
                headers: request.headers
              }) : request);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  this._precacheController = precacheController;
};


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printCleanupDetails.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */

var logGroup = function logGroup(groupTitle, deletedURLs) {
  logger.groupCollapsed(groupTitle);

  var _iterator = _createForOfIteratorHelper(deletedURLs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var url = _step.value;
      logger.log(url);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */


function printCleanupDetails(deletedURLs) {
  var deletionCount = deletedURLs.length;

  if (deletionCount > 0) {
    logger.groupCollapsed("During precaching cleanup, " + "".concat(deletionCount, " cached ") + "request".concat(deletionCount === 1 ? ' was' : 's were', " deleted."));
    logGroup('Deleted Cache Requests', deletedURLs);
    logger.groupEnd();
  }
}
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printInstallDetails.js
function printInstallDetails_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = printInstallDetails_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function printInstallDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return printInstallDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return printInstallDetails_arrayLikeToArray(o, minLen); }

function printInstallDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */

function _nestedGroup(groupTitle, urls) {
  if (urls.length === 0) {
    return;
  }

  logger.groupCollapsed(groupTitle);

  var _iterator = printInstallDetails_createForOfIteratorHelper(urls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var url = _step.value;
      logger.log(url);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */


function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
  var precachedCount = urlsToPrecache.length;
  var alreadyPrecachedCount = urlsAlreadyPrecached.length;

  if (precachedCount || alreadyPrecachedCount) {
    var message = "Precaching ".concat(precachedCount, " file").concat(precachedCount === 1 ? '' : 's', ".");

    if (alreadyPrecachedCount > 0) {
      message += " ".concat(alreadyPrecachedCount, " ") + "file".concat(alreadyPrecachedCount === 1 ? ' is' : 's are', " already cached.");
    }

    logger.groupCollapsed(message);

    _nestedGroup("View newly precached URLs.", urlsToPrecache);

    _nestedGroup("View previously precached URLs.", urlsAlreadyPrecached);

    logger.groupEnd();
  }
}
// EXTERNAL MODULE: ./node_modules/workbox-core/copyResponse.js
var copyResponse = __webpack_require__(327);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__(257);
// EXTERNAL MODULE: ./node_modules/workbox-strategies/Strategy.js
var Strategy = __webpack_require__(466);
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheStrategy.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || PrecacheStrategy_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PrecacheStrategy_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheStrategy_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PrecacheStrategy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheStrategy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheStrategy_arrayLikeToArray(o, minLen); }

function PrecacheStrategy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheStrategy_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheStrategy_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */

var PrecacheStrategy = /*#__PURE__*/function (_Strategy) {
  _inherits(PrecacheStrategy, _Strategy);

  var _super = _createSuper(PrecacheStrategy);

  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  function PrecacheStrategy() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    PrecacheStrategy_classCallCheck(this, PrecacheStrategy);

    options.cacheName = cacheNames/* cacheNames.getPrecacheName */.x.getPrecacheName(options.cacheName);
    _this = _super.call(this, options);
    _this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true; // Redirected responses cannot be used to satisfy a navigation request, so
    // any redirected response must be "copied" rather than cloned, so the new
    // response doesn't contain the `redirected` flag. See:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1

    _this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  _createClass(PrecacheStrategy, [{
    key: "_handle",
    value: function () {
      var _handle2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handler.cacheMatch(request);

              case 2:
                response = _context.sent;

                if (!response) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", response);

              case 5:
                if (!(handler.event && handler.event.type === 'install')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return this._handleInstall(request, handler);

              case 8:
                return _context.abrupt("return", _context.sent);

              case 9:
                _context.next = 11;
                return this._handleFetch(request, handler);

              case 11:
                return _context.abrupt("return", _context.sent);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }, {
    key: "_handleFetch",
    value: function () {
      var _handleFetch2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, handler) {
        var response, params, integrityInManifest, integrityInRequest, noIntegrityConflict, wasCached, cacheKey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = handler.params || {}; // Fall back to the network if we're configured to do so.

                if (!this._fallbackToNetwork) {
                  _context2.next = 17;
                  break;
                }

                if (false) {}

                integrityInManifest = params.integrity;
                integrityInRequest = request.integrity;
                noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
                _context2.next = 8;
                return handler.fetch(new Request(request, {
                  integrity: integrityInRequest || integrityInManifest
                }));

              case 8:
                response = _context2.sent;

                if (!(integrityInManifest && noIntegrityConflict)) {
                  _context2.next = 15;
                  break;
                }

                this._useDefaultCacheabilityPluginIfNeeded();

                _context2.next = 13;
                return handler.cachePut(request, response.clone());

              case 13:
                wasCached = _context2.sent;

                if (false) {}

              case 15:
                _context2.next = 18;
                break;

              case 17:
                throw new WorkboxError/* WorkboxError */.V('missing-precache-entry', {
                  cacheName: this.cacheName,
                  url: request.url
                });

              case 18:
                if (true) {
                  _context2.next = 34;
                  break;
                }

                _context2.t0 = params.cacheKey;

                if (_context2.t0) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 23;
                return handler.getCacheKey(request, 'read');

              case 23:
                _context2.t0 = _context2.sent;

              case 24:
                cacheKey = _context2.t0;
                // Workbox is going to handle the route.
                // print the routing details to the console.
                _private_logger/* logger.groupCollapsed */.k.groupCollapsed("Precaching is responding to: " + (0,getFriendlyURL/* getFriendlyURL */.C)(request.url));
                _private_logger/* logger.log */.k.log("Serving the precached url: ".concat((0,getFriendlyURL/* getFriendlyURL */.C)(cacheKey instanceof Request ? cacheKey.url : cacheKey)));
                _private_logger/* logger.groupCollapsed */.k.groupCollapsed("View request details here.");
                _private_logger/* logger.log */.k.log(request);
                _private_logger/* logger.groupEnd */.k.groupEnd();
                _private_logger/* logger.groupCollapsed */.k.groupCollapsed("View response details here.");
                _private_logger/* logger.log */.k.log(response);
                _private_logger/* logger.groupEnd */.k.groupEnd();
                _private_logger/* logger.groupEnd */.k.groupEnd();

              case 34:
                return _context2.abrupt("return", response);

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handleFetch(_x3, _x4) {
        return _handleFetch2.apply(this, arguments);
      }

      return _handleFetch;
    }()
  }, {
    key: "_handleInstall",
    value: function () {
      var _handleInstall2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, handler) {
        var response, wasCached;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._useDefaultCacheabilityPluginIfNeeded();

                _context3.next = 3;
                return handler.fetch(request);

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return handler.cachePut(request, response.clone());

              case 6:
                wasCached = _context3.sent;

                if (wasCached) {
                  _context3.next = 9;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('bad-precaching-response', {
                  url: request.url,
                  status: response.status
                });

              case 9:
                return _context3.abrupt("return", response);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _handleInstall(_x5, _x6) {
        return _handleInstall2.apply(this, arguments);
      }

      return _handleInstall;
    }()
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */

  }, {
    key: "_useDefaultCacheabilityPluginIfNeeded",
    value: function _useDefaultCacheabilityPluginIfNeeded() {
      var defaultPluginIndex = null;
      var cacheWillUpdatePluginCount = 0;

      var _iterator = PrecacheStrategy_createForOfIteratorHelper(this.plugins.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              plugin = _step$value[1];

          // Ignore the copy redirected plugin when determining what to do.
          if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
            continue;
          } // Save the default plugin's index, in case it needs to be removed.


          if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
            defaultPluginIndex = index;
          }

          if (plugin.cacheWillUpdate) {
            cacheWillUpdatePluginCount++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (cacheWillUpdatePluginCount === 0) {
        this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
      } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
        // Only remove the default plugin; multiple custom plugins are allowed.
        this.plugins.splice(defaultPluginIndex, 1);
      } // Nothing needs to be done if cacheWillUpdatePluginCount is 1

    }
  }]);

  return PrecacheStrategy;
}(Strategy/* Strategy */._);

PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  cacheWillUpdate: function cacheWillUpdate(_ref) {
    return PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              response = _ref.response;

              if (!(!response || response.status >= 400)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", null);

            case 3:
              return _context4.abrupt("return", response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  cacheWillUpdate: function cacheWillUpdate(_ref2) {
    return PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var response;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              response = _ref2.response;

              if (!response.redirected) {
                _context5.next = 7;
                break;
              }

              _context5.next = 4;
              return (0,copyResponse/* copyResponse */.S)(response);

            case 4:
              _context5.t0 = _context5.sent;
              _context5.next = 8;
              break;

            case 7:
              _context5.t0 = response;

            case 8:
              return _context5.abrupt("return", _context5.t0);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};

;// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheController.js
function PrecacheController_slicedToArray(arr, i) { return PrecacheController_arrayWithHoles(arr) || PrecacheController_iterableToArrayLimit(arr, i) || PrecacheController_unsupportedIterableToArray(arr, i) || PrecacheController_nonIterableRest(); }

function PrecacheController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PrecacheController_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PrecacheController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheController_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheController_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheController_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || PrecacheController_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PrecacheController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheController_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PrecacheController_arrayLikeToArray(arr); }

function PrecacheController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrecacheController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PrecacheController_createClass(Constructor, protoProps, staticProps) { if (protoProps) PrecacheController_defineProperties(Constructor.prototype, protoProps); if (staticProps) PrecacheController_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */

var PrecacheController = /*#__PURE__*/function () {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  function PrecacheController() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cacheName = _ref.cacheName,
        _ref$plugins = _ref.plugins,
        plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
        _ref$fallbackToNetwor = _ref.fallbackToNetwork,
        fallbackToNetwork = _ref$fallbackToNetwor === void 0 ? true : _ref$fallbackToNetwor;

    PrecacheController_classCallCheck(this, PrecacheController);

    this._urlsToCacheKeys = new Map();
    this._urlsToCacheModes = new Map();
    this._cacheKeysToIntegrities = new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames/* cacheNames.getPrecacheName */.x.getPrecacheName(cacheName),
      plugins: [].concat(_toConsumableArray(plugins), [new PrecacheCacheKeyPlugin({
        precacheController: this
      })]),
      fallbackToNetwork: fallbackToNetwork
    }); // Bind the install and activate methods to the instance.

    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */


  PrecacheController_createClass(PrecacheController, [{
    key: "strategy",
    get: function get() {
      return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */

  }, {
    key: "precache",
    value: function precache(entries) {
      this.addToCacheList(entries);

      if (!this._installAndActiveListenersAdded) {
        self.addEventListener('install', this.install);
        self.addEventListener('activate', this.activate);
        this._installAndActiveListenersAdded = true;
      }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */

  }, {
    key: "addToCacheList",
    value: function addToCacheList(entries) {
      if (false) {}

      var urlsToWarnAbout = [];

      var _iterator = PrecacheController_createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          // See https://github.com/GoogleChrome/workbox/issues/2259
          if (typeof entry === 'string') {
            urlsToWarnAbout.push(entry);
          } else if (entry && entry.revision === undefined) {
            urlsToWarnAbout.push(entry.url);
          }

          var _createCacheKey = createCacheKey(entry),
              cacheKey = _createCacheKey.cacheKey,
              url = _createCacheKey.url;

          var cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';

          if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
            throw new WorkboxError/* WorkboxError */.V('add-to-cache-list-conflicting-entries', {
              firstEntry: this._urlsToCacheKeys.get(url),
              secondEntry: cacheKey
            });
          }

          if (typeof entry !== 'string' && entry.integrity) {
            if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
              throw new WorkboxError/* WorkboxError */.V('add-to-cache-list-conflicting-integrities', {
                url: url
              });
            }

            this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
          }

          this._urlsToCacheKeys.set(url, cacheKey);

          this._urlsToCacheModes.set(url, cacheMode);

          if (urlsToWarnAbout.length > 0) {
            var warningMessage = "Workbox is precaching URLs without revision " + "info: ".concat(urlsToWarnAbout.join(', '), "\nThis is generally NOT safe. ") + "Learn more at https://bit.ly/wb-precache";

            if (true) {
              // Use console directly to display this warning without bloating
              // bundle sizes by pulling in all of the logger codebase in prod.
              console.warn(warningMessage);
            } else {}
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */

  }, {
    key: "install",
    value: function install(event) {
      var _this = this;

      // waitUntil returns Promise<any>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return (0,waitUntil/* waitUntil */.A)(event, /*#__PURE__*/PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var installReportPlugin, _iterator2, _step2, _step2$value, url, cacheKey, integrity, cacheMode, request, updatedURLs, notUpdatedURLs;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                installReportPlugin = new PrecacheInstallReportPlugin();

                _this.strategy.plugins.push(installReportPlugin); // Cache entries one at a time.
                // See https://github.com/GoogleChrome/workbox/issues/2528


                _iterator2 = PrecacheController_createForOfIteratorHelper(_this._urlsToCacheKeys);
                _context.prev = 3;

                _iterator2.s();

              case 5:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 14;
                  break;
                }

                _step2$value = PrecacheController_slicedToArray(_step2.value, 2), url = _step2$value[0], cacheKey = _step2$value[1];
                integrity = _this._cacheKeysToIntegrities.get(cacheKey);
                cacheMode = _this._urlsToCacheModes.get(url);
                request = new Request(url, {
                  integrity: integrity,
                  cache: cacheMode,
                  credentials: 'same-origin'
                });
                _context.next = 12;
                return Promise.all(_this.strategy.handleAll({
                  params: {
                    cacheKey: cacheKey
                  },
                  request: request,
                  event: event
                }));

              case 12:
                _context.next = 5;
                break;

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](3);

                _iterator2.e(_context.t0);

              case 19:
                _context.prev = 19;

                _iterator2.f();

                return _context.finish(19);

              case 22:
                updatedURLs = installReportPlugin.updatedURLs, notUpdatedURLs = installReportPlugin.notUpdatedURLs;

                if (false) {}

                return _context.abrupt("return", {
                  updatedURLs: updatedURLs,
                  notUpdatedURLs: notUpdatedURLs
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 16, 19, 22]]);
      })));
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */

  }, {
    key: "activate",
    value: function activate(event) {
      var _this2 = this;

      // waitUntil returns Promise<any>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return (0,waitUntil/* waitUntil */.A)(event, /*#__PURE__*/PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var cache, currentlyCachedRequests, expectedCacheKeys, deletedURLs, _iterator3, _step3, request;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return self.caches.open(_this2.strategy.cacheName);

              case 2:
                cache = _context2.sent;
                _context2.next = 5;
                return cache.keys();

              case 5:
                currentlyCachedRequests = _context2.sent;
                expectedCacheKeys = new Set(_this2._urlsToCacheKeys.values());
                deletedURLs = [];
                _iterator3 = PrecacheController_createForOfIteratorHelper(currentlyCachedRequests);
                _context2.prev = 9;

                _iterator3.s();

              case 11:
                if ((_step3 = _iterator3.n()).done) {
                  _context2.next = 19;
                  break;
                }

                request = _step3.value;

                if (expectedCacheKeys.has(request.url)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 16;
                return cache["delete"](request);

              case 16:
                deletedURLs.push(request.url);

              case 17:
                _context2.next = 11;
                break;

              case 19:
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](9);

                _iterator3.e(_context2.t0);

              case 24:
                _context2.prev = 24;

                _iterator3.f();

                return _context2.finish(24);

              case 27:
                if (false) {}

                return _context2.abrupt("return", {
                  deletedURLs: deletedURLs
                });

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 21, 24, 27]]);
      })));
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */

  }, {
    key: "getURLsToCacheKeys",
    value: function getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */

  }, {
    key: "getCachedURLs",
    value: function getCachedURLs() {
      return _toConsumableArray(this._urlsToCacheKeys.keys());
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */

  }, {
    key: "getCacheKeyForURL",
    value: function getCacheKeyForURL(url) {
      var urlObject = new URL(url, location.href);
      return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */

  }, {
    key: "getIntegrityForCacheKey",
    value: function getIntegrityForCacheKey(cacheKey) {
      return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */

  }, {
    key: "matchPrecache",
    value: function () {
      var _matchPrecache = PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request) {
        var url, cacheKey, cache;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = request instanceof Request ? request.url : request;
                cacheKey = this.getCacheKeyForURL(url);

                if (!cacheKey) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 5;
                return self.caches.open(this.strategy.cacheName);

              case 5:
                cache = _context3.sent;
                return _context3.abrupt("return", cache.match(cacheKey));

              case 7:
                return _context3.abrupt("return", undefined);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function matchPrecache(_x) {
        return _matchPrecache.apply(this, arguments);
      }

      return matchPrecache;
    }()
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */

  }, {
    key: "createHandlerBoundToURL",
    value: function createHandlerBoundToURL(url) {
      var _this3 = this;

      var cacheKey = this.getCacheKeyForURL(url);

      if (!cacheKey) {
        throw new WorkboxError/* WorkboxError */.V('non-precached-url', {
          url: url
        });
      }

      return function (options) {
        options.request = new Request(url);
        options.params = Object.assign({
          cacheKey: cacheKey
        }, options.params);
        return _this3.strategy.handle(options);
      };
    }
  }]);

  return PrecacheController;
}();


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var precacheController;
/**
 * @return {PrecacheController}
 * @private
 */

var getOrCreatePrecacheController = function getOrCreatePrecacheController() {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }

  return precacheController;
};
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/addPlugins.js
function addPlugins_toConsumableArray(arr) { return addPlugins_arrayWithoutHoles(arr) || addPlugins_iterableToArray(arr) || addPlugins_unsupportedIterableToArray(arr) || addPlugins_nonIterableSpread(); }

function addPlugins_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function addPlugins_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return addPlugins_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return addPlugins_arrayLikeToArray(o, minLen); }

function addPlugins_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function addPlugins_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return addPlugins_arrayLikeToArray(arr); }

function addPlugins_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */

function addPlugins(plugins) {
  var _precacheController$s;

  var precacheController = getOrCreatePrecacheController();

  (_precacheController$s = precacheController.strategy.plugins).push.apply(_precacheController$s, addPlugins_toConsumableArray(plugins));
}


// EXTERNAL MODULE: ./node_modules/workbox-routing/registerRoute.js
var registerRoute = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/workbox-routing/Route.js
var Route = __webpack_require__(993);
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
function removeIgnoredSearchParams_toConsumableArray(arr) { return removeIgnoredSearchParams_arrayWithoutHoles(arr) || removeIgnoredSearchParams_iterableToArray(arr) || removeIgnoredSearchParams_unsupportedIterableToArray(arr) || removeIgnoredSearchParams_nonIterableSpread(); }

function removeIgnoredSearchParams_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function removeIgnoredSearchParams_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return removeIgnoredSearchParams_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return removeIgnoredSearchParams_arrayLikeToArray(o, minLen); }

function removeIgnoredSearchParams_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function removeIgnoredSearchParams_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return removeIgnoredSearchParams_arrayLikeToArray(arr); }

function removeIgnoredSearchParams_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */

function removeIgnoredSearchParams(urlObject) {
  var ignoreURLParametersMatching = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _loop = function _loop() {
    var paramName = _arr[_i];

    if (ignoreURLParametersMatching.some(function (regExp) {
      return regExp.test(paramName);
    })) {
      urlObject.searchParams["delete"](paramName);
    }
  };

  // Convert the iterable into an array at the start of the loop to make sure
  // deletion doesn't mess up iteration.
  for (var _i = 0, _arr = removeIgnoredSearchParams_toConsumableArray(urlObject.searchParams.keys()); _i < _arr.length; _i++) {
    _loop();
  }

  return urlObject;
}
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/generateURLVariations.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateURLVariations);

function generateURLVariations_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = generateURLVariations_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function generateURLVariations_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generateURLVariations_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateURLVariations_arrayLikeToArray(o, minLen); }

function generateURLVariations_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */

function generateURLVariations(url) {
  var _ref,
      _ref$ignoreURLParamet,
      ignoreURLParametersMatching,
      _ref$directoryIndex,
      directoryIndex,
      _ref$cleanURLs,
      cleanURLs,
      urlManipulation,
      urlObject,
      urlWithoutIgnoredParams,
      directoryURL,
      cleanURL,
      additionalURLs,
      _iterator,
      _step,
      urlToAttempt,
      _args = arguments;

  return regeneratorRuntime.wrap(function generateURLVariations$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$ignoreURLParamet = _ref.ignoreURLParametersMatching, ignoreURLParametersMatching = _ref$ignoreURLParamet === void 0 ? [/^utm_/, /^fbclid$/] : _ref$ignoreURLParamet, _ref$directoryIndex = _ref.directoryIndex, directoryIndex = _ref$directoryIndex === void 0 ? 'index.html' : _ref$directoryIndex, _ref$cleanURLs = _ref.cleanURLs, cleanURLs = _ref$cleanURLs === void 0 ? true : _ref$cleanURLs, urlManipulation = _ref.urlManipulation;
          urlObject = new URL(url, location.href);
          urlObject.hash = '';
          _context.next = 5;
          return urlObject.href;

        case 5:
          urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
          _context.next = 8;
          return urlWithoutIgnoredParams.href;

        case 8:
          if (!(directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/'))) {
            _context.next = 13;
            break;
          }

          directoryURL = new URL(urlWithoutIgnoredParams.href);
          directoryURL.pathname += directoryIndex;
          _context.next = 13;
          return directoryURL.href;

        case 13:
          if (!cleanURLs) {
            _context.next = 18;
            break;
          }

          cleanURL = new URL(urlWithoutIgnoredParams.href);
          cleanURL.pathname += '.html';
          _context.next = 18;
          return cleanURL.href;

        case 18:
          if (!urlManipulation) {
            _context.next = 37;
            break;
          }

          additionalURLs = urlManipulation({
            url: urlObject
          });
          _iterator = generateURLVariations_createForOfIteratorHelper(additionalURLs);
          _context.prev = 21;

          _iterator.s();

        case 23:
          if ((_step = _iterator.n()).done) {
            _context.next = 29;
            break;
          }

          urlToAttempt = _step.value;
          _context.next = 27;
          return urlToAttempt.href;

        case 27:
          _context.next = 23;
          break;

        case 29:
          _context.next = 34;
          break;

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](21);

          _iterator.e(_context.t0);

        case 34:
          _context.prev = 34;

          _iterator.f();

          return _context.finish(34);

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[21, 31, 34, 37]]);
}
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheRoute.js
function PrecacheRoute_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PrecacheRoute_typeof = function _typeof(obj) { return typeof obj; }; } else { PrecacheRoute_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PrecacheRoute_typeof(obj); }

function PrecacheRoute_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheRoute_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PrecacheRoute_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheRoute_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheRoute_arrayLikeToArray(o, minLen); }

function PrecacheRoute_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheRoute_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrecacheRoute_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PrecacheRoute_setPrototypeOf(subClass, superClass); }

function PrecacheRoute_setPrototypeOf(o, p) { PrecacheRoute_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PrecacheRoute_setPrototypeOf(o, p); }

function PrecacheRoute_createSuper(Derived) { var hasNativeReflectConstruct = PrecacheRoute_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PrecacheRoute_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PrecacheRoute_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PrecacheRoute_possibleConstructorReturn(this, result); }; }

function PrecacheRoute_possibleConstructorReturn(self, call) { if (call && (PrecacheRoute_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PrecacheRoute_assertThisInitialized(self); }

function PrecacheRoute_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PrecacheRoute_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PrecacheRoute_getPrototypeOf(o) { PrecacheRoute_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PrecacheRoute_getPrototypeOf(o); }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */

var PrecacheRoute = /*#__PURE__*/function (_Route) {
  PrecacheRoute_inherits(PrecacheRoute, _Route);

  var _super = PrecacheRoute_createSuper(PrecacheRoute);

  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  function PrecacheRoute(precacheController, options) {
    PrecacheRoute_classCallCheck(this, PrecacheRoute);

    var match = function match(_ref) {
      var request = _ref.request;
      var urlsToCacheKeys = precacheController.getURLsToCacheKeys();

      var _iterator = PrecacheRoute_createForOfIteratorHelper(generateURLVariations(request.url, options)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var possibleURL = _step.value;
          var cacheKey = urlsToCacheKeys.get(possibleURL);

          if (cacheKey) {
            var integrity = precacheController.getIntegrityForCacheKey(cacheKey);
            return {
              cacheKey: cacheKey,
              integrity: integrity
            };
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (false) {}

      return;
    };

    return _super.call(this, match, precacheController.strategy);
  }

  return PrecacheRoute;
}(Route/* Route */.A);


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/addRoute.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */

function addRoute(options) {
  var precacheController = getOrCreatePrecacheController();
  var precacheRoute = new PrecacheRoute(precacheController, options);
  (0,registerRoute/* registerRoute */.X)(precacheRoute);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js
function deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function deleteOutdatedCaches_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */

var deleteOutdatedCaches = /*#__PURE__*/function () {
  var _ref = deleteOutdatedCaches_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPrecacheName) {
    var substringToFind,
        cacheNames,
        cacheNamesToDelete,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            substringToFind = _args.length > 1 && _args[1] !== undefined ? _args[1] : SUBSTRING_TO_FIND;
            _context.next = 3;
            return self.caches.keys();

          case 3:
            cacheNames = _context.sent;
            cacheNamesToDelete = cacheNames.filter(function (cacheName) {
              return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
            });
            _context.next = 7;
            return Promise.all(cacheNamesToDelete.map(function (cacheName) {
              return self.caches["delete"](cacheName);
            }));

          case 7:
            return _context.abrupt("return", cacheNamesToDelete);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteOutdatedCaches(_x) {
    return _ref.apply(this, arguments);
  };
}();


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/cleanupOutdatedCaches.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */

function cleanupOutdatedCaches() {
  // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
  self.addEventListener('activate', function (event) {
    var cacheName = cacheNames/* cacheNames.getPrecacheName */.x.getPrecacheName();
    event.waitUntil(deleteOutdatedCaches(cacheName).then(function (cachesDeleted) {
      if (false) {}
    }));
  });
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandlerBoundToURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */

function createHandlerBoundToURL(url) {
  var precacheController = getOrCreatePrecacheController();
  return precacheController.createHandlerBoundToURL(url);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/getCacheKeyForURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */

function getCacheKeyForURL(url) {
  var precacheController = getOrCreatePrecacheController();
  return precacheController.getCacheKeyForURL(url);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/matchPrecache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */

function matchPrecache(request) {
  var precacheController = getOrCreatePrecacheController();
  return precacheController.matchPrecache(request);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/precache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */

function precache(entries) {
  var precacheController = getOrCreatePrecacheController();
  precacheController.precache(entries);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/precacheAndRoute.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */

function precacheAndRoute(entries, options) {
  precache(entries);
  addRoute(options);
}


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js
function PrecacheFallbackPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */

var PrecacheFallbackPlugin =
/**
 * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
 *
 * @param {Object} config
 * @param {string} config.fallbackURL A precached URL to use as the fallback
 *     if the associated strategy can't generate a response.
 * @param {PrecacheController} [config.precacheController] An optional
 *     PrecacheController instance. If not provided, the default
 *     PrecacheController will be used.
 */
function PrecacheFallbackPlugin(_ref) {
  var _this = this;

  var fallbackURL = _ref.fallbackURL,
      precacheController = _ref.precacheController;

  PrecacheFallbackPlugin_classCallCheck(this, PrecacheFallbackPlugin);

  /**
   * @return {Promise<Response>} The precache response for the fallback URL.
   *
   * @private
   */
  this.handlerDidError = function () {
    return _this._precacheController.matchPrecache(_this._fallbackURL);
  };

  this._fallbackURL = fallbackURL;
  this._precacheController = precacheController || getOrCreatePrecacheController();
};


;// CONCATENATED MODULE: ./node_modules/workbox-precaching/_types.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
 // * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.

/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof module:workbox-precaching
 */

/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof module:workbox-precaching
 */

/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof module:workbox-precaching
 */

/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof module:workbox-precaching
 */
;// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */



;// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.mjs


/***/ })

};