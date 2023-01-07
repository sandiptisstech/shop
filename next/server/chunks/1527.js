"use strict";
exports.id = 1527;
exports.ids = [1527];
exports.modules = {

/***/ 3957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tg": () => (/* reexport */ arrow_next/* ArrowNextIcon */.z),
  "zF": () => (/* reexport */ arrow_prev/* ArrowPrevIcon */.W)
});

// UNUSED EXPORTS: Check

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icons/check-icon.tsx

const CheckIcon = ({ width =24 , height =24 , ...props })=>{
    return(/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M20 6L9 17L4 12",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }));
};
/* harmony default export */ const check_icon = ((/* unused pure expression or super */ null && (CheckIcon)));

// EXTERNAL MODULE: ./src/components/icons/arrow-next.tsx
var arrow_next = __webpack_require__(5048);
// EXTERNAL MODULE: ./src/components/icons/arrow-prev.tsx
var arrow_prev = __webpack_require__(8226);
;// CONCATENATED MODULE: ./src/components/icons/index.ts





/***/ }),

/***/ 1527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClassicLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_banners_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1697);
/* harmony import */ var _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7725);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1420);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9371);
/* harmony import */ var _components_products_grids_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__, _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__, _components_categories_categories__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_5__, _components_products_grids_home__WEBPACK_IMPORTED_MODULE_6__]);
([_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__, _components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__, _components_categories_categories__WEBPACK_IMPORTED_MODULE_3__, _filter_bar__WEBPACK_IMPORTED_MODULE_5__, _components_products_grids_home__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function ClassicLayout({ variables  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                layout: "classic",
                variables: variables.types
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variables: variables.types
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                variables: variables.categories
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Element, {
                name: "grid",
                className: "flex border-t border-solid border-border-200 border-opacity-70",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        layout: "classic",
                        variables: variables.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grids_home__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "px-4 pb-8 lg:p-8",
                        variables: variables.products
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3957);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7219);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const offerSliderBreakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 0
    },
    580: {
        slidesPerView: 2,
        spaceBetween: 16
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 16
    },
    1920: {
        slidesPerView: 4,
        spaceBetween: 24
    }
};
function PromotionSlider({ sliders  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "px-6 py-5 border-t md:p-8 border-border-200 bg-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                    id: "offer",
                    //TODO: need discussion
                    // loop={true}
                    breakpoints: offerSliderBreakpoints,
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_
                    ],
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev'
                    },
                    children: sliders === null || sliders === void 0 ? void 0 : sliders.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                className: "w-full h-auto",
                                src: d.original,
                                alt: d.id,
                                layout: "responsive",
                                width: "580",
                                height: "270"
                            })
                        }, d.id)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer prev top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-previous')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowPrev */ .zF, {
                            width: 18,
                            height: 18
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 md:-mt-5 md:w-9 md:h-9 bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent",
                    role: "button",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('common:text-next')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowNext */ .Tg, {
                            width: 18,
                            height: 18
                        })
                    ]
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromotionSliders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7018);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__, _framework_type__WEBPACK_IMPORTED_MODULE_3__]);
([_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__, _framework_type__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function PromotionSliders({ variables  }) {
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_3__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: error.message
    }));
    if (!(type === null || type === void 0 ? void 0 : type.promotional_sliders)) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promotions_promotion_slider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        sliders: type === null || type === void 0 ? void 0 : type.promotional_sliders
    }));
};

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