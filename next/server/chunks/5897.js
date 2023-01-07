"use strict";
exports.id = 5897;
exports.ids = [5897];
exports.modules = {

/***/ 4173:
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
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7219);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1776);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8310);
/* harmony import */ var _layouts_headers_header_search_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5647);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__, _layouts_headers_header_search_atom__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__, _layouts_headers_header_search_atom__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BannerWithSearch = ({ banners , layout  })=>{
    const { showHeaderSearch , hideHeaderSearch  } = (0,_layouts_headers_header_search_atom__WEBPACK_IMPORTED_MODULE_6__/* .useHeaderSearch */ .W)();
    const intersectionRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);
    const intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_7__.useIntersection)(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (intersection && intersection.isIntersecting) {
            hideHeaderSearch();
            return;
        }
        if (intersection && !intersection.isIntersecting) {
            showHeaderSearch();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        intersection
    ]);
    var ref2, _title;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative hidden lg:block', {
            '!block': layout === 'minimal'
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "-z-1 overflow-hidden",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                    id: "banner",
                    // loop={true}
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_
                    ],
                    resizeObserver: true,
                    allowTouchMove: false,
                    slidesPerView: 1,
                    children: banners === null || banners === void 0 ? void 0 : banners.map((banner, idx)=>{
                        var ref, ref1;
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative h-screen w-full', {
                                    'max-h-140': layout === 'standard',
                                    'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
                                }),
                                children: [
                                    ((ref = banner.image) === null || ref === void 0 ? void 0 : ref.original) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                        className: "h-full min-h-140 w-full",
                                        src: (ref2 = (ref1 = banner.image) === null || ref1 === void 0 ? void 0 : ref1.original) !== null && ref2 !== void 0 ? ref2 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .productPlaceholder */ .Hb,
                                        alt: (_title = banner.title) !== null && _title !== void 0 ? _title : '',
                                        layout: "fill",
                                        objectFit: "cover"
                                    }) : "",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10', {
                                            'space-y-5 md:!space-y-8': layout === 'minimal'
                                        }),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl', {
                                                    '!text-accent': layout === 'minimal'
                                                }),
                                                children: banner === null || banner === void 0 ? void 0 : banner.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-heading lg:text-base xl:text-lg",
                                                children: banner === null || banner === void 0 ? void 0 : banner.description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full max-w-3xl",
                                                ref: intersectionRef,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                    label: "search"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx);
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithSearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation),
/* harmony export */   "o3": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs),
/* harmony export */   "tl": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination),
/* harmony export */   "tq": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "o5": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__, swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
([swiper__WEBPACK_IMPORTED_MODULE_0__, swiper_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;