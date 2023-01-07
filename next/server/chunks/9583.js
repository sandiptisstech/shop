"use strict";
exports.id = 9583;
exports.ids = [9583];
exports.modules = {

/***/ 9583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yi": () => (/* binding */ useOrders),
/* harmony export */   "Aj": () => (/* binding */ useOrder),
/* harmony export */   "Rr": () => (/* binding */ useOrderStatuses),
/* harmony export */   "rT": () => (/* binding */ useRefunds),
/* harmony export */   "M6": () => (/* binding */ useDownloadableProducts),
/* harmony export */   "U5": () => (/* binding */ useCreateRefund),
/* harmony export */   "Mc": () => (/* binding */ useGenerateDownloadableUrl)
/* harmony export */ });
/* unused harmony exports useCreateOrder, useVerifyOrder */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6720);
/* harmony import */ var _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9128);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4833);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(765);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(551);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6125);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9915);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _store_checkout__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_11__]);
([_client__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_6__, _store_checkout__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function useOrders(options) {
    var ref;
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const me = js_cookie__WEBPACK_IMPORTED_MODULE_11__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_12__/* .AUTH_TOKEN_KEY */ .nd);
    const customerIdQuery = {
        customer_id: me
    };
    const formattedOptions = {
        customerIdQuery,
        ...options
    };
    console.log("formattedOptions==>", formattedOptions);
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.all */ .Z.orders.all(Object.assign({}, queryKey[1], pageParam, customerIdQuery))
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
        orders: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref1 !== void 0 ? ref1 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_10__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}
function useOrder({ tracking_number  }) {
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS,
        tracking_number
    ], ()=>_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.get */ .Z.orders.get(tracking_number)
    );
    return {
        order: data,
        isLoading,
        error
    };
}
function useOrderStatuses(options) {
    var ref;
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const formattedOptions = {
        ...options
    };
    const { data , isFetching , isFetchingNextPage , fetchNextPage , hasNextPage , error ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS_STATUS */ .P.ORDERS_STATUS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.statuses */ .Z.orders.statuses(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref2;
    return {
        orderStatuses: (ref2 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref2 !== void 0 ? ref2 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_10__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading: isFetching,
        isLoadingMore: isFetchingNextPage,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}
function useRefunds(options) {
    var ref;
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const formattedOptions = {
        ...options
    };
    const { data , isLoading , isFetchingNextPage , fetchNextPage , hasNextPage , error ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS_REFUNDS */ .P.ORDERS_REFUNDS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.refunds */ .Z.orders.refunds(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref3;
    return {
        refunds: (ref3 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref3 !== void 0 ? ref3 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_10__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        isLoadingMore: isFetchingNextPage,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}
const useDownloadableProducts = (options)=>{
    var ref;
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const formattedOptions = {
        ...options
    };
    const { data , isLoading , isFetchingNextPage , fetchNextPage , hasNextPage , error ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.downloadable */ .Z.orders.downloadable(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref4;
    return {
        downloads: (ref4 = data === null || data === void 0 ? void 0 : (ref = data.pages) === null || ref === void 0 ? void 0 : ref.flatMap((page)=>page.data
        )) !== null && ref4 !== void 0 ? ref4 : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_10__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        isLoadingMore: isFetchingNextPage,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
};
function useCreateRefund() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate: createRefundRequest , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.createRefund */ .Z.orders.createRefund, {
        onSuccess: ()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t('text-refund-request-submitted'));
        },
        onError: (error)=>{
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t(data === null || data === void 0 ? void 0 : data.message));
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_client_api_endpoints__WEBPACK_IMPORTED_MODULE_4__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS);
            closeModal();
        }
    });
    function formatRefundInput(input) {
        const formattedInputs = {
            ...input
        };
        createRefundRequest(formattedInputs);
    }
    return {
        createRefundRequest: formatRefundInput,
        isLoading
    };
}
function useCreateOrder() {
    const router = useRouter();
    const { locale  } = router;
    const { mutate: createOrder , isLoading  } = useMutation(client.orders.create, {
        onSuccess: (data)=>{
            console.log("data?.tracking_number====>", data === null || data === void 0 ? void 0 : data.products);
            if (data === null || data === void 0 ? void 0 : data.tracking_number) {
                router.push(Routes.order(data === null || data === void 0 ? void 0 : data.tracking_number));
            }
        },
        onError: (error)=>{
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            toast.error(data === null || data === void 0 ? void 0 : data.message);
        }
    });
    function formatOrderInput(input) {
        const me = Cookies.get(AUTH_TOKEN_KEY);
        const formattedInputs = {
            ...input,
            language: locale,
            customer_id: Number(me)
        };
        createOrder(formattedInputs);
    }
    return {
        createOrder: formatOrderInput,
        isLoading
    };
}
function useGenerateDownloadableUrl() {
    const { mutate: getDownloadableUrl  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.generateDownloadLink */ .Z.orders.generateDownloadLink, {
        onSuccess: (data)=>{
            function download(fileUrl, fileName) {
                var a = document.createElement('a');
                a.href = fileUrl;
                a.setAttribute('download', fileName);
                a.click();
            }
            download(data, 'record.name');
        }
    });
    function generateDownloadableUrl(digital_file_id) {
        getDownloadableUrl({
            digital_file_id
        });
    }
    return {
        generateDownloadableUrl
    };
}
function useVerifyOrder() {
    const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);
    return useMutation(client.orders.verify, {
        onSuccess: (data)=>{
            if (data) {
                //@ts-ignore
                setVerifiedResponse(data);
            }
        },
        onError: (error)=>{
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            toast.error(data === null || data === void 0 ? void 0 : data.message);
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;