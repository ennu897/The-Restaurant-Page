/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const container = document.createElement('div');\n  container.textContent = \"Hey, this is Contact Tab!\";\n  container.style.padding = \"20px\";\n  container.style.color = \"red\";\n  document.querySelector('#content').appendChild(container);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhleSwgdGhpcyBpcyBDb250YWN0IFRhYiFcIjtcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgY29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\nconsole.log(\"It's Working\");\n\n\n\n\n\nconst actions = { Home: _pageload_js__WEBPACK_IMPORTED_MODULE_0__.loadHome, Menu: _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu, Contact: _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact };\n\n// Load Home by default\n(0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\ndocument.querySelectorAll('button').forEach(btn => {\n  btn.addEventListener('click', () => {\n    document.querySelector('#content').textContent = \"\"; // clear content\n    const action = actions[btn.textContent];\n    if(action) action();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUV5QztBQUNKO0FBQ007O0FBRTNDLGtCQUFrQixNQUFNLGtEQUFRLFFBQVEsOENBQVEsV0FBVyxvREFBVzs7QUFFdEU7QUFDQSxzREFBUTs7QUFFUjtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkl0J3MgV29ya2luZ1wiKTtcblxuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9wYWdlbG9hZC5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuY29uc3QgYWN0aW9ucyA9IHsgSG9tZTogbG9hZEhvbWUsIE1lbnU6IGxvYWRNZW51LCBDb250YWN0OiBsb2FkQ29udGFjdCB9O1xuXG4vLyBMb2FkIEhvbWUgYnkgZGVmYXVsdFxubG9hZEhvbWUoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaChidG4gPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS50ZXh0Q29udGVudCA9IFwiXCI7IC8vIGNsZWFyIGNvbnRlbnRcbiAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2J0bi50ZXh0Q29udGVudF07XG4gICAgaWYoYWN0aW9uKSBhY3Rpb24oKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const container = document.createElement('div');\n  container.textContent = \"Hey, this is Menu Tab!\";\n  container.style.padding = \"20px\";\n  container.style.color = \"green\";\n  document.querySelector('#content').appendChild(container);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhleSwgdGhpcyBpcyBNZW51IFRhYiFcIjtcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgY29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const container = document.createElement('div');\n  container.textContent = \"Welcome to the Home Page!\";\n  container.style.padding = \"20px\";\n  container.style.color = \"blue\";\n  document.querySelector('#content').appendChild(container);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcz9iYzYzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byB0aGUgSG9tZSBQYWdlIVwiO1xuICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICBjb250YWluZXIuc3R5bGUuY29sb3IgPSBcImJsdWVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pageload.js\n\n}");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;