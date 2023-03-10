"use strict";
exports.id = 2565;
exports.ids = [2565];
exports.modules = {

/***/ 9757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cart = ({ width , height , className  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        viewBox: "0 0 14.4 12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            transform: "translate(-288 -413.89)",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ }),

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3713);
/* harmony import */ var _components_icons_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9757);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const AddToCartBtn = ({ variant , onClick , disabled  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    switch(variant){
        case 'neon':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                disabled: disabled,
                className: "group flex h-7 w-full items-center justify-between rounded bg-gray-100 text-xs text-body-dark transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:text-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-1",
                        children: t('text-add')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "grid h-7 w-7 place-items-center bg-gray-200 transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                            className: "h-4 w-4 stroke-2"
                        })
                    })
                ]
            }));
        case 'argon':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onClick,
                disabled: disabled,
                className: "flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-heading transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:w-9",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                    className: "h-5 w-5 stroke-2"
                })
            }));
        case 'oganesson':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                disabled: disabled,
                className: "flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm text-light shadow-500 transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-10 md:w-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-plus')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                        className: "h-5 w-5 stroke-2 md:h-6 md:w-6"
                    })
                ]
            }));
        case 'single':
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                disabled: disabled,
                className: "order-5 flex items-center justify-center rounded-full border-2 border-border-100 bg-light px-3 py-2 text-sm font-semibold text-accent transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none sm:order-4 sm:justify-start sm:px-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: t('text-cart')
                    })
                ]
            }));
        case 'big':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onClick,
                disabled: disabled,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('flex w-full items-center justify-center rounded bg-accent py-4 px-5 text-sm font-light text-light transition-colors duration-300 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none lg:text-base', {
                    'cursor-not-allowed border border-border-400 !bg-gray-300 !text-body hover:!bg-gray-300': disabled
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: t('text-add-cart')
                })
            }));
        case 'text':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onClick,
                disabled: disabled,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('whitespace-nowrap text-sm font-semibold text-accent hover:text-accent-hover hover:underline', {
                    'text-gray-300 hover:text-gray-300': disabled
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: t('text-add-to-cart')
                })
            }));
        default:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClick,
                disabled: disabled,
                title: disabled ? 'Out Of Stock' : '',
                className: "flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-accent transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:w-9",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-plus')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                        className: "h-5 w-5 stroke-2"
                    })
                ]
            }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCartBtn);


/***/ }),

/***/ 2565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ AddToCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5821);
/* harmony import */ var _components_products_add_to_cart_add_to_cart_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2656);
/* harmony import */ var _lib_cart_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4880);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7014);
/* harmony import */ var _store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__]);
_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AddToCart = ({ data , variant ='helium' , counterVariant , counterClass , variation , disabled  })=>{
    const { addItemToCart , removeItemFromCart , isInStock , getItemFromCart , isInCart , updateCartLanguage , language  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .jD)();
    const item = (0,_store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_4__/* .generateCartItem */ .z)(data, variation);
    const handleAddClick = (e)=>{
        e.stopPropagation();
        // Check language and update
        if ((item === null || item === void 0 ? void 0 : item.language) !== language) {
            updateCartLanguage(item === null || item === void 0 ? void 0 : item.language);
        }
        addItemToCart(item, 1);
        if (!isInCart(item.id)) {
            (0,_lib_cart_animation__WEBPACK_IMPORTED_MODULE_5__/* .cartAnimation */ .L)(e);
        }
    };
    const handleRemoveClick = (e)=>{
        e.stopPropagation();
        removeItemFromCart(item.id);
    };
    const outOfStock = isInCart(item === null || item === void 0 ? void 0 : item.id) && !isInStock(item.id);
    return !isInCart(item === null || item === void 0 ? void 0 : item.id) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart_btn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        disabled: disabled || outOfStock,
        variant: variant,
        onClick: handleAddClick
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            value: getItemFromCart(item.id).quantity,
            onDecrement: handleRemoveClick,
            onIncrement: handleAddClick,
            variant: counterVariant || variant,
            className: counterClass,
            disabled: outOfStock
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;