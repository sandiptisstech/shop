(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9813],{41609:function(e,t,r){var s=r(280),n=r(64160),a=r(35694),l=r(1469),o=r(98612),c=r(44144),i=r(25726),d=r(36719),m=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(o(e)&&(l(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||d(e)||a(e)))return!e.length;var t=n(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(i(e))return!s(e).length;for(var r in e)if(m.call(e,r))return!1;return!0}},42983:function(e,t,r){"use strict";r.r(t);var s=r(85893),n=r(63879),a=r(94184),l=r.n(a),o=r(56427),c=r(62565),i=r(20868),d=r(96720),m=r(81776),u=r(13713);t.default=function(e){var t,r=e.product,a=e.className,x=function(){return E("PRODUCT_DETAILS",r.slug)},h=(0,i.$G)("common").t,p=null!==r&&void 0!==r?r:{},b=p.name,f=p.image,g=p.quantity,j=p.min_price,v=p.max_price,N=p.product_type,y=(0,o.ZP)({amount:r.sale_price?r.sale_price:r.price,baseAmount:r.price}),w=y.price,k=y.basePrice,_=y.discount,C=(0,o.ZP)({amount:j}).price,P=(0,o.ZP)({amount:v}).price,E=(0,d.SO)().openModal;return(0,s.jsxs)("article",{className:l()("product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow",a),children:[(0,s.jsxs)("div",{className:"relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64",onClick:x,children:[(0,s.jsx)("span",{className:"sr-only",children:h("text-product-image")}),(0,s.jsx)(n.E,{src:null!==(t=null===f||void 0===f?void 0:f.original)&&void 0!==t?t:m.Hb,alt:b,layout:"fill",objectFit:"contain",className:"product-image"}),_&&(0,s.jsx)("div",{className:"absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4",children:_})]}),(0,s.jsxs)("header",{className:"p-3 md:p-6",children:["variable"===N.toLowerCase()?(0,s.jsxs)("div",{className:"mb-2",children:[(0,s.jsx)("span",{className:"text-sm font-semibold text-heading md:text-base",children:C}),(0,s.jsx)("span",{children:" - "}),(0,s.jsx)("span",{className:"text-sm font-semibold text-heading md:text-base",children:P})]}):(0,s.jsxs)("div",{className:"mb-2 flex items-center",children:[(0,s.jsx)("span",{className:"text-sm font-semibold text-heading md:text-base",children:w}),k&&(0,s.jsx)("del",{className:"text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm",children:k})]}),(0,s.jsx)("h3",{className:"mb-4 cursor-pointer truncate text-xs text-body md:text-sm",onClick:x,children:b}),"variable"===N.toLowerCase()?(0,s.jsx)(s.Fragment,{children:Number(g)>0&&(0,s.jsxs)("button",{onClick:x,className:"group flex h-7 w-full items-center justify-between rounded bg-gray-100 text-xs text-body-dark transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:text-sm",children:[(0,s.jsx)("span",{className:"flex-1",children:h("text-add")}),(0,s.jsx)("span",{className:"grid h-7 w-7 place-items-center bg-gray-200 transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9",children:(0,s.jsx)(u.p,{className:"h-4 w-4 stroke-2"})})]})}):(0,s.jsx)(s.Fragment,{children:Number(g)>0&&(0,s.jsx)(c.o,{variant:"neon",data:r})}),Number(g)<=0&&(0,s.jsx)("div",{className:"rounded bg-red-500 px-2 py-1.5 text-center text-xs text-light sm:py-2.5",children:h("text-out-stock")})]})]})}}}]);