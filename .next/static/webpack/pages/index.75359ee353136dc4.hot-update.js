"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/demos/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/demos/index.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Split */ \"./src/components/Split/index.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/addParlx */ \"./src/common/addParlx.js\");\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var _works2_works2_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../works2/works2-light */ \"./src/pages/works2/works2-light.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Demos = function() {\n    _s1();\n    var fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setInterval(function() {\n            if (fixedHeader.current) {\n                var slidHeight = fixedHeader.current.offsetHeight;\n            }\n            if (MainContent.current) {\n                MainContent.current.style.marginTop = slidHeight + \"px\";\n            }\n        }, 1000);\n    }, [\n        fixedHeader,\n        MainContent\n    ]);\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageLoaded = ref[0], setPageLoaded = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setPageLoaded(true);\n        if (pageLoaded) {\n            setTimeout(function() {\n                (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n            }, 1000);\n            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            document.querySelector(\"body\").style.backgroundColor = \"#181b21\";\n        }\n    }, [\n        pageLoaded\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_Light__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n            lineNumber: 37,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_works2_works2_light__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            __source: {\n                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            },\n            __self: _this\n        })\n    }));\n};\n_s1(Demos, \"tgvbGGL9ovLb807yNfNw9iYyb8U=\");\n_c = Demos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demos);\nvar _c;\n$RefreshReg$(_c, \"Demos\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGVtb3MvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQThDLDZDQUNyQjtBQUNHO0FBQ2M7QUFDQTtBQUNFO0FBQ007QUFDRjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLEdBQUssQ0FBQ1EsS0FBSyxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNuQixHQUFLLENBQUNDLFdBQVcsR0FBR1QsbURBQVksQ0FBQyxJQUFJO0lBQ3JDLEdBQUssQ0FBQ1csV0FBVyxHQUFHWCxtREFBWSxDQUFDLElBQUk7SUFFckNBLHNEQUFlLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckJhLFdBQVcsQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNqQixFQUFFLEVBQUVKLFdBQVcsQ0FBQ0ssT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHTixXQUFXLENBQUNLLE9BQU8sQ0FBQ0UsWUFBWTtZQUNuRCxDQUFDO1lBQ0QsRUFBRSxFQUFFTCxXQUFXLENBQUNHLE9BQU8sRUFBRSxDQUFDO2dCQUN4QkgsV0FBVyxDQUFDRyxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsU0FBUyxHQUFHSCxVQUFVLEdBQUcsQ0FBSTtZQUN6RCxDQUFDO1FBQ0gsQ0FBQyxFQUFFLElBQUk7SUFDVCxDQUFDLEVBQUUsQ0FBQ047UUFBQUEsV0FBVztRQUFFRSxXQUFXO0lBQUEsQ0FBQztJQUM3QixHQUFLLENBQStCWCxHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxPQUFqRG9CLFVBQVUsR0FBbUJwQixHQUFxQixLQUF0Q3FCLGFBQWEsR0FBSXJCLEdBQXFCO0lBQ3pEQSxzREFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ3JCcUIsYUFBYSxDQUFDLElBQUk7UUFDbEIsRUFBRSxFQUFFRCxVQUFVLEVBQUUsQ0FBQztZQUNmRSxVQUFVLENBQUMsUUFBUSxHQUFGLENBQUM7Z0JBQ2hCakIsK0RBQVc7WUFDYixDQUFDLEVBQUUsSUFBSTtZQUNQRCw0REFBUTtZQUNSbUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBTSxPQUFFUCxLQUFLLENBQUNRLGVBQWUsR0FBRyxDQUFTO1FBQ2xFLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0w7UUFBQUEsVUFBVTtJQUFBLENBQUM7SUFDZixNQUFNLHNFQUNIYixzREFBVTs7Ozs7Ozt1RkFDTkQsNERBQVc7Ozs7Ozs7OztBQUdwQixDQUFDO0lBOUJLRSxLQUFLO0tBQUxBLEtBQUs7QUFnQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGVtb3MvaW5kZXguanN4PzBjN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwbGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NwbGl0XCI7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvRGFya1wiO1xyXG5pbXBvcnQgYWRkUGFybHggZnJvbSBcIi4uLy4uL2NvbW1vbi9hZGRQYXJseFwiO1xyXG5pbXBvcnQgaW5pdElzb3RvcGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9pbml0SXNvdG9wZVwiO1xyXG5pbXBvcnQgV29ya3MyTGlnaHQgZnJvbSBcIi4uL3dvcmtzMi93b3JrczItbGlnaHRcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvTGlnaHRcIjtcclxuXHJcbmNvbnN0IERlbW9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpeGVkSGVhZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IE1haW5Db250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoZml4ZWRIZWFkZXIuY3VycmVudCkge1xyXG4gICAgICAgIHZhciBzbGlkSGVpZ2h0ID0gZml4ZWRIZWFkZXIuY3VycmVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKE1haW5Db250ZW50LmN1cnJlbnQpIHtcclxuICAgICAgICBNYWluQ29udGVudC5jdXJyZW50LnN0eWxlLm1hcmdpblRvcCA9IHNsaWRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtmaXhlZEhlYWRlciwgTWFpbkNvbnRlbnRdKTtcclxuICBjb25zdCBbcGFnZUxvYWRlZCwgc2V0UGFnZUxvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VMb2FkZWQodHJ1ZSk7XHJcbiAgICBpZiAocGFnZUxvYWRlZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbml0SXNvdG9wZSgpO1xyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgICBhZGRQYXJseCgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxODFiMjFcIjtcclxuICAgIH1cclxuICB9LCBbcGFnZUxvYWRlZF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlnaHRUaGVtZT5cclxuICAgICAgICA8V29ya3MyTGlnaHQgLz5cclxuICAgIDwvTGlnaHRUaGVtZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVtb3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJTcGxpdCIsIkRhcmtUaGVtZSIsImFkZFBhcmx4IiwiaW5pdElzb3RvcGUiLCJXb3JrczJMaWdodCIsIkxpZ2h0VGhlbWUiLCJEZW1vcyIsImZpeGVkSGVhZGVyIiwidXNlUmVmIiwiTWFpbkNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzbGlkSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ1c2VTdGF0ZSIsInBhZ2VMb2FkZWQiLCJzZXRQYWdlTG9hZGVkIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/demos/index.jsx\n");

/***/ })

});