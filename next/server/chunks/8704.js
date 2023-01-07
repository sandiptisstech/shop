"use strict";
exports.id = 8704;
exports.ids = [8704];
exports.modules = {

/***/ 8704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);


const Helium = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(5821), __webpack_require__.e(6317), __webpack_require__.e(2565), __webpack_require__.e(5499)]).then(__webpack_require__.bind(__webpack_require__, 5499))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/helium"
        ]
    }
});
const Neon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(5821), __webpack_require__.e(6317), __webpack_require__.e(2565), __webpack_require__.e(2983)]).then(__webpack_require__.bind(__webpack_require__, 2983))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/neon"
        ]
    }
}); // grocery-two
const Argon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(5821), __webpack_require__.e(6317), __webpack_require__.e(2565), __webpack_require__.e(7880)]).then(__webpack_require__.bind(__webpack_require__, 7880))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/argon"
        ]
    }
}); // bakery
const Krypton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(2018)]).then(__webpack_require__.bind(__webpack_require__, 2018)) // furniture extra price
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/krypton"
        ]
    }
});
const Xenon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(5821), __webpack_require__.e(6317), __webpack_require__.e(2565), __webpack_require__.e(6592)]).then(__webpack_require__.bind(__webpack_require__, 6592))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/xenon"
        ]
    }
}); // furniture-two
const Radon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6427), __webpack_require__.e(1021)]).then(__webpack_require__.bind(__webpack_require__, 1021))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/radon"
        ]
    }
}); // Book
const MAP_PRODUCT_TO_CARD = {
    neon: Neon,
    helium: Helium,
    argon: Argon,
    krypton: Krypton,
    xenon: Xenon,
    radon: Radon
};
const ProductCard = ({ product , className , ...props })=>{
    var ref, ref1, ref2, ref3;
    const Component = (product === null || product === void 0 ? void 0 : (ref = product.type) === null || ref === void 0 ? void 0 : (ref1 = ref.settings) === null || ref1 === void 0 ? void 0 : ref1.productCard) ? MAP_PRODUCT_TO_CARD[product === null || product === void 0 ? void 0 : (ref2 = product.type) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.settings) === null || ref3 === void 0 ? void 0 : ref3.productCard] : Helium;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        product: product,
        ...props,
        className: className
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;