"use strict";
exports.id = 5781;
exports.ids = [5781];
exports.modules = {

/***/ 5781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useManufacturers),
/* harmony export */   "a": () => (/* binding */ useTopManufacturers)
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





function useManufacturers(options) {
    var ref;
    const { locale , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let formattedOptions = {
        ...options,
        language: locale,
        name: query === null || query === void 0 ? void 0 : query.text
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.MANUFACTURERS */ .P.MANUFACTURERS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].manufacturers.all */ .Z.manufacturers.all(Object.assign({}, queryKey[1], pageParam))
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
        manufacturers: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
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
function useTopManufacturers(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    let formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.MANUFACTURERS_TOP */ .P.MANUFACTURERS_TOP,
        formattedOptions
    ], ({ queryKey  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].manufacturers.top */ .Z.manufacturers.top(queryKey[1])
    );
    return {
        manufacturers: data !== null && data !== void 0 ? data : [],
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;