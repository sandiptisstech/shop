(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6890],{94305:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return i(83042)}])},89582:function(t,e,i){"use strict";i.d(e,{G:function(){return x}});var n=i(85893),l=i(89874),r=i(56455),o=i(11163),s=function(){var t,e,i=(0,r.c)({limit:l.Fi}),n=(0,o.useRouter)();if(/^\/$|^\/\?(.*)/.test(null===n||void 0===n?void 0:n.asPath)){var s,u,d,a,c,m=null!==(a=null===i||void 0===i||null===(s=i.types)||void 0===s?void 0:s.find((function(t){var e;return null===t||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.isHome})))&&void 0!==a?a:null===i||void 0===i||null===(u=i.types)||void 0===u?void 0:u[0];return{layout:null!==(c=null===m||void 0===m||null===(d=m.settings)||void 0===d?void 0:d.layoutType)&&void 0!==c?c:"default",page:m}}var x,p=null===i||void 0===i||null===(t=i.types)||void 0===t?void 0:t.find((function(t){return n.asPath.includes(t.slug)}));return{layout:null!==(x=null===p||void 0===p||null===(e=p.settings)||void 0===e?void 0:e.layoutType)&&void 0!==x?x:"default",page:p}},u=i(1279),d=i(25473),a=i(14027),c=i(15149);function m(t){var e=t.children,i=s().layout;return(0,n.jsxs)("div",{className:"flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",children:[["minimal","compact"].includes(i)?(0,n.jsx)(d.Z,{layout:i}):(0,n.jsx)(u.Z,{layout:i}),e,["compact"].includes(i)&&(0,n.jsx)(c.Z,{}),(0,n.jsx)(a.Z,{})]})}var x=function(t){return(0,n.jsx)(m,{children:t})}},89183:function(t,e,i){"use strict";var n=i(85893),l=i(2962),r=i(83454);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),n.forEach((function(e){o(t,e,i[e])}))}return t}function u(t,e){if(null==t)return{};var i,n,l=function(t,e){if(null==t)return{};var i,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(l[i]=t[i]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(l[i]=t[i])}return l}e.Z=function(t){var e=t.title,i=t.description,o=t.images,d=t.url,a=u(t,["title","description","images","url"]);return(0,n.jsx)(l.PB,s({title:e,openGraph:s({},Boolean(d)&&{url:"".concat(r.env.NEXT_PUBLIC_SITE_URL,"/").concat(d)},{title:e,description:i},Boolean(o)&&{images:null===o||void 0===o?void 0:o.map((function(t){var e;return{url:null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.original,alt:null===t||void 0===t?void 0:t.title}}))})},a))}},83042:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return m},default:function(){return x}});var n=i(85893),l="terms-main-title",r="01/01/2020",o=[{id:"1",title:"terms-one-title",description:"terms-one-description"},{id:"2",title:"terms-two-title",description:"terms-two-description"},{id:"3",title:"terms-three-title",description:"terms-three-description"},{id:"4",title:"terms-four-title",description:"terms-four-description"},{id:"5",title:"terms-five-title",description:"terms-five-description"},{id:"6",title:"terms-six-title",description:"terms-six-description"}],s=i(66261),u=i(20868),d=i(89582),a=i(89183);function c(t){return t.toLowerCase().split(" ").join("_")}var m=!0;function x(){var t=(0,u.$G)("terms").t,e=l,i=r,d=o;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"Terms",url:"terms"}),(0,n.jsxs)("section",{className:"mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",children:[(0,n.jsxs)("header",{className:"mb-10 sm:mt-2 lg:mb-14 xl:mt-4",children:[(0,n.jsx)("h1",{className:"mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl",children:t(e)}),(0,n.jsx)("p",{className:"px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg",children:i})]}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,n.jsx)("nav",{className:"mb-8 md:mb-0 md:w-72 xl:w-3/12",children:(0,n.jsx)("ol",{className:"sticky z-10 md:top-16 lg:top-22",children:null===d||void 0===d?void 0:d.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(s.rU,{spy:!0,offset:-120,smooth:!0,duration:500,to:c(e.title),activeClass:"text-sm lg:text-base text-heading font-semibold",className:"inline-flex cursor-pointer py-3 uppercase text-sub-heading",children:t(e.title)})},e.title)}))})}),(0,n.jsx)("div",{className:"md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8",children:null===d||void 0===d?void 0:d.map((function(e){return(0,n.jsxs)(s.W_,{name:c(e.title),className:"mb-10",children:[(0,n.jsx)("h2",{className:"mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl",children:t(e.title)}),(0,n.jsx)("div",{className:"leading-loose text-body-dark",dangerouslySetInnerHTML:{__html:t(e.description)}})]},e.title)}))})]})]})]})}x.getLayout=d.G}},function(t){t.O(0,[9351,3985,6261,7866,6859,9774,2888,179],(function(){return e=94305,t(t.s=e);var e}));var e=t.O();_N_E=e}]);