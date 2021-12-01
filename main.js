/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutpage.js":
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage),\n/* harmony export */   \"removeAboutPage\": () => (/* binding */ removeAboutPage)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nconst aboutpage = document.createElement('div');\naboutpage.classList.add('aboutpage');\n\naboutpage.innerHTML = `<div class=\"about-text\">\n<span><h2>Restaurant</h2></span>\n<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore neque voluptas qui, blanditiis omnis fuga non dolor nulla nam magnam veritatis nisi voluptate quos nihil molestiae atque ad eius facere accusantium pariatur excepturi? Dolor sed est nobis facilis inventore aliquid adipisci unde ducimus? Odio autem repellat labore quidem, laudantium, aut, praesentium veniam iste libero voluptatum ea! Earum nesciunt temporibus repellendus impedit natus voluptatem illo, totam hic quod tempore, inventore unde doloribus rerum sequi quis veniam nisi odio error saepe iure molestiae dicta quas nihil? Quibusdam, error laudantium itaque id asperiores porro eius, et dolor, earum provident nisi! Velit, optio amet.</p>\n</div>\n<div class=\"contact\">\n<span>Email : restaurant@email.com</span>\n<span>Phones : +91-8768564321, +91-9834703894</span>\n</div>`;\n\nfunction loadAboutPage(){\n    content.appendChild(aboutpage);\n}\n\nfunction removeAboutPage(){\n    if(content.contains(aboutpage))\n    content.removeChild(aboutpage);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutpage.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage),\n/* harmony export */   \"removeHomePage\": () => (/* binding */ removeHomePage)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nconst homepage = document.createElement('div');\nhomepage.classList.add('homepage');\n\nconst homepageInsideDiv = document.createElement('div');\n\nconst homeText = document.createElement('span');\nhomeText.id = 'home-text';\nhomeText.textContent = `Discover delicious cuisines from India's best kept secret.`;\n\nhomepageInsideDiv.appendChild(homeText);\n\nhomepage.appendChild(homepageInsideDiv);\n\nfunction loadHomePage(){\n    content.appendChild(homepage);\n}\n\nfunction removeHomePage(){\n    if(content.contains(homepage))\n    content.removeChild(homepage);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\n\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage),\n/* harmony export */   \"removeMenuPage\": () => (/* binding */ removeMenuPage)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nconst menupage = document.createElement('div');\nmenupage.classList.add('menupage');\n\nconst dish0 = document.createElement('div');\ndish0.classList.add('dish', 'even');\ndish0.innerHTML = `<img class=\"dish-img \" src=\"../src/dishes/dish1.jpg\" alt=\"\">\n<span class=\"dish-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`\nmenupage.appendChild(dish0);\n\nconst dish1 = document.createElement('div');\ndish1.classList.add('dish', 'odd');\ndish1.innerHTML = `<img class=\"dish-img\" src=\"../src/dishes/dish2.jpg\" alt=\"\">\n<span class=\"dish-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`\nmenupage.appendChild(dish1);\n\nconst dish2 = document.createElement('div');\ndish2.classList.add('dish', 'even');\ndish2.innerHTML = `<img class=\"dish-img\" src=\"../src/dishes/dish3.jpg\" alt=\"\">\n<span class=\"dish-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`\nmenupage.appendChild(dish2);\n\nconst dish3 = document.createElement('div');\ndish3.classList.add('dish', 'odd');\ndish3.innerHTML = `<img class=\"dish-img\" src=\"../src/dishes/dish4.jpg\" alt=\"\">\n<span class=\"dish-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`\nmenupage.appendChild(dish3);\n\nconst dish4 = document.createElement('div');\ndish4.classList.add('dish', 'even');\ndish4.innerHTML = `<img class=\"dish-img\" src=\"../src/dishes/dish5.jpg\" alt=\"\">\n<span class=\"dish-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quibusdam suscipit, numquam, veritatis temporibus laudantium iste, repellendus illum in ex repudiandae ducimus minima rem sint. Quo eos ratione eum numquam et voluptatibus culpa dolore qui. Inventore, sit et repellat vitae perspiciatis ipsa neque ullam magni rem ad nemo corrupti assumenda.</span>`\nmenupage.appendChild(dish4);\n\nfunction loadMenuPage(){\n    content.appendChild(menupage);\n}\n\nfunction removeMenuPage(){\n    if(content.contains(menupage))\n    content.removeChild(menupage);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menupage.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aboutpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutpage */ \"./src/aboutpage.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ \"./src/menupage.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const home = document.createElement('span');\n    const menu = document.createElement('span');\n    const about = document.createElement('span');\n    \n    home.textContent = 'Home';\n    home.classList.add('tab', 'active');\n    \n    menu.textContent = 'Menu';\n    menu.classList.add('tab');\n    \n    about.textContent = 'About';\n    about.classList.add('tab');\n    \n    home.addEventListener('click', (e) => {\n        activateTab(e, menu, about);\n        (0,_menupage__WEBPACK_IMPORTED_MODULE_2__.removeMenuPage)();\n        (0,_aboutpage__WEBPACK_IMPORTED_MODULE_0__.removeAboutPage)();\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n    });\n\n    menu.addEventListener('click', (e) => {\n        activateTab(e, home, about);\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.removeHomePage)();\n        (0,_aboutpage__WEBPACK_IMPORTED_MODULE_0__.removeAboutPage)();\n        (0,_menupage__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n    });\n\n    about.addEventListener('click', (e) => {\n        activateTab(e, home, menu);\n        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.removeHomePage)();\n        (0,_menupage__WEBPACK_IMPORTED_MODULE_2__.removeMenuPage)();\n        (0,_aboutpage__WEBPACK_IMPORTED_MODULE_0__.loadAboutPage)();\n    });\n\n    header.appendChild(home);\n    header.appendChild(menu);\n    header.appendChild(about);\n\n    const content = document.getElementById('content');\n    content.appendChild(header);\n}\n\nfunction activateTab(e, otherTab, anotherTab){\n    if(e.target.classList.contains('active')) return;\n    e.target.classList.add('active');\n    otherTab.classList.remove('active');\n    anotherTab.classList.remove('active');\n}\n\n\n\nfunction init(){\n    createHeader();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;