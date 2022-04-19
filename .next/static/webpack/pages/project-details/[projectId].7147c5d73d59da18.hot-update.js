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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/Light */ \"./src/layouts/Light.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _components_Project_details_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Project-details-header */ \"./src/components/Project-details-header/index.jsx\");\n/* harmony import */ var _components_Project_details_introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Project-details-introduction */ \"./src/components/Project-details-introduction/index.jsx\");\n/* harmony import */ var _components_Project_details_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Project-details-images */ \"./src/components/Project-details-images/index.jsx\");\n/* harmony import */ var _components_Project_details_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Project-details-description */ \"./src/components/Project-details-description/index.jsx\");\n/* harmony import */ var _components_Project_details_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Project-details-video */ \"./src/components/Project-details-video/index.jsx\");\n/* harmony import */ var _components_Next_project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Next-project */ \"./src/components/Next-project/index.jsx\");\n/* harmony import */ var _components_Small_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Small-footer */ \"./src/components/Small-footer/index.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/request */ \"./src/common/request.js\");\n/* harmony import */ var _components_Project_details2_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Project-details2-header */ \"./src/components/Project-details2-header/index.jsx\");\n/* harmony import */ var _components_Project_details2_introduction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Project-details2-introduction */ \"./src/components/Project-details2-introduction/index.jsx\");\n/* harmony import */ var _components_Project_details2_images__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Project-details2-images */ \"./src/components/Project-details2-images/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProjectDetailsLight = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    var projectId = router.query.projectId;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), project = ref[0], setProject = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        if (projectId) _common_request__WEBPACK_IMPORTED_MODULE_12__[\"default\"].get(\"/projects/\".concat(projectId)).then(function(res) {\n            return setProject(res.data);\n        });\n    }, [\n        projectId\n    ]);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current, logo = logoRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, [\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Light__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nr: navbarRef,\n                lr: logoRef,\n                theme: \"themeL\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            project && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Project_details2_header__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                project: project,\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 47,\n                    columnNumber: 25\n                },\n                __self: _this\n            }),\n            project && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container mx-auto\",\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 49,\n                    columnNumber: 25\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"embed\", {\n                    src: project.topic.attachment,\n                    type: \"application/pdf\",\n                    frameBorder: \"0\",\n                    scrolling: \"auto\",\n                    height: \"100%\",\n                    width: \"100%\",\n                    __source: {\n                        fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Small_footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/hunghcc/Downloads/avoreact-10 (1)/avoreact-10/Main_files/avo/src/pages/project-details/[projectId].jsx\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(ProjectDetailsLight, \"CMu7DMNxx3QwZ2UlYHMV/jGnmaU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = ProjectDetailsLight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDetailsLight);\nvar _c;\n$RefreshReg$(_c, \"ProjectDetailsLight\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdC1kZXRhaWxzL1twcm9qZWN0SWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ087QUFDQTtBQUM4QjtBQUNZO0FBQ1o7QUFDVTtBQUNaO0FBQ2pCO0FBQ0E7QUFDbEI7QUFDSztBQUNrQztBQUNZO0FBQ1o7OztBQUM1RSxHQUFLLENBQUNnQixtQkFBbUIsR0FBRyxRQUM1QixHQURrQyxDQUFDOztJQUMvQixHQUFLLENBQUNDLE1BQU0sR0FBR04sdURBQVM7SUFDeEIsR0FBSyxDQUFHTyxTQUFTLEdBQUtELE1BQU0sQ0FBQ0UsS0FBSyxDQUExQkQsU0FBUztJQUNqQixHQUFLLENBQXdCakIsR0FBVSxHQUFWQSwrQ0FBUSxJQUE5Qm1CLE9BQU8sR0FBZW5CLEdBQVUsS0FBeEJvQixVQUFVLEdBQUlwQixHQUFVO0lBRXZDRCxzREFBZSxDQUFDLFFBQ3BCLEdBRDBCLENBQUM7UUFDbkIsRUFBRSxFQUFDa0IsU0FBUyxFQUNaTiw0REFBVyxDQUFFLENBQVUsWUFBWSxPQUFWTSxTQUFTLEdBQUlNLElBQUksQ0FBQyxRQUFRLENBQVBDLEdBQUc7WUFBS0osTUFBTSxDQUFOQSxVQUFVLENBQUNJLEdBQUcsQ0FBQ0MsSUFBSTs7SUFDM0UsQ0FBQyxFQUFDLENBQUNSO1FBQUFBLFNBQVM7SUFBQSxDQUFDO0lBRWIsR0FBSyxDQUFDUyxTQUFTLEdBQUczQixtREFBWSxDQUFDLElBQUk7SUFDbkMsR0FBSyxDQUFDNkIsT0FBTyxHQUFHN0IsbURBQVksQ0FBQyxJQUFJO0lBQ2pDQSxzREFBZSxDQUFDLFFBQ3BCLEdBRDBCLENBQUM7UUFDbkIsR0FBRyxDQUFDOEIsTUFBTSxHQUFHSCxTQUFTLENBQUNJLE9BQU8sRUFDMUJDLElBQUksR0FBR0gsT0FBTyxDQUFDRSxPQUFPO1FBQzFCLEVBQUUsRUFBRUUsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDM0JKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBWTtRQUNyQyxDQUFDLE1BQU0sQ0FBQztZQUNKTixNQUFNLENBQUNLLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQVk7UUFDeEMsQ0FBQztRQUNESixNQUFNLENBQUNLLGdCQUFnQixDQUFDLENBQVEsU0FBRSxRQUMxQyxHQURnRCxDQUFDO1lBQ3JDLEVBQUUsRUFBRUwsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzNCSixNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7WUFDckMsQ0FBQyxNQUFNLENBQUM7Z0JBQ0pOLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtZQUN4QyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDVjtRQUFBQSxTQUFTO0lBQUEsQ0FBQztJQUNkLE1BQU0sdUVBQ0R6QixzREFBVTs7Ozs7Ozs7aUZBQ05DLDBEQUFNO2dCQUFDb0MsRUFBRSxFQUFFWixTQUFTO2dCQUFFYSxFQUFFLEVBQUVYLE9BQU87Z0JBQUVZLEtBQUssRUFBQyxDQUFROzs7Ozs7OztZQUNqRHJCLE9BQU8seUVBQUtQLDRFQUFxQjtnQkFBQ08sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OztZQUVsREEsT0FBTyx5RUFBS3NCLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjs7Ozs7OzsrRkFDekNDLENBQUs7b0JBQUNDLEdBQUcsRUFBRXpCLE9BQU8sQ0FBQzBCLEtBQUssQ0FBQ0MsVUFBVTtvQkFBRUMsSUFBSSxFQUFDLENBQWlCO29CQUNyREMsV0FBVyxFQUFDLENBQUc7b0JBQ2ZDLFNBQVMsRUFBQyxDQUFNO29CQUNoQkMsTUFBTSxFQUFDLENBQU07b0JBQ2JDLEtBQUssRUFBQyxDQUFNOzs7Ozs7Ozs7aUZBY3RCMUMsaUVBQVc7Ozs7Ozs7Ozs7QUFHeEIsQ0FBQztHQXZES00sbUJBQW1COztRQUNOTCxtREFBUzs7O0tBRHRCSyxtQkFBbUI7QUF5RHpCLCtEQUFlQSxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdC1kZXRhaWxzL1twcm9qZWN0SWRdLmpzeD9iMDYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaWdodFRoZW1lIGZyb20gXCIuLi8uLi9sYXlvdXRzL0xpZ2h0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3QtZGV0YWlscy1oZWFkZXJcIjtcbmltcG9ydCBQcm9qZWN0RGV0YWlsc0ludHJvZHVjdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMtaW50cm9kdWN0aW9uXCI7XG5pbXBvcnQgUHJvamVjdERldGFpbHNJbWFnZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzLWltYWdlc1wiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzRGVzY3JpcHRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdC1kZXRhaWxzLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgUHJvamVjdERldGFpbHNWaWRlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMtdmlkZW9cIjtcbmltcG9ydCBOZXh0UHJvamVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OZXh0LXByb2plY3RcIjtcbmltcG9ydCBTbWFsbEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TbWFsbC1mb290ZXJcIjtcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi9jb21tb24vcmVxdWVzdFwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzMkhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMyLWhlYWRlclwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzMkludHJvZHVjdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMyLWludHJvZHVjdGlvblwiO1xuaW1wb3J0IFByb2plY3REZXRhaWxzMkltYWdlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0LWRldGFpbHMyLWltYWdlc1wiO1xuY29uc3QgUHJvamVjdERldGFpbHNMaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcHJvamVjdElkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbcHJvamVjdCxzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKClcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHByb2plY3RJZClcbiAgICAgICAgcmVxdWVzdC5nZXQoYC9wcm9qZWN0cy8ke3Byb2plY3RJZH1gKS50aGVuKChyZXMpID0+IHNldFByb2plY3QocmVzLmRhdGEpKVxuICAgIH0sW3Byb2plY3RJZF0pXG5cbiAgICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3QgbG9nb1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBsb2dvID0gbG9nb1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbbmF2YmFyUmVmXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpZ2h0VGhlbWU+XG4gICAgICAgICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IGxyPXtsb2dvUmVmfSB0aGVtZT1cInRoZW1lTFwiIC8+XG4gICAgICAgICAgICB7cHJvamVjdCAmJiA8UHJvamVjdERldGFpbHMySGVhZGVyIHByb2plY3Q9e3Byb2plY3R9IC8+fVxuICAgICAgICAgICAgey8qPFByb2plY3REZXRhaWxzMkhlYWRlciAvPiovfVxuICAgICAgICAgICAge3Byb2plY3QgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxlbWJlZCBzcmM9e3Byb2plY3QudG9waWMuYXR0YWNobWVudH0gdHlwZT1cImFwcGxpY2F0aW9uL3BkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZz1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIvPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgey8qPFByb2plY3REZXRhaWxzMkludHJvZHVjdGlvbiAvPiovfVxuICAgICAgICAgICAgey8qPFByb2plY3REZXRhaWxzMkltYWdlcyAvPiovfVxuICAgICAgICAgICAgey8qPFByb2plY3REZXRhaWxzRGVzY3JpcHRpb24gLz4qL31cbiAgICAgICAgICAgIHsvKjxQcm9qZWN0RGV0YWlsc1ZpZGVvKi99XG4gICAgICAgICAgICB7LyogICAgdmlkZW9CYWNrZ3JvdW5kPVwiL2ltZy9wb3J0Zm9saW8vcHJvamVjdDIvYmcuanBnXCIqL31cbiAgICAgICAgICAgIHsvKiAgICB2aWRlb1R5cGU9XCJ2aW1lb1wiKi99XG4gICAgICAgICAgICB7LyogICAgdmlkZW9JZD17MTI3MjAzMjYyfSovfVxuICAgICAgICAgICAgey8qLz4qL31cbiAgICAgICAgICAgIHsvKjxOZXh0UHJvamVjdCovfVxuICAgICAgICAgICAgey8qICAgIHByb2plY3RJbWFnZT1cIi9pbWcvcG9ydGZvbGlvL3Byb2plY3QxL2JnLmpwZ1wiKi99XG4gICAgICAgICAgICB7LyogICAgcHJvamVjdFRpdGxlPVwiTmF0dXJhbCBwbHVzIG1vZGVybi5cIiovfVxuICAgICAgICAgICAgey8qLz4qL31cbiAgICAgICAgICAgIDxTbWFsbEZvb3RlciAvPlxuICAgICAgICA8L0xpZ2h0VGhlbWU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REZXRhaWxzTGlnaHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpZ2h0VGhlbWUiLCJOYXZiYXIiLCJQcm9qZWN0RGV0YWlsc0hlYWRlciIsIlByb2plY3REZXRhaWxzSW50cm9kdWN0aW9uIiwiUHJvamVjdERldGFpbHNJbWFnZXMiLCJQcm9qZWN0RGV0YWlsc0Rlc2NyaXB0aW9uIiwiUHJvamVjdERldGFpbHNWaWRlbyIsIk5leHRQcm9qZWN0IiwiU21hbGxGb290ZXIiLCJ1c2VSb3V0ZXIiLCJyZXF1ZXN0IiwiUHJvamVjdERldGFpbHMySGVhZGVyIiwiUHJvamVjdERldGFpbHMySW50cm9kdWN0aW9uIiwiUHJvamVjdERldGFpbHMySW1hZ2VzIiwiUHJvamVjdERldGFpbHNMaWdodCIsInJvdXRlciIsInByb2plY3RJZCIsInF1ZXJ5IiwicHJvamVjdCIsInNldFByb2plY3QiLCJ1c2VFZmZlY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm5hdmJhclJlZiIsInVzZVJlZiIsImxvZ29SZWYiLCJuYXZiYXIiLCJjdXJyZW50IiwibG9nbyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5yIiwibHIiLCJ0aGVtZSIsImRpdiIsImNsYXNzTmFtZSIsImVtYmVkIiwic3JjIiwidG9waWMiLCJhdHRhY2htZW50IiwidHlwZSIsImZyYW1lQm9yZGVyIiwic2Nyb2xsaW5nIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/project-details/[projectId].jsx\n");

/***/ })

});