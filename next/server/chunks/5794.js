"use strict";
exports.id = 5794;
exports.ids = [5794];
exports.modules = {

/***/ 5794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileAuthorizedMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2140);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3631);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7941);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__, _framework_user__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__, _framework_user__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MobileAuthorizedMenu() {
    var ref, ref1, ref2;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { me  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useUser */ .aF)();
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__/* .drawerAtom */ .P);
    const { mutate: logout  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useLogout */ .aU)();
    function handleClick(path) {
        router.push(path);
        closeSidebar({
            display: false,
            view: ''
        });
    }
    var ref3, ref4, ref5;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "flex-grow",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex w-full items-center justify-between border-t border-dashed border-border-200 bg-gray-100 px-5 pt-3 text-sm font-semibold capitalize text-body focus:outline-none ltr:text-left rtl:text-right md:px-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-total-points')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: (ref3 = me === null || me === void 0 ? void 0 : (ref = me.wallet) === null || ref === void 0 ? void 0 : ref.total_points) !== null && ref3 !== void 0 ? ref3 : 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex w-full items-center justify-between bg-gray-100 px-5 pt-3 text-sm font-semibold capitalize text-body focus:outline-none ltr:text-left rtl:text-right md:px-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-points-used')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: (ref4 = me === null || me === void 0 ? void 0 : (ref1 = me.wallet) === null || ref1 === void 0 ? void 0 : ref1.points_used) !== null && ref4 !== void 0 ? ref4 : 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex w-full items-center justify-between border-b border-dashed border-border-200 bg-gray-100 px-5 py-3 text-sm font-semibold capitalize text-body focus:outline-none ltr:text-left rtl:text-right md:px-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-available-points')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: (ref5 = me === null || me === void 0 ? void 0 : (ref2 = me.wallet) === null || ref2 === void 0 ? void 0 : ref2.available_points) !== null && ref5 !== void 0 ? ref5 : 0
                        })
                    ]
                }),
                _config_site__WEBPACK_IMPORTED_MODULE_1__/* .siteSettings.authorizedLinksMobile.map */ .U.authorizedLinksMobile.map(({ href , label  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block cursor-pointer px-5 py-3 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8",
                            onClick: ()=>handleClick(href)
                            ,
                            children: t(label)
                        })
                    }, `${href}${label}`)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "block cursor-pointer px-5 py-3 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent md:px-8",
                        onClick: ()=>logout()
                        ,
                        children: t('auth-menu-logout')
                    })
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;