"use strict";
exports.id = 5513;
exports.ids = [5513];
exports.modules = {

/***/ 5513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n$": () => (/* binding */ useToggleWishlist),
/* harmony export */   "oQ": () => (/* binding */ useRemoveFromWishlist),
/* harmony export */   "Ei": () => (/* binding */ useWishlist),
/* harmony export */   "tc": () => (/* binding */ useInWishlist)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4833);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9128);
/* harmony import */ var _utils_data_mappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6125);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_4__]);
_client__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function useToggleWishlist(product_id) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { mutate: toggleWishlist , isLoading , isSuccess ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].wishlist.toggle */ .Z.wishlist.toggle, {
        onSuccess: (data)=>{
            queryClient.setQueryData([
                `${_client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist`,
                product_id
            ], (old)=>!old
            );
        },
        onError: (error)=>{
            if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
                var ref;
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t((ref = error.response) === null || ref === void 0 ? void 0 : ref.data.message));
            }
        }
    });
    return {
        toggleWishlist,
        isLoading,
        isSuccess
    };
}
function useRemoveFromWishlist() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    const { mutate: removeFromWishlist , isLoading , isSuccess ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].wishlist.remove */ .Z.wishlist.remove, {
        onSuccess: ()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(t('text-removed-from-wishlist'));
            queryClient.refetchQueries([
                _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST
            ]);
        },
        onError: (error)=>{
            if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
                var ref;
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(t((ref = error.response) === null || ref === void 0 ? void 0 : ref.data.message));
            }
        }
    });
    return {
        removeFromWishlist,
        isLoading,
        isSuccess
    };
}
function useWishlist(options) {
    var ref;
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const formattedOptions = {
        ...options
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].wishlist.all */ .Z.wishlist.all(Object.assign({}, queryKey[1], pageParam))
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
        wishlists: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref1 !== void 0 ? ref1 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_utils_data_mappers__WEBPACK_IMPORTED_MODULE_6__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}
function useInWishlist({ enabled , product_id  }) {
    const { data , isLoading , error , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        `${_client_api_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist`,
        product_id
    ], ()=>_client__WEBPACK_IMPORTED_MODULE_4__/* ["default"].wishlist.checkIsInWishlist */ .Z.wishlist.checkIsInWishlist({
            product_id
        })
    , {
        enabled
    });
    var ref;
    return {
        inWishlist: (ref = Boolean(data)) !== null && ref !== void 0 ? ref : false,
        isLoading,
        error,
        refetch
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;