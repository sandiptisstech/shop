"use strict";
exports.id = 4212;
exports.ids = [4212];
exports.modules = {

/***/ 4212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getLayout)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9076);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8701);
/* harmony import */ var _header_minimal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5473);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5884);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__, _header__WEBPACK_IMPORTED_MODULE_2__, _header_minimal__WEBPACK_IMPORTED_MODULE_3__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_5__]);
([_lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__, _header__WEBPACK_IMPORTED_MODULE_2__, _header_minimal__WEBPACK_IMPORTED_MODULE_3__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function SiteLayout({ children  }) {
    const { layout  } = (0,_lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",
        children: [
            [
                'minimal',
                'compact'
            ].includes(layout) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_minimal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                layout: layout
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                layout: layout
            }),
            children,
            [
                'compact'
            ].includes(layout) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    }));
};
const getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SiteLayout, {
        children: page
    })
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9874);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6455);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_type__WEBPACK_IMPORTED_MODULE_0__]);
_framework_type__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useLayout = ()=>{
    var ref8, ref1;
    const data = (0,_framework_type__WEBPACK_IMPORTED_MODULE_0__/* .useTypes */ .c)({
        limit: _framework_client_variables__WEBPACK_IMPORTED_MODULE_2__/* .TYPES_PER_PAGE */ .Fi
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const regex = /^\/$|^\/\?(.*)/;
    if (regex.test(router === null || router === void 0 ? void 0 : router.asPath)) {
        var ref2, ref3, ref4;
        var ref5;
        const homePage = (ref5 = data === null || data === void 0 ? void 0 : (ref2 = data.types) === null || ref2 === void 0 ? void 0 : ref2.find((type)=>{
            var ref;
            return type === null || type === void 0 ? void 0 : (ref = type.settings) === null || ref === void 0 ? void 0 : ref.isHome;
        })) !== null && ref5 !== void 0 ? ref5 : data === null || data === void 0 ? void 0 : (ref3 = data.types) === null || ref3 === void 0 ? void 0 : ref3[0];
        var ref6;
        return {
            layout: (ref6 = homePage === null || homePage === void 0 ? void 0 : (ref4 = homePage.settings) === null || ref4 === void 0 ? void 0 : ref4.layoutType) !== null && ref6 !== void 0 ? ref6 : 'default',
            page: homePage
        };
    }
    const page = data === null || data === void 0 ? void 0 : (ref8 = data.types) === null || ref8 === void 0 ? void 0 : ref8.find((type)=>router.asPath.includes(type.slug)
    );
    var ref7;
    return {
        layout: (ref7 = page === null || page === void 0 ? void 0 : (ref1 = page.settings) === null || ref1 === void 0 ? void 0 : ref1.layoutType) !== null && ref7 !== void 0 ? ref7 : 'default',
        page
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;