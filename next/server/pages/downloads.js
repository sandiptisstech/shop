"use strict";
(() => {
var exports = {};
exports.id = 5526;
exports.ids = [5526];
exports.modules = {

/***/ 7372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7018);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9583);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(551);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1776);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8055);
/* harmony import */ var _components_ui_loaders_wishlist_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1848);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(994);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_order__WEBPACK_IMPORTED_MODULE_2__]);
_framework_order__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const DownloadableProducts = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { downloads , error , loadMore , isLoading , hasMore  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_2__/* .useDownloadableProducts */ .M6)({
        limit: 10
    });
    const { generateDownloadableUrl  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_2__/* .useGenerateDownloadableUrl */ .Mc)();
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    }));
    if (isLoading && !downloads.length) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(4, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_wishlist_loader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                uniqueKey: `favorite-${i}`
            }, i)
        )
    }));
    if (!isLoading && !downloads.length) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        text: "text-no-download",
        className: "mx-auto w-full md:w-7/12"
    }));
    const isVariableProduct = (product)=>!(0,lodash__WEBPACK_IMPORTED_MODULE_10__.isEmpty)(product.file.fileable.product)
    ;
    var ref19;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            downloads.map((item)=>{
                var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18;
                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full space-x-4 border-b border-gray-200 py-5 first:pt-0 last:border-0 last:pb-0 rtl:space-x-reverse sm:space-x-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: isVariableProduct(item) ? item === null || item === void 0 ? void 0 : (ref = item.file) === null || ref === void 0 ? void 0 : (ref1 = ref.fileable) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.product) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.image) === null || ref3 === void 0 ? void 0 : ref3.original : (ref19 = item === null || item === void 0 ? void 0 : (ref4 = item.file) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.fileable) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.image) === null || ref6 === void 0 ? void 0 : ref6.original) !== null && ref19 !== void 0 ? ref19 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__/* .productPlaceholder */ .Hb,
                                alt: "text",
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col items-start sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex w-full flex-col space-y-1 sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: `${_config_routes__WEBPACK_IMPORTED_MODULE_7__/* .Routes.products */ .Z.products}/${isVariableProduct(item) ? item === null || item === void 0 ? void 0 : (ref7 = item.file) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.fileable) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.product) === null || ref9 === void 0 ? void 0 : ref9.slug : item === null || item === void 0 ? void 0 : (ref10 = item.file) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.fileable) === null || ref11 === void 0 ? void 0 : ref11.slug}`,
                                            className: "text-base font-semibold text-heading transition-colors hover:text-accent",
                                            children: [
                                                !isVariableProduct(item) && (item === null || item === void 0 ? void 0 : (ref12 = item.file) === null || ref12 === void 0 ? void 0 : (ref13 = ref12.fileable) === null || ref13 === void 0 ? void 0 : ref13.name),
                                                isVariableProduct(item) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        item === null || item === void 0 ? void 0 : (ref14 = item.file) === null || ref14 === void 0 ? void 0 : (ref15 = ref14.fileable) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.product) === null || ref16 === void 0 ? void 0 : ref16.name,
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "inline-block text-sm ltr:clear-left ltr:ml-1 rtl:clear-right rtl:mr-1",
                                                            children: [
                                                                "(",
                                                                item === null || item === void 0 ? void 0 : (ref17 = item.file) === null || ref17 === void 0 ? void 0 : (ref18 = ref17.fileable) === null || ref18 === void 0 ? void 0 : ref18.title,
                                                                ")"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "space-y-1 sm:space-x-1 sm:space-y-0 rtl:sm:space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "block text-sm font-semibold text-body-dark sm:inline-block sm:w-auto",
                                                    children: [
                                                        t('text-key'),
                                                        ": ",
                                                        item === null || item === void 0 ? void 0 : item.purchase_key
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hidden text-sm text-body sm:inline-block",
                                                    children: "|"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "block text-sm text-body sm:inline-block",
                                                    children: [
                                                        t('text-purchased-on'),
                                                        ' ',
                                                        dayjs__WEBPACK_IMPORTED_MODULE_5___default()(item === null || item === void 0 ? void 0 : item.created_at).format('DD.MM.YYYY')
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "mt-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover sm:mt-0",
                                    onClick: ()=>{
                                        return generateDownloadableUrl(item === null || item === void 0 ? void 0 : item.digital_file_id);
                                    },
                                    children: t('text-download')
                                })
                            ]
                        })
                    ]
                }, item.purchase_key);
            }),
            hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 flex w-full justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    loading: isLoading,
                    onClick: loadMore,
                    children: t('text-load-more')
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadableProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_6__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3948);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_products_downloadable_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7372);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9183);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9292);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_downloadable_products__WEBPACK_IMPORTED_MODULE_3__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_5__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_6__]);
([_components_products_downloadable_products__WEBPACK_IMPORTED_MODULE_3__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_5__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const DownloadableProductsPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "w-full shadow-none sm:shadow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-8 text-center text-lg font-semibold text-heading sm:mb-10 sm:text-xl",
                        children: t('text-downloads')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_downloadable_products__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};
DownloadableProductsPage.authenticationRequired = true;
DownloadableProductsPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadableProductsPage);

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3061,5152,1757,7348,2898,4685,2985,2140,606,9521,8055,8812,6515,7546,63,5251,9583,3726], () => (__webpack_exec__(7122)));
module.exports = __webpack_exports__;

})();