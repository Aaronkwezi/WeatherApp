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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/Sunset.jpg */ \"./src/backgroundImages/Sunset.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/Sunny.jpg */ \"./src/backgroundImages/Sunny.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/night.jpg */ \"./src/backgroundImages/night.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/Rainy.jpg */ \"./src/backgroundImages/Rainy.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/Snowy.jpg */ \"./src/backgroundImages/Snowy.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./backgroundImages/Cloudy.jpg */ \"./src/backgroundImages/Cloudy.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n  margin: 30px;\n}\n\nbody[data-weather=\"clear-day\"] {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nbody[data-weather=\"clear-night\"],\nbody[data-weather=\"partly-cloudy-night\"] {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\nbody[data-weather=\"rain\"] {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\nbody[data-weather=\"snow\"] {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n}\n\nbody[data-weather=\"cloudy\"],\nbody[data-weather=\"partly-cloudy-day\"] {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n}\nbody[data-weather=\"clear-day\"] #app-header,\nbody[data-weather=\"cloudy\"] #app-header,\nbody[data-weather=\"partly-cloudy-day\"] #app-header,\nbody[data-weather=\"snow\"] #app-header {\n  text-align: center;\n  color: #333;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\nbody[data-weather=\"clear-night\"] #app-header,\nbody[data-weather=\"partly-cloudy-night\"] #app-header,\nbody[data-weather=\"rain\"] #app-header {\n  text-align: center;\n  color: #fff;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#forecast-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n\n#future-forecast-list {\n  display: flex;\n  justify-content: space-around;\n  gap: 20px;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n\n#forecast-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n#forecast-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n\n#search-form {\n  margin: 20px;\n}\n#search-form input[type=\"text\"] {\n  padding: 10px;\n  margin-right: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n#search-form button {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n#search-form button:hover {\n  background-color: #0056b3;\n}\n\n#toggle-button {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 20px;\n}\n#toggle-button:hover {\n  background-color: #218838;\n}\n#current-weather {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 250px;\n  width: 250px;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n}\nbody[data-weather=\"clear-day\"] #future-forecast-header,\nbody[data-weather=\"cloudy\"] #future-forecast-header,\nbody[data-weather=\"partly-cloudy-day\"] #future-forecast-header {\n  margin-top: 20px;\n  font-size: 24px;\n  color: #333;\n}\nbody[data-weather=\"clear-night\"] #future-forecast-header,\nbody[data-weather=\"partly-cloudy-night\"] #future-forecast-header,\nbody[data-weather=\"rain\"] #future-forecast-header {\n  margin-top: 20px;\n  font-size: 24px;\n  color: #fff;\n}\n\n\n\nbody[data-weather=\"clear-day\"] #location-header,\nbody[data-weather=\"cloudy\"] #location-header ,\nbody[data-weather=\"partly-cloudy-day\"] #location-header {\n  margin-top: 20px;\n  font-size: 24px;\n  color: #333;\n}\nbody[data-weather=\"clear-night\"] #location-header,\nbody[data-weather=\"partly-cloudy-night\"] #location-header,\nbody[data-weather=\"rain\"] #location-header{\n  margin-top: 20px;\n  font-size: 24px;\n  color: #fff;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/WeatherIconSVG/clear-day.svg"
/*!******************************************!*\
  !*** ./src/WeatherIconSVG/clear-day.svg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b0a85b059e22e7d1f896.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/WeatherIconSVG/clear-day.svg?\n}");

/***/ },

/***/ "./src/WeatherIconSVG/partly-cloudy-day.svg"
/*!**************************************************!*\
  !*** ./src/WeatherIconSVG/partly-cloudy-day.svg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"52f0300cbc6cebaf0839.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/WeatherIconSVG/partly-cloudy-day.svg?\n}");

/***/ },

/***/ "./src/WeatherIconSVG/rain.svg"
/*!*************************************!*\
  !*** ./src/WeatherIconSVG/rain.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"64548f56e78fda1281de.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/WeatherIconSVG/rain.svg?\n}");

/***/ },

/***/ "./src/WeatherIconSVG/snow.svg"
/*!*************************************!*\
  !*** ./src/WeatherIconSVG/snow.svg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"805143f99d096051c527.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/WeatherIconSVG/snow.svg?\n}");

/***/ },

/***/ "./src/backgroundImages/Cloudy.jpg"
/*!*****************************************!*\
  !*** ./src/backgroundImages/Cloudy.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"857e9b184f3744d7903a.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/Cloudy.jpg?\n}");

/***/ },

/***/ "./src/backgroundImages/Rainy.jpg"
/*!****************************************!*\
  !*** ./src/backgroundImages/Rainy.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2efc5ca16fd91fa0781a.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/Rainy.jpg?\n}");

/***/ },

/***/ "./src/backgroundImages/Snowy.jpg"
/*!****************************************!*\
  !*** ./src/backgroundImages/Snowy.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"706cfbc971dc92f260b6.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/Snowy.jpg?\n}");

/***/ },

/***/ "./src/backgroundImages/Sunny.jpg"
/*!****************************************!*\
  !*** ./src/backgroundImages/Sunny.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"43f2e2908d810c4a45c8.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/Sunny.jpg?\n}");

/***/ },

/***/ "./src/backgroundImages/Sunset.jpg"
/*!*****************************************!*\
  !*** ./src/backgroundImages/Sunset.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"731a544a0938a44071b2.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/Sunset.jpg?\n}");

/***/ },

/***/ "./src/backgroundImages/night.jpg"
/*!****************************************!*\
  !*** ./src/backgroundImages/night.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a774d3515d0d18716a03.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/backgroundImages/night.jpg?\n}");

/***/ },

/***/ "./src/Conversion.js"
/*!***************************!*\
  !*** ./src/Conversion.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   converttoCelsius: () => (/* binding */ converttoCelsius),\n/* harmony export */   converttoFahrenheit: () => (/* binding */ converttoFahrenheit)\n/* harmony export */ });\nfunction converttoCelsius(fahrenheit) {\n  return ((fahrenheit - 32) * 5) / 9;\n}\nfunction converttoFahrenheit(celsius) {\n  return (celsius * 9) / 5 + 32;\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/Conversion.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n/* harmony import */ var _Conversion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversion.js */ \"./src/Conversion.js\");\n\n\n\nconst weatherIcons = {\n  \"clear-day\": new URL(/* asset import */ __webpack_require__(/*! ./WeatherIconSVG/clear-day.svg */ \"./src/WeatherIconSVG/clear-day.svg\"), __webpack_require__.b).href,\n  \"partly-cloudy-day\": new URL(/* asset import */ __webpack_require__(/*! ./WeatherIconSVG/partly-cloudy-day.svg */ \"./src/WeatherIconSVG/partly-cloudy-day.svg\"), __webpack_require__.b).href,\n  rain: new URL(/* asset import */ __webpack_require__(/*! ./WeatherIconSVG/rain.svg */ \"./src/WeatherIconSVG/rain.svg\"), __webpack_require__.b).href,\n  snow: new URL(/* asset import */ __webpack_require__(/*! ./WeatherIconSVG/snow.svg */ \"./src/WeatherIconSVG/snow.svg\"), __webpack_require__.b).href,\n};\n\nfunction renderApp() {\n  const appContainer = document.createElement(\"div\");\n  appContainer.id = \"app\";\n  const header = document.createElement(\"h1\");\n  header.id = \"app-header\";\n  header.textContent = \"The KWEZI Weather App\";\n  appContainer.appendChild(header);\n  const weatherDisplay = createWeatherDisplay();\n  const searchForm = createSearchForm(weatherDisplay);\n  appContainer.appendChild(searchForm);\n  appContainer.appendChild(weatherDisplay);\n  document.body.appendChild(appContainer);\n}\n\nfunction createSearchForm(weatherDisplay) {\n  const form = document.createElement(\"form\");\n  form.id = \"search-form\";\n  const searchInput = document.createElement(\"input\");\n  searchInput.type = \"text\";\n  searchInput.id = \"search-input\";\n  searchInput.required = true;\n  searchInput.placeholder = \"Enter location...\";\n  const submitButton = document.createElement(\"button\");\n  submitButton.type = \"submit\";\n  submitButton.textContent = \"Search\";\n  form.addEventListener(\"submit\", async (event) => {\n    event.preventDefault();\n    const location = searchInput.value.trim();\n\n    if (!location) {\n      return;\n    }\n    submitButton.disabled = true;\n    try {\n      const weatherData = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location);\n      updateWeatherDisplay(weatherDisplay, weatherData);\n    } catch (error) {\n      weatherDisplay.textContent = \"Unable to load weather. Please try again.\";\n      console.error(\"Weather search failed:\", error);\n    } finally {\n      submitButton.disabled = false;\n    }\n  });\n\n  form.appendChild(searchInput);\n  form.appendChild(submitButton);\n  return form;\n}\nfunction navigateGeolocation(weatherDisplay) {\n  if (!navigator.geolocation) {\n    weatherDisplay.textContent =\n      \"Geolocation is not supported by your browser.\";\n    return;\n  }\n  navigator.geolocation.getCurrentPosition(\n    async (position) => {\n      const { latitude, longitude } = position.coords;\n      try {\n        const weatherData = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(`${latitude},${longitude}`);\n        // Keep coordinates for accurate weather, but show a readable place name.\n        const placeName = await getPlaceName(latitude, longitude);\n        updateWeatherDisplay(weatherDisplay, weatherData, placeName);\n      } catch (error) {\n        weatherDisplay.textContent =\n          \"Unable to load weather for your location.\";\n        console.error(\"Geolocation weather search failed:\", error);\n      }\n    },\n    (error) => {\n      weatherDisplay.textContent = \"Unable to retrieve your location.\";\n      console.error(\"Geolocation error:\", error);\n    },\n  );\n}\n\nasync function getPlaceName(latitude, longitude) {\n  try {\n    const response = await fetch(\n      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,\n    );\n    if (!response.ok) {\n      throw new Error(`Place lookup failed: ${response.status}`);\n    }\n    const place = await response.json();\n    const parts = [\n      place.city || place.locality,\n      place.principalSubdivision,\n      place.countryName,\n    ];\n    return (\n      [...new Set(parts.filter(Boolean))].join(\", \") || \"your current location\"\n    );\n  } catch (error) {\n    console.error(\"Place lookup failed:\", error);\n    return \"your current location\";\n  }\n}\n\nfunction createWeatherDisplay(weatherData) {\n  const weatherDisplay = document.createElement(\"div\");\n  weatherDisplay.id = \"weather-display\";\n  updateWeatherDisplay(weatherDisplay, weatherData);\n  return weatherDisplay;\n}\n\nfunction togglecelsiusFahrenheit(weatherDisplay, weatherData) {\n  const tempParagraph = weatherDisplay.querySelector(\"p\");\n  if (!tempParagraph) return;\n  const currentTemp = weatherData.currentConditions.temp;\n\n  const isCelsius = tempParagraph.textContent.includes(\"°C\");\n  if (isCelsius) {\n    tempParagraph.textContent = `Temperature: ${currentTemp.toFixed(1)}°F`;\n  } else {\n    const celsiusTemp = (0,_Conversion_js__WEBPACK_IMPORTED_MODULE_1__.converttoCelsius)(currentTemp);\n    tempParagraph.textContent = `Temperature: ${celsiusTemp.toFixed(1)}°C`;\n  }\n  weatherDisplay.querySelectorAll(\".high-temp\").forEach((item, index) => {\n    const highTemp = weatherData.days[index].tempmax;\n    const isCelsius = item.textContent.includes(\"°C\");\n    if (isCelsius) {\n      item.textContent = `High: ${highTemp.toFixed(1)}°F`;\n    } else {\n      const highCelsius = (0,_Conversion_js__WEBPACK_IMPORTED_MODULE_1__.converttoCelsius)(highTemp);\n      item.textContent = `High: ${highCelsius.toFixed(1)}°C`;\n    }\n  });\n  weatherDisplay.querySelectorAll(\".low-temp\").forEach((item, index) => {\n    const lowTemp = weatherData.days[index].tempmin;\n    const isCelsius = item.textContent.includes(\"°C\");\n    if (isCelsius) {\n      item.textContent = `Low: ${lowTemp.toFixed(1)}°F`;\n    } else {\n      const lowCelsius = (0,_Conversion_js__WEBPACK_IMPORTED_MODULE_1__.converttoCelsius)(lowTemp);\n      item.textContent = `Low: ${lowCelsius.toFixed(1)}°C`;\n    }\n  });\n}\n\nfunction updateWeatherDisplay(weatherDisplay, weatherData, placeName) {\n  weatherDisplay.replaceChildren();\n  const locationHeader = document.createElement(\"h2\");\n  locationHeader.id = \"location-header\";\n  locationHeader.textContent = weatherData\n    ? `Weather in ${placeName || weatherData.resolvedAddress}`\n    : \"Finding your location...\";\n  weatherDisplay.appendChild(locationHeader);\n\n  if (!weatherData) {\n    navigateGeolocation(weatherDisplay);\n    return;\n  }\n  const weatherCondition = weatherData.currentConditions.icon;\n  document.body.setAttribute(\"data-weather\", weatherCondition);\n\n  const toggleButton = document.createElement(\"button\");\n  toggleButton.id = \"toggle-button\";\n  toggleButton.textContent = \"Toggle °C/°F\";\n  toggleButton.addEventListener(\"click\", () =>\n    togglecelsiusFahrenheit(weatherDisplay, weatherData),\n  );\n  const currentWeather = document.createElement(\"div\");\n  currentWeather.id = \"current-weather\";\n  const iconUrl = weatherIcons[weatherCondition];\n  if (iconUrl) {\n    const icon = document.createElement(\"img\");\n    icon.src = iconUrl;\n    icon.alt = weatherCondition;\n    currentWeather.appendChild(icon);\n  }\n  const tempParagraph = document.createElement(\"p\");\n  tempParagraph.textContent = `Temperature: ${weatherData.currentConditions.temp}°F`;\n  const timezoneParagraph = document.createElement(\"p\");\n  timezoneParagraph.textContent = `Timezone: ${weatherData.timezone}`;\n  const windParagraph = document.createElement(\"p\");\n  windParagraph.textContent = `Wind Speed: ${weatherData.currentConditions.windspeed} mph`;\n  const humidityParagraph = document.createElement(\"p\");\n  humidityParagraph.textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;\n  currentWeather.appendChild(tempParagraph);\n  currentWeather.appendChild(timezoneParagraph);\n  currentWeather.appendChild(windParagraph);\n  currentWeather.appendChild(humidityParagraph);\n\n  const futureForecastHeader = document.createElement(\"h3\");\n  futureForecastHeader.textContent = \"Future Forecast\";\n  futureForecastHeader.id = \"future-forecast-header\";\n  const forcastContainer = document.createElement(\"div\");\n  forcastContainer.id = \"forecast-container\";\n  const futureForecastList = document.createElement(\"div\");\n  futureForecastList.id = \"future-forecast-list\";\n  for (const day of weatherData.days) {\n    const forecastItem = document.createElement(\"div\");\n    forecastItem.id = \"forecast-item\";\n    const iconUrl = weatherIcons[day.icon];\n    if (iconUrl) {\n      const icon = document.createElement(\"img\");\n      icon.src = iconUrl;\n      icon.alt = day.icon;\n      forecastItem.appendChild(icon);\n    }\n    const weekDay = document.createElement(\"p\");\n    const date = new Date(`${day.datetime}T00:00:00`);\n    const weekday = date.toLocaleDateString(undefined, { weekday: \"short\" });\n    weekDay.textContent = `${weekday}`;\n    const theDate = document.createElement(\"p\");\n    theDate.textContent = `${date.toLocaleDateString()}`;\n    const High = document.createElement(\"p\");\n    High.textContent = `High: ${day.tempmax}°F`;\n    High.classList.add(\"high-temp\");\n    const Low = document.createElement(\"p\");\n    Low.textContent = `Low: ${day.tempmin}°F`;\n    Low.classList.add(\"low-temp\");\n    forecastItem.appendChild(weekDay);\n    forecastItem.appendChild(theDate);\n    forecastItem.appendChild(High);\n    forecastItem.appendChild(Low);\n    futureForecastList.appendChild(forecastItem);\n  }\n  forcastContainer.appendChild(futureForecastList);\n  weatherDisplay.appendChild(toggleButton);\n  weatherDisplay.appendChild(currentWeather);\n  weatherDisplay.appendChild(futureForecastHeader);\n  weatherDisplay.appendChild(forcastContainer);\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderApp)();\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?\n}");

/***/ },

/***/ "./src/weather.js"
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location) {\n  try {\n    const response = await fetch(\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=FA3TURQUQ4VUL8WVYXZJHR5N5&unitGroup=us&contentType=json`,\n    );\n    if (!response.ok) {\n      throw new Error(`Weather request failed: ${response.status}`);\n    }\n\n    const weatherData = await response.json();\n    console.log(\"Weather data fetched successfully:\", weatherData);\n    return weatherData;\n  } catch (error) {\n    console.error(\"Error fetching weather data:\", error);\n    throw error;\n  }\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/weather.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;