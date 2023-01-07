"use strict";
exports.id = 1420;
exports.ids = [1420];
exports.modules = {

/***/ 1420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7018);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _framework_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4124);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_category__WEBPACK_IMPORTED_MODULE_3__]);
_framework_category__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StickySidebarListCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(8055), __webpack_require__.e(8886), __webpack_require__.e(5174), __webpack_require__.e(1737)]).then(__webpack_require__.bind(__webpack_require__, 1737))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sticky-sidebar-list-categories"
        ]
    }
});
const StaticSidebarVerticalRectangleCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(1757), __webpack_require__.e(8055), __webpack_require__.e(8812), __webpack_require__.e(4663), __webpack_require__.e(7160)]).then(__webpack_require__.bind(__webpack_require__, 7160))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-vertical-rectangle-categories"
        ]
    }
});
const StickySidebarBoxedCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(8055), __webpack_require__.e(8886), __webpack_require__.e(5174), __webpack_require__.e(455)]).then(__webpack_require__.bind(__webpack_require__, 455))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sticky-sidebar-boxed-categories"
        ]
    }
});
const FilterCategoryGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4685), __webpack_require__.e(7396), __webpack_require__.e(8055), __webpack_require__.e(8704), __webpack_require__.e(1388), __webpack_require__.e(4616), __webpack_require__.e(8886), __webpack_require__.e(5597)]).then(__webpack_require__.bind(__webpack_require__, 180))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/filter-category-grid"
        ]
    }
});
const SlidingCardCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(1757), __webpack_require__.e(8055), __webpack_require__.e(8812), __webpack_require__.e(4663), __webpack_require__.e(9741), __webpack_require__.e(5529)]).then(__webpack_require__.bind(__webpack_require__, 5529))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-card-category"
        ]
    }
});
const MAP_CATEGORY_TO_GROUP = {
    classic: StickySidebarListCategories,
    modern: StickySidebarBoxedCategories,
    standard: StaticSidebarVerticalRectangleCategories,
    minimal: FilterCategoryGrid,
    compact: SlidingCardCategories,
    default: StickySidebarListCategories
};
function Categories({ layout , className , variables  }) {
    const { categories , isLoading , error  } = (0,_framework_category__WEBPACK_IMPORTED_MODULE_3__/* .useCategories */ .L)(variables);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    }));
    const Component = MAP_CATEGORY_TO_GROUP[layout];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        notFound: !Boolean(categories.length),
        categories: categories,
        loading: isLoading,
        className: className,
        variables: variables
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;