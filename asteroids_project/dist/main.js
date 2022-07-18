/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvasEl = document.getElementById(\"game-canvas\");\n\n    const ctx = canvasEl.getContext(\"2d\");\n    ctx.fillRect(0,0,canvasEl.width,canvasEl.height)\n    // const game = new Game();\n    // new GameView(game, ctx).start();\n\n\n    const movingThingy = new MovingObject({\n        pos: [50,150], \n        vel: [1,0], \n        radius: 15, \n        color: \"#00FF00\"\n    });\n    \n    movingThingy.draw(ctx);\n\n    setInterval(movingThingy.move.bind(movingThingy), 500)\n    \n    setInterval(movingThingy.draw.bind(movingThingy, ctx), 500)\n\n  });\n\nconsole.log(\"webpack is working\")\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = MovingObject;\n\nfunction MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel; \n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = 'red';\n\n    ctx.beginPath();\n    ctx.arc(\n      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n}\n\n// document.getElementById(\"\").\n// return pos[0] = pos[0] + vel[0];\n// pos[1] = pos[1] + vel[1];\n\n\nMovingObject.prototype.move = function () {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    // this.draw(ctx);\n}\n\n\n// VECTORS\n// 2D vectors have an x and a y component. \n// A position vector has an x and y position, \n// while a velocity vector has a speed in the x and the y directions.\n\n// Distance between two points\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;