(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["imath"] = factory();
	else
		root["imath"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack://imath/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/algebra/formula.js":
/*!********************************!*\
  !*** ./src/algebra/formula.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Formula = exports.Formula = function () {\n    function Formula(info) {\n        _classCallCheck(this, Formula);\n\n        this.func = info[info.length - 1];\n        this.variables = info.slice(0, info.length - 1);\n    }\n\n    _createClass(Formula, [{\n        key: \"calc\",\n        value: function calc(variablesObject) {\n            var args = this.variables.map(function (variable) {\n                return variablesObject[variable];\n            });\n            return this.func.apply(this, _toConsumableArray(args));\n        }\n    }]);\n\n    return Formula;\n}();\n\n//# sourceURL=webpack://imath/./src/algebra/formula.js?");

/***/ }),

/***/ "./src/algebra/index.js":
/*!******************************!*\
  !*** ./src/algebra/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _matrix = __webpack_require__(/*! ./matrix */ \"./src/algebra/matrix.js\");\n\nObject.keys(_matrix).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _matrix[key];\n    }\n  });\n});\n\nvar _formula = __webpack_require__(/*! ./formula */ \"./src/algebra/formula.js\");\n\nObject.keys(_formula).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _formula[key];\n    }\n  });\n});\n\n//# sourceURL=webpack://imath/./src/algebra/index.js?");

/***/ }),

/***/ "./src/algebra/matrix.js":
/*!*******************************!*\
  !*** ./src/algebra/matrix.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Matrix = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _formula = __webpack_require__(/*! ./formula */ \"./src/algebra/formula.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Matrix = exports.Matrix = function () {\n    function Matrix(data, trusted) {\n        _classCallCheck(this, Matrix);\n\n        this.data = data;\n        this.trusted = trusted || false;\n    }\n\n    _createClass(Matrix, [{\n        key: 'add',\n        value: function add(matrixB) {\n            this.data = Matrix.add(this, matrixB).data;\n        }\n    }, {\n        key: 'multiply',\n        value: function multiply(matrixB) {\n            this.data = Matrix.multiply(this, matrixB).data;\n        }\n    }, {\n        key: 'getData',\n        value: function getData() {\n            return this.data;\n        }\n    }, {\n        key: 'getColumnSize',\n        value: function getColumnSize() {\n            return this.data.length;\n        }\n    }, {\n        key: 'getRowSize',\n        value: function getRowSize() {\n            return this.data[0].length;\n        }\n    }, {\n        key: 'isSquare',\n        value: function isSquare() {\n            for (var i = 0; i < this.data.length; i++) {\n                if (this.data.length !== this.data[i].length) {\n                    return false;\n                }\n            }\n            return true;\n        }\n    }, {\n        key: 'det',\n        value: function det(variablesObject) {\n            if (!this.trusted) {\n                if (!this.isSquare()) {\n                    throw new Error('Matrix is not a square');\n                }\n            }\n            if (this.data.length === 1 && this.data[0].length === 1) {\n                return Matrix._getCellValue(this.data[0][0], variablesObject);\n            }\n            var det = 0;\n            for (var i = 0; i < this.data.length; i++) {\n                var minor = this.data.slice(0, i).concat(this.data.slice(i + 1)).map(function (row) {\n                    return row.slice(1);\n                });\n                var matrix = new Matrix(minor, true);\n                var value = Matrix._getCellValue(this.data[i][0], variablesObject);\n                det += Math.pow(-1, i) * (value * matrix.det(variablesObject));\n            }\n            return det;\n        }\n    }, {\n        key: 'solveAsEquation',\n        value: function solveAsEquation(b, variablesObject) {\n            var _this = this;\n\n            var xScore = [];\n            if (!this.isSquare()) {\n                return xScore;\n            }\n            var mainDet = this.det(variablesObject);\n            if (mainDet === 0) {\n                return xScore;\n            }\n\n            var _loop = function _loop(i) {\n                var stepData = _this.data.map(function (row, index) {\n                    return row.slice(0, i).concat([b[index]]).concat(row.slice(i + 1));\n                });\n                var stepMatrix = new Matrix(stepData);\n                var stepX = stepMatrix.det(variablesObject) / mainDet;\n                xScore.push(stepX);\n            };\n\n            for (var i = 0; i < this.data.length; i++) {\n                _loop(i);\n            }\n            return xScore;\n        }\n    }], [{\n        key: '_getCellValue',\n        value: function _getCellValue(cell, variablesObject) {\n            var a = cell;\n            if (typeof a === 'string') {\n                if (variablesObject) {\n                    a = variablesObject[a];\n                    if (!a) {\n                        throw new Error('matrix with undefined variable ' + a);\n                    }\n                } else {\n                    throw new Error('matrix with undefined variable ' + a);\n                }\n            }\n            if (a instanceof _formula.Formula) {\n                a = a.calc(variablesObject);\n            }\n            return a;\n        }\n    }, {\n        key: 'variablesDet',\n        value: function variablesDet(data) {\n            var variables = [];\n            for (var i = 0; i < data.length; i++) {\n                for (var j = 0; j < data[i].length; j++) {\n                    if (typeof data[i][j] === 'string') {\n                        if (!variables.includes(data[i][j])) {\n                            variables.push(data[i][j]);\n                        }\n                    }\n                }\n            }\n            var matrix = new Matrix(data);\n            return function () {\n                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n                    args[_key] = arguments[_key];\n                }\n\n                var variablesObject = {};\n                variables.forEach(function (variable, index) {\n                    variablesObject[variable] = args[index];\n                });\n                return matrix.det(variablesObject);\n            };\n        }\n    }, {\n        key: 'multiply',\n        value: function multiply(matrixA, matrixB) {\n            var matrixARowSize = matrixA.getRowSize();\n            var matrixBColumnSize = matrixB.getColumnSize();\n            var matrixBRowSize = matrixB.getRowSize();\n            if (matrixARowSize !== matrixBColumnSize) {\n                throw new Error('unable to multiply matrixs');\n            }\n            var matrixCData = [];\n            var matrixAData = matrixA.getData();\n            var matrixBData = matrixB.getData();\n            matrixAData.forEach(function (row, rowIndex) {\n                matrixCData[rowIndex] = [];\n\n                var _loop2 = function _loop2(i) {\n                    var cellValue = row.reduce(function (sum, cell, cellIndex) {\n                        return sum + cell * matrixBData[cellIndex][i];\n                    }, 0);\n                    matrixCData[rowIndex][i] = cellValue;\n                };\n\n                for (var i = 0; i < matrixBRowSize; i++) {\n                    _loop2(i);\n                }\n            });\n            return new Matrix(matrixCData);\n        }\n    }, {\n        key: 'add',\n        value: function add(matrixA, matrixB) {\n            var matrixBColumnSize = matrixB.getColumnSize();\n            var matrixBRowSize = matrixB.getRowSize();\n            var matrixAColumnSize = matrixA.getColumnSize();\n            var matrixARowSize = matrixA.getRowSize();\n            if (matrixAColumnSize !== matrixBColumnSize || matrixARowSize !== matrixBRowSize) {\n                throw new Error('unable to add matrixs');\n            }\n            var matrixCData = [];\n            var matrixAData = matrixA.getData();\n            var matrixBData = matrixB.getData();\n            matrixAData.forEach(function (row, rowIndex) {\n                matrixCData[rowIndex] = [];\n                row.forEach(function (cell, columnIndex) {\n                    matrixCData[rowIndex][columnIndex] = row[columnIndex] + matrixBData[rowIndex][columnIndex];\n                });\n            });\n            return new Matrix(matrixCData);\n        }\n    }]);\n\n    return Matrix;\n}();\n\n//# sourceURL=webpack://imath/./src/algebra/matrix.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _algebra = __webpack_require__(/*! ./algebra */ \"./src/algebra/index.js\");\n\nvar algebra = _interopRequireWildcard(_algebra);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar imath = {\n    algebra: algebra\n};\n\nif (module !== undefined && module.exports !== undefined) {\n    module.exports = imath;\n}\n\nexports.default = imath;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://imath/./src/index.js?");

/***/ })

/******/ });
});