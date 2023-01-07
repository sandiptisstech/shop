"use strict";
exports.id = 3141;
exports.ids = [3141];
exports.modules = {

/***/ 3141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3879);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1776);
/* harmony import */ var _components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const BannerWithoutSlider = ({ banners , layout  })=>{
    var ref, ref1, ref2, ref3, ref4;
    var ref5, ref6;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative hidden lg:block', {
            '!block': layout === 'minimal'
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative h-screen w-full', {
                'max-h-140': layout === 'standard',
                'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                    className: "h-full min-h-140 w-full",
                    src: (ref5 = (ref = banners[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.image) === null || ref1 === void 0 ? void 0 : ref1.original) !== null && ref5 !== void 0 ? ref5 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__/* .productPlaceholder */ .Hb,
                    alt: (ref6 = (ref2 = banners[0]) === null || ref2 === void 0 ? void 0 : ref2.title) !== null && ref6 !== void 0 ? ref6 : '',
                    layout: "fill",
                    objectFit: "cover"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('absolute inset-0 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10', {
                        'space-y-5 md:!space-y-8': layout === 'minimal'
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-2xl font-bold tracking-tight text-heading md:text-3xl lg:text-4xl xl:text-5xl', {
                                '!text-accent': layout === 'minimal'
                            }),
                            children: (ref3 = banners[0]) === null || ref3 === void 0 ? void 0 : ref3.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-body md:text-base xl:text-lg",
                            children: (ref4 = banners[0]) === null || ref4 === void 0 ? void 0 : ref4.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-3xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: "search",
                                className: "hidden lg:block",
                                variant: "with-shadow"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithoutSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;