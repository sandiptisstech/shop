(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6639,4209],{44185:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout/digital",function(){return n(21867)}])},64209:function(e,t,n){"use strict";n.r(t);var r=n(85893),l=n(67294),o=n(70024),i=n(8054),u=n(96720),a=n(13713),c=n(20868),s=n(94184),d=n.n(s),f=n(31761);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(a){u=!0,l=a}finally{try{i||null==n.return||n.return()}finally{if(u)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=e.contact,n=e.label,s=e.count,v=e.className,m=e.gridClassName,x=p((0,o.KO)(i.lu),2),b=x[0],y=x[1],h=(0,u.SO)().openModal,g=(0,c.$G)("common").t;return(0,l.useEffect)((function(){y(t||"")}),[t,y]),(0,r.jsxs)("div",{className:v,children:[(0,r.jsxs)("div",{className:d()("mb-5 flex items-center justify-between",{"md:mb-8":s}),children:[(0,r.jsxs)("div",{className:"flex items-center space-x-3 rtl:space-x-reverse md:space-x-4",children:[s&&(0,r.jsx)("span",{className:"flex items-center justify-center w-8 h-8 text-base rounded-full bg-accent text-light lg:text-xl",children:s}),(0,r.jsx)("p",{className:"text-lg capitalize text-heading lg:text-xl",children:n})]}),(0,r.jsxs)("button",{className:"flex items-center text-sm font-semibold transition-colors duration-200 text-accent hover:text-accent-hover focus:text-accent-hover focus:outline-none",onClick:function(){h("ADD_OR_UPDATE_CHECKOUT_CONTACT")},children:[(0,r.jsx)(a.p,{className:"h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"}),g(b?"text-update":"text-add")]})]}),(0,r.jsx)("div",{className:d()("w-full",m),children:(0,r.jsx)(f.Z,{country:"us",value:b,disabled:!0,inputClass:"!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !rounded focus:!border-accent !h-12",dropdownClass:"focus:!ring-0 !border !border-border-base !shadow-350"})})]})}},13713:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var r=n(85893);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(e){return(0,r.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}))}},89582:function(e,t,n){"use strict";n.d(t,{G:function(){return v}});var r=n(85893),l=n(89874),o=n(56455),i=n(11163),u=function(){var e,t,n=(0,o.c)({limit:l.Fi}),r=(0,i.useRouter)();if(/^\/$|^\/\?(.*)/.test(null===r||void 0===r?void 0:r.asPath)){var u,a,c,s,d,f=null!==(s=null===n||void 0===n||null===(u=n.types)||void 0===u?void 0:u.find((function(e){var t;return null===e||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.isHome})))&&void 0!==s?s:null===n||void 0===n||null===(a=n.types)||void 0===a?void 0:a[0];return{layout:null!==(d=null===f||void 0===f||null===(c=f.settings)||void 0===c?void 0:c.layoutType)&&void 0!==d?d:"default",page:f}}var v,p=null===n||void 0===n||null===(e=n.types)||void 0===e?void 0:e.find((function(e){return r.asPath.includes(e.slug)}));return{layout:null!==(v=null===p||void 0===p||null===(t=p.settings)||void 0===t?void 0:t.layoutType)&&void 0!==v?v:"default",page:p}},a=n(1279),c=n(25473),s=n(14027),d=n(15149);function f(e){var t=e.children,n=u().layout;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",children:[["minimal","compact"].includes(n)?(0,r.jsx)(c.Z,{layout:n}):(0,r.jsx)(a.Z,{layout:n}),t,["compact"].includes(n)&&(0,r.jsx)(d.Z,{}),(0,r.jsx)(s.Z,{})]})}var v=function(e){return(0,r.jsx)(f,{children:e})}},89183:function(e,t,n){"use strict";var r=n(85893),l=n(2962),o=n(83454);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.Z=function(e){var t=e.title,n=e.description,i=e.images,c=e.url,s=a(e,["title","description","images","url"]);return(0,r.jsx)(l.PB,u({title:t,openGraph:u({},Boolean(c)&&{url:"".concat(o.env.NEXT_PUBLIC_SITE_URL,"/").concat(c)},{title:t,description:n},Boolean(i)&&{images:null===i||void 0===i?void 0:i.map((function(e){var t;return{url:null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.original,alt:null===e||void 0===e?void 0:e.title}}))})},s))}},31761:function(e,t,n){"use strict";n.d(t,{Z:function(){return l.a}});n(79745);var r=n(67555),l=n.n(r)},21867:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f}});var r=n(85893),l=n(5152),o=n(20868),i=n(89582),u=n(89183),a=n(16052),c=n(64209),s=(0,l.default)((function(){return n.e(6968).then(n.bind(n,6968))}),{loadableGenerated:{webpack:function(){return[6968]}},ssr:!1}),d=function(){var e,t=(0,o.$G)("common").t,n=(0,a.aF)().me;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{noindex:!0,nofollow:!0}),(0,r.jsx)("div",{className:"bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",children:(0,r.jsxs)("div",{className:"m-auto flex w-full max-w-xl flex-col",children:[(0,r.jsx)(c.default,{className:"bg-light p-5 shadow-700 md:p-8",contact:null===n||void 0===n||null===(e=n.profile)||void 0===e?void 0:e.contact,label:t("text-contact-number")}),(0,r.jsxs)("div",{className:"mt-3 w-full bg-white",children:[(0,r.jsx)("span",{className:"mb-[1px] block w-full border-b border-gray-100 py-7 px-8 text-lg font-semibold capitalize text-gray-800 lg:text-2xl",children:t("text-your-order")}),(0,r.jsx)("div",{className:"w-full px-8 py-7",children:(0,r.jsx)(s,{hideTitle:!0})})]})]})})]})};d.authenticationRequired=!0,d.getLayout=function(e){return(0,i.G)((0,r.jsx)("div",{className:"min-h-screen bg-gray-100",children:e}))};var f=!0;t.default=d}},function(e){e.O(0,[9351,3985,7687,7866,6859,9774,2888,179],(function(){return t=44185,e(e.s=t);var t}));var t=e.O();_N_E=t}]);