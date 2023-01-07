"use strict";
(() => {
var exports = {};
exports.id = 6170;
exports.ids = [6170];
exports.modules = {

/***/ 1977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8701);
/* harmony import */ var _header_minimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5473);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5884);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4008);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2453);
/* harmony import */ var _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _header__WEBPACK_IMPORTED_MODULE_4__, _header_minimal__WEBPACK_IMPORTED_MODULE_5__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__, _footer__WEBPACK_IMPORTED_MODULE_7__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, jotai__WEBPACK_IMPORTED_MODULE_3__, _header__WEBPACK_IMPORTED_MODULE_4__, _header_minimal__WEBPACK_IMPORTED_MODULE_5__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__, _footer__WEBPACK_IMPORTED_MODULE_7__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function HomeLayout({ children , layout  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const [, setDisplayMobileHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_9__/* .displayMobileHeaderSearchAtom */ .a);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col min-h-screen transition-colors duration-150 bg-gray-100",
        children: [
            [
                'minimal',
                'compact'
            ].includes(layout) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_minimal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                layout: layout
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                layout: layout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-screen",
                children: children
            }),
            [
                'compact'
            ].includes(layout) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                    whileTap: {
                        scale: 0.88
                    },
                    onClick: ()=>setDisplayMobileHeaderSearch((prev)=>!prev
                        )
                    ,
                    className: "flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('text-search')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_8__/* .SearchIcon */ .W, {
                            width: "17.05",
                            height: "18"
                        })
                    ]
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9717);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8780);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4833);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9128);
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_4__]);
_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// This function gets called at build time
const getStaticPaths = async ({ locales ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_3___default()(locales, 'locales is not defined');
    const data = await _client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].types.all */ .Z.types.all({
        limit: 100
    });
    const paths = data === null || data === void 0 ? void 0 : data.flatMap((type)=>{
        return locales === null || locales === void 0 ? void 0 : locales.map((locale)=>({
                params: {
                    pages: [
                        type.slug
                    ]
                },
                locale
            })
        );
    });
    // We'll pre-render only these paths at build time also with the slash route.
    return {
        paths: paths.concat(locales === null || locales === void 0 ? void 0 : locales.map((locale)=>({
                params: {
                    pages: []
                },
                locale
            })
        )),
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ locale , params  })=>{
    var ref5, ref1;
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    await queryClient.prefetchQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].settings.all */ .Z.settings.all(queryKey[1])
    );
    const types = await queryClient.fetchQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.TYPES */ .P.TYPES,
        {
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_6__/* .TYPES_PER_PAGE */ .Fi,
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].types.all */ .Z.types.all(queryKey[1])
    );
    const { pages  } = params;
    let pageType;
    if (!pages) {
        var ref2, ref3;
        var ref4;
        pageType = (ref4 = (ref2 = types.find((type)=>{
            var ref;
            return type === null || type === void 0 ? void 0 : (ref = type.settings) === null || ref === void 0 ? void 0 : ref.isHome;
        })) === null || ref2 === void 0 ? void 0 : ref2.slug) !== null && ref4 !== void 0 ? ref4 : types === null || types === void 0 ? void 0 : (ref3 = types[0]) === null || ref3 === void 0 ? void 0 : ref3.slug;
    } else {
        pageType = pages[0];
    }
    if (!(types === null || types === void 0 ? void 0 : types.some((t)=>t.slug === pageType
    ))) {
        return {
            notFound: true,
            // This is require to regenerate the page
            revalidate: 120
        };
    }
    await queryClient.prefetchQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.TYPES */ .P.TYPES,
        {
            slug: pageType,
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].types.get */ .Z.types.get(queryKey[1])
    );
    const productVariables = {
        type: pageType,
        limit: _client_variables__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCTS_PER_PAGE */ .a9
    };
    await queryClient.prefetchInfiniteQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
        {
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_6__/* .PRODUCTS_PER_PAGE */ .a9,
            type: pageType,
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].products.all */ .Z.products.all(queryKey[1])
    );
    const popularProductVariables = {
        type_slug: pageType,
        limit: 10,
        with: 'type;author',
        language: locale
    };
    // Only prefetch popular products for `book` demo
    if (pageType === 'book') {
        await queryClient.prefetchQuery([
            _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.PRODUCTS_POPULAR */ .P.PRODUCTS_POPULAR,
            popularProductVariables
        ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].products.popular */ .Z.products.popular(queryKey[1])
        );
    }
    const categoryVariables = {
        type: pageType,
        limit: _client_variables__WEBPACK_IMPORTED_MODULE_6__/* .CATEGORIES_PER_PAGE */ .kL,
        language: locale,
        parent: ((ref5 = types.find((t)=>t.slug === pageType
        )) === null || ref5 === void 0 ? void 0 : ref5.settings.layoutType) === 'minimal' ? 'all' : 'null'
    };
    await queryClient.prefetchInfiniteQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.CATEGORIES */ .P.CATEGORIES,
        categoryVariables
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].categories.all */ .Z.categories.all(queryKey[1])
    );
    var _layoutType;
    return {
        props: {
            variables: {
                popularProducts: popularProductVariables,
                products: productVariables,
                categories: categoryVariables,
                types: {
                    type: pageType
                }
            },
            layout: (_layoutType = (ref1 = types.find((t)=>t.slug === pageType
            )) === null || ref1 === void 0 ? void 0 : ref1.settings.layoutType) !== null && _layoutType !== void 0 ? _layoutType : 'default',
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common',
                'banner'
            ]),
            dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)))
        },
        revalidate: 120
    };
}; /* Fix : locales: 14kB,
popularProducts: 30kB,
category: 22kB,
groups: 8kB,
group: 2kB,
settings: 2kB,
perProduct: 4.2 * 30 = 120kB,
total = 14 + 30 + 22 + 8 + 2 + 2 + 120 = 198kB
others: 225 - 198 = 27kB

 */ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2089);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 9711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_8__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_8__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1977);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9183);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8939);
/* harmony import */ var _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4266);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_home__WEBPACK_IMPORTED_MODULE_5__, _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_8__, _framework_type__WEBPACK_IMPORTED_MODULE_9__]);
([_components_layouts_home__WEBPACK_IMPORTED_MODULE_5__, _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_8__, _framework_type__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
const Classic = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4685), __webpack_require__.e(8055), __webpack_require__.e(8812), __webpack_require__.e(8704), __webpack_require__.e(1388), __webpack_require__.e(4124), __webpack_require__.e(1420), __webpack_require__.e(6059), __webpack_require__.e(1697), __webpack_require__.e(4616), __webpack_require__.e(9371), __webpack_require__.e(1527)]).then(__webpack_require__.bind(__webpack_require__, 1527))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/classic"
        ]
    }
});
const Standard = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4685), __webpack_require__.e(8055), __webpack_require__.e(8704), __webpack_require__.e(1388), __webpack_require__.e(4124), __webpack_require__.e(1420), __webpack_require__.e(6059), __webpack_require__.e(1697), __webpack_require__.e(4616), __webpack_require__.e(9371), __webpack_require__.e(2945)]).then(__webpack_require__.bind(__webpack_require__, 2945))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/standard"
        ]
    }
});
const Modern = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4685), __webpack_require__.e(8055), __webpack_require__.e(8704), __webpack_require__.e(1388), __webpack_require__.e(4124), __webpack_require__.e(1420), __webpack_require__.e(6059), __webpack_require__.e(1697), __webpack_require__.e(4616), __webpack_require__.e(9371), __webpack_require__.e(3569)]).then(__webpack_require__.bind(__webpack_require__, 3569))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/modern"
        ]
    }
});
const Minimal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4124), __webpack_require__.e(1420), __webpack_require__.e(1697), __webpack_require__.e(7091)]).then(__webpack_require__.bind(__webpack_require__, 7091))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/minimal"
        ]
    }
});
const Compact = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4685), __webpack_require__.e(8055), __webpack_require__.e(8812), __webpack_require__.e(8704), __webpack_require__.e(1388), __webpack_require__.e(4124), __webpack_require__.e(3229), __webpack_require__.e(1420), __webpack_require__.e(6059), __webpack_require__.e(5781), __webpack_require__.e(1697), __webpack_require__.e(4616), __webpack_require__.e(9371), __webpack_require__.e(5443), __webpack_require__.e(9539), __webpack_require__.e(9741), __webpack_require__.e(4294)]).then(__webpack_require__.bind(__webpack_require__, 4294))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/compact"
        ]
    }
});
const MAP_LAYOUT_TO_GROUP = {
    classic: Classic,
    modern: Modern,
    standard: Standard,
    minimal: Minimal,
    compact: Compact,
    default: Classic
};
const Home = ({ variables , layout  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_7__/* .useWindowSize */ .i)();
    const { type  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_9__/* .useType */ .o)(variables.types.type);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (query.text || query.category) {
            react_scroll__WEBPACK_IMPORTED_MODULE_4__.scroller.scrollTo('grid', {
                smooth: true,
                offset: -110
            });
        }
    }, [
        query.text,
        query.category
    ]);
    const Component = MAP_LAYOUT_TO_GROUP[layout];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: type === null || type === void 0 ? void 0 : type.name,
                url: type === null || type === void 0 ? void 0 : type.slug,
                images: type === null || type === void 0 ? void 0 : type.banners
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                variables: variables
            }),
            ![
                'compact',
                'minimal'
            ].includes(layout) && width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
        ]
    }));
};
Home.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_home__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        layout: page.props.layout,
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("react-use/lib/useWindowSize");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3061,5152,1757,7348,2898,2985,2140,606,9521,7396,3159,8717,9183], () => (__webpack_exec__(9711)));
module.exports = __webpack_exports__;

})();