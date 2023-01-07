exports.id = 4499;
exports.ids = [4499];
exports.modules = {

/***/ 3546:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_container": "progress-box_progress_container___zzev",
	"bar": "progress-box_bar__t1PIC",
	"progress_wrapper": "progress-box_progress_wrapper___Kwhc",
	"checked": "progress-box_checked__SaJdX",
	"status_wrapper": "progress-box_status_wrapper__6S4IY"
};


/***/ }),

/***/ 8273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckMark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = ({ ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20.894",
        height: "16",
        viewBox: "0 0 20.894 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "data-name": "_ionicons_svg_ios-checkmark (3)",
            d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
            transform: "translate(-148.4 -173.6)",
            fill: "currentColor"
        })
    }));
};


/***/ }),

/***/ 7110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ OrderItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9662);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6427);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1757);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3879);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1776);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6720);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(551);
/* harmony import */ var _lib_get_review__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(715);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











//FIXME: need to fix this usePrice hooks issue within the table render we may check with nested property
const OrderItemList = (_, record)=>{
    var ref5, ref1, ref2;
    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: (ref5 = record.pivot) === null || ref5 === void 0 ? void 0 : ref5.unit_price
    });
    let name = record.name;
    if (record === null || record === void 0 ? void 0 : (ref1 = record.pivot) === null || ref1 === void 0 ? void 0 : ref1.variation_option_id) {
        var ref3;
        const variationTitle = record === null || record === void 0 ? void 0 : (ref3 = record.variation_options) === null || ref3 === void 0 ? void 0 : ref3.find((vo)=>{
            var ref;
            return (vo === null || vo === void 0 ? void 0 : vo.id) === (record === null || record === void 0 ? void 0 : (ref = record.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id);
        })['title'];
        name = `${name} - ${variationTitle}`;
    }
    var ref4;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex h-16 w-16 shrink-0 overflow-hidden rounded",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                    src: (ref4 = (ref2 = record.image) === null || ref2 === void 0 ? void 0 : ref2.thumbnail) !== null && ref4 !== void 0 ? ref4 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                    alt: name,
                    className: "h-full w-full object-cover",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-1 flex space-x-1 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                href: _config_routes__WEBPACK_IMPORTED_MODULE_9__/* .Routes.product */ .Z.product(record === null || record === void 0 ? void 0 : record.slug),
                                className: "inline-block overflow-hidden truncate text-sm text-body transition-colors hover:text-accent hover:underline",
                                locale: record === null || record === void 0 ? void 0 : record.language,
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block overflow-hidden truncate text-sm text-body",
                                children: "x"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block overflow-hidden truncate text-sm font-semibold text-heading",
                                children: record.unit
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mb-1 inline-block overflow-hidden truncate text-sm font-semibold text-accent",
                        children: price
                    })
                ]
            })
        ]
    }));
};
const OrderItems = ({ products , orderId  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const orderTableColumns = [
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ltr:pl-20 rtl:pr-20",
                children: t('text-item')
            }),
            dataIndex: '',
            key: 'items',
            align: alignLeft,
            width: 250,
            ellipsis: true,
            render: OrderItemList
        },
        {
            title: t('text-quantity'),
            dataIndex: '',
            key: 'pivot',
            align: 'center',
            width: 100,
            render: function renderQuantity(record) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-base",
                    children: record === null || record === void 0 ? void 0 : record.order_quantity
                }));
            }
        },
        {
            title: t('text-price'),
            dataIndex: '',
            key: 'price',
            align: alignRight,
            width: 100,
            render: function RenderPrice(record) {
                const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
                    amount: record === null || record === void 0 ? void 0 : record.subtotal
                });
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: price
                }));
            }
        },
        {
            title: '',
            dataIndex: '',
            align: alignRight,
            width: 140,
            render: function RenderReview(_, record) {
                function openReviewModal() {
                    var ref, ref6;
                    openModal('REVIEW_RATING', {
                        product_id: record.id,
                        shop_id: record.shop_id,
                        order_id: orderId,
                        name: record.name,
                        image: record.image,
                        my_review: (0,_lib_get_review__WEBPACK_IMPORTED_MODULE_10__/* .getReview */ .T)(record),
                        ...(record === null || record === void 0 ? void 0 : (ref = record.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id) && {
                            variation_option_id: record === null || record === void 0 ? void 0 : (ref6 = record.pivot) === null || ref6 === void 0 ? void 0 : ref6.variation_option_id
                        }
                    });
                }
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: openReviewModal,
                    className: "cursor-pointer text-sm font-semibold text-body transition-colors hover:text-accent",
                    children: (0,_lib_get_review__WEBPACK_IMPORTED_MODULE_10__/* .getReview */ .T)(record) ? t('text-update-review') : t('text-write-review')
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        data: products,
        rowKey: (record)=>record.id ? record.id : record.created_at
        ,
        className: "orderDetailsTable w-full",
        rowClassName: "!cursor-auto",
        scroll: {
            x: 350,
            y: 500
        }
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7018);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7995);
/* harmony import */ var _components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8625);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_order__WEBPACK_IMPORTED_MODULE_4__]);
_framework_order__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const OrderStatuses = ({ status , language  })=>{
    const { orderStatuses , isLoading , error  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_4__/* .useOrderStatuses */ .Rr)({
        limit: 100,
        language: language ? language : "en"
    });
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        showText: false,
        className: "h-[200px]"
    }));
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        data: orderStatuses,
        status: status
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatuses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const Badge = ({ className , color: colorOverride , textColor: textColorOverride , text , style ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const classes = {
        root: 'px-3 py-1 rounded-full text-sm',
        default: 'bg-accent',
        text: 'text-light'
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
            [classes.default]: !colorOverride,
            [classes.text]: !textColorOverride
        }, colorOverride, textColorOverride, className),
        style: style,
        children: t(text)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 8625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8273);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7024);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3546);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__);





const ProgressBox = ({ status , data  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "h-full w-full",
        options: {
            scrollbars: {
                autoHide: 'never'
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex w-full flex-col py-7 md:flex-row md:items-start md:justify-start",
            children: data === null || data === void 0 ? void 0 : data.map((item)=>{
                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_wrapper), status.serial >= item.serial ? (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().checked) : ''),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().status_wrapper),
                                    children: status.serial >= item.serial ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-4 w-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__/* .CheckMark */ .Y, {
                                            className: "w-full"
                                        })
                                    }) : item.serial
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0",
                            children: item && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center",
                                children: item === null || item === void 0 ? void 0 : item.name
                            })
                        })
                    ]
                }, item.id);
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBox);


/***/ }),

/***/ 9662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getReview)
/* harmony export */ });
function getReview(product) {
    var ref3;
    if (product === null || product === void 0 ? void 0 : (ref3 = product.pivot) === null || ref3 === void 0 ? void 0 : ref3.variation_option_id) {
        var ref1;
        return product === null || product === void 0 ? void 0 : (ref1 = product.my_review) === null || ref1 === void 0 ? void 0 : ref1.find((review)=>{
            var ref;
            return (review === null || review === void 0 ? void 0 : review.variation_option_id) === (product === null || product === void 0 ? void 0 : (ref = product.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id);
        });
    } else {
        var ref2;
        return product === null || product === void 0 ? void 0 : (ref2 = product.my_review) === null || ref2 === void 0 ? void 0 : ref2[0];
    }
}


/***/ })

};
;