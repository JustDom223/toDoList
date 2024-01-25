/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root.dark {
  --main-color-darkmode: rgb(39, 39, 39);
  --font-color-darkmode: rgb(109, 197, 255);
  --card-color-darkmode: rgb(95, 94, 94);
}

:root {
  --main-color-darkmode: rgb(255, 255, 255);
  --font-color-darkmode: rgb(0, 0, 0);
  --card-color-darkmode: rgb(221, 221, 221);
}

/* CSS Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

#content {
  height: 100svh;
  display: grid;
}
/* Header content */
header {
  display: flex;
  justify-content: space-between;
  background-color: var(--main-color-darkmode);
  color: var(--font-color-darkmode);
  grid-column: 1/3;
  grid-row: 1/2;
}

header h1{
  font-size: 32px;
}

.settingsDropDown {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 40px;
  transition: height 500ms ease-in-out;
}

.dropdownReveal {
  height: 100px;
}

.dropDownContent{
  border-radius: 12px;
  padding: 4px;
  background-color: var(--card-color-darkmode);
}

.dropDownButton{
  display: flex;
  height: 40px;
  border: none;
  background: none;

}

/* Sidebar content */
#sidebar {
  background-color: var(--main-color-darkmode);
  color: var(--font-color-darkmode);
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  width: fit-content;
}


.magGlassSVG{
  width: 40px;
  height: 40px;
  transition: transform 500ms ease-in-out;
}

.rotate{
  transform: rotate(360deg);
}
.filterBar{
  display: flex;
}
.sidebarList{
  /* border: 1px red solid; */
  width: 0px;
  height: 0px;
  overflow: hidden;
  transition: width 500ms ease-in-out, height 500ms ease-in-out;
}
.sidebarListItem{
  width: 100px;
}

.sidebarReveal{
  width: 100px;
  height: 100px;
}

/* Main content */
main {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: var(--main-color-darkmode);
  color: var(--font-color-darkmode);
  display: flex;
  flex-wrap: wrap;
}


.jobCard {
  background-color: var(--card-color-darkmode);
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  justify-self: center;
  margin: 20px;
  padding: 20px;
  height: 250px;
  max-width: 300px;
}

.projectForm {
  display: flex;
  height: 600px;
  width: 600px;
  flex-direction: column;
  justify-content: space-around;
}

.button {
  max-width: 100px;
  max-height: 100px;
}

#projectButton {
  justify-self: center;
  align-self: center;
}

/* Footer content */
footer {
  background-color: var(--main-color-darkmode);
  color: var(--font-color-darkmode);
  grid-column: 1/3;
  grid-row: 3/4;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,sCAAsC;EACtC,yCAAyC;EACzC,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;EACzC,mCAAmC;EACnC,yCAAyC;AAC3C;;AAEA,cAAc;AACd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,aAAa;AACf;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,8BAA8B;EAC9B,4CAA4C;EAC5C,iCAAiC;EACjC,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;;AAElB;;AAEA,oBAAoB;AACpB;EACE,4CAA4C;EAC5C,iCAAiC;EACjC,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,kBAAkB;AACpB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,6DAA6D;AAC/D;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,aAAa;EACb,4CAA4C;EAC5C,iCAAiC;EACjC,aAAa;EACb,eAAe;AACjB;;;AAGA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,+CAA+C;EAC/C,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,4CAA4C;EAC5C,iCAAiC;EACjC,gBAAgB;EAChB,aAAa;AACf","sourcesContent":[":root.dark {\n  --main-color-darkmode: rgb(39, 39, 39);\n  --font-color-darkmode: rgb(109, 197, 255);\n  --card-color-darkmode: rgb(95, 94, 94);\n}\n\n:root {\n  --main-color-darkmode: rgb(255, 255, 255);\n  --font-color-darkmode: rgb(0, 0, 0);\n  --card-color-darkmode: rgb(221, 221, 221);\n}\n\n/* CSS Reset */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n#content {\n  height: 100svh;\n  display: grid;\n}\n/* Header content */\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--main-color-darkmode);\n  color: var(--font-color-darkmode);\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\n\nheader h1{\n  font-size: 32px;\n}\n\n.settingsDropDown {\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  height: 40px;\n  transition: height 500ms ease-in-out;\n}\n\n.dropdownReveal {\n  height: 100px;\n}\n\n.dropDownContent{\n  border-radius: 12px;\n  padding: 4px;\n  background-color: var(--card-color-darkmode);\n}\n\n.dropDownButton{\n  display: flex;\n  height: 40px;\n  border: none;\n  background: none;\n\n}\n\n/* Sidebar content */\n#sidebar {\n  background-color: var(--main-color-darkmode);\n  color: var(--font-color-darkmode);\n  grid-column: 1/2;\n  grid-row: 2/3;\n  display: flex;\n  width: fit-content;\n}\n\n\n.magGlassSVG{\n  width: 40px;\n  height: 40px;\n  transition: transform 500ms ease-in-out;\n}\n\n.rotate{\n  transform: rotate(360deg);\n}\n.filterBar{\n  display: flex;\n}\n.sidebarList{\n  /* border: 1px red solid; */\n  width: 0px;\n  height: 0px;\n  overflow: hidden;\n  transition: width 500ms ease-in-out, height 500ms ease-in-out;\n}\n.sidebarListItem{\n  width: 100px;\n}\n\n.sidebarReveal{\n  width: 100px;\n  height: 100px;\n}\n\n/* Main content */\nmain {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  background-color: var(--main-color-darkmode);\n  color: var(--font-color-darkmode);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n.jobCard {\n  background-color: var(--card-color-darkmode);\n  border-radius: 12px;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);\n  justify-self: center;\n  margin: 20px;\n  padding: 20px;\n  height: 250px;\n  max-width: 300px;\n}\n\n.projectForm {\n  display: flex;\n  height: 600px;\n  width: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.button {\n  max-width: 100px;\n  max-height: 100px;\n}\n\n#projectButton {\n  justify-self: center;\n  align-self: center;\n}\n\n/* Footer content */\nfooter {\n  background-color: var(--main-color-darkmode);\n  color: var(--font-color-darkmode);\n  grid-column: 1/3;\n  grid-row: 3/4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pageManipulaton/footer.js":
/*!***************************************!*\
  !*** ./src/pageManipulaton/footer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footerElement = document.createElement("footer");
  footerElement.textContent = "This is the footer";
  return footerElement;
}


/***/ }),

/***/ "./src/pageManipulaton/header.js":
/*!***************************************!*\
  !*** ./src/pageManipulaton/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateHeader)
/* harmony export */ });
/* harmony import */ var _assets_svg_settings_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/svg/settings-svgrepo-com.svg */ "./src/assets/svg/settings-svgrepo-com.svg");
/* harmony import */ var _script_toggleDynamicBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script/toggleDynamicBar */ "./src/script/toggleDynamicBar.js");
/* harmony import */ var _script_createSVGImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script/createSVGImg */ "./src/script/createSVGImg.js");




function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
// Children for tabs



function activateHeader() {
  // Find elements
  const settingsDropDown = document.querySelector(".settingsDropDown")
  const dropDownButtonElement = document.querySelector(".dropDownButton")
  const lightDarkButton = document.querySelector("#theme")
  // Add the image to our existing div.
  dropDownButtonElement.appendChild((0,_script_createSVGImg__WEBPACK_IMPORTED_MODULE_2__["default"])(_assets_svg_settings_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__, "cogSVG"))
  lightDarkButton.addEventListener("click", () => {
    toggleTheme();
  });

  dropDownButtonElement.addEventListener("click", () =>{
    (0,_script_toggleDynamicBar__WEBPACK_IMPORTED_MODULE_1__["default"])(settingsDropDown, "down")
  })
}

/***/ }),

/***/ "./src/pageManipulaton/main.js":
/*!*************************************!*\
  !*** ./src/pageManipulaton/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
function createMain() {
  // Create the main element
  const mainElement = document.createElement("main");
  // Create children for main element
  const headingElement = document.createElement("h1");
  // Add content to children
  headingElement.innerHTML = "This is the main content";
  // Populate main
  mainElement.appendChild(headingElement);

  return mainElement;
}


/***/ }),

/***/ "./src/pageManipulaton/sideBar.js":
/*!****************************************!*\
  !*** ./src/pageManipulaton/sideBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateSidebar)
/* harmony export */ });
/* harmony import */ var _script_createSVGImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script/createSVGImg */ "./src/script/createSVGImg.js");
/* harmony import */ var _script_toggleDynamicBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script/toggleDynamicBar */ "./src/script/toggleDynamicBar.js");
/* harmony import */ var _script_rotateElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../script/rotateElement */ "./src/script/rotateElement.js");
/* harmony import */ var _assets_svg_magnifier_glass_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/magnifier-glass-svgrepo-com.svg */ "./src/assets/svg/magnifier-glass-svgrepo-com.svg");
// Importing functions
// import populateMain from "../script/populateMain";




// importing SVG files


// export default function createSidebar() {
//   // Create Sidebar
//   const sideBarElement = document.createElement("div");
//   sideBarElement.id = "sidebar";

//   const sideBarHeadingElement = document.createElement("h1");
//   sideBarHeadingElement.textContent = "Timeline";

//   // Sidebar children
//   const sideBarTabs = document.createElement("ul");

//   // Create list items
//   const tabProjects = document.createElement("li");
//   const tabToday = document.createElement("li");
//   const tabThisWeek = document.createElement("li");
//   const tabThisMonth = document.createElement("li");
//   const tabThisQuater = document.createElement("li");

//   // Create Tabchildren
//   tabProjects.textContent = "Projects";
//   tabToday.textContent = "Today";
//   tabThisWeek.textContent = "This Week";
//   tabThisMonth.textContent = "This Month";
//   tabThisQuater.textContent = "This Quater";

//   // Tab ID's
//   sideBarTabs.id = "tabs";
//   tabProjects.id = "projects";
//   tabToday.id = "today";
//   tabThisWeek.id = "week";
//   tabThisMonth.id = "month";
//   tabThisQuater.id = "quater";

//   // Tab classes
//   sideBarTabs.classList.add("tabs");
//   tabProjects.classList.add("tab");
//   tabToday.classList.add("tab");
//   tabThisWeek.classList.add("tab");
//   tabThisMonth.classList.add("tab");
//   tabThisQuater.classList.add("tab");

//   // Adding event listeners
//   sideBarTabs.addEventListener("click", (event) => {
//     const contentElement = document.querySelector("#content");
//     const clickedTab = event.target.closest("li");
//     if (clickedTab.classList.contains("tab")) {
//       console.log(`You clicked ${clickedTab.id}`);
//       const clickedElementId = clickedTab.id;

//       const newMainContent = populateMain(clickedElementId);

//       // Replace the existing main content with the new one
//       const existingMainElement = document.querySelector("main");
//       contentElement.replaceChild(newMainContent, existingMainElement);
//       // setActiveTab(clickedElementId)
//     }
//   });

//   // Add items to list
//   sideBarTabs.appendChild(tabProjects);
//   sideBarTabs.appendChild(tabToday);
//   sideBarTabs.appendChild(tabThisWeek);
//   sideBarTabs.appendChild(tabThisMonth);
//   sideBarTabs.appendChild(tabThisQuater);

//   // Add content to elements
//   sideBarElement.appendChild(sideBarHeadingElement);
//   sideBarElement.appendChild(sideBarTabs);
//   return sideBarElement;
// }

function activateSidebar(){
  const filterBarElement = document.querySelector(".filterBar")
  const sidebarMagGlassElement = (0,_script_createSVGImg__WEBPACK_IMPORTED_MODULE_0__["default"])(_assets_svg_magnifier_glass_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__, "magGlassSVG")
  const sidebarListElement = document.querySelector(".sidebarList")
  filterBarElement.appendChild(sidebarMagGlassElement)
  sidebarMagGlassElement.addEventListener("click", () => {
    ;(0,_script_toggleDynamicBar__WEBPACK_IMPORTED_MODULE_1__["default"])(sidebarListElement, "side")
    ;(0,_script_rotateElement__WEBPACK_IMPORTED_MODULE_2__["default"])(sidebarMagGlassElement)
  })

}

/***/ }),

/***/ "./src/script/constructors.js":
/*!************************************!*\
  !*** ./src/script/constructors.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
// Function to create a task
function createTask(description, priority, dateCreated, dueDate) {
  return {
    description,
    priority,
    dateCreated,
    dueDate,

    complete: false,
    taskCompletion() {
      if (this.complete) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    },
  };
}
// Function to create a project
function createProject(
  title,
  description,
  startDate,
  dueDate,
  priority,
) {
  return {
    title,
    description,
    startDate,
    dueDate,
    priority,
    tasks: [],
    today: false,
    complete: false,
    taskCompletion() {
      if (this.complete) {
        this.complete = false;
      } else {
        this.complete = true;
      }
    },
    createTask(taskDescription, taskPriority) {
      const newTask = createTask(taskDescription, taskPriority);
      this.tasks.push(newTask);
      return newTask;
    },
  };
}


/***/ }),

/***/ "./src/script/createNewProject.js":
/*!****************************************!*\
  !*** ./src/script/createNewProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewProjectForm),
/* harmony export */   submitProject: () => (/* binding */ submitProject)
/* harmony export */ });
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ "./src/script/constructors.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");
/* harmony import */ var _populateMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateMain */ "./src/script/populateMain.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/script/localStorage.js");





function submitProject() {
  const form = document.querySelector("#projectForm");
  const formData = new FormData(form);
  const currentDate = new Date();
  const newProject = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createProject)(
    formData.get("titleInput"),
    formData.get("descInput"),
    currentDate,
    formData.get("dueDateInput"),
    formData.get("priorityInput"),
  );
  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProjects)().unshift(newProject);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
}
function createNewProjectForm() {
  // Create form
  const formElement = document.createElement("form");
  // Create form children
  const formTitleElement = document.createElement("h1");

  const titleInputContainer = document.createElement("div");
  const formProjectTitleLabelElement = document.createElement("label");
  const formProjectTitleInputElement = document.createElement("input");

  const descInputContainer = document.createElement("div");
  const formProjectDescLabelElement = document.createElement("label");
  const formProjectDescInputElement = document.createElement("input");

  const dueInputContainer = document.createElement("div");
  const formProjectDueDateLabelElement = document.createElement("label");
  const formProjectDueDateInputElement = document.createElement("input");

  const priInputContainer = document.createElement("div");
  const formProjectPriorityLabelElement = document.createElement("label");
  const formProjectPriorityInputElement = document.createElement("select");

  const formSubmitButton = document.createElement("input");

  // Choosing element type
  formProjectDueDateInputElement.type = "date";
  formSubmitButton.type = "button";

  // Element classes
  formElement.classList.add("projectForm");

  // Label elements
  formProjectTitleLabelElement.classList.add("label");
  formProjectDescLabelElement.classList.add("label");
  formProjectDueDateLabelElement.classList.add("label");
  formProjectPriorityLabelElement.classList.add("label");

  formProjectTitleInputElement.classList.add("input");
  formProjectDescInputElement.classList.add("input");
  formProjectDueDateInputElement.classList.add("input");
  formProjectPriorityInputElement.classList.add("input");

  // Element ID's
  formElement.id = "projectForm";
  formProjectTitleInputElement.id = "titleInput";
  formProjectDescInputElement.id = "descInput";
  formProjectDueDateInputElement.id = "dueDateInput";
  formProjectPriorityInputElement.id = "priorityInput";

  formProjectTitleInputElement.name = "titleInput";
  formProjectDescInputElement.name = "descInput";
  formProjectDueDateInputElement.name = "dueDateInput";
  formProjectPriorityInputElement.name = "priorityInput";

  // Adding content to elements
  formTitleElement.textContent = "Create your new project.";
  formProjectTitleLabelElement.textContent = "Project Title: ";
  formProjectDescLabelElement.textContent = "Project Description: ";
  formProjectDueDateLabelElement.textContent = "Project Due Date: ";
  formProjectPriorityLabelElement.textContent = "Project Priority: ";
  formSubmitButton.value = "Submit new project";

  // Logic for select options
  const priorityOptions = ["High", "Medium", "Low"];
  priorityOptions.forEach((option) => {
    const optionsElement = document.createElement("option");
    optionsElement.value = option;
    optionsElement.text = option;

    formProjectPriorityInputElement.appendChild(optionsElement);
  });

  // Adding an event listener to the submit button
  formSubmitButton.addEventListener("click", (event) => {
    const dialogElement = document.querySelector("dialog");
    event.preventDefault();
    submitProject();
    dialogElement.close();
    // Updating DOM
    (0,_populateMain__WEBPACK_IMPORTED_MODULE_2__["default"])("projects");
  });

  // Add children to containers
  titleInputContainer.appendChild(formProjectTitleLabelElement);
  titleInputContainer.appendChild(formProjectTitleInputElement);

  descInputContainer.appendChild(formProjectDescLabelElement);
  descInputContainer.appendChild(formProjectDescInputElement);

  dueInputContainer.appendChild(formProjectDueDateLabelElement);
  dueInputContainer.appendChild(formProjectDueDateInputElement);

  priInputContainer.appendChild(formProjectPriorityLabelElement);
  priInputContainer.appendChild(formProjectPriorityInputElement);

  // Add children to formElement
  formElement.appendChild(formTitleElement);
  formElement.appendChild(titleInputContainer);
  formElement.appendChild(descInputContainer);
  formElement.appendChild(dueInputContainer);
  formElement.appendChild(priInputContainer);
  formElement.appendChild(formSubmitButton);

  return formElement;
}


/***/ }),

/***/ "./src/script/createNewTask.js":
/*!*************************************!*\
  !*** ./src/script/createNewTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewTaskForm),
/* harmony export */   submitTask: () => (/* binding */ submitTask)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");
/* harmony import */ var _populateMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateMain */ "./src/script/populateMain.js");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ "./src/script/constructors.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/script/localStorage.js");





function submitTask(projectTitle) {
  const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
  for (const project of projects) {
    if (project.title === projectTitle) {
      const form = document.querySelector("#taskForm");
      const formData = new FormData(form);
      const currentDate = new Date();
      const newTask = (0,_constructors__WEBPACK_IMPORTED_MODULE_2__.createTask)(
        formData.get("descInput"),
        formData.get("priorityInput"),
        currentDate,
        formData.get("dueDateInput"),
      );

      project.tasks.unshift(newTask);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage)();
      break;
    }
  }
}
function createNewTaskForm() {
  // Create form
  const formElement = document.createElement("form");
  // Create form children
  const formTitleElement = document.createElement("h1");

  const descInputContainer = document.createElement("div");
  const formTaskDescLabelElement = document.createElement("label");
  const formTaskDescInputElement = document.createElement("input");

  const dueInputContainer = document.createElement("div");
  const formTaskDueDateLabelElement = document.createElement("label");
  const formTaskDueDateInputElement = document.createElement("input");

  const priorityInputContainer = document.createElement("div");
  const formTaskPriorityLabelElement = document.createElement("label");
  const formTaskPriorityInputElement = document.createElement("select");

  const formSubmitButton = document.createElement("input");

  // Choosing element type
  formTaskDueDateInputElement.type = "date";
  formSubmitButton.type = "button";

  // Element classes
  formElement.classList.add("taskForm");

  // Label elements
  formTaskDescLabelElement.classList.add("label");
  formTaskDueDateLabelElement.classList.add("label");
  formTaskPriorityLabelElement.classList.add("label");

  formTaskDescInputElement.classList.add("input");
  formTaskDueDateInputElement.classList.add("input");
  formTaskPriorityInputElement.classList.add("input");

  // Element ID's
  formElement.id = "taskForm";
  formTaskDescInputElement.id = "descInput";
  formTaskDueDateInputElement.id = "dueDateInput";
  formTaskPriorityInputElement.id = "priorityInput";

  formTaskDescInputElement.name = "descInput";
  formTaskDueDateInputElement.name = "dueDateInput";
  formTaskPriorityInputElement.name = "priorityInput";

  // Adding content to elements
  formTitleElement.textContent = "Add task";
  formTaskDescLabelElement.textContent = "Task Description: ";
  formTaskDueDateLabelElement.textContent = "Task Due Date: ";
  formTaskPriorityLabelElement.textContent =
    "Task Priority: (1 being highest priority and 10 being lowest)";
  formSubmitButton.value = "Submit new task";

  // Logic for select options
  const priorityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  priorityOptions.forEach((option) => {
    const optionsElement = document.createElement("option");
    optionsElement.value = option;
    optionsElement.text = option;

    formTaskPriorityInputElement.appendChild(optionsElement);
  });

  // Adding an event listener to the submit button
  formSubmitButton.addEventListener("click", (event) => {
    const taskFormButtonElement = document.querySelector("#taskButton");
    const { projectTitle } = taskFormButtonElement.dataset;
    const dialogElement = document.querySelector("dialog");
    event.preventDefault();
    submitTask(projectTitle);
    dialogElement.close();
    // Updating DOM
    (0,_populateMain__WEBPACK_IMPORTED_MODULE_1__["default"])("taskButton", projectTitle);
  });

  // Add children to containers

  descInputContainer.appendChild(formTaskDescLabelElement);
  descInputContainer.appendChild(formTaskDescInputElement);

  dueInputContainer.appendChild(formTaskDueDateLabelElement);
  dueInputContainer.appendChild(formTaskDueDateInputElement);

  priorityInputContainer.appendChild(formTaskPriorityLabelElement);
  priorityInputContainer.appendChild(formTaskPriorityInputElement);

  // Add children to formElement
  formElement.appendChild(formTitleElement);
  formElement.appendChild(descInputContainer);
  formElement.appendChild(dueInputContainer);
  formElement.appendChild(priorityInputContainer);
  formElement.appendChild(formSubmitButton);

  return formElement;
}


/***/ }),

/***/ "./src/script/createSVGImg.js":
/*!************************************!*\
  !*** ./src/script/createSVGImg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSVGImg)
/* harmony export */ });
function createSVGImg(importedSVG, assignedClass) {
    const svgImage = new Image();
    svgImage.src = importedSVG;
    svgImage.classList.add(assignedClass);
    return svgImage;
  }

/***/ }),

/***/ "./src/script/initializeProjects.js":
/*!******************************************!*\
  !*** ./src/script/initializeProjects.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeProjects)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");
/* harmony import */ var _populateMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateMain */ "./src/script/populateMain.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/script/localStorage.js");




function initializeProjects() {
  const currentDate = new Date();
  const projectCards = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)()
    .filter((project) => {
      const startDate = new Date(project.startDate);
      return startDate <= currentDate;
    })
    .map((project) => {
      // Create elements for Menupage;;
      const projectCardElement = document.createElement("div");
      const projectTitleElement = document.createElement("h2");
      const projectDescElement = document.createElement("p");
      const projectDueDateLabelElement = document.createElement("label");
      const projectDueDateElement = document.createElement("input");
      const projectPriorityElement = document.createElement("p");
      const projectCompletionElement = document.createElement("input");
      const projectTasksButtonElement = document.createElement("input");
      const projectDeleteButtonElement = document.createElement("input");

      // Adding a class to the card
      projectCardElement.classList.add("jobCard");
      projectTitleElement.classList.add("jobTitle");
      projectDueDateLabelElement.classList.add("jobDueDateLabel");
      projectDueDateElement.classList.add("jobDueDate");
      projectPriorityElement.classList.add("jobPriority");
      projectTasksButtonElement.classList.add("button");
      projectDeleteButtonElement.classList.add("button");

      // Adding ID to
      projectTasksButtonElement.id = "taskButton";
      projectDeleteButtonElement.id = "deleteButton";

      // projectDeleteButtonElement
      projectDeleteButtonElement.dataset.projectTitle = project.title;

      // Choosing element type
      projectDueDateElement.type = "date";
      projectCompletionElement.type = "checkbox";
      projectTasksButtonElement.type = "button";
      projectDeleteButtonElement.type = "button";
      // Adding content to elements
      projectTitleElement.innerHTML = project.title;
      projectDescElement.innerHTML = project.description;
      projectDueDateLabelElement.innerHTML = "Due Date: ";
      projectDueDateElement.value = project.dueDate;
      projectPriorityElement.innerHTML = project.priority;
      projectTasksButtonElement.value = "Project Tasks";
      projectDeleteButtonElement.value = "Delete Project";

      // Creating event listeners to the Task button
      // Adding event listeners
      projectTasksButtonElement.addEventListener("click", () => {
        (0,_populateMain__WEBPACK_IMPORTED_MODULE_1__["default"])("taskButton", project.title);
      });

      projectDeleteButtonElement.addEventListener("click", () => {
        const { projectTitle } = projectDeleteButtonElement.dataset;
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectTitle);
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)();
        (0,_populateMain__WEBPACK_IMPORTED_MODULE_1__["default"])("projects");
      });
      // console.log(projectTasksButtonElement.id)
      projectCardElement.appendChild(projectTitleElement);
      projectCardElement.appendChild(projectDescElement);
      projectCardElement.appendChild(projectDueDateLabelElement);
      projectCardElement.appendChild(projectDueDateElement);
      projectCardElement.appendChild(projectPriorityElement);
      projectCardElement.appendChild(projectCompletionElement);
      projectCardElement.appendChild(projectTasksButtonElement);
      projectCardElement.appendChild(projectDeleteButtonElement);

      return projectCardElement;
    });
  return projectCards;
}


/***/ }),

/***/ "./src/script/initializeTasks.js":
/*!***************************************!*\
  !*** ./src/script/initializeTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeTasks)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");


function initializeTasks(projectTitle) {
  const selectedProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)().find(
    (project) => project.title === projectTitle,
  );
  const taskCards = selectedProject.tasks.map((task) => {
    // Create elements for Menupage
    const taskCardElement = document.createElement("div");
    const taskDescElement = document.createElement("p");
    const taskPriorityElement = document.createElement("p");
    const taskCompletionElement = document.createElement("input");

    // Adding a class to the card
    taskCardElement.classList.add("jobCard");
    taskPriorityElement.classList.add("jobPriority");

    // Adding ID to

    // Choosing element type
    taskCompletionElement.type = "checkbox";

    // Adding content to elements
    taskDescElement.innerHTML = task.description;
    taskPriorityElement.innerHTML = task.priority;

    // Creating event listeners to the Task button
    // Adding event listeners

    taskCardElement.appendChild(taskDescElement);
    taskCardElement.appendChild(taskPriorityElement);
    taskCardElement.appendChild(taskCompletionElement);
    return taskCardElement;
  });

  return taskCards;
}


/***/ }),

/***/ "./src/script/localStorage.js":
/*!************************************!*\
  !*** ./src/script/localStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLocalStorage: () => (/* binding */ fetchLocalStorage),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");


function updateLocalStorage() {
  const projectsString = JSON.stringify((0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  localStorage.setItem("myProjects", projectsString);
}

function fetchLocalStorage() {
  const retrievedProjectsString = localStorage.getItem("myProjects");

  if (retrievedProjectsString) {
    const retrievedProjects = JSON.parse(retrievedProjectsString);
    for (const project of retrievedProjects) {
      project.taskCompletion = function () {
        if (this.complete) {
          this.complete = false;
        } else {
          this.complete = true;
        }
      };
      project.createTask = function (
        description,
        priority,
        dateCreated,
        dueDate,
      ) {
        return {
          description,
          priority,
          dateCreated,
          dueDate,

          complete: false,
          taskCompletion() {
            if (this.complete) {
              this.complete = false;
            } else {
              this.complete = true;
            }
          },
        };
      };
    }
    console.log(retrievedProjects);
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.setProjects)(retrievedProjects);
  }
}


/***/ }),

/***/ "./src/script/populateMain.js":
/*!************************************!*\
  !*** ./src/script/populateMain.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectButton: () => (/* binding */ createProjectButton),
/* harmony export */   createTaskButton: () => (/* binding */ createTaskButton),
/* harmony export */   "default": () => (/* binding */ populateMain)
/* harmony export */ });
/* harmony import */ var _initializeProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializeProjects */ "./src/script/initializeProjects.js");
/* harmony import */ var _initializeTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeTasks */ "./src/script/initializeTasks.js");
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewProject */ "./src/script/createNewProject.js");
/* harmony import */ var _createNewTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNewTask */ "./src/script/createNewTask.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/script/projects.js");






function createTaskButton(projectTitle) {
  // Access existing elements
  const selectedProject = (0,_projects__WEBPACK_IMPORTED_MODULE_4__.getProjects)().find(
    (project) => project.title === projectTitle,
  );
  const dialogElement = document.querySelector("dialog");
  // Create button element
  const taskButtonElement = document.createElement("input");
  // Choosing element type
  taskButtonElement.type = "button";
  // Adding content to button
  taskButtonElement.value = "Create new task";
  // Add project title as data
  taskButtonElement.dataset.projectTitle = selectedProject.title;
  // Adding classes to element
  taskButtonElement.classList.add("button");
  // Adding ID's
  taskButtonElement.id = "taskButton";

  taskButtonElement.addEventListener("click", () => {
    dialogElement.textContent = "";
    dialogElement.appendChild((0,_createNewTask__WEBPACK_IMPORTED_MODULE_3__["default"])());
    dialogElement.showModal();
  });
  return taskButtonElement;
}

function createProjectButton() {
  // Access existing elements
  const dialogElement = document.querySelector("dialog");
  // Create button element
  const projectButtonElement = document.createElement("input");
  // Choosing element type
  projectButtonElement.type = "button";
  // Adding content to button
  projectButtonElement.value = "New Project";
  // Adding classes to element
  projectButtonElement.classList.add("button");
  // Adding ID's
  projectButtonElement.id = "projectButton";

  projectButtonElement.addEventListener("click", () => {
    dialogElement.textContent = "";
    dialogElement.appendChild((0,_createNewProject__WEBPACK_IMPORTED_MODULE_2__["default"])());
    dialogElement.showModal();
  });
  return projectButtonElement;
}

function populateMain(clickedElementId, projectTitle) {
  const mainElement = document.querySelector("main");
  // Clear main
  mainElement.textContent = "";

  // Adding content to main elements

  if (clickedElementId === "projects") {
    const newProjectButton = createProjectButton();
    const toDoCards = (0,_initializeProjects__WEBPACK_IMPORTED_MODULE_0__["default"])();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    mainElement.appendChild(newProjectButton);
  } else if (clickedElementId === "today") {
    const toDoCards = (0,_initializeProjects__WEBPACK_IMPORTED_MODULE_0__["default"])();
    toDoCards.forEach((project) => {
      mainElement.appendChild(project);
    });
    //   } else if (clickedElementId === 'week') {
    //     const toDoCards = initializeWeek();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementId === 'month') {
    //     const toDoCards = initializeMonth();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
    //   } else if (clickedElementId === 'quater') {
    //     const toDoCards = initializeQuater();
    //     toDoCards.forEach((project) => {
    //       mainElement.appendChild(project);
    //     });
  } else if (clickedElementId === "taskButton") {
    const projectHeading = document.createElement("h1");
    projectHeading.innerText = projectTitle;
    const taskCards = (0,_initializeTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(projectTitle);
    taskCards.forEach((task) => {
      mainElement.appendChild(task);
    });
    const newTaskButton = createTaskButton(projectTitle);
    mainElement.appendChild(newTaskButton);
  }
  return mainElement;
}


/***/ }),

/***/ "./src/script/projects.js":
/*!********************************!*\
  !*** ./src/script/projects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   setProjects: () => (/* binding */ setProjects)
/* harmony export */ });
let projects = [];

function getProjects() {
  return projects;
}

function setProjects(newProjects) {
  projects = newProjects;
}

function deleteProject(projectTitle) {
  const isConfirmed = confirm("Are you sure you want to delete this project?");
  if (isConfirmed) {
    const newProjects = projects.filter(
      (project) => project.title !== projectTitle,
    );
    projects = newProjects;
  }
}

function replaceConstructorFunctions() {}


/***/ }),

/***/ "./src/script/rotateElement.js":
/*!*************************************!*\
  !*** ./src/script/rotateElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rotateElement)
/* harmony export */ });
function rotateElement(element){
    element.classList.toggle("rotate")
}

/***/ }),

/***/ "./src/script/toggleDynamicBar.js":
/*!****************************************!*\
  !*** ./src/script/toggleDynamicBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleDynamicBar)
/* harmony export */ });
function toggleDynamicBar(element, direction) {
  if(direction === "down"){
    element.classList.toggle("dropdownReveal");
  }else if(direction === "side"){
    element.classList.toggle("sidebarReveal")
  }}

/***/ }),

/***/ "./src/assets/svg/magnifier-glass-svgrepo-com.svg":
/*!********************************************************!*\
  !*** ./src/assets/svg/magnifier-glass-svgrepo-com.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "magnifier-glass-svgrepo-com.svg";

/***/ }),

/***/ "./src/assets/svg/settings-svgrepo-com.svg":
/*!*************************************************!*\
  !*** ./src/assets/svg/settings-svgrepo-com.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "settings-svgrepo-com.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pageManipulaton_sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageManipulaton/sideBar */ "./src/pageManipulaton/sideBar.js");
/* harmony import */ var _pageManipulaton_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageManipulaton/main */ "./src/pageManipulaton/main.js");
/* harmony import */ var _pageManipulaton_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageManipulaton/footer */ "./src/pageManipulaton/footer.js");
/* harmony import */ var _script_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/localStorage */ "./src/script/localStorage.js");
/* harmony import */ var _script_populateMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/populateMain */ "./src/script/populateMain.js");
/* harmony import */ var _pageManipulaton_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageManipulaton/header */ "./src/pageManipulaton/header.js");


// import createHeader from "./pageManipulaton/header";
// import createSidebar from "./pageManipulaton/sideBar";







document.addEventListener("DOMContentLoaded", () => {
  (0,_script_localStorage__WEBPACK_IMPORTED_MODULE_4__.fetchLocalStorage)();
  // DOM is fully parsed and ready for manipulation

  const contentElement = document.querySelector("#content");

  (0,_pageManipulaton_header__WEBPACK_IMPORTED_MODULE_6__["default"])()
  ;(0,_pageManipulaton_sideBar__WEBPACK_IMPORTED_MODULE_1__["default"])()
  // contentElement.appendChild(createSidebar());
  contentElement.appendChild((0,_pageManipulaton_main__WEBPACK_IMPORTED_MODULE_2__["default"])());
  contentElement.appendChild((0,_pageManipulaton_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());

  (0,_script_populateMain__WEBPACK_IMPORTED_MODULE_5__["default"])("projects");
});

})();

/******/ })()
;
//# sourceMappingURL=bundlec09f50090da8212ea179.js.map