"use strict";
exports.id = 1697;
exports.ids = [1697];
exports.modules = {

/***/ 1697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6455);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_type__WEBPACK_IMPORTED_MODULE_1__]);
_framework_type__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ErrorMessage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7018))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/ui/error-message"
        ]
    }
});
const BannerWithSearch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(8310), __webpack_require__.e(5864), __webpack_require__.e(5897)]).then(__webpack_require__.bind(__webpack_require__, 4173))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-with-search"
        ]
    }
});
const BannerShort = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(8812), __webpack_require__.e(6259)]).then(__webpack_require__.bind(__webpack_require__, 6259))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-short"
        ]
    }
});
const BannerWithoutSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 3141).then(__webpack_require__.bind(__webpack_require__, 3141))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-without-slider"
        ]
    }
});
const BannerWithPagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 3273).then(__webpack_require__.bind(__webpack_require__, 3273))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-with-pagination"
        ]
    }
});
const MAP_BANNER_TO_GROUP = {
    classic: BannerWithSearch,
    modern: BannerShort,
    minimal: BannerWithoutSlider,
    standard: BannerWithSearch,
    compact: BannerWithPagination,
    default: BannerWithSearch
};
const Banner = ({ layout , variables ,  })=>{
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_1__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
        message: error.message
    }));
    const Component = MAP_BANNER_TO_GROUP[layout];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        banners: type === null || type === void 0 ? void 0 : type.banners,
        layout: layout,
        slug: type === null || type === void 0 ? void 0 : type.slug
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;