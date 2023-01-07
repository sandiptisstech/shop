"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 9488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AddressGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6720);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_address_address_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6463);
/* harmony import */ var _components_address_address_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8049);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const AddressGrid = ({ addresses , label , atom , className , userId , count , type ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    const [selectedAddress, setAddress] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(atom);
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        console.log("UseEffect addresses length===>" + (addresses === null || addresses === void 0 ? void 0 : addresses.length));
        console.log("UseEffect addresses Array===>", addresses);
        console.log("UseEffect addresses type===>", type);
        if (addresses === null || addresses === void 0 ? void 0 : addresses.length) {
            //    if (selectedAddress?.id) {
            //    const index = addresses.findIndex((a) => a.id === selectedAddress.id);
            //    setAddress(addresses[index]);
            // } else {
            console.log("UseEffect===>" + addresses);
            setAddress(addresses === null || addresses === void 0 ? void 0 : addresses[0]);
        //}
        }
    }, [
        addresses,
        addresses === null || addresses === void 0 ? void 0 : addresses.length,
        selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.id,
        setAddress
    ]);
    function onAdd(address) {
        openModal('ADD_OR_UPDATE_ADDRESS', {
            customerId: userId,
            type,
            atom
        });
    }
    function onEdit(address) {
        openModal('ADD_OR_UPDATE_ADDRESS', {
            customerId: userId,
            address,
            atom
        });
    }
    function onDelete(address) {
        openModal('DELETE_ADDRESS', {
            customerId: userId,
            addressId: address === null || address === void 0 ? void 0 : address.id
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_address_address_header__WEBPACK_IMPORTED_MODULE_6__/* .AddressHeader */ .V, {
                onAdd: onAdd,
                count: count,
                label: label
            }),
            !(addresses === null || addresses === void 0 ? void 0 : addresses.length) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "relative px-5 py-6 text-base text-center bg-gray-100 border rounded border-border-200",
                    children: t('text-no-address')
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup, {
                value: selectedAddress,
                onChange: setAddress,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Label, {
                        className: "sr-only",
                        children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
                        children: addresses === null || addresses === void 0 ? void 0 : addresses.map((address)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Option, {
                                value: address,
                                children: ({ checked  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_address_address_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        checked: checked,
                                        onDelete: ()=>onDelete(address)
                                        ,
                                        onEdit: ()=>onEdit(address)
                                        ,
                                        address: address
                                    })
                            }, address === null || address === void 0 ? void 0 : address.id);
                        })
                    })
                ]
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AddressGrid)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3713);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3948);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6720);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1761);






const ProfileContact = ({ userId , profileId , contact  })=>{
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    function onAdd() {
        openModal('ADD_OR_UPDATE_PROFILE_CONTACT', {
            customerId: userId,
            profileId,
            contact
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "flex w-full flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-5 flex items-center justify-between md:mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg capitalize text-heading lg:text-xl",
                        children: t('text-contact-number')
                    }),
                    onAdd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "flex items-center text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-none",
                        onClick: onAdd,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                                className: "h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
                            }),
                            Boolean(contact) ? t('text-update') : t('text-add')
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    country: "us",
                    value: contact,
                    disabled: true,
                    inputClass: "!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !rounded focus:!border-accent !h-12",
                    dropdownClass: "focus:!ring-0 !border !border-border-base !shadow-350"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileContact);


/***/ }),

/***/ 3885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3948);
/* harmony import */ var _components_ui_forms_file_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5889);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2508);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(606);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_file_input__WEBPACK_IMPORTED_MODULE_3__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_9__]);
([_components_ui_forms_file_input__WEBPACK_IMPORTED_MODULE_3__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ProfileForm = ({ user  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { mutate: updateProfile , isLoading  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_9__/* .useUpdateUser */ .Io)();
    function onSubmit(values) {
        var ref, ref1, ref2, ref3, ref4, ref5, ref6;
        if (!user) {
            return false;
        }
        var ref7;
        updateProfile({
            id: user.id,
            name: values.name,
            profile: {
                id: user === null || user === void 0 ? void 0 : (ref = user.profile) === null || ref === void 0 ? void 0 : ref.id,
                bio: (ref7 = values === null || values === void 0 ? void 0 : (ref1 = values.profile) === null || ref1 === void 0 ? void 0 : ref1.bio) !== null && ref7 !== void 0 ? ref7 : '',
                contact: user === null || user === void 0 ? void 0 : (ref2 = user.profile) === null || ref2 === void 0 ? void 0 : ref2.contact,
                //@ts-ignore
                avatar: (values === null || values === void 0 ? void 0 : (ref3 = values.profile) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.avatar) === null || ref4 === void 0 ? void 0 : ref4[0]) ? values === null || values === void 0 ? void 0 : (ref5 = values.profile) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.avatar) === null || ref6 === void 0 ? void 0 : ref6[0] : user.profile.avatar
            }
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            ...user && {
                defaultValues: lodash_pick__WEBPACK_IMPORTED_MODULE_7___default()(user, [
                    'name',
                    'profile.contact',
                    'profile.bio',
                    'profile.avatar'
                ])
            }
        },
        children: ({ register , control  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_file_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    control: control,
                                    name: "profile.avatar"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-6 flex flex-row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "flex-1",
                                    label: t('text-name'),
                                    ...register('name'),
                                    variant: "outline"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: t('text-bio'),
                                ...register('profile.bio'),
                                variant: "outline",
                                className: "mb-6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    className: "ltr:ml-auto rtl:mr-auto",
                                    loading: isLoading,
                                    disabled: isLoading,
                                    children: t('text-save')
                                })
                            })
                        ]
                    })
                })
            })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport default from dynamic */ react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 9894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
var AddressType;
(function(AddressType) {
    AddressType["Billing"] = 'billing';
    AddressType["Shipping"] = 'shipping';
})(AddressType || (AddressType = {}));


/***/ }),

/***/ 3316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(765);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3948);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_profile_profile_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3885);
/* harmony import */ var _components_profile_profile_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9276);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9183);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(357);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9292);
/* harmony import */ var _components_checkout_address_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9488);
/* harmony import */ var _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9894);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_checkout__WEBPACK_IMPORTED_MODULE_1__, _components_profile_profile_form__WEBPACK_IMPORTED_MODULE_4__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__, _components_checkout_address_grid__WEBPACK_IMPORTED_MODULE_9__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__]);
([_store_checkout__WEBPACK_IMPORTED_MODULE_1__, _components_profile_profile_form__WEBPACK_IMPORTED_MODULE_4__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__, _components_checkout_address_grid__WEBPACK_IMPORTED_MODULE_9__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProfilePage = ()=>{
    var ref, ref1, ref2, ref3;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { me  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useUser */ .aF)();
    if (!me) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full overflow-hidden px-1 pb-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_profile_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                user: me
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_profile_contact__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                userId: me.id,
                                profileId: (ref = me.profile) === null || ref === void 0 ? void 0 : ref.id,
                                contact: (ref1 = me.profile) === null || ref1 === void 0 ? void 0 : ref1.contact
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_checkout_address_grid__WEBPACK_IMPORTED_MODULE_9__/* .AddressGrid */ .Q, {
                                userId: me === null || me === void 0 ? void 0 : me.id,
                                className: "p-5 bg-light shadow-700 md:p-8",
                                label: t('text-billing-address'),
                                count: 2,
                                //@ts-ignore
                                addresses: (ref2 = [
                                    me === null || me === void 0 ? void 0 : me.billing_address
                                ]) === null || ref2 === void 0 ? void 0 : ref2.filter((item)=>{
                                    return (item === null || item === void 0 ? void 0 : item.type) === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Billing */ .D.Billing;
                                }),
                                atom: _store_checkout__WEBPACK_IMPORTED_MODULE_1__/* .billingAddressAtom */ .Km,
                                type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Billing */ .D.Billing
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_checkout_address_grid__WEBPACK_IMPORTED_MODULE_9__/* .AddressGrid */ .Q, {
                                userId: me === null || me === void 0 ? void 0 : me.id,
                                className: "p-5 bg-light shadow-700 md:p-8",
                                label: t('text-shipping-address'),
                                count: 3,
                                //@ts-ignore
                                addresses: (ref3 = [
                                    me === null || me === void 0 ? void 0 : me.shipping_address
                                ]) === null || ref3 === void 0 ? void 0 : ref3.filter((item)=>{
                                    return (item === null || item === void 0 ? void 0 : item.type) === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Shipping */ .D.Shipping;
                                }),
                                atom: _store_checkout__WEBPACK_IMPORTED_MODULE_1__/* .shippingAddressAtom */ .du,
                                type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .AddressType.Shipping */ .D.Shipping
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
ProfilePage.authenticationRequired = true;
ProfilePage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 4159:
/***/ ((module) => {

module.exports = require("lodash/pick");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3061,5152,1757,7348,2898,4685,2985,2140,606,8812,6515,7546,63,7995,5251,2508,5889,95], () => (__webpack_exec__(3316)));
module.exports = __webpack_exports__;

})();