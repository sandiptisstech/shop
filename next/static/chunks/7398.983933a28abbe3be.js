"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7398,4488],{5348:function(t,e,r){r.r(e);var n=r(85893),o=r(96720),l=r(47358),i=r(20868),a=r(70024);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){s(t,e,r[e])}))}return t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(l.push(n.value),!e||l.length!==e);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){var t,e,r=(0,i.$G)("common").t,u=(0,o.X9)().data,s=u.atom,f=u.address,m=u.type,y=(0,o.SO)().closeModal,b=d((0,a.KO)(s),2),p=(b[0],b[1]);return(0,n.jsxs)("div",{className:"min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-center text-lg font-semibold text-heading sm:mb-6",children:[r("text-add-new")," ",r("text-address")]}),(0,n.jsx)(l.AddressForm,{onSubmit:function(t){var e={title:t.title,type:t.type,address:t.address};p(e),y()},defaultValues:{title:null!==(t=null===f||void 0===f?void 0:f.title)&&void 0!==t?t:"",type:null!==(e=null===f||void 0===f?void 0:f.type)&&void 0!==e?e:m,address:c({},null===f||void 0===f?void 0:f.address)}})]})}}}]);