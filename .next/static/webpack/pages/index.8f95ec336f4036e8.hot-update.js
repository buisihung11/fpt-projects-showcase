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

/***/ "./src/pages/works2/works2-light.jsx":
/*!*******************************************!*\
  !*** ./src/pages/works2/works2-light.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _components_Works_three_column_with_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Works-three-column-with-filter */ \"./src/components/Works-three-column-with-filter/index.jsx\");\n/* harmony import */ var _components_Small_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Small-footer */ \"./src/components/Small-footer/index.jsx\");\n/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/addParlx */ \"./src/common/addParlx.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Works2Light = function() {\n    _s1();\n    var fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageLoaded = ref[0], setPageLoaded = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        document.querySelector('body').classList.add('menubarblack');\n        setPageLoaded(true);\n        if (pageLoaded) {\n            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        }\n    }, [\n        pageLoaded\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setInterval(function() {\n            if (fixedHeader.current) {\n                var slidHeight = fixedHeader.current.offsetHeight;\n            }\n            if (MainContent.current) {\n                MainContent.current.style.marginTop = slidHeight + \"px\";\n            }\n        }, 1000);\n        var navbar = navbarRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, [\n        fixedHeader,\n        MainContent,\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/works2/works2-light.jsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nr: navbarRef,\n                lr: logoRef,\n                theme: \"themeL\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/works2/works2-light.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                ref: MainContent,\n                className: \"main-content\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/works2/works2-light.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Works_three_column_with_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        filterPosition: \"right\",\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/works2/works2-light.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Small_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/works2/works2-light.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Works2Light, \"pfiOzXaAvaiSMLO+8hLANXjkoZ8=\");\n_c = Works2Light;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works2Light);\nvar _c;\n$RefreshReg$(_c, \"Works2Light\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29ya3MyL3dvcmtzMi1saWdodC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ21CO0FBQ0E7QUFDNEM7QUFDakM7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxHQUFLLENBQUNNLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDekIsR0FBSyxDQUFDQyxXQUFXLEdBQUdQLG1EQUFZLENBQUMsSUFBSTtJQUNyQyxHQUFLLENBQUNTLFdBQVcsR0FBR1QsbURBQVksQ0FBQyxJQUFJO0lBQ3JDLEdBQUssQ0FBQ1UsU0FBUyxHQUFHVixtREFBWSxDQUFDLElBQUk7SUFDbkMsR0FBSyxDQUFDVyxPQUFPLEdBQUdYLG1EQUFZLENBQUMsSUFBSTtJQUVqQyxHQUFLLENBQStCQSxHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxPQUFqRGEsVUFBVSxHQUFtQmIsR0FBcUIsS0FBdENjLGFBQWEsR0FBSWQsR0FBcUI7SUFDekRBLHNEQUFlLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckJnQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFNLE9BQUVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQWM7UUFDM0RMLGFBQWEsQ0FBQyxJQUFJO1FBQ2xCLEVBQUUsRUFBRUQsVUFBVSxFQUFFLENBQUM7WUFDZlIsNERBQVE7UUFDVixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNRO1FBQUFBLFVBQVU7SUFBQSxDQUFDO0lBQ2ZiLHNEQUFlLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckJvQixXQUFXLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDakIsRUFBRSxFQUFFYixXQUFXLENBQUNjLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixHQUFHLENBQUNDLFVBQVUsR0FBR2YsV0FBVyxDQUFDYyxPQUFPLENBQUNFLFlBQVk7WUFDbkQsQ0FBQztZQUNELEVBQUUsRUFBRWQsV0FBVyxDQUFDWSxPQUFPLEVBQUUsQ0FBQztnQkFDeEJaLFdBQVcsQ0FBQ1ksT0FBTyxDQUFDRyxLQUFLLENBQUNDLFNBQVMsR0FBR0gsVUFBVSxHQUFHLENBQUk7WUFDekQsQ0FBQztRQUNILENBQUMsRUFBRSxJQUFJO1FBQ1AsR0FBRyxDQUFDSSxNQUFNLEdBQUdoQixTQUFTLENBQUNXLE9BQU87UUFDOUIsRUFBRSxFQUFFTSxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUM3QkYsTUFBTSxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1FBQ25DLENBQUMsTUFBTSxDQUFDO1lBQ05PLE1BQU0sQ0FBQ1IsU0FBUyxDQUFDVyxNQUFNLENBQUMsQ0FBWTtRQUN0QyxDQUFDO1FBQ0RGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsQ0FBUSxTQUFFLFFBQVEsR0FBRixDQUFDO1lBQ3ZDLEVBQUUsRUFBRUgsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzdCRixNQUFNLENBQUNSLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7WUFDbkMsQ0FBQyxNQUFNLENBQUM7Z0JBQ05PLE1BQU0sQ0FBQ1IsU0FBUyxDQUFDVyxNQUFNLENBQUMsQ0FBWTtZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDdEI7UUFBQUEsV0FBVztRQUFFRSxXQUFXO1FBQUVDLFNBQVM7SUFBQSxDQUFDO0lBRXhDLE1BQU0sdUVBQ0hULHNEQUFVOzs7Ozs7OztpRkFDUkMsMERBQU07Z0JBQUM2QixFQUFFLEVBQUVyQixTQUFTO2dCQUFFc0IsRUFBRSxFQUFFckIsT0FBTztnQkFBRXNCLEtBQUssRUFBQyxDQUFROzs7Ozs7OztrRkFDakRDLENBQUc7Z0JBQUNDLEdBQUcsRUFBRTFCLFdBQVc7Z0JBQUUyQixTQUFTLEVBQUMsQ0FBYzs7Ozs7Ozs7eUZBQzVDakMsa0ZBQTBCO3dCQUFDa0MsY0FBYyxFQUFDLENBQU87Ozs7Ozs7O3lGQUNqRGpDLGdFQUFXOzs7Ozs7Ozs7Ozs7QUFJcEIsQ0FBQztJQS9DS0UsV0FBVztLQUFYQSxXQUFXO0FBaURqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93b3JrczIvd29ya3MyLWxpZ2h0LmpzeD9iZGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpZ2h0VGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvTGlnaHRcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IFdvcmtzVGhyZWVDb2x1bW5XaXRoRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmtzLXRocmVlLWNvbHVtbi13aXRoLWZpbHRlclwiO1xyXG5pbXBvcnQgU21hbGxGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU21hbGwtZm9vdGVyXCI7XHJcbmltcG9ydCBhZGRQYXJseCBmcm9tIFwiLi4vLi4vY29tbW9uL2FkZFBhcmx4XCI7XHJcblxyXG5jb25zdCBXb3JrczJMaWdodCA9ICgpID0+IHtcclxuICBjb25zdCBmaXhlZEhlYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBNYWluQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbG9nb1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW3BhZ2VMb2FkZWQsIHNldFBhZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbWVudWJhcmJsYWNrJyk7XHJcbiAgICBzZXRQYWdlTG9hZGVkKHRydWUpO1xyXG4gICAgaWYgKHBhZ2VMb2FkZWQpIHtcclxuICAgICAgYWRkUGFybHgoKTtcclxuICAgIH1cclxuICB9LCBbcGFnZUxvYWRlZF0pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChmaXhlZEhlYWRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHNsaWRIZWlnaHQgPSBmaXhlZEhlYWRlci5jdXJyZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTWFpbkNvbnRlbnQuY3VycmVudCkge1xyXG4gICAgICAgIE1haW5Db250ZW50LmN1cnJlbnQuc3R5bGUubWFyZ2luVG9wID0gc2xpZEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtmaXhlZEhlYWRlciwgTWFpbkNvbnRlbnQsIG5hdmJhclJlZl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpZ2h0VGhlbWU+XHJcbiAgICAgIDxOYXZiYXIgbnI9e25hdmJhclJlZn0gbHI9e2xvZ29SZWZ9IHRoZW1lPVwidGhlbWVMXCIgLz5cclxuICAgICAgPGRpdiByZWY9e01haW5Db250ZW50fSBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8V29ya3NUaHJlZUNvbHVtbldpdGhGaWx0ZXIgZmlsdGVyUG9zaXRpb249XCJyaWdodFwiIC8+XHJcbiAgICAgICAgPFNtYWxsRm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaWdodFRoZW1lPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrczJMaWdodDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlnaHRUaGVtZSIsIk5hdmJhciIsIldvcmtzVGhyZWVDb2x1bW5XaXRoRmlsdGVyIiwiU21hbGxGb290ZXIiLCJhZGRQYXJseCIsIldvcmtzMkxpZ2h0IiwiZml4ZWRIZWFkZXIiLCJ1c2VSZWYiLCJNYWluQ29udGVudCIsIm5hdmJhclJlZiIsImxvZ29SZWYiLCJ1c2VTdGF0ZSIsInBhZ2VMb2FkZWQiLCJzZXRQYWdlTG9hZGVkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50Iiwic2xpZEhlaWdodCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibmF2YmFyIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwibnIiLCJsciIsInRoZW1lIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiZmlsdGVyUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/works2/works2-light.jsx\n");

/***/ })

});