(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8915],{98120:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return i(51796)}])},89582:function(t,e,i){"use strict";i.d(e,{G:function(){return x}});var l=i(85893),n=i(89874),o=i(56455),r=i(11163),s=function(){var t,e,i=(0,o.c)({limit:n.Fi}),l=(0,r.useRouter)();if(/^\/$|^\/\?(.*)/.test(null===l||void 0===l?void 0:l.asPath)){var s,c,u,a,d,p=null!==(a=null===i||void 0===i||null===(s=i.types)||void 0===s?void 0:s.find((function(t){var e;return null===t||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.isHome})))&&void 0!==a?a:null===i||void 0===i||null===(c=i.types)||void 0===c?void 0:c[0];return{layout:null!==(d=null===p||void 0===p||null===(u=p.settings)||void 0===u?void 0:u.layoutType)&&void 0!==d?d:"default",page:p}}var x,m=null===i||void 0===i||null===(t=i.types)||void 0===t?void 0:t.find((function(t){return l.asPath.includes(t.slug)}));return{layout:null!==(x=null===m||void 0===m||null===(e=m.settings)||void 0===e?void 0:e.layoutType)&&void 0!==x?x:"default",page:m}},c=i(1279),u=i(25473),a=i(14027),d=i(15149);function p(t){var e=t.children,i=s().layout;return(0,l.jsxs)("div",{className:"flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",children:[["minimal","compact"].includes(i)?(0,l.jsx)(u.Z,{layout:i}):(0,l.jsx)(c.Z,{layout:i}),e,["compact"].includes(i)&&(0,l.jsx)(d.Z,{}),(0,l.jsx)(a.Z,{})]})}var x=function(t){return(0,l.jsx)(p,{children:t})}},89183:function(t,e,i){"use strict";var l=i(85893),n=i(2962),o=i(83454);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},l=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),l.forEach((function(e){r(t,e,i[e])}))}return t}function c(t,e){if(null==t)return{};var i,l,n=function(t,e){if(null==t)return{};var i,l,n={},o=Object.keys(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)i=o[l],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}e.Z=function(t){var e=t.title,i=t.description,r=t.images,u=t.url,a=c(t,["title","description","images","url"]);return(0,l.jsx)(n.PB,s({title:e,openGraph:s({},Boolean(u)&&{url:"".concat(o.env.NEXT_PUBLIC_SITE_URL,"/").concat(u)},{title:e,description:i},Boolean(r)&&{images:null===r||void 0===r?void 0:r.map((function(t){var e;return{url:null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.original,alt:null===t||void 0===t?void 0:t.title}}))})},a))}},51796:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return p},default:function(){return x}});var l=i(85893),n="policy-main-title",o="01/01/2020",r=[{id:"1",title:"policy-one-title",description:"policy-one-description"},{id:"2",title:"policy-two-title",description:"policy-two-description"},{id:"3",title:"policy-three-title",description:"policy-three-description"},{id:"4",title:"policy-four-title",description:"policy-four-description"},{id:"5",title:"policy-five-title",description:"policy-five-description"},{id:"6",title:"policy-six-title",description:"policy-six-description"}],s=i(66261),c=i(20868),u=i(89582),a=i(89183);function d(t){return t.toLowerCase().split(" ").join("_")}var p=!0;function x(){var t=(0,c.$G)("policy").t,e=n,i=o,u=r;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{title:"Privacy",url:"privacy"}),(0,l.jsxs)("section",{className:"mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",children:[(0,l.jsxs)("header",{className:"mb-10 sm:mt-2 lg:mb-14 xl:mt-4",children:[(0,l.jsx)("h1",{className:"mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl",children:t(e)}),(0,l.jsx)("p",{className:"px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg",children:i})]}),(0,l.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,l.jsx)("nav",{className:"mb-8 md:mb-0 md:w-72 xl:w-3/12",children:(0,l.jsx)("ol",{className:"sticky z-10 md:top-16 lg:top-22",children:null===u||void 0===u?void 0:u.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{spy:!0,offset:-120,smooth:!0,duration:500,to:d(e.title),activeClass:"text-sm lg:text-base text-heading font-semibold",className:"inline-flex cursor-pointer py-3 uppercase text-sub-heading",children:t(e.title)})},e.title)}))})}),(0,l.jsx)("div",{className:"md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8",children:null===u||void 0===u?void 0:u.map((function(e){return(0,l.jsxs)(s.W_,{name:d(e.title),className:"mb-10",children:[(0,l.jsx)("h2",{className:"mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl",children:t(e.title)}),(0,l.jsx)("div",{className:"leading-loose text-body-dark",dangerouslySetInnerHTML:{__html:t(e.description)}})]},e.title)}))})]})]})]})}x.getLayout=u.G}},function(t){t.O(0,[9351,3985,6261,7866,6859,9774,2888,179],(function(){return e=98120,t(t.s=e);var e}));var e=t.O();_N_E=e}]);