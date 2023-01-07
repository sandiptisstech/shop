"use strict";
(() => {
var exports = {};
exports.id = 4646;
exports.ids = [4646];
exports.modules = {

/***/ 5974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(3879);
;// CONCATENATED MODULE: ./src/components/icons/map-pin.tsx

const MapPin = ({ ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z",
            fill: "currentColor"
        })
    }));
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(6457);
// EXTERNAL MODULE: ./src/config/routes.ts
var routes = __webpack_require__(551);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(6872);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(1776);
;// CONCATENATED MODULE: ./src/components/ui/cards/shop.tsx









const ShopCard = ({ shop  })=>{
    var ref;
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const isNew = false;
    var ref1;
    return(/*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: routes/* Routes.shop */.Z.shop(shop.slug),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex cursor-pointer items-center rounded border border-gray-200 p-5",
            children: [
                isNew && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute top-2 rounded bg-blue-500 px-2 py-1 text-xs text-light ltr:right-2 rtl:left-2",
                    children: t('common:text-new')
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                        alt: t('common:text-logo'),
                        src: (ref1 = shop === null || shop === void 0 ? void 0 : (ref = shop.logo) === null || ref === void 0 ? void 0 : ref.thumbnail) !== null && ref1 !== void 0 ? ref1 : placeholders/* productPlaceholder */.Hb,
                        layout: "fill",
                        objectFit: "cover"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col ltr:ml-4 rtl:mr-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mb-2 text-lg font-semibold text-heading",
                            children: shop === null || shop === void 0 ? void 0 : shop.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "flex text-xs text-body",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MapPin, {
                                    className: "h-3.5 w-3.5 shrink-0 text-muted ltr:mr-1 rtl:ml-1"
                                }),
                                !isEmpty_default()((0,format_address/* formatAddress */.T)(shop === null || shop === void 0 ? void 0 : shop.address)) ? (0,format_address/* formatAddress */.T)(shop === null || shop === void 0 ? void 0 : shop.address) : t('common:text-no-address')
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const shop = (ShopCard);


/***/ }),

/***/ 7621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useShops)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4833);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9128);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useShops(options) {
    var ref;
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS,
        options
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].shops.all */ .Z.shops.all(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref1;
    return {
        shops: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref1 !== void 0 ? ref1 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9717);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4833);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9128);
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_3__]);
_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getStaticProps = async ({ locale  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    await queryClient.prefetchQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].settings.all */ .Z.settings.all(queryKey[1])
    );
    await queryClient.prefetchQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.TYPES */ .P.TYPES,
        {
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_5__/* .TYPES_PER_PAGE */ .Fi,
            language: locale
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].types.all */ .Z.types.all(queryKey[1])
    );
    await queryClient.prefetchInfiniteQuery([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS,
        {
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_5__/* .SHOPS_PER_PAGE */ .$0,
            is_active: 1
        }
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].shops.all */ .Z.shops.all(queryKey[1])
    );
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common',
                'banner'
            ]),
            dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ formatAddress)
/* harmony export */ });
function removeFalsy(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v])=>Boolean(v)
    ));
}
function formatAddress(address) {
    if (!address) return;
    const temp = [
        'street_address',
        'state',
        'city',
        'zip',
        'country'
    ].reduce((acc, k)=>({
            ...acc,
            [k]: address[k]
        })
    , {});
    const formattedAddress = removeFalsy(temp);
    return Object.values(formattedAddress).join(', ');
}


/***/ }),

/***/ 3395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_shops_page_ssr__WEBPACK_IMPORTED_MODULE_10__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8055);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(994);
/* harmony import */ var _components_ui_loaders_coupon_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3726);
/* harmony import */ var _framework_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7621);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7018);
/* harmony import */ var _components_ui_cards_shop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5974);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6482);
/* harmony import */ var _framework_shops_page_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_shop__WEBPACK_IMPORTED_MODULE_6__, _framework_shops_page_ssr__WEBPACK_IMPORTED_MODULE_10__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_shop__WEBPACK_IMPORTED_MODULE_6__, _framework_shops_page_ssr__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ShopsPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const limit = _lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .SHOPS_LIMIT */ .V4;
    const { shops , isLoading , isLoadingMore , hasMore , loadMore , error  } = (0,_framework_shop__WEBPACK_IMPORTED_MODULE_6__/* .useShops */ .A)({
        limit,
        is_active: 1
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: error.message
    }));
    if (!isLoading && !shops.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full px-4 pt-6 pb-8 bg-gray-100 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "text-no-shops"
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen bg-light ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col w-full max-w-6xl p-8 mx-auto pt-14",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "mb-8 text-2xl font-bold text-heading",
                    children: t('text-all-shops')
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                    children: isLoading && !shops.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_coupon_loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                uniqueKey: `shops-${i}`
                            }, i)
                        )
                    }) : shops.map((shop)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_cards_shop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            shop: shop
                        }, shop.id)
                    )
                }),
                hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center mt-8 lg:mt-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClick: loadMore,
                        loading: isLoadingMore,
                        children: t('text-load-more')
                    })
                })
            ]
        })
    }));
};
ShopsPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopsPage);

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3061,5152,1757,7348,2898,4685,2985,2140,606,9521,7396,8055,3159,8717,4212,5803], () => (__webpack_exec__(3395)));
module.exports = __webpack_exports__;

})();