exports.id = 5348;
exports.ids = [5348];
exports.modules = {

/***/ 7700:
/***/ ((module) => {

// Exports
module.exports = {
	"radio_input": "radio_radio_input__8qSkI"
};


/***/ }),

/***/ 624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ AddressForm)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_forms_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9329);
/* harmony import */ var _components_ui_forms_radio_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7771);
/* harmony import */ var _components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2508);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6720);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(606);
/* harmony import */ var _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9894);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(357);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2451);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_9__, _framework_user__WEBPACK_IMPORTED_MODULE_11__, jotai__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_9__, _framework_user__WEBPACK_IMPORTED_MODULE_11__, jotai__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const addressSchema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    type: yup__WEBPACK_IMPORTED_MODULE_7__.string().oneOf([
        _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Billing */ .D.Billing,
        _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Shipping */ .D.Shipping
    ]).required('error-type-required'),
    title: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-title-required'),
    address: yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
        country: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-country-required'),
        city: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-city-required'),
        state: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-state-required'),
        zip: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-zip-required'),
        street_address: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-street-required')
    })
});
const AddressForm = ({ onSubmit , defaultValues , isLoading ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_9__/* .Form */ .l, {
        onSubmit: onSubmit,
        className: "grid h-full grid-cols-2 gap-5",
        //@ts-ignore
        validationSchema: addressSchema,
        useFormProps: {
            shouldUnregister: true,
            defaultValues
        },
        resetValues: defaultValues,
        children: ({ register , formState: { errors  }  })=>{
            var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_label__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: t('text-type')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4 rtl:space-x-reverse",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_radio_radio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        id: "billing",
                                        ...register('type'),
                                        type: "radio",
                                        value: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Billing */ .D.Billing,
                                        label: t('text-billing')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_radio_radio__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        id: "shipping",
                                        ...register('type'),
                                        type: "radio",
                                        value: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Shipping */ .D.Shipping,
                                        label: t('text-shipping')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: t('text-title'),
                        ...register('title'),
                        error: t((ref = errors.title) === null || ref === void 0 ? void 0 : ref.message),
                        variant: "outline",
                        className: "col-span-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: t('text-country'),
                        ...register('address.country'),
                        error: t((ref1 = errors.address) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.country) === null || ref2 === void 0 ? void 0 : ref2.message),
                        variant: "outline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: t('text-city'),
                        ...register('address.city'),
                        error: t((ref3 = errors.address) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.city) === null || ref4 === void 0 ? void 0 : ref4.message),
                        variant: "outline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: t('text-state'),
                        ...register('address.state'),
                        error: t((ref5 = errors.address) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.state) === null || ref6 === void 0 ? void 0 : ref6.message),
                        variant: "outline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        label: t('text-zip'),
                        ...register('address.zip'),
                        error: t((ref7 = errors.address) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.zip) === null || ref8 === void 0 ? void 0 : ref8.message),
                        variant: "outline"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        label: t('text-street-address'),
                        ...register('address.street_address'),
                        error: t((ref9 = errors.address) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.street_address) === null || ref10 === void 0 ? void 0 : ref10.message),
                        variant: "outline",
                        className: "col-span-2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: "col-span-2 w-full",
                        loading: isLoading,
                        disabled: isLoading,
                        children: [
                            Boolean(defaultValues) ? t('text-update') : t('text-save'),
                            ' ',
                            t('text-address')
                        ]
                    })
                ]
            });
        }
    }));
};
function CreateOrUpdateAddressForm() {
    const { t  } = useTranslation('common');
    const { data: { customerId , type , address , atom  }  } = useModalState();
    const { mutate: updateProfile  } = useUpdateUser();
    const [selectedAddress, setAddress] = useAtom(atom);
    function onSubmit(values) {
        const formattedInput = {
            id: uuid(),
            title: values.title,
            type: values.type,
            address: values.address
        };
        setAddress(formattedInput);
        if (values.type === AddressType.Billing) {
            updateProfile({
                id: customerId,
                address: [
                    formattedInput
                ],
                billing_address: formattedInput
            });
        }
        if (values.type === AddressType.Shipping) {
            updateProfile({
                id: customerId,
                address: [
                    formattedInput
                ],
                shipping_address: formattedInput
            });
        }
    //closeModal();
    }
    var ref, ref11;
    return(/*#__PURE__*/ _jsxs("div", {
        className: "min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl",
        children: [
            /*#__PURE__*/ _jsxs("h1", {
                className: "mb-4 text-center text-lg font-semibold text-heading sm:mb-6",
                children: [
                    address ? t('text-update') : t('text-add-new'),
                    " ",
                    t('text-address')
                ]
            }),
            /*#__PURE__*/ _jsx(AddressForm, {
                onSubmit: onSubmit,
                defaultValues: {
                    title: (ref = address === null || address === void 0 ? void 0 : address.title) !== null && ref !== void 0 ? ref : '',
                    type: (ref11 = address === null || address === void 0 ? void 0 : address.type) !== null && ref11 !== void 0 ? ref11 : type,
                    address: {
                        ...address === null || address === void 0 ? void 0 : address.address
                    }
                }
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6720);
/* harmony import */ var _components_address_address_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(624);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_address_address_form__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_4__]);
([_components_address_address_form__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CreateOrUpdateGuestAddressForm = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { data: { atom , address , type  } ,  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    const [selectedAddress, setAddress] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(atom);
    function onSubmit(values) {
        const formattedInput = {
            title: values.title,
            type: values.type,
            address: values.address
        };
        setAddress(formattedInput);
        closeModal();
    }
    var ref, ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mb-4 text-center text-lg font-semibold text-heading sm:mb-6",
                children: [
                    t('text-add-new'),
                    " ",
                    t('text-address')
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_address_address_form__WEBPACK_IMPORTED_MODULE_2__/* .AddressForm */ .k, {
                onSubmit: onSubmit,
                defaultValues: {
                    title: (ref = address === null || address === void 0 ? void 0 : address.title) !== null && ref !== void 0 ? ref : '',
                    type: (ref1 = address === null || address === void 0 ? void 0 : address.type) !== null && ref1 !== void 0 ? ref1 : type,
                    address: {
                        ...address === null || address === void 0 ? void 0 : address.address
                    }
                }
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateOrUpdateGuestAddressForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Label = ({ className , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block text-body-dark font-semibold text-sm leading-none mb-3', className),
        ...rest
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


/***/ }),

/***/ 7771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7700);
/* harmony import */ var _radio_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_radio_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Radio = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className , label , name , id , error , ...rest }, ref)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: id,
                        name: name,
                        type: "radio",
                        ref: ref,
                        className: (_radio_module_css__WEBPACK_IMPORTED_MODULE_2___default().radio_input),
                        ...rest
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: id,
                        className: "text-body text-sm",
                        children: label
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "my-2 text-xs ltr:text-right rtl:text-left text-red-500",
                children: error
            })
        ]
    }));
});
Radio.displayName = 'Radio';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ }),

/***/ 9894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
var AddressType;
(function(AddressType) {
    AddressType["Billing"] = 'billing';
    AddressType["Shipping"] = 'shipping';
})(AddressType || (AddressType = {}));


/***/ })

};
;