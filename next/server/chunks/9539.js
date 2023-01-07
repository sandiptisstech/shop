"use strict";
exports.id = 9539;
exports.ids = [9539];
exports.modules = {

/***/ 3315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1776);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(551);






var ref;
const AuthorCard = ({ item  })=>{
    var ref1;
    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_5__/* .Routes.author */ .Z.author(item === null || item === void 0 ? void 0 : item.slug),
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('group relative flex cursor-pointer flex-col items-center bg-light text-center'),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative mb-6 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-350'),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                    src: (ref = item === null || item === void 0 ? void 0 : (ref1 = item.image) === null || ref1 === void 0 ? void 0 : ref1.original) !== null && ref !== void 0 ? ref : _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .avatarPlaceholder */ .Pb,
                    alt: item === null || item === void 0 ? void 0 : item.name,
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block text-center font-semibold text-heading transition-colors group-hover:text-orange-500",
                children: item.name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorCard);


/***/ }),

/***/ 5310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const AuthorLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: 360,
        height: 260,
        viewBox: "0 0 360 260",
        backgroundColor: "#e0e0e0",
        foregroundColor: "#cecece",
        style: {
            width: '100%'
        },
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "180",
                cy: "106",
                r: "80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "20",
                y: "217",
                rx: "0",
                ry: "0",
                width: "320",
                height: "30"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorLoader);


/***/ }),

/***/ 3962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useAuthors),
/* harmony export */   "V": () => (/* binding */ useTopAuthors)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4833);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9128);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6125);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function useAuthors(options) {
    var ref;
    const { locale , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let formattedOptions = {
        ...options,
        language: locale,
        name: query === null || query === void 0 ? void 0 : query.text
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.AUTHORS */ .P.AUTHORS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].authors.all */ .Z.authors.all(Object.assign({}, queryKey[1], pageParam))
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
        authors: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
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
function useTopAuthors(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.AUTHORS_TOP */ .P.AUTHORS_TOP,
        formattedOptions
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].authors.top */ .Z.authors.top(queryKey[1])
    );
    return {
        authors: data !== null && data !== void 0 ? data : [],
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;