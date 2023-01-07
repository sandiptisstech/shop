"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7310);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4538);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4685);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6720);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(606);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const registerFormSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_9__.string().required('error-name-required'),
    email: yup__WEBPACK_IMPORTED_MODULE_9__.string().email('error-email-format').required('error-email-required'),
    password: yup__WEBPACK_IMPORTED_MODULE_9__.string().required('error-password-required')
});
function RegisterForm() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const { mutate , isLoading , formError  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_10__/* .useRegister */ .mr)();
    function onSubmit({ name , email , password  }) {
        mutate({
            name,
            email,
            password
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__/* .Form */ .l, {
                onSubmit: onSubmit,
                validationSchema: registerFormSchema,
                serverError: formError,
                children: ({ register , formState: { errors  }  })=>{
                    var ref, ref1, ref2;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: t('text-name'),
                                ...register('name'),
                                variant: "outline",
                                className: "mb-5",
                                error: t((ref = errors.name) === null || ref === void 0 ? void 0 : ref.message)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: t('text-email'),
                                ...register('email'),
                                type: "email",
                                variant: "outline",
                                className: "mb-5",
                                error: t((ref1 = errors.email) === null || ref1 === void 0 ? void 0 : ref1.message)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: t('text-password'),
                                ...register('password'),
                                error: t((ref2 = errors.password) === null || ref2 === void 0 ? void 0 : ref2.message),
                                variant: "outline",
                                className: "mb-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: "h-12 w-full",
                                    loading: isLoading,
                                    disabled: isLoading,
                                    children: t('text-register')
                                })
                            })
                        ]
                    });
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "w-full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4",
                        children: t('text-or')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center text-sm text-body sm:text-base",
                children: [
                    t('text-already-account'),
                    ' ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>openModal('LOGIN_VIEW')
                        ,
                        className: "font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1",
                        children: t('text-login')
                    })
                ]
            })
        ]
    }));
}
function RegisterView() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    function handleNavigate(path) {
        router.push(`/${path}`);
        closeModal();
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-4 mb-7 px-2 text-center text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base",
                children: [
                    t('registration-helper'),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>handleNavigate('terms')
                        ,
                        className: "mx-1 cursor-pointer text-accent underline hover:no-underline",
                        children: t('text-terms')
                    }),
                    "&",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>handleNavigate('privacy')
                        ,
                        className: "cursor-pointer text-accent underline hover:no-underline ltr:ml-1 rtl:mr-1",
                        children: t('text-policy')
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RegisterForm, {})
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;