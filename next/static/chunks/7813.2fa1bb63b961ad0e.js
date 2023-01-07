"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7813,4537],{35897:function(e,t,n){n.r(t);var r=n(85893),l=n(94184),i=n.n(l),a=n(87219),o=n(63879),c=n(81776),u=n(8310),s=n(5647),f=n(80621),d=n(67294);t.default=function(e){var t,n,l=e.banners,v=e.layout,h=(0,s.W)(),m=h.showHeaderSearch,x=h.hideHeaderSearch,b=(0,d.useRef)(null),p=(0,f.Z)(b,{root:null,rootMargin:"0px",threshold:1});return(0,d.useEffect)((function(){p&&p.isIntersecting?x():p&&!p.isIntersecting&&m()}),[p]),(0,r.jsx)("div",{className:i()("relative hidden lg:block",{"!block":"minimal"===v}),children:(0,r.jsx)("div",{className:"-z-1 overflow-hidden",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(a.tq,{id:"banner",modules:[a.W_],resizeObserver:!0,allowTouchMove:!1,slidesPerView:1,children:null===l||void 0===l?void 0:l.map((function(e,l){var s,f;return(0,r.jsx)(a.o5,{children:(0,r.jsxs)("div",{className:i()("relative h-screen w-full",{"max-h-140":"standard"===v,"max-h-[320px] md:max-h-[680px]":"minimal"===v}),children:[(null===(s=e.image)||void 0===s?void 0:s.original)?(0,r.jsx)(o.E,{className:"h-full min-h-140 w-full",src:null!==(t=null===(f=e.image)||void 0===f?void 0:f.original)&&void 0!==t?t:c.Hb,alt:null!==(n=e.title)&&void 0!==n?n:"",layout:"fill",objectFit:"cover"}):"",(0,r.jsxs)("div",{className:i()("absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10",{"space-y-5 md:!space-y-8":"minimal"===v}),children:[(0,r.jsx)("h1",{className:i()("text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl",{"!text-accent":"minimal"===v}),children:null===e||void 0===e?void 0:e.title}),(0,r.jsx)("p",{className:"text-sm text-heading lg:text-base xl:text-lg",children:null===e||void 0===e?void 0:e.description}),(0,r.jsx)("div",{className:"w-full max-w-3xl",ref:b,children:(0,r.jsx)(u.default,{label:"search"})})]})]})},l)}))})})})})}},8310:function(e,t,n){n.r(t);var r=n(85893),l=n(13159),i=n(11163),a=n(20868),o=n(55864);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.default=function(e){var t=e.label,n=e.variant,c=s(e,["label","variant"]),f=(0,a.$G)().t,d=(0,i.useRouter)(),v=(0,o.Rx)(),h=v.searchTerm,m=v.updateSearchTerm;return(0,r.jsx)(l.Z,u({label:t,onSubmit:function(e){if(e.preventDefault(),h){var t=d.pathname,n=d.query;d.push({pathname:t,query:u({},n,{text:h})},void 0,{scroll:!1})}},onClearSearch:function(){m("");var e=d.pathname,t=d.query,n=t.text,r=s(t,["text"]);n&&d.push({pathname:e,query:u({},r)},void 0,{scroll:!1})},onChange:function(e){var t=e.target.value;m(t)},value:h,name:"search",placeholder:f("common:text-search-placeholder"),variant:n},c))}},87219:function(e,t,n){n.d(t,{W_:function(){return r.W_},o3:function(){return r.o3},tl:function(){return r.tl},tq:function(){return l.tq},o5:function(){return l.o5}});n(30933),n(92),n(68770),n(75083);var r=n(71911),l=n(98352)},80621:function(e,t,n){var r=n(67294);t.Z=function(e,t){var n=(0,r.useState)(null),l=n[0],i=n[1];return(0,r.useEffect)((function(){if(e.current&&"function"===typeof IntersectionObserver){var n=new IntersectionObserver((function(e){i(e[0])}),t);return n.observe(e.current),function(){i(null),n.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),l}}}]);