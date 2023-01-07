"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3989],{89183:function(e,r,n){var t=n(85893),o=n(2962),a=n(83454);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}r.Z=function(e){var r=e.title,n=e.description,u=e.images,c=e.url,s=l(e,["title","description","images","url"]);return(0,t.jsx)(o.PB,i({title:r,openGraph:i({},Boolean(c)&&{url:"".concat(a.env.NEXT_PUBLIC_SITE_URL,"/").concat(c)},{title:r,description:n},Boolean(u)&&{images:null===u||void 0===u?void 0:u.map((function(e){var r;return{url:null===e||void 0===e||null===(r=e.image)||void 0===r?void 0:r.original,alt:null===e||void 0===e?void 0:e.title}}))})},s))}},31312:function(e,r,n){var t=n(85893),o=n(94184),a=n.n(o),u=n(20868);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}r.Z=function(e){var r,n=e.className,o=e.color,l=e.textColor,c=e.text,s=e.style,d=(0,u.$G)().t,f="px-3 py-1 rounded-full text-sm",g="bg-accent",v="text-light";return(0,t.jsx)("span",{className:a()(f,(r={},i(r,g,!o),i(r,v,!l),r),o,l,n),style:s,children:d(c)})}},19662:function(e,r,n){n.d(r,{i:function(){return t.ZP}});n(63629);var t=n(33851)},89583:function(e,r,n){n.d(r,{yi:function(){return P},Aj:function(){return h},Rr:function(){return S},rT:function(){return j},M6:function(){return w},U5:function(){return x},QE:function(){return N},Mc:function(){return _},pN:function(){return A}});var t=n(88767),o=n(31567),a=n(40782),u=n(96720),i=n(39128),l=n(10505),c=n(70024),s=n(8054),d=n(11163),f=n(90551),g=n(16125),v=n(31955),p=n(76482);function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function m(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function b(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){m(e,r,n[r])}))}return e}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return y(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e){(0,d.useRouter)().locale;var r,n={customer_id:v.Z.get(p.nd)},o=b({customerIdQuery:n},e);console.log("formattedOptions==>",o);var a,u=(0,t.useInfiniteQuery)([i.P.ORDERS,o],(function(e){var r=e.queryKey,t=e.pageParam;return l.Z.orders.all(Object.assign({},r[1],t,n))}),{getNextPageParam:function(e){var r=e.current_page;return e.last_page>r&&{page:r+1}}}),c=u.data,s=u.isLoading,f=u.error,y=u.fetchNextPage,m=u.hasNextPage,O=u.isFetching,P=u.isFetchingNextPage;return{orders:null!==(a=null===c||void 0===c||null===(r=c.pages)||void 0===r?void 0:r.flatMap((function(e){return e.data})))&&void 0!==a?a:[],paginatorInfo:Array.isArray(null===c||void 0===c?void 0:c.pages)?(0,g.Q)(null===c||void 0===c?void 0:c.pages[c.pages.length-1]):null,isLoading:s,error:f,isFetching:O,isLoadingMore:P,loadMore:function(){y()},hasMore:Boolean(m)}}function h(e){var r=e.tracking_number,n=(0,t.useQuery)([i.P.ORDERS,r],(function(){return l.Z.orders.get(r)}));return{order:n.data,isLoading:n.isLoading,error:n.error}}function S(e){(0,d.useRouter)().locale;var r,n,o=b({},e),a=(0,t.useInfiniteQuery)([i.P.ORDERS_STATUS,o],(function(e){var r=e.queryKey,n=e.pageParam;return l.Z.orders.statuses(Object.assign({},r[1],n))}),{getNextPageParam:function(e){var r=e.current_page;return e.last_page>r&&{page:r+1}}}),u=a.data,c=a.isFetching,s=a.isFetchingNextPage,f=a.fetchNextPage,v=a.hasNextPage,p=a.error;return{orderStatuses:null!==(n=null===u||void 0===u||null===(r=u.pages)||void 0===r?void 0:r.flatMap((function(e){return e.data})))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null===u||void 0===u?void 0:u.pages)?(0,g.Q)(null===u||void 0===u?void 0:u.pages[u.pages.length-1]):null,isLoading:c,isLoadingMore:s,error:p,loadMore:function(){f()},hasMore:Boolean(v)}}function j(e){(0,d.useRouter)().locale;var r,n,o=b({},e),a=(0,t.useInfiniteQuery)([i.P.ORDERS_REFUNDS,o],(function(e){var r=e.queryKey,n=e.pageParam;return l.Z.orders.refunds(Object.assign({},r[1],n))}),{getNextPageParam:function(e){var r=e.current_page;return e.last_page>r&&{page:r+1}}}),u=a.data,c=a.isLoading,s=a.isFetchingNextPage,f=a.fetchNextPage,v=a.hasNextPage,p=a.error;return{refunds:null!==(n=null===u||void 0===u||null===(r=u.pages)||void 0===r?void 0:r.flatMap((function(e){return e.data})))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null===u||void 0===u?void 0:u.pages)?(0,g.Q)(null===u||void 0===u?void 0:u.pages[u.pages.length-1]):null,isLoading:c,isLoadingMore:s,error:p,loadMore:function(){f()},hasMore:Boolean(v)}}var w=function(e){(0,d.useRouter)().locale;var r,n,o=b({},e),a=(0,t.useInfiniteQuery)([i.P.ORDERS_DOWNLOADS,o],(function(e){var r=e.queryKey,n=e.pageParam;return l.Z.orders.downloadable(Object.assign({},r[1],n))}),{getNextPageParam:function(e){var r=e.current_page;return e.last_page>r&&{page:r+1}}}),u=a.data,c=a.isLoading,s=a.isFetchingNextPage,f=a.fetchNextPage,v=a.hasNextPage,p=a.error;return{downloads:null!==(n=null===u||void 0===u||null===(r=u.pages)||void 0===r?void 0:r.flatMap((function(e){return e.data})))&&void 0!==n?n:[],paginatorInfo:Array.isArray(null===u||void 0===u?void 0:u.pages)?(0,g.Q)(null===u||void 0===u?void 0:u.pages[u.pages.length-1]):null,isLoading:c,isLoadingMore:s,error:p,loadMore:function(){f()},hasMore:Boolean(v)}};function x(){var e=(0,o.$)().t,r=((0,d.useRouter)().locale,(0,u.SO)().closeModal),n=(0,t.useQueryClient)(),c=(0,t.useMutation)(l.Z.orders.createRefund,{onSuccess:function(){a.Am.success(e("text-refund-request-submitted"))},onError:function(r){var n=(null!==r&&void 0!==r?r:{}).response.data;a.Am.error(e(null===n||void 0===n?void 0:n.message))},onSettled:function(){n.invalidateQueries(i.P.ORDERS),r()}}),s=c.mutate;return{createRefundRequest:function(e){var r=b({},e);s(r)},isLoading:c.isLoading}}function N(){var e=(0,d.useRouter)(),r=e.locale,n=(0,t.useMutation)(l.Z.orders.create,{onSuccess:function(r){console.log("data?.tracking_number====>",null===r||void 0===r?void 0:r.products),(null===r||void 0===r?void 0:r.tracking_number)&&e.push(f.Z.order(null===r||void 0===r?void 0:r.tracking_number))},onError:function(e){var r=(null!==e&&void 0!==e?e:{}).response.data;a.Am.error(null===r||void 0===r?void 0:r.message)}}),o=n.mutate;return{createOrder:function(e){var n=v.Z.get(p.nd),t=b({},e,{language:r,customer_id:Number(n)});o(t)},isLoading:n.isLoading}}function _(){var e=(0,t.useMutation)(l.Z.orders.generateDownloadLink,{onSuccess:function(e){!function(e,r){var n=document.createElement("a");n.href=e,n.setAttribute("download",r),n.click()}(e,"record.name")}}).mutate;return{generateDownloadableUrl:function(r){e({digital_file_id:r})}}}function A(){var e=O((0,c.KO)(s.Jb),2),r=(e[0],e[1]);return(0,t.useMutation)(l.Z.orders.verify,{onSuccess:function(e){e&&r(e)},onError:function(e){var r=(null!==e&&void 0!==e?e:{}).response.data;a.Am.error(null===r||void 0===r?void 0:r.message)}})}},56427:function(e,r,n){n.d(r,{ZP:function(){return l}});var t=n(67294),o=n(11163),a=n(3119);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e){var r=e.amount,n=e.currencyCode,t=e.locale;return new Intl.NumberFormat(t,{style:"currency",currency:n}).format(r)}function l(e){var r=(0,a.rV)().settings.currency,n=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){u(e,r,n[r])}))}return e}({},e,{currencyCode:null!==r&&void 0!==r?r:"USD"}),l=n.amount,c=n.baseAmount,s=n.currencyCode,d=(0,o.useRouter)().locale,f=(0,t.useMemo)((function(){if("number"!==typeof l||!s)return"";var e=d||"en";return c?function(e){var r=e.amount,n=e.baseAmount,t=e.currencyCode,o=e.locale,a=n>r,u=new Intl.NumberFormat(o||"en",{style:"percent"}),l=a?u.format((n-r)/n):null;return{price:i({amount:r,currencyCode:t,locale:o}),basePrice:a?i({amount:n,currencyCode:t,locale:o}):null,discount:l}}({amount:l,baseAmount:c,currencyCode:s,locale:e}):i({amount:l,currencyCode:s,locale:e})}),[l,c,s,d]);return"string"===typeof f?{price:f,basePrice:null,discount:null}:f}}}]);