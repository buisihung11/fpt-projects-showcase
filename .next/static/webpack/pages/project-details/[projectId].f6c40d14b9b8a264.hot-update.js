"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project-details/[projectId]",{

/***/ "./src/pages/project-details/[projectId].jsx":
/*!***************************************************!*\
  !*** ./src/pages/project-details/[projectId].jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _components_Project_details_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Project-details-header */ \"./src/components/Project-details-header/index.jsx\");\n/* harmony import */ var _components_Project_details_introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Project-details-introduction */ \"./src/components/Project-details-introduction/index.jsx\");\n/* harmony import */ var _components_Project_details_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Project-details-images */ \"./src/components/Project-details-images/index.jsx\");\n/* harmony import */ var _components_Project_details_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Project-details-description */ \"./src/components/Project-details-description/index.jsx\");\n/* harmony import */ var _components_Project_details_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Project-details-video */ \"./src/components/Project-details-video/index.jsx\");\n/* harmony import */ var _components_Next_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Next-project */ \"./src/components/Next-project/index.jsx\");\n/* harmony import */ var _components_Small_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Small-footer */ \"./src/components/Small-footer/index.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/request */ \"./src/common/request.js\");\n/* harmony import */ var _components_Project_details2_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Project-details2-header */ \"./src/components/Project-details2-header/index.jsx\");\n/* harmony import */ var _components_Project_details2_introduction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Project-details2-introduction */ \"./src/components/Project-details2-introduction/index.jsx\");\n/* harmony import */ var _components_Project_details2_images__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Project-details2-images */ \"./src/components/Project-details2-images/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectDetailsLight = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    var projectId = router.query.projectId;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), project = ref[0], setProject = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        if (projectId) _common_request__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"/projects/\".concat(projectId)).then(function(res) {\n            return setProject(res.data);\n        });\n    }, [\n        projectId\n    ]);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current, logo = logoRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, [\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nr: navbarRef,\n                lr: logoRef,\n                theme: \"themeL\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            project && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Project_details2_header__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                project: project,\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 47,\n                    columnNumber: 25\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Small_footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(ProjectDetailsLight, \"CMu7DMNxx3QwZ2UlYHMV/jGnmaU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = ProjectDetailsLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetailsLight);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetailsLight\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdC1kZXRhaWxzL1twcm9qZWN0SWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ087QUFDQTtBQUM4QjtBQUNZO0FBQ1o7QUFDVTtBQUNaO0FBQ2pCO0FBQ0E7QUFDbEI7QUFDSztBQUNrQztBQUNZO0FBQ1o7OztBQUM1RSxHQUFLLENBQUNnQixtQkFBbUIsR0FBRyxRQUM1QixHQURrQyxDQUFDOztJQUMvQixHQUFLLENBQUNDLE1BQU0sR0FBR04sdURBQVM7SUFDeEIsR0FBSyxDQUFHTyxTQUFTLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUExQkQsU0FBUztJQUNqQixHQUFLLENBQXdCakIsR0FBVSxHQUFWQSwrQ0FBUSxJQUE5Qm1CLE9BQU8sR0FBZW5CLEdBQVUsS0FBeEJvQixVQUFVLEdBQUlwQixHQUFVO0lBRXZDRCxzREFBZSxDQUFDLFFBQ3BCLEdBRDBCLENBQUM7UUFDbkIsRUFBRSxFQUFDa0IsU0FBUyxFQUNaTiw0REFBVyxDQUFFLENBQVUsWUFBWSxPQUFWTSxTQUFTLEdBQUlNLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0osTUFBTSxDQUFOQSxVQUFVLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSTs7SUFDM0UsQ0FBQyxFQUFDLENBQUNSO1FBQUFBLFNBQVM7SUFBQSxDQUFDO0lBRWIsR0FBSyxDQUFDUyxTQUFTLEdBQUczQixtREFBWSxDQUFDLElBQUk7SUFDbkMsR0FBSyxDQUFDNkIsT0FBTyxHQUFHN0IsbURBQVksQ0FBQyxJQUFJO0lBQ2pDQSxzREFBZSxDQUFDLFFBQ3BCLEdBRDBCLENBQUM7UUFDbkIsR0FBRyxDQUFDOEIsTUFBTSxHQUFHSCxTQUFTLENBQUNJLE9BQU8sRUFDMUJDLElBQUksR0FBR0gsT0FBTyxDQUFDRSxPQUFPO1FBQzFCLEVBQUUsRUFBRUUsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDM0JKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBWTtRQUNyQyxDQUFDLE1BQU0sQ0FBQztZQUNKTixNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7UUFDeEMsQ0FBQztRQUNESixNQUFNLENBQUNLLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUMxQyxHQURnRCxDQUFDO1lBQ3JDLEVBQUUsRUFBRUwsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzNCSixNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7WUFDckMsQ0FBQyxNQUFNLENBQUM7Z0JBQ0pOLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtZQUN4QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDVjtRQUFBQSxTQUFTO0lBQUEsQ0FBQztJQUNkLE1BQU0sdUVBQ0R6QixzREFBVTs7Ozs7Ozs7aUZBQ05DLDBEQUFNO2dCQUFDb0MsRUFBRSxFQUFFWixTQUFTO2dCQUFFYSxFQUFFLEVBQUVYLE9BQU87Z0JBQUVZLEtBQUssRUFBQyxDQUFROzs7Ozs7OztZQUNqRHJCLE9BQU8seUVBQUtQLDRFQUFxQjtnQkFBQ08sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OztpRkFjbERWLGlFQUFXOzs7Ozs7Ozs7O0FBR3hCLENBQUM7R0FoREtNLG1CQUFtQjs7UUFDTkwsbURBQVM7OztLQUR0QkssbUJBQW1CO0FBa0R6QiwrREFBZUEsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3QtZGV0YWlscy9bcHJvamVjdElkXS5qc3g/YjA2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlnaHRUaGVtZSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9MaWdodFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsc0hlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMtaGVhZGVyXCI7XG5pbXBvcnQgUHJvamVjdERldGFpbHNJbnRyb2R1Y3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzLWludHJvZHVjdGlvblwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzSW1hZ2VzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3QtZGV0YWlscy1pbWFnZXNcIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsc0Rlc2NyaXB0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3QtZGV0YWlscy1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzVmlkZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzLXZpZGVvXCI7XG5pbXBvcnQgTmV4dFByb2plY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV4dC1wcm9qZWN0XCI7XG5pbXBvcnQgU21hbGxGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU21hbGwtZm9vdGVyXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vY29tbW9uL3JlcXVlc3RcIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsczJIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzMi1oZWFkZXJcIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsczJJbnRyb2R1Y3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzMi1pbnRyb2R1Y3Rpb25cIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsczJJbWFnZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzMi1pbWFnZXNcIjtcbmNvbnN0IFByb2plY3REZXRhaWxzTGlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHByb2plY3RJZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc3QgW3Byb2plY3Qsc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9qZWN0SWQpXG4gICAgICAgIHJlcXVlc3QuZ2V0KGAvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCkudGhlbigocmVzKSA9PiBzZXRQcm9qZWN0KHJlcy5kYXRhKSlcbiAgICB9LFtwcm9qZWN0SWRdKVxuXG4gICAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIG5hdmJhciA9IG5hdmJhclJlZi5jdXJyZW50LFxuICAgICAgICAgICAgbG9nbyA9IGxvZ29SZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW25hdmJhclJlZl0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaWdodFRoZW1lPlxuICAgICAgICAgICAgPE5hdmJhciBucj17bmF2YmFyUmVmfSBscj17bG9nb1JlZn0gdGhlbWU9XCJ0aGVtZUxcIiAvPlxuICAgICAgICAgICAge3Byb2plY3QgJiYgPFByb2plY3REZXRhaWxzMkhlYWRlciBwcm9qZWN0PXtwcm9qZWN0fSAvPn1cbiAgICAgICAgICAgIHsvKjxQcm9qZWN0RGV0YWlsczJIZWFkZXIgLz4qL31cbiAgICAgICAgICAgIHsvKjxQcm9qZWN0RGV0YWlsczJJbnRyb2R1Y3Rpb24gLz4qL31cbiAgICAgICAgICAgIHsvKjxQcm9qZWN0RGV0YWlsczJJbWFnZXMgLz4qL31cbiAgICAgICAgICAgIHsvKjxQcm9qZWN0RGV0YWlsc0Rlc2NyaXB0aW9uIC8+Ki99XG4gICAgICAgICAgICB7Lyo8UHJvamVjdERldGFpbHNWaWRlbyovfVxuICAgICAgICAgICAgey8qICAgIHZpZGVvQmFja2dyb3VuZD1cIi9pbWcvcG9ydGZvbGlvL3Byb2plY3QyL2JnLmpwZ1wiKi99XG4gICAgICAgICAgICB7LyogICAgdmlkZW9UeXBlPVwidmltZW9cIiovfVxuICAgICAgICAgICAgey8qICAgIHZpZGVvSWQ9ezEyNzIwMzI2Mn0qL31cbiAgICAgICAgICAgIHsvKi8+Ki99XG4gICAgICAgICAgICB7Lyo8TmV4dFByb2plY3QqL31cbiAgICAgICAgICAgIHsvKiAgICBwcm9qZWN0SW1hZ2U9XCIvaW1nL3BvcnRmb2xpby9wcm9qZWN0MS9iZy5qcGdcIiovfVxuICAgICAgICAgICAgey8qICAgIHByb2plY3RUaXRsZT1cIk5hdHVyYWwgcGx1cyBtb2Rlcm4uXCIqL31cbiAgICAgICAgICAgIHsvKi8+Ki99XG4gICAgICAgICAgICA8U21hbGxGb290ZXIgLz5cbiAgICAgICAgPC9MaWdodFRoZW1lPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGV0YWlsc0xpZ2h0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaWdodFRoZW1lIiwiTmF2YmFyIiwiUHJvamVjdERldGFpbHNIZWFkZXIiLCJQcm9qZWN0RGV0YWlsc0ludHJvZHVjdGlvbiIsIlByb2plY3REZXRhaWxzSW1hZ2VzIiwiUHJvamVjdERldGFpbHNEZXNjcmlwdGlvbiIsIlByb2plY3REZXRhaWxzVmlkZW8iLCJOZXh0UHJvamVjdCIsIlNtYWxsRm9vdGVyIiwidXNlUm91dGVyIiwicmVxdWVzdCIsIlByb2plY3REZXRhaWxzMkhlYWRlciIsIlByb2plY3REZXRhaWxzMkludHJvZHVjdGlvbiIsIlByb2plY3REZXRhaWxzMkltYWdlcyIsIlByb2plY3REZXRhaWxzTGlnaHQiLCJyb3V0ZXIiLCJwcm9qZWN0SWQiLCJxdWVyeSIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwidXNlRWZmZWN0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJuYXZiYXJSZWYiLCJ1c2VSZWYiLCJsb2dvUmVmIiwibmF2YmFyIiwiY3VycmVudCIsImxvZ28iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuciIsImxyIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/project-details/[projectId].jsx\n");

/***/ })

});