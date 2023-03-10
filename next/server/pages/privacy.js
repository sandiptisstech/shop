"use strict";
(() => {
var exports = {};
exports.id = 8915;
exports.ids = [8915,9183];
exports.modules = {

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , images , url , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        openGraph: {
            ...Boolean(url) && {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`
            },
            title,
            description,
            ...Boolean(images) && {
                images: images === null || images === void 0 ? void 0 : images.map((item)=>{
                    var ref;
                    return {
                        url: item === null || item === void 0 ? void 0 : (ref = item.image) === null || ref === void 0 ? void 0 : ref.original,
                        alt: item === null || item === void 0 ? void 0 : item.title
                    };
                })
            }
        },
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ privacyPolicy)
/* harmony export */ });
const privacyPolicy = {
    title: 'policy-main-title',
    date: '01/01/2020',
    content: [
        {
            id: '1',
            title: 'policy-one-title',
            description: 'policy-one-description'
        },
        {
            id: '2',
            title: 'policy-two-title',
            description: 'policy-two-description'
        },
        {
            id: '3',
            title: 'policy-three-title',
            description: 'policy-three-description'
        },
        {
            id: '4',
            title: 'policy-four-title',
            description: 'policy-four-description'
        },
        {
            id: '5',
            title: 'policy-five-title',
            description: 'policy-five-description'
        },
        {
            id: '6',
            title: 'policy-six-title',
            description: 'policy-six-description'
        }, 
    ]
};


/***/ }),

/***/ 1804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrivacyPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_static_privacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4212);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9183);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function makeTitleToDOMId(title) {
    return title.toLowerCase().split(' ').join('_');
}
function PrivacyPage() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('policy');
    const { title , date , content  } = _framework_static_privacy__WEBPACK_IMPORTED_MODULE_1__/* .privacyPolicy */ .M;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: "Privacy",
                url: "privacy"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "mb-10 sm:mt-2 lg:mb-14 xl:mt-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl",
                                children: t(title)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg",
                                children: date
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "mb-8 md:mb-0 md:w-72 xl:w-3/12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                    className: "sticky z-10 md:top-16 lg:top-22",
                                    children: content === null || content === void 0 ? void 0 : content.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                spy: true,
                                                offset: -120,
                                                smooth: true,
                                                duration: 500,
                                                to: makeTitleToDOMId(item.title),
                                                activeClass: "text-sm lg:text-base text-heading font-semibold",
                                                className: "inline-flex cursor-pointer py-3 uppercase text-sub-heading",
                                                children: t(item.title)
                                            })
                                        }, item.title)
                                    )
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8",
                                children: content === null || content === void 0 ? void 0 : content.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Element, {
                                        name: makeTitleToDOMId(item.title),
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl",
                                                children: t(item.title)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "leading-loose text-body-dark",
                                                dangerouslySetInnerHTML: {
                                                    __html: t(item.description)
                                                }
                                            })
                                        ]
                                    }, item.title)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
PrivacyPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__/* .getLayout */ .G;
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale, [
                'common',
                'policy'
            ])
        }
    };
};

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

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3061,5152,1757,7348,2898,2985,2140,606,9521,7396,3159,8717,4212], () => (__webpack_exec__(1804)));
module.exports = __webpack_exports__;

})();