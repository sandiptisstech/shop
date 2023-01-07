"use strict";
exports.id = 9926;
exports.ids = [9926];
exports.modules = {

/***/ 5007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ AddToCartAlt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5821);
/* harmony import */ var _lib_cart_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4880);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7014);
/* harmony import */ var _store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8775);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__]);
_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const AddToCartAlt = ({ data , variant ='helium' , counterVariant , counterClass , variation , disabled  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    const { addItemToCart , isInStock , isInCart , updateCartLanguage , language  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__/* .useCart */ .jD)();
    const item = (0,_store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_3__/* .generateCartItem */ .z)(data, variation);
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    const increment = (e)=>{
        e.stopPropagation();
        setQuantity((prev)=>prev + 1
        );
    };
    const handleAddClick = (e)=>{
        e.stopPropagation();
        // Check language and update
        if ((item === null || item === void 0 ? void 0 : item.language) !== language) {
            updateCartLanguage(item === null || item === void 0 ? void 0 : item.language);
        }
        addItemToCart(item, quantity);
        setQuantity(1);
        if (!isInCart(item.id)) {
            (0,_lib_cart_animation__WEBPACK_IMPORTED_MODULE_7__/* .cartAnimation */ .L)(e);
        }
    };
    const decrement = (e)=>{
        e.stopPropagation();
        setQuantity((prev)=>{
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    };
    const outOfStock = isInCart(item === null || item === void 0 ? void 0 : item.id) && !isInStock(item.id);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-3 rtl:space-x-reverse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                value: quantity,
                onDecrement: decrement,
                onIncrement: increment,
                variant: counterVariant || variant,
                className: counterClass,
                disabled: outOfStock
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "h-14 w-full max-w-sm !shrink",
                onClick: handleAddClick,
                disabled: disabled || outOfStock,
                children: t('text-add-to-cart')
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BadgeGroups = ({ title , children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-start w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pb-3 text-sm font-semibold capitalize text-heading",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row flex-wrap",
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeGroups);


/***/ }),

/***/ 9926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6427);
/* harmony import */ var _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3947);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7581);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3121);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8933);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(551);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2451);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5550);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(205);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2974);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6821);
/* harmony import */ var _components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5007);
/* harmony import */ var _badge_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4759);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6872);
/* harmony import */ var _lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6390);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6816);
/* harmony import */ var _components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7016);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7995);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(357);
/* harmony import */ var _framework_wishlist__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5513);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6720);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_1__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__, _variation_price__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_12__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_15__, _components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_17__, _framework_user__WEBPACK_IMPORTED_MODULE_24__, _framework_wishlist__WEBPACK_IMPORTED_MODULE_25__]);
([_lib_use_price__WEBPACK_IMPORTED_MODULE_1__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__, _variation_price__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_12__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_15__, _components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_17__, _framework_user__WEBPACK_IMPORTED_MODULE_24__, _framework_wishlist__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





























function FavoriteButton({ productId , className  }) {
    const { isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_24__/* .useUser */ .aF)();
    const { toggleWishlist , isLoading: adding  } = (0,_framework_wishlist__WEBPACK_IMPORTED_MODULE_25__/* .useToggleWishlist */ .n$)(productId);
    const { inWishlist , isLoading: checking  } = (0,_framework_wishlist__WEBPACK_IMPORTED_MODULE_25__/* .useInWishlist */ .tc)({
        enabled: isAuthorized,
        product_id: productId
    });
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_26__/* .useModalAction */ .SO)();
    function toggle() {
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        toggleWishlist({
            product_id: productId
        });
    }
    const isLoading = adding || checking;
    if (isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_27___default()('mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300', className),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                simple: true,
                className: "flex h-5 w-5"
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_27___default()('mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-colors', {
            '!border-accent': inWishlist
        }, className),
        onClick: toggle,
        children: inWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_22__/* .HeartFillIcon */ .q, {
            className: "h-5 w-5 text-accent"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_21__/* .HeartOutlineIcon */ .P, {
            className: "h-5 w-5 text-accent"
        })
    }));
}
const BookDetails = ({ product , isModal =false  })=>{
    const { id , name , image , description , categories , gallery , type , sku , author , manufacturer , tags , is_digital ,  } = product !== null && product !== void 0 ? product : {};
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const [_, setShowStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_12__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_15__/* .stickyShortDetailsAtom */ .f);
    const { attributes  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_16__/* .useAttributes */ .Ch)();
    const intersectionRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_20__.useIntersection)(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    });
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (intersection && intersection.isIntersecting) {
            setShowStickyShortDetails(false);
            return;
        }
        if (intersection && !intersection.isIntersecting) {
            setShowStickyShortDetails(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        intersection
    ]);
    var ref;
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: (product === null || product === void 0 ? void 0 : product.sale_price) ? product === null || product === void 0 ? void 0 : product.sale_price : product === null || product === void 0 ? void 0 : product.price,
        baseAmount: (ref = product === null || product === void 0 ? void 0 : product.price) !== null && ref !== void 0 ? ref : 0
    });
    const variations = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return (0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_4__/* .getVariations */ .y)(product === null || product === void 0 ? void 0 : product.variations);
    }, [
        product === null || product === void 0 ? void 0 : product.variations
    ]);
    const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__/* .isVariationSelected */ .V)(variations, attributes);
    let selectedVariation = {};
    if (isSelected) {
        var ref1;
        selectedVariation = product === null || product === void 0 ? void 0 : (ref1 = product.variation_options) === null || ref1 === void 0 ? void 0 : ref1.find((o)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(o.options.map((v)=>v.value
            ).sort(), Object.values(attributes).sort())
        );
    }
    const scrollDetails = ()=>{
        react_scroll__WEBPACK_IMPORTED_MODULE_9__.scroller.scrollTo('details', {
            smooth: true,
            offset: -80
        });
    };
    const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(variations);
    const previewImages = (0,_lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_28__/* .displayImage */ ._)(selectedVariation === null || selectedVariation === void 0 ? void 0 : selectedVariation.image, gallery, image);
    var _sku;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mx-auto max-w-screen-xl rounded-lg bg-light px-5 py-16 xl:px-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col border-b border-border-200 border-opacity-70 pb-14 lg:flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-gallery h-full bg-gray-100 py-5 md:py-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__/* .ThumbsCarousel */ .X, {
                                gallery: previewImages,
                                hideThumbs: previewImages.length <= 1,
                                aspectRatio: "auto"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 flex flex-col items-start lg:mt-0 lg:w-1/2 ltr:lg:pl-10 rtl:lg:pr-10 ltr:xl:pl-16 rtl:xl:pr-16 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                ref: intersectionRef,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full items-start justify-between space-x-5 rtl:space-x-reverse lg:space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col items-start",
                                                children: [
                                                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-xl font-bold tracking-tight text-heading lg:text-2xl xl:text-3xl",
                                                        children: name
                                                    }),
                                                    Boolean(is_digital) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mt-3 rounded bg-accent-400 px-3 py-1.5 text-xs font-normal text-white md:mt-4",
                                                        children: t('text-downloadable')
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoriteButton, {
                                                productId: id
                                            })
                                        ]
                                    }),
                                    (author === null || author === void 0 ? void 0 : author.name) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 flex items-center space-x-5 rtl:space-x-reverse md:mt-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "flex items-center text-sm font-normal text-body",
                                            children: [
                                                t('text-by-author'),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                    href: _config_routes__WEBPACK_IMPORTED_MODULE_11__/* .Routes.author */ .Z.author(author === null || author === void 0 ? void 0 : author.slug),
                                                    className: "text-sm font-bold text-heading transition-colors hover:text-accent ltr:ml-2 rtl:mr-2",
                                                    children: author === null || author === void 0 ? void 0 : author.name
                                                })
                                            ]
                                        })
                                    }),
                                    hasVariations ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-5 mb-7 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                        selectedVariation: selectedVariation,
                                                        minPrice: product.min_price,
                                                        maxPrice: product.max_price
                                                    }),
                                                    isSelected && discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "rounded-md bg-accent-200 px-2 py-1 text-xs font-semibold uppercase leading-6 text-accent ltr:ml-4 rtl:mr-4",
                                                        children: [
                                                            discount,
                                                            " ",
                                                            t('text-off')
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    variations: variations,
                                                    variant: "outline"
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "mt-5 mb-7 flex items-center space-x-4 rtl:space-x-reverse",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                className: "text-2xl font-bold text-heading no-underline md:text-3xl",
                                                children: price
                                            }),
                                            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                className: "text-base font-normal text-muted md:text-base",
                                                children: basePrice
                                            }),
                                            discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "rounded-md bg-accent-200 px-2 py-1 text-xs font-semibold uppercase leading-6 text-accent",
                                                children: [
                                                    discount,
                                                    " ",
                                                    t('text-off')
                                                ]
                                            })
                                        ]
                                    }),
                                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-7 text-sm leading-7 text-body",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            character: 150,
                                            ...!isModal && {
                                                onClick: ()=>scrollDetails()
                                                ,
                                                compressText: 'common:text-see-more'
                                            },
                                            children: description
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-4 flex flex-col items-center border-b border-border-200 border-opacity-70 pb-5 md:mt-6 md:pb-8 lg:flex-row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-3 w-full lg:mb-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_17__/* .AddToCartAlt */ .j, {
                                                data: product,
                                                variant: "bordered",
                                                variation: selectedVariation,
                                                disabled: (selectedVariation === null || selectedVariation === void 0 ? void 0 : selectedVariation.is_disable) || !isSelected
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-3",
                                children: [
                                    !!(categories === null || categories === void 0 ? void 0 : categories.length) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_badge_groups__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        title: t('text-categories'),
                                        children: categories.map((category)=>{
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                href: `/${type === null || type === void 0 ? void 0 : type.slug}/search/?category=${category.slug}`,
                                                className: "bg-transparent text-sm text-body transition-colors after:content-[','] last:after:content-[''] hover:text-accent focus:bg-opacity-100 focus:outline-none ltr:pr-0.5 ltr:last:pr-0 rtl:pl-0.5 rtl:last:pl-0",
                                                children: category.name
                                            }, category.id);
                                        })
                                    }),
                                    !!(tags === null || tags === void 0 ? void 0 : tags.length) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_badge_groups__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        title: t('text-tags'),
                                        children: tags.map((tag)=>{
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                href: `/${type === null || type === void 0 ? void 0 : type.slug}/search/?tags=${tag.slug}`,
                                                className: "bg-transparent text-sm text-body transition-colors after:content-[','] last:after:content-[''] hover:text-accent focus:bg-opacity-100 focus:outline-none ltr:pr-0.5 ltr:last:pr-0 rtl:pl-0.5 rtl:last:pl-0",
                                                children: tag.name
                                            }, tag.id);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex w-full flex-col items-start overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "pb-3 text-sm font-semibold capitalize text-heading",
                                                children: t('text-sku')
                                            }),
                                            hasVariations ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full truncate text-sm text-body",
                                                title: (_sku = selectedVariation.sku) !== null && _sku !== void 0 ? _sku : 'sku',
                                                children: selectedVariation.sku
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full truncate text-sm text-body",
                                                title: sku !== null && sku !== void 0 ? sku : 'sku',
                                                children: sku
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_9__.Element, {
                name: "details",
                className: "pt-5 lg:pt-14",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-4 text-xl font-bold tracking-tight text-heading md:mb-6 lg:text-3xl",
                        children: t('text-details')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm leading-relaxed text-body",
                        children: description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-7 flex flex-col space-y-3",
                        children: [
                            name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-title'),
                                            " :"
                                        ]
                                    }),
                                    name
                                ]
                            }),
                            (author === null || author === void 0 ? void 0 : author.name) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-author'),
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        href: _config_routes__WEBPACK_IMPORTED_MODULE_11__/* .Routes.author */ .Z.author(author === null || author === void 0 ? void 0 : author.slug),
                                        className: "order-2 hover:text-accent",
                                        children: author === null || author === void 0 ? void 0 : author.name
                                    })
                                ]
                            }),
                            (manufacturer === null || manufacturer === void 0 ? void 0 : manufacturer.name) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-publisher'),
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        href: _config_routes__WEBPACK_IMPORTED_MODULE_11__/* .Routes.manufacturer */ .Z.manufacturer(manufacturer === null || manufacturer === void 0 ? void 0 : manufacturer.slug),
                                        className: "order-2 hover:text-accent",
                                        children: manufacturer === null || manufacturer === void 0 ? void 0 : manufacturer.name
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;