"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2942],{22942:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(85893),o=t(20868),a=t(74231),i=t(14685),u=t(96720),s=t(34265),c=t(92508),l=t(74354);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}var g=a.Ry().shape({question:a.Z_().required("error-description-required")});function b(){var e=(0,o.$G)("common").t,r=(0,u.X9)().data,t=(0,l.OZ)(),a=t.createQuestion,d=t.isLoading;return(0,n.jsxs)("div",{className:"flex h-full min-h-screen w-screen flex-col bg-light p-7 md:h-auto md:min-h-0 md:max-w-[590px] md:justify-center md:rounded-xl",children:[(0,n.jsx)("h3",{className:"mb-6 text-center text-lg font-semibold text-heading",children:e("text-ask-question")}),(0,n.jsx)(s.l,{onSubmit:function(e){a({product_id:r.product_id,shop_id:r.shop_id,question:e.question})},validationSchema:g,children:function(r){var t,o=r.register,a=r.formState.errors;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,f({},o("question"),{variant:"outline",className:"mb-5",error:e(null===(t=a.question)||void 0===t?void 0:t.message)})),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-xs font-semibold leading-relaxed text-gray-500 ltr:pr-5 rtl:pl-5",children:e("text-question-additional-info")}),(0,n.jsx)(i.Z,{className:"h-11 w-auto sm:h-12",loading:d,disabled:d,children:e("text-submit")})]})]})}})]})}},92508:function(e,r,t){var n=t(85893),o=t(67294),a=t(94184),i=t.n(a);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={normal:"bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",solid:"bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",outline:"border border-border-base focus:border-accent"},d=o.forwardRef((function(e,r){var t=e.className,o=e.label,a=e.name,u=e.error,d=e.variant,f=void 0===d?"normal":d,g=e.shadow,b=void 0!==g&&g,m=e.inputClassName,p=c(e,["className","label","name","error","variant","shadow","inputClassName"]);return(0,n.jsxs)("div",{className:t,children:[o&&(0,n.jsx)("label",{htmlFor:a,className:"block text-body-dark font-semibold text-sm leading-none mb-3",children:o}),(0,n.jsx)("textarea",s({id:a,name:a,className:i()("px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",b&&"focus:shadow",l[f],m),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:4,ref:r},p)),u&&(0,n.jsx)("p",{className:"my-2 text-xs text-red-500",children:u})]})}));d.displayName="TextArea",r.Z=d},74354:function(e,r,t){t.d(r,{Bk:function(){return x},AM:function(){return h},OZ:function(){return j},os:function(){return y},iB:function(){return v},rn:function(){return p},k5:function(){return O}});var n=t(88767),o=t(10505),a=t(39128),i=t(16125);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var r=e||{},t=r.limit,n=void 0===t?30:t,o=r.price,a=r.categories,i=r.name,c=r.searchType,l=r.searchQuery,d=r.text,f=s(r,["limit","price","categories","name","searchType","searchQuery","text"]);return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({limit:n},o&&{min_price:o},i&&{name:i.toString()},a&&{categories:a.toString()},c&&{type:c.toString()},l&&{name:l.toString()},d&&{name:d.toString()},f)},l=t(20868),d=t(96720),f=t(40782),g=t(11163);function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){b(e,r,t[r])}))}return e}function p(e){var r,t,u=(0,g.useRouter)().locale,s=m({},c(e),{language:u}),l=(0,n.useInfiniteQuery)([a.P.PRODUCTS,s],(function(e){var r=e.queryKey,t=e.pageParam;return o.Z.products.all(Object.assign({},r[1],t))}),{getNextPageParam:function(e){var r=e.current_page;return e.last_page>r&&{page:r+1}}}),d=l.data,f=l.isLoading,b=l.error,p=l.fetchNextPage,y=l.hasNextPage,v=l.isFetching,O=l.isFetchingNextPage;return{products:null!==(t=null===d||void 0===d||null===(r=d.pages)||void 0===r?void 0:r.flatMap((function(e){return e.data})))&&void 0!==t?t:[],paginatorInfo:Array.isArray(null===d||void 0===d?void 0:d.pages)?(0,i.Q)(null===d||void 0===d?void 0:d.pages[d.pages.length-1]):null,isLoading:f,error:b,isFetching:v,isLoadingMore:O,loadMore:function(){p()},hasMore:Boolean(y)}}var y=function(e){var r=m({},e,{language:(0,g.useRouter)().locale}),t=(0,n.useQuery)([a.P.PRODUCTS_POPULAR,r],(function(e){var r=e.queryKey;return o.Z.products.popular(r[1])})),i=t.data;return{products:null!==i&&void 0!==i?i:[],isLoading:t.isLoading,error:t.error}};function v(e){var r=e.slug,t=(0,g.useRouter)().locale,i=(0,n.useQuery)([a.P.PRODUCTS,{slug:r,language:t}],(function(){return o.Z.products.get({slug:r,language:t})}));return{product:i.data,isLoading:i.isLoading,error:i.error}}function O(e){var r,t=(0,n.useQuery)([a.P.PRODUCTS_QUESTIONS,e],(function(e){var r=e.queryKey;return o.Z.products.questions(Object.assign({},r[1]))}),{keepPreviousData:!0}),u=t.data,s=t.isLoading,c=t.error,l=t.isFetching;return{questions:null!==(r=null===u||void 0===u?void 0:u.data)&&void 0!==r?r:[],paginatorInfo:(0,i.Q)(u),isLoading:s,error:c,isFetching:l}}function h(){var e=(0,l.$G)("common").t,r=(0,n.useQueryClient)(),t=(0,n.useMutation)(o.Z.products.createFeedback,{onSuccess:function(t){f.Am.success(e("text-feedback-submitted")),r.refetchQueries(a.P.PRODUCTS_QUESTIONS),r.refetchQueries(a.P.PRODUCTS_REVIEWS)}});return{createFeedback:t.mutate,isLoading:t.isLoading}}function x(){var e=(0,l.$G)("common").t,r=(0,d.SO)().closeModal,t=(0,n.useMutation)(o.Z.products.createAbuseReport,{onSuccess:function(){f.Am.success(e("text-abuse-report-submitted"))},onError:function(r){var t=(null!==r&&void 0!==r?r:{}).response.data;f.Am.error(e(null===t||void 0===t?void 0:t.message))},onSettled:function(){r()}});return{createAbuseReport:t.mutate,isLoading:t.isLoading}}function j(){var e=(0,l.$G)("common").t,r=(0,d.SO)().closeModal,t=(0,n.useQueryClient)(),i=(0,n.useMutation)(o.Z.products.createQuestion,{onSuccess:function(){f.Am.success(e("text-question-submitted"))},onError:function(r){var t=(null!==r&&void 0!==r?r:{}).response.data;f.Am.error(e(null===t||void 0===t?void 0:t.message))},onSettled:function(){t.refetchQueries(a.P.PRODUCTS_QUESTIONS),r()}});return{createQuestion:i.mutate,isLoading:i.isLoading}}}}]);