"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1021],{91021:function(e,r,t){t.r(r);var n=t(85893),c=t(96872),a=t(63879),o=t(94184),l=t.n(o),s=t(20868),i=t(90551),u=t(81776),d=t(56427);r.default=function(e){var r,t=e.product,o=e.className,m=(0,s.$G)("common").t,x=null!==t&&void 0!==t?t:{},f=x.name,p=x.slug,h=x.image,b=x.author,y=x.min_price,v=x.max_price,g=x.product_type,j=(0,d.ZP)({amount:t.sale_price?t.sale_price:t.price,baseAmount:t.price}),N=j.price,w=j.basePrice,C=j.discount,P=(0,d.ZP)({amount:y}).price,Z=(0,d.ZP)({amount:v}).price;return(0,n.jsxs)("article",{className:l()("product-card cart-type-radon flex h-full flex-col overflow-hidden duration-200",o),children:[(0,n.jsx)(c.Z,{href:i.Z.product(p),className:"cursor-pointer",children:(0,n.jsx)(a.E,{src:null!==(r=null===h||void 0===h?void 0:h.original)&&void 0!==r?r:u.Hb,alt:f,layout:"responsive",width:600,height:888,className:"product-image rounded-lg"})}),(0,n.jsxs)("header",{className:"flex shrink-0 flex-col space-y-2 pt-4",children:[f&&(0,n.jsx)(c.Z,{href:i.Z.product(p),className:"text-sm font-semibold text-heading transition-colors hover:text-orange-500 md:text-base",title:f,children:f}),b&&(0,n.jsxs)("span",{className:"text-xs text-gray-400 md:text-sm",children:[m("text-by"),(0,n.jsx)(c.Z,{href:i.Z.author(null===b||void 0===b?void 0:b.slug),className:"text-body transition-colors hover:text-orange-500 ltr:ml-1 rtl:mr-1",children:null===b||void 0===b?void 0:b.name})]}),(0,n.jsx)("div",{className:"flex shrink-0 items-center",children:"variable"===g.toLowerCase()?(0,n.jsxs)("p",{className:"text-sm font-semibold text-orange-500 md:text-base",children:[P,(0,n.jsx)("span",{className:"text-heading",children:" - "}),Z]}):(0,n.jsxs)("div",{className:"flex items-center space-x-2.5 rtl:space-x-reverse",children:[(0,n.jsx)("span",{className:"text-base font-semibold text-orange-500",children:N}),w&&(0,n.jsx)("del",{className:"text-xs font-semibold text-gray-400 ltr:mr-2 rtl:ml-2",children:w}),C&&(0,n.jsxs)("div",{className:"text-xs text-accent",children:["(",m("text-save")," ",C,")"]})]})})]})]})}},56427:function(e,r,t){t.d(r,{ZP:function(){return s}});var n=t(67294),c=t(11163),a=t(3119);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e){var r=e.amount,t=e.currencyCode,n=e.locale;return new Intl.NumberFormat(n,{style:"currency",currency:t}).format(r)}function s(e){var r=(0,a.rV)().settings.currency,t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},e,{currencyCode:null!==r&&void 0!==r?r:"USD"}),s=t.amount,i=t.baseAmount,u=t.currencyCode,d=(0,c.useRouter)().locale,m=(0,n.useMemo)((function(){if("number"!==typeof s||!u)return"";var e=d||"en";return i?function(e){var r=e.amount,t=e.baseAmount,n=e.currencyCode,c=e.locale,a=t>r,o=new Intl.NumberFormat(c||"en",{style:"percent"}),s=a?o.format((t-r)/t):null;return{price:l({amount:r,currencyCode:n,locale:c}),basePrice:a?l({amount:t,currencyCode:n,locale:c}):null,discount:s}}({amount:s,baseAmount:i,currencyCode:u,locale:e}):l({amount:s,currencyCode:u,locale:e})}),[s,i,u,d]);return"string"===typeof m?{price:m,basePrice:null,discount:null}:m}}}]);