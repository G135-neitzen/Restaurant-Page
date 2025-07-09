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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General Reset */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Body Styling */\r\nbody {\r\n  font-family: 'Merriweather', serif;\r\n  background: linear-gradient(135deg, #fffbe6 0%, #f5e6ca 100%);\r\n  color: #2d2d2d;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* Header/Nav */\r\n#navbar, nav, .navbar {\r\n  width: 100%;\r\n  background: linear-gradient(90deg, #b22222 0%, #228b22 100%);\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1.2rem 0;\r\n  box-shadow: 0 2px 8px rgba(0,0,0,0.07);\r\n  font-size: 1.2rem;\r\n  gap: 2rem;\r\n}\r\n\r\n#navbar button, nav button, .navbar button,\r\n#home, #menu, #about {\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  padding: 0.5rem 1.2rem;\r\n  border-radius: 2rem;\r\n  transition: background 0.3s, color 0.3s, transform 0.2s;\r\n}\r\n\r\n#navbar button:hover, nav button:hover, .navbar button:hover,\r\n#home:hover, #menu:hover, #about:hover {\r\n  background: #fff;\r\n  color: #b22222;\r\n  transform: scale(1.08);\r\n}\r\n\r\n/* Main Container */\r\n.container {\r\n  max-width: 900px;\r\n  margin: 2.5rem auto;\r\n  background: #fffdfa;\r\n  border-radius: 1.5rem;\r\n  box-shadow: 0 4px 24px rgba(34,139,34,0.08), 0 1.5px 8px rgba(178,34,34,0.06);\r\n  padding: 3.5rem 2rem 2.5rem 2rem; /* More top padding for space above content */\r\n  animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n/* Section Titles */\r\n.container h1 {\r\n  font-family: 'Playfair Display', serif;\r\n  color: #b22222;\r\n  margin-bottom: 2.2rem; /* More space below the title */\r\n  margin-top: 0.5rem;    /* More space above the title */\r\n  letter-spacing: 1px;\r\n  text-shadow: 0 2px 8px #f5e6ca;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.container h2 {\r\n  color: #228b22;\r\n  margin: 1.5rem 0 0.7rem 0;\r\n  font-size: 1.4rem;\r\n  font-family: 'Playfair Display', serif;\r\n}\r\n\r\n/* Section Styling */\r\n.intro-section, .about-section, .menu-section, .hours-section, .contact-section,\r\n.menu-pizza, .menu-pasta, .menu-desserts {\r\n  margin-bottom: 2rem;\r\n  animation: slideUp 0.7s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n.intro-section img,\r\n.menu-pizza img,\r\n.menu-pasta img,\r\n.menu-desserts img {\r\n  display: block;\r\n  margin: 2rem auto 1.2rem auto; /* More space above and below images */\r\n  border-radius: 1rem;\r\n  box-shadow: 0 2px 16px rgba(178,34,34,0.13);\r\n  width: 100%;\r\n  max-width: 500px; /* Larger max width */\r\n  min-width: 220px;\r\n  transition: transform 0.4s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n.intro-section img:hover,\r\n.menu-pizza img:hover,\r\n.menu-pasta img:hover,\r\n.menu-desserts img:hover {\r\n  transform: scale(1.04) rotate(-2deg);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\nli {\r\n  padding: 0.3rem 0;\r\n  font-size: 1.08rem;\r\n  border-bottom: 1px dashed #e6cfcf;\r\n}\r\n\r\nli:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n/* Food section layout: image and list side by side */\r\n.menu-pizza,\r\n.menu-pasta,\r\n.menu-desserts {\r\n  display: flex;\r\n  align-items: stretch; /* Make image and list the same height */\r\n  justify-content: space-between;\r\n  gap: 2.5rem;\r\n  background: #f8f6f2;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 2px 12px rgba(34,139,34,0.07);\r\n  padding: 2rem 1.5rem;\r\n}\r\n\r\n.menu-pizza ul,\r\n.menu-pasta ul,\r\n.menu-desserts ul {\r\n  flex: 1;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-pizza img,\r\n.menu-pasta img,\r\n.menu-desserts img {\r\n  flex: 1;\r\n  max-width: 340px;\r\n  min-width: 200px;\r\n  width: 100%;\r\n  height: 100%; /* Make image fill the section height */\r\n  object-fit: cover; /* Crop image to fit if needed */\r\n  margin: 0 0 0 2rem;\r\n  align-self: stretch; /* Stretch image to match ul height */\r\n  border-radius: 1rem;\r\n  box-shadow: 0 2px 16px rgba(178,34,34,0.13);\r\n  transition: transform 0.4s cubic-bezier(.4,0,.2,1);\r\n}\r\n\r\n/* Responsive: stack image and list vertically on small screens */\r\n@media (max-width: 900px) {\r\n  .menu-pizza,\r\n  .menu-pasta,\r\n  .menu-desserts {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    gap: 1.2rem;\r\n    padding: 1.2rem 0.5rem;\r\n  }\r\n  .menu-pizza img,\r\n  .menu-pasta img,\r\n  .menu-desserts img {\r\n    margin: 1.2rem auto 0 auto;\r\n    max-width: 98vw;\r\n    height: auto;\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeIn {\r\n  from { opacity: 0; transform: translateY(30px);}\r\n  to { opacity: 1; transform: translateY(0);}\r\n}\r\n\r\n@keyframes slideUp {\r\n  from { opacity: 0; transform: translateY(40px);}\r\n  to { opacity: 1; transform: translateY(0);}\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 700px) {\r\n  .container {\r\n    padding: 1.2rem 0.5rem;\r\n    border-radius: 0.7rem;\r\n  }\r\n  .intro-section img,\r\n  .menu-pizza img,\r\n  .menu-pasta img,\r\n  .menu-desserts img {\r\n    max-width: 98vw;\r\n    width: 100%;\r\n  }\r\n  #navbar, nav, .navbar {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    font-size: 1rem;\r\n    padding: 0.7rem 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .container {\r\n    padding: 0.5rem 0.1rem;\r\n  }\r\n  .container h1 {\r\n    font-size: 1.3rem;\r\n  }\r\n  .container h2 {\r\n    font-size: 1.05rem;\r\n  }\r\n}\r\n\r\n/* Italian flag accent bar */\r\nbody::before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 100vw;\r\n  height: 7px;\r\n  background: linear-gradient(90deg, #008000 33%, #fff 33%, #fff 66%, #ff0000 66%);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n}\r\n\r\n/* Nice touch for links/buttons */\r\na, button {\r\n  transition: color 0.2s, background 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n/* Scrollbar styling */\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n  background: #f5e6ca;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #b22222;\r\n  border-radius: 4px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pictures_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/restaurant.webp */ \"./src/pictures/restaurant.webp\");\n/* harmony import */ var _pictures_pizzaImage_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/pizzaImage.webp */ \"./src/pictures/pizzaImage.webp\");\n/* harmony import */ var _pictures_spaguetti_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/spaguetti.jpg */ \"./src/pictures/spaguetti.jpg\");\n/* harmony import */ var _pictures_tiramisu_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/tiramisu.webp */ \"./src/pictures/tiramisu.webp\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n // Importing the CSS file\r\n\r\nconst home = document.getElementById(\"home\");\r\nconst menu = document.getElementById(\"menu\");\r\nconst about = document.getElementById(\"about\");\r\nconst content = document.getElementById(\"content\");\r\n\r\nfunction contentHome() {\r\n    content.innerHTML = \"\"; // Clear previous content\r\n\r\n    const container = document.createElement(\"div\")\r\n    container.classList.add(\"container\");\r\n\r\n    const introSection = document.createElement(\"section\");\r\n    introSection.classList.add(\"intro-section\");\r\n    introSection.innerHTML =\r\n        `<h1>Home</h1>\r\n            <p>Welcome to Giancarlo's Restaurant.</p>\r\n            <p>We are delighted to serve you the best Italian cuisine in town.</p>\r\n            <img src=\"${_pictures_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Home Image\">\r\n            <p>Join us for a delightful dining experience!</p>\r\n    `;\r\n\r\n    const hoursSection = document.createElement(\"section\");\r\n    hoursSection.classList.add(\"hours-section\");\r\n    hoursSection.innerHTML = `\r\n    <h2>Opening Hours</h2>\r\n    <ul>\r\n        <li>Monday: 11:00 AM - 10:00 PM</li>\r\n        <li>Tuesday: 11:00 AM - 10:00 PM</li>\r\n        <li>Wednesday: 11:00 AM - 10:00 PM</li>\r\n        <li>Thursday: 11:00 AM - 10:00 PM</li>\r\n        <li>Friday: 11:00 AM - 11:00 PM</li>\r\n        <li>Saturday: 12:00 PM - 11:00 PM</li>\r\n        <li>Sunday: Closed</li>\r\n    </ul>\r\n    `;\r\n\r\n    const contactSection = document.createElement(\"section\");\r\n    contactSection.classList.add(\"contact-section\");\r\n    contactSection.innerHTML = `\r\n    <h2>Location</h2>\r\n    <p>1234 Culinary Lane, Foodie City, FC 56789</p>\r\n    <p>We are located in the heart of Foodie City, easily accessible by public transport and with ample parking space.</p>\r\n    <p>For reservations, please call us at (123) 456-7890.</p>\r\n    `;\r\n\r\n    container.appendChild(introSection);\r\n    container.appendChild(hoursSection);\r\n    container.appendChild(contactSection);\r\n    content.appendChild(container);\r\n\r\n}\r\n\r\nfunction contentMenu() {\r\n    content.innerHTML = \"\"; // Clear previous content\r\n\r\n   const container = document.createElement(\"div\");\r\n    container.classList.add(\"container\");\r\n\r\n    // Main menu section\r\n    const menuSection = document.createElement(\"section\");\r\n    menuSection.classList.add(\"menu-section\");\r\n    menuSection.innerHTML = `\r\n        <h1>Menu</h1>\r\n        <p>Explore our delicious menu featuring a variety of Italian dishes.</p>\r\n    `;\r\n\r\n     const pizzaSection = document.createElement(\"section\");\r\n    pizzaSection.classList.add(\"menu-pizza\");\r\n    pizzaSection.innerHTML = `\r\n        <h2>Pizza</h2>\r\n        <ul>\r\n            <li>Margherita Pizza - $12.99</li>\r\n            <li>Pepperoni Pizza - $14.99</li>\r\n            <li>Vegetarian Pizza - $13.99</li>\r\n            <li>BBQ Chicken Pizza - $15.99</li>\r\n            <li>Four Cheese Pizza - $16.99</li>  \r\n        </ul>\r\n        <img src=\"${_pictures_pizzaImage_webp__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Pizza Image\" width=\"200\" height=\"150\">\r\n    `;\r\n    \r\n   const pastaSection = document.createElement(\"section\");\r\n    pastaSection.classList.add(\"menu-pasta\");\r\n    pastaSection.innerHTML = `\r\n        <h2>Pasta</h2>\r\n        <ul>\r\n            <li>Spaghetti Carbonara - $11.99</li>\r\n            <li>Fettuccine Alfredo - $12.99</li>\r\n            <li>Penne Arrabbiata - $10.99</li>\r\n            <li>Lasagna - $13.99</li>\r\n            <li>Ravioli - $14.99</li> \r\n        </ul> \r\n        <img src=\"${_pictures_spaguetti_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Spaghetti Image\" width=\"200\" height=\"150\">\r\n    `;\r\n\r\n   const dessertSection = document.createElement(\"section\");\r\n    dessertSection.classList.add(\"menu-desserts\");\r\n    dessertSection.innerHTML = `\r\n        <h2>Desserts</h2>\r\n        <ul>\r\n            <li>Tiramisu - $6.99</li>\r\n            <li>Panna Cotta - $5.99</li>\r\n            <li>Gelato - $4.99</li>\r\n            <li>Chocolate Lava Cake - $7.99</li>\r\n            <li>Fruit Tart - $5.99</li>  \r\n        </ul>\r\n        <img src=\"${_pictures_tiramisu_webp__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Tiramisu Image\" width=\"200\" height=\"150\">\r\n    `;\r\n\r\n    // Append sections to the container\r\n    container.appendChild(menuSection);\r\n    container.appendChild(pizzaSection);\r\n    container.appendChild(pastaSection);\r\n    container.appendChild(dessertSection);\r\n    content.appendChild(container);\r\n}\r\n\r\nfunction contentAbout() {\r\n    content.innerHTML = \"\"; // Clear previous content\r\n\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"container\");\r\n\r\n    const aboutSection = document.createElement(\"section\");\r\n    aboutSection.classList.add(\"about-section\");\r\n    aboutSection.innerHTML = `\r\n        <h1>About Us</h1>\r\n        <p>Giancarlo's Restaurant has been serving authentic Italian cuisine since 1995. Our chef, Giancarlo, brings traditional recipes from his hometown in Italy, ensuring every dish is made with love and passion.</p>\r\n        <p>We believe in using the freshest ingredients and traditional cooking methods to create a memorable dining experience for our guests.</p>\r\n        <p>Join us for a meal and experience the taste of Italy right here in Foodie City!</p>\r\n    `;\r\n\r\n    container.appendChild(aboutSection);\r\n    content.appendChild(container);\r\n}\r\n\r\ncontentHome(); // Load home content by default\r\n\r\nhome.addEventListener(\"click\", contentHome);\r\nmenu.addEventListener(\"click\", contentMenu);\r\nabout.addEventListener(\"click\", contentAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pictures/pizzaImage.webp":
/*!**************************************!*\
  !*** ./src/pictures/pizzaImage.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfc58b4b38d82245405e.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/pizzaImage.webp?");

/***/ }),

/***/ "./src/pictures/restaurant.webp":
/*!**************************************!*\
  !*** ./src/pictures/restaurant.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfb780746d89e19b2f0e.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/restaurant.webp?");

/***/ }),

/***/ "./src/pictures/spaguetti.jpg":
/*!************************************!*\
  !*** ./src/pictures/spaguetti.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61ae59c7b934edc6e75c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/spaguetti.jpg?");

/***/ }),

/***/ "./src/pictures/tiramisu.webp":
/*!************************************!*\
  !*** ./src/pictures/tiramisu.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0c6acf9774dac9d47bc.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/tiramisu.webp?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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