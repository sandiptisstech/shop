"use strict";
exports.id = 5597;
exports.ids = [5597];
exports.modules = {

/***/ 180:
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
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8055);
/* harmony import */ var _components_ui_loaders_categories_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8886);
/* harmony import */ var _components_ui_category_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7628);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_category_breadcrumb_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1641);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7024);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_find_nested_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1579);
/* harmony import */ var _components_products_grids_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_grids_home__WEBPACK_IMPORTED_MODULE_10__]);
_components_products_grids_home__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function findParentCategories(treeItems, parentId = null, link = 'id') {
    let itemList = [];
    if (parentId) {
        const parentItem = treeItems === null || treeItems === void 0 ? void 0 : treeItems.find((item)=>item[link] === parentId
        );
        itemList = (parentItem === null || parentItem === void 0 ? void 0 : parentItem.parent_id) ? [
            ...findParentCategories(treeItems, parentItem.parent_id),
            parentItem,
            ...itemList, 
        ] : [
            parentItem,
            ...itemList
        ];
    }
    return itemList;
}
const FilterCategoryGrid = ({ notFound , categories , loading , variables ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { pathname , query  } = router;
    const selectedCategory = Boolean(query.category) && (0,_lib_find_nested_data__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(categories, query.category, 'children');
    const parentCategories = findParentCategories(categories, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.parent_id);
    const renderCategories = Boolean(selectedCategory) ? selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.children : categories === null || categories === void 0 ? void 0 : categories.filter((category)=>{
        return !(category === null || category === void 0 ? void 0 : category.parent_id);
    });
    const onCategoryClick = (slug)=>{
        router.push({
            pathname,
            query: {
                ...query,
                category: slug
            }
        }, undefined, {
            scroll: false
        });
    };
    if (loading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 w-72 px-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_categories_loader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        }));
    }
    if (notFound) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-light",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-full p-5 md:p-8 lg:p-12 2xl:p-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    text: "text-no-category",
                    className: "h-96"
                })
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-light",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-3 pt-3 md:px-6 md:pt-6 lg:px-10 lg:pt-10 2xl:px-14 2xl:pt-14",
                children: (query === null || query === void 0 ? void 0 : query.category) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    className: "w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('px-2 pt-2 pb-7', {
                            'mb-8 divide-dashed border-b border-dashed border-gray-200': query === null || query === void 0 ? void 0 : query.category
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_category_breadcrumb_card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            categories: [
                                ...parentCategories,
                                selectedCategory
                            ]
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "mb-8 px-2 pt-2 text-2xl font-semibold text-heading",
                    children: t('text-all-categories')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "p-5 !pt-0 md:p-8 lg:p-12 2xl:p-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6",
                        children: Array.isArray(renderCategories) && (renderCategories === null || renderCategories === void 0 ? void 0 : renderCategories.map((item, idx)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_category_card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                item: item,
                                onClick: ()=>{
                                    return onCategoryClick(item === null || item === void 0 ? void 0 : item.slug);
                                }
                            }, idx);
                        }))
                    }),
                    lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(renderCategories) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grids_home__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        gridClassName: "!grid-cols-[repeat(auto-fill,minmax(290px,1fr))]",
                        variables: variables
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterCategoryGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ category_breadcrumb_card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(3879);
;// CONCATENATED MODULE: ./src/assets/arrow-forward.png
/* harmony default export */ const arrow_forward = ({"src":"/_next/static/media/arrow-forward.fd3c3816.png","height":32,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEXt7e3w8PDy8vLh4eHV1dXm5ubn5+fs7Ozr6+va2trc3Nz39/fv7+/k5OTu7u7z8/Msao+fAAAADnRSTlMBYSGMDMLrVZdB9MPXsbS1pnsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVAiZBcEJAoAgCACwgXZoBf//bZvYC/M9J7I/iBq4+ibrwdHJqOAHEmEAwKN3a1MAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(1776);
;// CONCATENATED MODULE: ./src/components/ui/breadcrumb-button.tsx




const BreadcrumbButton = ({ text , image , onClick ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: external_classnames_default()('relative h-14 rounded-lg bg-light px-7 text-base font-semibold text-heading shadow-downfall-xs transition-shadow hover:shadow-downfall-sm', {
            'ltr:pr-[5.5rem] rtl:pl-[5.5rem]': image
        }),
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "whitespace-nowrap",
                children: text
            }),
            image && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute bottom-0 h-full overflow-hidden rounded-lg w-14 ltr:right-0 ltr:rounded-l-none rtl:left-0 rtl:rounded-r-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    className: "w-full h-full",
                    src: image !== null && image !== void 0 ? image : placeholders/* productPlaceholder */.Hb,
                    alt: text !== null && text !== void 0 ? text : '',
                    layout: "responsive",
                    width: 60,
                    height: 60
                })
            })
        ]
    })
;
/* harmony default export */ const breadcrumb_button = (BreadcrumbButton);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/category-breadcrumb-card.tsx






const BreadcrumbWithIndicator = ({ text , image , onClick ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "relative w-[18px] h-[32px] flex-shrink-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    className: "w-full h-full",
                    src: arrow_forward,
                    alt: ">",
                    layout: "responsive",
                    width: 18,
                    height: 32
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_button, {
                text: text,
                image: image,
                onClick: onClick
            })
        ]
    })
;
const CategoryBreadcrumb = ({ categories ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const router = (0,router_.useRouter)();
    const { pathname , query  } = router;
    const resetCategoryClick = ()=>{
        const { category , ...rest } = query;
        router.push({
            pathname,
            query: {
                ...rest
            }
        }, undefined, {
            scroll: false
        });
    };
    const onCategoryClick = (slug)=>{
        const { category , ...rest } = query;
        router.push({
            pathname,
            query: {
                ...rest,
                category: slug
            }
        }, undefined, {
            scroll: false
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-5 rtl:space-x-reverse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_button, {
                text: t('text-all-categories'),
                onClick: resetCategoryClick
            }),
            categories === null || categories === void 0 ? void 0 : categories.map((category)=>{
                var ref;
                /*#__PURE__*/ return jsx_runtime_.jsx(BreadcrumbWithIndicator, {
                    text: category === null || category === void 0 ? void 0 : category.name,
                    image: category === null || category === void 0 ? void 0 : (ref = category.image) === null || ref === void 0 ? void 0 : ref.original,
                    onClick: ()=>{
                        return onCategoryClick(category === null || category === void 0 ? void 0 : category.slug);
                    }
                }, category === null || category === void 0 ? void 0 : category.slug);
            })
        ]
    }));
};
/* harmony default export */ const category_breadcrumb_card = (CategoryBreadcrumb);


/***/ }),

/***/ 7628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3879);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1776);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7427);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





const CategoryCard = ({ item , onClick  })=>{
    var ref, ref1, ref2, ref3, ref4;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    var ref5, ref6;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full h-80 rounded-lg p-8 bg-light shadow-downfall-sm transition-shadow hover:shadow-downfall-lg group",
        onClick: onClick,
        role: "button",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-1 h-full relative z-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-heading font-semibold text-lg mb-1",
                        children: item.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-body text-s",
                        children: (item === null || item === void 0 ? void 0 : (ref = item.children) === null || ref === void 0 ? void 0 : ref.length) ? `${item === null || item === void 0 ? void 0 : (ref1 = item.children) === null || ref1 === void 0 ? void 0 : ref1.length} ${(item === null || item === void 0 ? void 0 : (ref2 = item.children) === null || ref2 === void 0 ? void 0 : ref2.length) > 1 ? t('text-categories') : t('text-category')}` : (item === null || item === void 0 ? void 0 : (ref3 = item.children) === null || ref3 === void 0 ? void 0 : ref3.length) ? (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_4__/* .formatString */ .U)(item === null || item === void 0 ? void 0 : item.products_count, 'Item') : ''
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "mt-auto flex text-accent font-semibold text-sm underline opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100",
                        children: t('text-view-more')
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 ltr:right-0 rtl:left-0 w-full h-full rounded-lg overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                    className: "w-full h-full",
                    src: (ref5 = item === null || item === void 0 ? void 0 : (ref4 = item.image) === null || ref4 === void 0 ? void 0 : ref4.original) !== null && ref5 !== void 0 ? ref5 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .productPlaceholder */ .Hb,
                    alt: (ref6 = item === null || item === void 0 ? void 0 : item.name) !== null && ref6 !== void 0 ? ref6 : '',
                    layout: "responsive",
                    width: 432,
                    height: 336
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryCard);


/***/ }),

/***/ 9874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ PRODUCTS_PER_PAGE),
/* harmony export */   "Fi": () => (/* binding */ TYPES_PER_PAGE),
/* harmony export */   "kL": () => (/* binding */ CATEGORIES_PER_PAGE),
/* harmony export */   "$0": () => (/* binding */ SHOPS_PER_PAGE),
/* harmony export */   "LX": () => (/* binding */ AUTHORS_PER_PAGE),
/* harmony export */   "Vc": () => (/* binding */ MANUFACTURERS_PER_PAGE)
/* harmony export */ });
const PRODUCTS_PER_PAGE = 30;
const TYPES_PER_PAGE = 15;
const CATEGORIES_PER_PAGE = 1000;
const SHOPS_PER_PAGE = 30;
const AUTHORS_PER_PAGE = 30;
const MANUFACTURERS_PER_PAGE = 30;


/***/ }),

/***/ 1579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const findNestedData = (array, query, nestingKey)=>{
    return array === null || array === void 0 ? void 0 : array.reduce((prev, curr)=>{
        if (prev) return prev;
        if (curr.slug === query) return curr;
        if (curr[nestingKey]) return findNestedData(curr[nestingKey], query, nestingKey);
    }, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findNestedData);


/***/ }),

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
    if (!count) return `${count} ${string}`;
    return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}


/***/ })

};
;