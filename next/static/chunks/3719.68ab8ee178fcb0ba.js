"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3719],{53719:function(r,n,t){t.r(n),t.d(n,{default:function(){return d}});var e=t(85893),o=t(96720),u=t(58347),i=t(8054),a=t(70024),l=t(20868),c=t(3119),s=t(13958);function f(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function m(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,o,u=[],i=!0,a=!1;try{for(t=t.call(r);!(i=(e=t.next()).done)&&(u.push(e.value),!n||u.length!==n);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return f(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var r=function(r){var n=r.phone_number;h(n),f()},n=(0,l.$G)("common").t,t=(0,c.rV)().settings.useOtp,f=(0,o.SO)().closeModal,d=m((0,a.KO)(i.lu),2),b=d[0],h=d[1],y=m((0,a.KO)(i.gI),2);y[0],y[1];return(0,e.jsxs)("div",{className:"flex flex-col justify-center min-h-screen p-5 bg-light sm:p-8 md:min-h-0 md:rounded-xl",children:[(0,e.jsxs)("h1",{className:"mb-5 text-sm font-semibold text-center text-heading sm:mb-6",children:[n(b?"text-update":"text-add-new")," ",n("text-contact-number")]}),t?(0,e.jsx)(u.Z,{phoneNumber:b,onVerifySuccess:r}):(0,e.jsx)(s.Z,{onSubmit:r,phoneNumber:b})]})}},58347:function(r,n,t){t.d(n,{Z:function(){return d}});var e=t(85893),o=t(20868),u=t(70024),i=t(15239),a=t(13958),l=t(92267),c=t(50442),s=t(16052);function f(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}function m(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var t=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,o,u=[],i=!0,a=!1;try{for(t=t.call(r);!(i=(e=t.next()).done)&&(u.push(e.value),!n||u.length!==n);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(r,n)||function(r,n){if(!r)return;if("string"===typeof r)return f(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(r){var n=r.phoneNumber,t=r.onVerifySuccess,f=(0,o.$G)("common").t,d=m((0,u.KO)(l.R),1)[0],b=(0,s._7)({onVerifySuccess:t}),h=b.mutate,y=b.isLoading,p=(0,s.Tk)({verifyOnly:!0}),v=p.mutate,g=p.isLoading,x=p.serverError,S=p.setServerError;return(0,e.jsxs)(e.Fragment,{children:["PhoneNumber"===d.step&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.Z,{variant:"error",message:x&&f(x),className:"mb-4",closeable:!0,onClose:function(){return S(null)}}),(0,e.jsx)(a.Z,{onSubmit:function(r){var n=r.phone_number;v({phone_number:"+".concat(n)})},isLoading:g,phoneNumber:n})]}),"OtpForm"===d.step&&(0,e.jsx)(c.Z,{onSubmit:function(r){var n=r.code;h({code:n,phone_number:d.phoneNumber,otp_id:d.otpId})},isLoading:y})]})}}}]);