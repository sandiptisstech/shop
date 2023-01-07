"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6302],{69934:function(e,t,r){r.d(t,{z:function(){return b}});var n=r(85893),l=r(64488),a=r(70024),s=r(8054),i=r(14685),o=r(41114),c=r(94184),u=r.n(c),d=r(89583),m=r(57557),f=r.n(m);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(o){i=!0,l=o}finally{try{s||null==r.return||r.return()}finally{if(i)throw l}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){var t=v((0,a.KO)(s.Km),1)[0],r=v((0,a.KO)(s.du),1)[0],c=(0,o.jD)(),m=c.items,x=c.total,h=c.isEmpty,b=(0,d.pN)(),y=b.mutate,j=b.isLoading;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,p({loading:j,className:u()("mt-5 w-full",e.className),onClick:function(){console.log("formatOrderedProduct=====>",JSON.stringify(m)),y({amount:x,products:null===m||void 0===m?void 0:m.map((function(e){return(0,l.Y)(e)})),billing_address:p({},(null===t||void 0===t?void 0:t.address)&&f()(t.address,["__typename"])),shipping_address:p({},(null===r||void 0===r?void 0:r.address)&&f()(r.address,["__typename"]))})},disabled:h},e))})}},86088:function(e,t,r){var n=r(85893),l=r(56427),a=r(94184),s=r.n(a),i=r(20868),o=r(63879),c=r(81776);t.Z=function(e){var t,r=e.item,a=e.notAvailable,u=(0,i.$G)("common").t,d=(0,l.ZP)({amount:r.itemTotal}).price;return(0,n.jsxs)("div",{className:s()("flex w-full space-x-3 rtl:space-x-reverse py-3 first:pt-0 last:pb-0"),children:[(0,n.jsx)("div",{className:"w-[42px] h-[42px] flex-shrink-0 bg-gray-100",children:(0,n.jsx)(o.E,{src:null!==(t=null===r||void 0===r?void 0:r.image)&&void 0!==t?t:c.Hb,alt:r.name,layout:"responsive",width:42,height:42,className:"product-image rounded-md"})}),(0,n.jsxs)("div",{className:"flex w-full justify-between",children:[(0,n.jsxs)("p",{className:"flex flex-col text-sm",children:[(0,n.jsx)("span",{className:s()(a?"text-red-500":"text-gray-800"),children:r.name}),(0,n.jsxs)("span",{className:s()("text-xs font-semibold mt-1.5",a?"text-red-500":"text-gray-500"),children:["X ",r.quantity]})]}),(0,n.jsx)("span",{className:s()("text-sm font-semibold",a?"text-red-500":"text-gray-800"),children:a?u("text-unavailable"):d})]})]},r.id)}},86218:function(e,t,r){r.d(t,{m:function(){return l}});var n=r(85893),l=function(e){var t=e.title,r=e.value;return(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("p",{className:"text-sm text-gray-800",children:t}),(0,n.jsx)("span",{className:"text-sm text-gray-800 font-semibold ltr:text-right rtl:text-left",children:r})]})}},76302:function(e,t,r){r.r(t);var n=r(85893),l=r(41114),a=r(20868),s=r(86088),i=r(9450),o=r(56427),c=r(86218),u=r(69934);t.default=function(e){e.hideTitle;var t=(0,a.$G)("common").t,r=(0,l.jD)(),d=r.items,m=r.total,f=r.isEmpty,x=(0,o.ZP)(d&&{amount:m}).price;return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"flex flex-col border-b border-dashed pb-7 border-border-400",children:f?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center h-full mb-4",children:[(0,n.jsx)(i.Z,{width:140,height:176}),(0,n.jsx)("h4",{className:"mt-6 text-base font-semibold",children:t("text-no-products")})]}):null===d||void 0===d?void 0:d.map((function(e){return(0,n.jsx)(s.Z,{item:e},e.id)}))}),(0,n.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,n.jsx)(c.m,{title:t("text-sub-total"),value:x}),(0,n.jsx)(c.m,{title:t("text-tax"),value:t("text-calculated-checkout")}),(0,n.jsx)(c.m,{title:t("text-estimated-shipping"),value:t("text-calculated-checkout")})]}),(0,n.jsx)(u.z,{className:"w-full mt-8 font-normal h-[50px] !bg-gray-800 transition-colors hover:!bg-gray-900",children:t("text-check-availability")})]})}}}]);