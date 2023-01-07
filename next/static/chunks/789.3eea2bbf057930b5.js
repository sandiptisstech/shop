"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{455:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(85893),i=r(13123),a=r(98055),l=r(58886),o=r(11163),c=r(94184),s=r.n(c),u=r(48602),d=r(64225);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=function(e){var t=e.item,r=(0,o.useRouter)(),i=r.pathname,a=r.query,l=a.category;return(0,n.jsxs)("div",{className:s()("text-center rounded bg-light py-4 flex flex-col items-center justify-start relative overflow-hidden cursor-pointer border-2",l===(null===t||void 0===t?void 0:t.slug)?"border-gray-800":"border-border-100 xl:border-transparent"),role:"button",onClick:function(){return function(e){if(l!==e)r.push({pathname:i,query:m({},a,{category:e})},void 0,{scroll:!1});else{a.category;var t=p(a,["category"]);r.push({pathname:i,query:m({},t)},void 0,{scroll:!1})}}(null===t||void 0===t?void 0:t.slug)},children:[(0,n.jsx)("div",{className:"w-full h-20 flex items-center justify-center",children:(0,n.jsx)("span",{className:"w-10 h-10 inline-block",children:(0,u.q)({iconList:d,iconName:null===t||void 0===t?void 0:t.icon,className:"w-10 h-10"})})}),(0,n.jsx)("span",{className:"text-sm font-semibold text-heading text-center px-2.5 block",children:null===t||void 0===t?void 0:t.name})]})};var y=function(e){var t=e.items;return(0,n.jsx)(n.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(g,{item:e},"".concat(e.name).concat(e.slug))}))})},h=function(e){var t=e.notFound,r=e.categories,o=e.loading,c=e.className;return o?(0,n.jsx)("div",{className:"hidden xl:block",children:(0,n.jsx)("div",{className:"mt-8 w-72 px-2",children:(0,n.jsx)(l.Z,{})})}):(0,n.jsx)("aside",{className:"hidden h-full w-full bg-light lg:sticky lg:top-22 lg:w-[380px] lg:bg-gray-100 xl:block ".concat(c),children:(0,n.jsx)(i.Z,{style:{maxHeight:"calc(100vh - 88px)"},children:(0,n.jsx)("div",{className:"p-5",children:t?(0,n.jsx)("div",{className:"min-h-full px-4 pt-6 pb-8 lg:p-8",children:(0,n.jsx)(a.Z,{text:"text-no-category",className:"h-96"})}):(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,n.jsx)(y,{items:r,className:"py-8"})})})})})}},24561:function(e,t,r){var n=r(67294),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var a=function(e){var t=e.animate,r=e.animateBegin,a=e.backgroundColor,l=e.backgroundOpacity,o=e.baseUrl,c=e.children,s=e.foregroundColor,u=e.foregroundOpacity,d=e.gradientRatio,f=e.gradientDirection,m=e.uniqueKey,p=e.interval,g=e.rtl,y=e.speed,h=e.style,b=e.title,v=e.beforeMask,x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),O=m||Math.random().toString(36).substring(6),j=O+"-diff",E=O+"-animated-diff",w=O+"-aria",k=g?{transform:"scaleX(-1)"}:null,N="0; "+p+"; 1",C=y+"s",P="top-bottom"===f?"rotate(90)":void 0;return(0,n.createElement)("svg",i({"aria-labelledby":w,role:"img",style:i(i({},h),k)},x),b?(0,n.createElement)("title",{id:w},b):null,v&&(0,n.isValidElement)(v)?v:null,(0,n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+j+")",style:{fill:"url("+o+"#"+E+")"}}),(0,n.createElement)("defs",null,(0,n.createElement)("clipPath",{id:j},c),(0,n.createElement)("linearGradient",{id:E,gradientTransform:P},(0,n.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:u},t&&(0,n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:N,dur:C,repeatCount:"indefinite",begin:r})),(0,n.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:l},t&&(0,n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:N,dur:C,repeatCount:"indefinite",begin:r})))))};a.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var l=function(e){return e.children?(0,n.createElement)(a,i({},e)):(0,n.createElement)(o,i({},e))},o=function(e){return(0,n.createElement)(l,i({viewBox:"0 0 476 124"},e),(0,n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=l}}]);