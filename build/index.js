/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algebra/formula.ts":
/*!********************************!*\
  !*** ./src/algebra/formula.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Formula = void 0;\r\nclass Formula {\r\n    constructor(info) {\r\n        this.func = info[info.length - 1];\r\n        this.variables = info.slice(0, info.length - 1);\r\n    }\r\n    calc(variablesObject) {\r\n        const args = this.variables.map(variable => variablesObject[variable]);\r\n        return this.func(...args);\r\n    }\r\n}\r\nexports.Formula = Formula;\r\n\n\n//# sourceURL=webpack://imath/./src/algebra/formula.ts?");

/***/ }),

/***/ "./src/algebra/index.ts":
/*!******************************!*\
  !*** ./src/algebra/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./matrix */ \"./src/algebra/matrix.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./formula */ \"./src/algebra/formula.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./vector */ \"./src/algebra/vector.ts\"), exports);\r\n\n\n//# sourceURL=webpack://imath/./src/algebra/index.ts?");

/***/ }),

/***/ "./src/algebra/matrix.ts":
/*!*******************************!*\
  !*** ./src/algebra/matrix.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Matrix = void 0;\r\nconst formula_1 = __webpack_require__(/*! ./formula */ \"./src/algebra/formula.ts\");\r\nclass Matrix {\r\n    constructor(data, trusted = false) {\r\n        this.data = data;\r\n        this.trusted = trusted;\r\n    }\r\n    static _getCellValue(cell, variablesObject = null) {\r\n        let a = cell;\r\n        if (typeof a === 'string') {\r\n            if (variablesObject) {\r\n                a = variablesObject[a];\r\n                if (!a) {\r\n                    throw new Error(`matrix with undefined variable ${a}`);\r\n                }\r\n            }\r\n            else {\r\n                throw new Error(`matrix with undefined variable ${a}`);\r\n            }\r\n        }\r\n        if (a instanceof formula_1.Formula) {\r\n            a = a.calc(variablesObject);\r\n        }\r\n        return a;\r\n    }\r\n    static variablesDet(data) {\r\n        const variables = [];\r\n        for (let i = 0; i < data.length; i++) {\r\n            for (let j = 0; j < data[i].length; j++) {\r\n                if (typeof data[i][j] === 'string') {\r\n                    if (!variables.includes(data[i][j])) {\r\n                        variables.push(data[i][j]);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        const matrix = new Matrix(data);\r\n        return (...args) => {\r\n            const variablesObject = {};\r\n            variables.forEach((variable, index) => {\r\n                variablesObject[variable] = args[index];\r\n            });\r\n            return matrix.det(variablesObject);\r\n        };\r\n    }\r\n    static multiply(matrixA, matrixB) {\r\n        if (Array.isArray(matrixA)) {\r\n            matrixA = new Matrix(matrixA);\r\n        }\r\n        if (Array.isArray(matrixB)) {\r\n            matrixB = new Matrix(matrixB);\r\n        }\r\n        const matrixARowSize = matrixA.getRowSize();\r\n        const matrixBColumnSize = matrixB.getColumnSize();\r\n        const matrixBRowSize = matrixB.getRowSize();\r\n        if (matrixARowSize !== matrixBColumnSize) {\r\n            throw new Error('unable to multiply matrixs');\r\n        }\r\n        const matrixCData = [];\r\n        const matrixAData = matrixA.getData();\r\n        const matrixBData = matrixB.getData();\r\n        matrixAData.forEach((row, rowIndex) => {\r\n            matrixCData[rowIndex] = [];\r\n            for (let i = 0; i < matrixBRowSize; i++) {\r\n                const cellValue = row.reduce((sum, cell, cellIndex) => (sum + (cell * matrixBData[cellIndex][i])), 0);\r\n                matrixCData[rowIndex][i] = cellValue;\r\n            }\r\n        });\r\n        return new Matrix(matrixCData);\r\n    }\r\n    static add(matrixA, matrixB) {\r\n        const matrixBColumnSize = matrixB.getColumnSize();\r\n        const matrixBRowSize = matrixB.getRowSize();\r\n        const matrixAColumnSize = matrixA.getColumnSize();\r\n        const matrixARowSize = matrixA.getRowSize();\r\n        if (matrixAColumnSize !== matrixBColumnSize ||\r\n            matrixARowSize !== matrixBRowSize) {\r\n            throw new Error('unable to add matrixs');\r\n        }\r\n        const matrixCData = [];\r\n        const matrixAData = matrixA.getData();\r\n        const matrixBData = matrixB.getData();\r\n        matrixAData.forEach((row, rowIndex) => {\r\n            matrixCData[rowIndex] = [];\r\n            row.forEach((cell, columnIndex) => {\r\n                matrixCData[rowIndex][columnIndex] = (row[columnIndex] + matrixBData[rowIndex][columnIndex]);\r\n            });\r\n        });\r\n        return new Matrix(matrixCData);\r\n    }\r\n    add(matrixB) {\r\n        this.data = Matrix.add(this, matrixB).data;\r\n    }\r\n    multiply(matrixB) {\r\n        this.data = Matrix.multiply(this, matrixB).data;\r\n    }\r\n    getData() {\r\n        return this.data;\r\n    }\r\n    getColumnSize() {\r\n        return this.data.length;\r\n    }\r\n    getRowSize() {\r\n        return this.data[0].length;\r\n    }\r\n    isSquare() {\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            if (this.data.length !== this.data[i].length) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    det(variablesObject) {\r\n        if (!this.trusted) {\r\n            if (!this.isSquare()) {\r\n                throw new Error('Matrix is not a square');\r\n            }\r\n        }\r\n        if (this.data.length === 1 && this.data[0].length === 1) {\r\n            return Matrix._getCellValue(this.data[0][0], variablesObject);\r\n        }\r\n        let det = 0;\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            const minor = this.data.slice(0, i)\r\n                .concat(this.data.slice(i + 1))\r\n                .map(row => row.slice(1));\r\n            const matrix = new Matrix(minor, true);\r\n            const value = Matrix._getCellValue(this.data[i][0], variablesObject);\r\n            det += ((-1) ** i) * (value * matrix.det(variablesObject));\r\n        }\r\n        return det;\r\n    }\r\n    solveAsEquation(b, variablesObject = null) {\r\n        const xScore = [];\r\n        if (!this.isSquare()) {\r\n            return xScore;\r\n        }\r\n        const mainDet = this.det(variablesObject);\r\n        if (mainDet === 0) {\r\n            return xScore;\r\n        }\r\n        for (let i = 0; i < this.data.length; i++) {\r\n            const stepData = this.data.map((row, index) => (row.slice(0, i).concat([b[index]]).concat(row.slice(i + 1))));\r\n            const stepMatrix = new Matrix(stepData);\r\n            const stepX = stepMatrix.det(variablesObject) / mainDet;\r\n            xScore.push(stepX);\r\n        }\r\n        return xScore;\r\n    }\r\n}\r\nexports.Matrix = Matrix;\r\n\n\n//# sourceURL=webpack://imath/./src/algebra/matrix.ts?");

/***/ }),

/***/ "./src/algebra/vector.ts":
/*!*******************************!*\
  !*** ./src/algebra/vector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Vector = void 0;\r\nconst matrix_1 = __webpack_require__(/*! ./matrix */ \"./src/algebra/matrix.ts\");\r\nclass Vector {\r\n    constructor(cords) {\r\n        this.cords = cords;\r\n    }\r\n    static decomposition(vector, ...basis) {\r\n        if (Array.isArray(vector)) {\r\n            vector = new Vector(vector);\r\n        }\r\n        console.log('basis', basis);\r\n        const matrix = new matrix_1.Matrix(basis);\r\n        return matrix.solveAsEquation(vector.cords);\r\n    }\r\n    decomposition(...basis) {\r\n        return Vector.decomposition(this, ...basis);\r\n    }\r\n}\r\nexports.Vector = Vector;\r\n\n\n//# sourceURL=webpack://imath/./src/algebra/vector.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst algebra = __webpack_require__(/*! ./algebra */ \"./src/algebra/index.ts\");\r\nconst imath = {\r\n    algebra,\r\n};\r\nexports.default = imath;\r\n\n\n//# sourceURL=webpack://imath/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});