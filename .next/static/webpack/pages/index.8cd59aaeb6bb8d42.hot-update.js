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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Split */ \"./src/components/Split/index.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/addParlx */ \"./src/common/addParlx.js\");\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var _works2_works2_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../works2/works2-light */ \"./src/pages/works2/works2-light.jsx\");\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _components_Works_three_column_with_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Works-three-column-with-filter */ \"./src/components/Works-three-column-with-filter/index.jsx\");\n/* harmony import */ var _components_Small_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Small-footer */ \"./src/components/Small-footer/index.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Demos = function() {\n    _s1();\n    var fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageLoaded = ref[0], setPageLoaded = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        document.querySelector('body').classList.add('menubarblack');\n        setPageLoaded(true);\n        if (pageLoaded) {\n            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        }\n    }, [\n        pageLoaded\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setInterval(function() {\n            if (fixedHeader.current) {\n                var slidHeight = fixedHeader.current.offsetHeight;\n            }\n            if (MainContent.current) {\n                MainContent.current.style.marginTop = slidHeight + \"px\";\n            }\n        }, 1000);\n        var navbar = navbarRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, [\n        fixedHeader,\n        MainContent,\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                nr: navbarRef,\n                lr: logoRef,\n                theme: \"themeL\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n                ref: fixedHeader,\n                className: \"works-header fixed-slider hfixd valign\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container\",\n                    __source: {\n                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"row justify-content-center\",\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-lg-9 col-md-11 static\",\n                            __source: {\n                                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"capt mt-50\",\n                                __source: {\n                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"parlx\",\n                                        __source: {\n                                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                                className: \"custom-font\",\n                                                __source: {\n                                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this,\n                                                children: \"My amazing works\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                __source: {\n                                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this,\n                                                children: \"Creative way to showcase your works at their absolute best.\"\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"bactxt custom-font valign\",\n                                        __source: {\n                                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                            className: \"full-width\",\n                                            __source: {\n                                                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            },\n                                            __self: _this,\n                                            children: \"Works\"\n                                        })\n                                    })\n                                ]\n                            })\n                        })\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                ref: MainContent,\n                className: \"main-content\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Works_three_column_with_filter__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        filterPosition: \"right\",\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Small_footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/demos/index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Demos, \"pfiOzXaAvaiSMLO+8hLANXjkoZ8=\");\n_c = Demos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demos);\nvar _c;\n$RefreshReg$(_c, \"Demos\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUE0Qjs7Ozs7Ozt1R0FDeENDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUEyQjs7Ozs7Ozs0R0FDdkNDLENBQUc7Z0NBQUNELFNBQVMsRUFBQyxDQUFZOzs7Ozs7OzswR0FDeEJDLENBQUc7d0NBQUNELFNBQVMsRUFBQyxDQUFPOzs7Ozs7OztpSEFDbkJFLENBQUU7Z0RBQUNGLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzBEQUFDLENBQWdCOztpSEFDM0NHLENBQUM7Ozs7Ozs7MERBQUMsQ0FFSDs7Ozt5R0FHREYsQ0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLENBQTJCOzs7Ozs7O3VIQUN2Q0ksQ0FBSTs0Q0FBQ0osU0FBUyxFQUFDLENBQVk7Ozs7Ozs7c0RBQUMsQ0FBSzs7Ozs7Ozs7O2tGQU83Q0MsQ0FBRztnQkFBQ0YsR0FBRyxFQUFFMUIsV0FBVztnQkFBRTJCLFNBQVMsRUFBQyxDQUFjOzs7Ozs7Ozt5RkFDNUNqQyxrRkFBMEI7d0JBQUNzQyxjQUFjLEVBQUMsQ0FBTzs7Ozs7Ozs7eUZBQ2pEckMsaUVBQVc7Ozs7Ozs7Ozs7OztBQUl0QixDQUFDO0lBdEVLRSxLQUFLO0tBQUxBLEtBQUs7QUF3RVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGVtb3MvaW5kZXguanN4PzBjN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwbGl0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NwbGl0XCI7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvRGFya1wiO1xyXG5pbXBvcnQgYWRkUGFybHggZnJvbSBcIi4uLy4uL2NvbW1vbi9hZGRQYXJseFwiO1xyXG5pbXBvcnQgaW5pdElzb3RvcGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9pbml0SXNvdG9wZVwiO1xyXG5pbXBvcnQgV29ya3MyTGlnaHQgZnJvbSBcIi4uL3dvcmtzMi93b3JrczItbGlnaHRcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvTGlnaHRcIjtcclxuaW1wb3J0IFdvcmtzVGhyZWVDb2x1bW5XaXRoRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtzLXRocmVlLWNvbHVtbi13aXRoLWZpbHRlclwiO1xyXG5pbXBvcnQgU21hbGxGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU21hbGwtZm9vdGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcblxyXG5jb25zdCBEZW1vcyA9ICgpID0+IHtcclxuICBjb25zdCBmaXhlZEhlYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBNYWluQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW3BhZ2VMb2FkZWQsIHNldFBhZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbWVudWJhcmJsYWNrJyk7XHJcbiAgICBzZXRQYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgaWYgKHBhZ2VMb2FkZWQpIHtcclxuICAgICAgYWRkUGFybHgoKTtcclxuICAgIH1cclxuICB9LCBbcGFnZUxvYWRlZF0pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChmaXhlZEhlYWRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHNsaWRIZWlnaHQgPSBmaXhlZEhlYWRlci5jdXJyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTWFpbkNvbnRlbnQuY3VycmVudCkge1xyXG4gICAgICAgIE1haW5Db250ZW50LmN1cnJlbnQuc3R5bGUubWFyZ2luVG9wID0gc2xpZEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtmaXhlZEhlYWRlciwgTWFpbkNvbnRlbnQsIG5hdmJhclJlZl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGlnaHRUaGVtZT5cclxuICAgICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSB0aGVtZT1cInRoZW1lTFwiIC8+XHJcbiAgICAgICAgPGhlYWRlclxyXG4gICAgICAgICAgICByZWY9e2ZpeGVkSGVhZGVyfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3b3Jrcy1oZWFkZXIgZml4ZWQtc2xpZGVyIGhmaXhkIHZhbGlnblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTkgY29sLW1kLTExIHN0YXRpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0IG10LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFybHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY3VzdG9tLWZvbnRcIj5NeSBhbWF6aW5nIHdvcmtzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0aXZlIHdheSB0byBzaG93Y2FzZSB5b3VyIHdvcmtzIGF0IHRoZWlyIGFic29sdXRlIGJlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjdHh0IGN1c3RvbS1mb250IHZhbGlnblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIj5Xb3Jrczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IHJlZj17TWFpbkNvbnRlbnR9IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgPFdvcmtzVGhyZWVDb2x1bW5XaXRoRmlsdGVyIGZpbHRlclBvc2l0aW9uPVwicmlnaHRcIiAvPlxyXG4gICAgICAgICAgPFNtYWxsRm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGlnaHRUaGVtZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVtb3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJTcGxpdCIsIkRhcmtUaGVtZSIsImFkZFBhcmx4IiwiaW5pdElzb3RvcGUiLCJXb3JrczJMaWdodCIsIkxpZ2h0VGhlbWUiLCJXb3Jrc1RocmVlQ29sdW1uV2l0aEZpbHRlciIsIlNtYWxsRm9vdGVyIiwiTmF2YmFyIiwiRGVtb3MiLCJmaXhlZEhlYWRlciIsInVzZVJlZiIsIk1haW5Db250ZW50IiwibmF2YmFyUmVmIiwibG9nb1JlZiIsInVzZVN0YXRlIiwicGFnZUxvYWRlZCIsInNldFBhZ2VMb2FkZWQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzbGlkSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJuYXZiYXIiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuciIsImxyIiwidGhlbWUiLCJoZWFkZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJzcGFuIiwiZmlsdGVyUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/demos/index.jsx\n");

/***/ })

});