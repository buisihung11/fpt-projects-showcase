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

/***/ "./src/components/Works-three-column-with-filter/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Works-three-column-with-filter/index.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/initIsotope */ \"./src/common/initIsotope.js\");\n/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/request */ \"./src/common/request.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar WorksThreeColumnWithFilter = function(param) {\n    var filterPosition = param.filterPosition;\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageLoaded = ref[0], setPageLoaded = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), projects = ref1[0], setProjects = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        _common_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/projects').then(function(res) {\n            return setProjects(res.data.result);\n        }).then(function() {\n            return setPageLoaded(true);\n        }).then(function() {\n            return (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        });\n    }, [\n        pageLoaded\n    ]);\n    console.log('projects', projects);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"portfolio section-padding pb-70\",\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"row \",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"filtering \".concat(filterPosition === \"center\" ? \"text-center\" : filterPosition === \"left\" ? \"text-left\" : \"text-right\", \" smplx col-12 text-center\"),\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"filter\",\n                            __source: {\n                                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    \"data-filter\": \"*\",\n                                    className: \"active\",\n                                    __source: {\n                                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"All\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    \"data-filter\": \".brand\",\n                                    __source: {\n                                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Branding\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    \"data-filter\": \".web\",\n                                    __source: {\n                                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Mobile App\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    \"data-filter\": \".graphic\",\n                                    __source: {\n                                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Creative\"\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"gallery full-width\",\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: projects.map(function(p) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"col-lg-4 col-md-6 items graphic lg-mr\",\n                                __source: {\n                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"item-img wow fadeInUp\",\n                                        \"data-wow-delay\": \".4s\",\n                                        __source: {\n                                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/project-details/project-details-dark\",\n                                            __source: {\n                                                fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                __source: {\n                                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this1,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                                    src: \"/img/portfolio/mas/01.jpg\",\n                                                    alt: \"image\",\n                                                    __source: {\n                                                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this1\n                                                })\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"cont\",\n                                        __source: {\n                                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                                __source: {\n                                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this1,\n                                                children: p.topic.name\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                __source: {\n                                                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/components/Works-three-column-with-filter/index.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this1,\n                                                children: p.mainMentor.name\n                                            })\n                                        ]\n                                    })\n                                ]\n                            }, p.projectId);\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s1(WorksThreeColumnWithFilter, \"SZOHKK8SkrU/ki2JzCvNlOetHN0=\");\n_c = WorksThreeColumnWithFilter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorksThreeColumnWithFilter);\nvar _c;\n$RefreshReg$(_c, \"WorksThreeColumnWithFilter\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrcy10aHJlZS1jb2x1bW4td2l0aC1maWx0ZXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsRUFBOEMsNkNBQ1Q7QUFDVDtBQUNzQjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLEdBQUssQ0FBQ0ssMEJBQTBCLEdBQUcsUUFBUSxRQUFnQixDQUFDO1FBQXRCQyxjQUFjLFNBQWRBLGNBQWM7OztJQUNsRCxHQUFLLENBQStCTixHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxPQUFqRE8sVUFBVSxHQUFtQlAsR0FBcUIsS0FBdENRLGFBQWEsR0FBSVIsR0FBcUI7SUFDekQsR0FBSyxDQUE0QkMsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ1EsUUFBUSxHQUFpQlIsSUFBWSxLQUEzQlMsV0FBVyxHQUFJVCxJQUFZO0lBQzdDRCxzREFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ3JCSSwyREFBVyxDQUFDLENBQVcsWUFDbEJTLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0osTUFBTSxDQUFOQSxXQUFXLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNO1dBQ3pDSCxJQUFJLENBQUMsUUFBUTtZQUFGTCxNQUFNLENBQU5BLGFBQWEsQ0FBQyxJQUFJO1dBQzdCSyxJQUFJLENBQUMsUUFBUTtZQUFGVixNQUFNLENBQU5BLCtEQUFXOztJQUM3QixDQUFDLEVBQUUsQ0FBQ0k7UUFBQUEsVUFBVTtJQUFBLENBQUM7SUFDZlUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVSxXQUFDVCxRQUFRO0lBQy9CLE1BQU0sc0VBQ0hVLENBQU87UUFBQ0MsU0FBUyxFQUFDLENBQWlDOzs7Ozs7O3VGQUNqREMsQ0FBRztZQUFDRCxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs0RkFDdkJDLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFNOzs7Ozs7Ozt5RkFDbEJDLENBQUc7d0JBQ0ZELFNBQVMsRUFBRyxDQUFVLFlBTXJCLE1BQXlCLENBTHhCZCxjQUFjLEtBQUssQ0FBUSxVQUN2QixDQUFhLGVBQ2JBLGNBQWMsS0FBSyxDQUFNLFFBQ3pCLENBQVcsYUFDWCxDQUFZLGFBQ2pCLENBQXlCOzs7Ozs7O3dHQUV6QmUsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7O3FHQUNwQkUsQ0FBSTtvQ0FBQ0MsQ0FBVyxjQUFDLENBQUc7b0NBQUNILFNBQVMsRUFBQyxDQUFROzs7Ozs7OzhDQUFDLENBRXpDOztxR0FDQ0UsQ0FBSTtvQ0FBQ0MsQ0FBVyxjQUFDLENBQVE7Ozs7Ozs7OENBQUMsQ0FBUTs7cUdBQ2xDRCxDQUFJO29DQUFDQyxDQUFXLGNBQUMsQ0FBTTs7Ozs7Ozs4Q0FBQyxDQUFVOztxR0FDbENELENBQUk7b0NBQUNDLENBQVcsY0FBQyxDQUFVOzs7Ozs7OzhDQUFDLENBQVE7Ozs7O3lGQUl4Q0YsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQW9COzs7Ozs7O2tDQUNoQ1gsUUFBUSxDQUFDZSxHQUFHLENBQUMsUUFDMUIsQ0FEMkJDLENBQUM7MENBQ2QsTUFBTSx5REFBTEosQ0FBRztnQ0FBbUJELFNBQVMsRUFBQyxDQUF1Qzs7Ozs7Ozs7eUdBQ3ZFQyxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBdUI7d0NBQUNNLENBQWMsaUJBQUMsQ0FBSzs7Ozs7Ozt1SEFDeER4QixrREFBSTs0Q0FBQ3lCLElBQUksRUFBQyxDQUF1Qzs7Ozs7OzsySEFDL0NDLENBQUM7Ozs7Ozs7K0hBQ0NDLENBQUc7b0RBQUNDLEdBQUcsRUFBQyxDQUEyQjtvREFBQ0MsR0FBRyxFQUFDLENBQU87Ozs7Ozs7Ozs7OzBHQUlyRFYsQ0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLENBQU07Ozs7Ozs7O2lIQUNsQlksQ0FBRTs7Ozs7OzswREFBRVAsQ0FBQyxDQUFDUSxLQUFLLENBQUNDLElBQUk7O2lIQUNoQlosQ0FBSTs7Ozs7OzswREFDRkcsQ0FBQyxDQUFDVSxVQUFVLENBQUNELElBQUk7Ozs7OytCQVhaVCxDQUFDLENBQUNXLFNBQVM7Ozs7Ozs7QUFxQm5DLENBQUM7SUF4REsvQiwwQkFBMEI7S0FBMUJBLDBCQUEwQjtBQTBEaEMsK0RBQWVBLDBCQUEwQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmtzLXRocmVlLWNvbHVtbi13aXRoLWZpbHRlci9pbmRleC5qc3g/MzY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaW5pdElzb3RvcGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9pbml0SXNvdG9wZVwiO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vY29tbW9uL3JlcXVlc3RcIjtcclxuXHJcbmNvbnN0IFdvcmtzVGhyZWVDb2x1bW5XaXRoRmlsdGVyID0gKHsgZmlsdGVyUG9zaXRpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFtwYWdlTG9hZGVkLCBzZXRQYWdlTG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCAgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSlcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVxdWVzdC5nZXQoJy9wcm9qZWN0cycpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gc2V0UHJvamVjdHMocmVzLmRhdGEucmVzdWx0KSlcclxuICAgICAgICAudGhlbigoKSA9PiBzZXRQYWdlTG9hZGVkKHRydWUpKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGluaXRJc290b3BlKCkpXHJcbiAgfSwgW3BhZ2VMb2FkZWRdKTtcclxuICBjb25zb2xlLmxvZygncHJvamVjdHMnLHByb2plY3RzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwb3J0Zm9saW8gc2VjdGlvbi1wYWRkaW5nIHBiLTcwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlcmluZyAke1xyXG4gICAgICAgICAgICAgIGZpbHRlclBvc2l0aW9uID09PSBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA/IFwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgOiBmaWx0ZXJQb3NpdGlvbiA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICB9IHNtcGx4IGNvbC0xMiB0ZXh0LWNlbnRlcmB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9XCIqXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gZGF0YS1maWx0ZXI9XCIuYnJhbmRcIj5CcmFuZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZpbHRlcj1cIi53ZWJcIj5Nb2JpbGUgQXBwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGRhdGEtZmlsdGVyPVwiLmdyYXBoaWNcIj5DcmVhdGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnkgZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwKSA9PlxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtwLnByb2plY3RJZH0gY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgaXRlbXMgZ3JhcGhpYyBsZy1tclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbWcgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIuNHNcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vbWFzLzAxLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PntwLnRvcGljLm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7cC5tYWluTWVudG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3Jrc1RocmVlQ29sdW1uV2l0aEZpbHRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiaW5pdElzb3RvcGUiLCJyZXF1ZXN0IiwiV29ya3NUaHJlZUNvbHVtbldpdGhGaWx0ZXIiLCJmaWx0ZXJQb3NpdGlvbiIsInBhZ2VMb2FkZWQiLCJzZXRQYWdlTG9hZGVkIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZUVmZmVjdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiZGF0YS1maWx0ZXIiLCJtYXAiLCJwIiwiZGF0YS13b3ctZGVsYXkiLCJocmVmIiwiYSIsImltZyIsInNyYyIsImFsdCIsImg2IiwidG9waWMiLCJuYW1lIiwibWFpbk1lbnRvciIsInByb2plY3RJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Works-three-column-with-filter/index.jsx\n");

/***/ })

});