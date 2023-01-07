"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6362],{76463:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(85893);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}))},l=r(96457),i=r(94184),c=r.n(i),u=r(20868),s=function(e){var t=e.checked,r=e.address,o=(e.userId,e.onEdit),i=(e.onDelete,(0,u.$G)().t);return(0,n.jsxs)("div",{className:c()("group relative cursor-pointer rounded border p-4 hover:border-accent",{"border-accent shadow-sm":t,"border-transparent bg-gray-100":!t}),children:[(0,n.jsx)("p",{className:"mb-3 text-sm font-semibold capitalize text-heading",children:null===r||void 0===r?void 0:r.title}),(0,n.jsx)("p",{className:"text-sm text-sub-heading",children:(0,l.T)(null===r||void 0===r?void 0:r.address)}),(0,n.jsx)("div",{className:"absolute top-4 flex space-x-2 opacity-0 group-hover:opacity-100 ltr:right-4 rtl:left-4 rtl:space-x-reverse",children:o&&(0,n.jsxs)("button",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-accent text-light",onClick:o,children:[(0,n.jsx)("span",{className:"sr-only",children:i("text-edit")}),(0,n.jsx)(a,{className:"h-3 w-3"})]})})]})}},98049:function(e,t,r){r.d(t,{V:function(){return l}});var n=r(85893),o=r(13713),a=r(20868),l=function(e){var t=e.onAdd,r=e.count,l=e.label,i=e.update,c=(0,a.$G)("common").t;return(0,n.jsxs)("div",{className:"flex items-center justify-between mb-5 md:mb-8",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse",children:[r&&(0,n.jsx)("span",{className:"rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light",children:r}),(0,n.jsx)("p",{className:"text-lg lg:text-xl text-heading capitalize",children:l})]}),t&&(0,n.jsxs)("button",{className:"flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover",onClick:t,children:[(0,n.jsx)(o.p,{className:"w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"}),c(i?"text-update":"text-add")," "]})]})}},36362:function(e,t,r){r.r(t),r.d(t,{GuestAddressGrid:function(){return p}});var n=r(85893),o=r(96720),a=r(40486),l=r(70024),i=r(76463),c=r(98049),u=r(20868);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.addresses,r=e.label,s=e.atom,p=e.className,f=e.count,m=e.type,b=(0,u.$G)("common").t,v=d((0,l.KO)(s),2),g=v[0],h=v[1],y=(0,o.SO)().openModal;return(0,n.jsxs)("div",{className:p,children:[(0,n.jsx)(c.V,{onAdd:function(){y("ADD_OR_UPDATE_GUEST_ADDRESS",{type:m,atom:s})},count:f,label:r}),t&&(null===t||void 0===t?void 0:t.length)?(0,n.jsxs)(a.E,{as:"span",value:g,onChange:h,children:[(0,n.jsx)(a.E.Label,{className:"sr-only",children:r}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(a.E.Option,{value:e,children:function(t){var r=t.checked;return(0,n.jsx)(i.Z,{checked:r,address:e,onEdit:function(){return function(e){y("ADD_OR_UPDATE_GUEST_ADDRESS",{type:m,atom:s,address:e})}(e)}})}},null===e||void 0===e?void 0:e.id)}))})]}):(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:(0,n.jsx)("span",{className:"relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base",children:b("text-no-address")})})]})};t.default=p},13713:function(e,t,r){r.d(t,{p:function(){return a}});var n=r(85893);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}))}},96457:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){if(e){var t,r=["street_address","state","city","zip","country"].reduce((function(t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},t,o({},r,e[r]))}),{}),n=(t=r,Object.fromEntries(Object.entries(t).filter((function(e){var t=a(e,2),r=(t[0],t[1]);return Boolean(r)}))));return Object.values(n).join(", ")}}r.d(t,{T:function(){return l}})},40486:function(e,t,r){r.d(t,{E:function(){return P}});var n=r(67294),o=r(12351),a=r(19946),l=r(32984),i=r(16723),c=r(61363),u=r(84575);var s=r(23784),d=r(73781);let p=(0,n.createContext)(null);function f(){let e=(0,n.useContext)(p);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return e}function m(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let r=(0,d.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let r=t.slice(),n=r.indexOf(e);return-1!==n&&r.splice(n,1),r}))))),o=(0,n.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n.createElement(p.Provider,{value:o},e.children)}),[t])]}let b=(0,o.yV)((function(e,t){let{passive:r=!1,...n}=e,l=f(),c=`headlessui-label-${(0,a.M)()}`,u=(0,s.T)(t);(0,i.e)((()=>l.register(c)),[c,l.register]);let d={ref:u,...l.props,id:c};return r&&("onClick"in d&&delete d.onClick,"onClick"in n&&delete n.onClick),(0,o.sY)({ourProps:d,theirProps:n,slot:l.slot||{},defaultTag:"label",name:l.name||"Label"})}));var v,g=r(39516),h=r(31591),y=r(46045),x=r(18689),j=r(15466),O=((v=O||{})[v.RegisterOption=0]="RegisterOption",v[v.UnregisterOption=1]="UnregisterOption",v);let E={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,u.z2)(r,(e=>e.element.current))}},1(e,t){let r=e.options.slice(),n=e.options.findIndex((e=>e.id===t.id));return-1===n?e:(r.splice(n,1),{...e,options:r})}},w=(0,n.createContext)(null);function R(e){let t=(0,n.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}function k(e,t){return(0,l.E)(t.type,E,e,t)}w.displayName="RadioGroupContext";let A=(0,o.yV)((function(e,t){let{value:r,name:l,onChange:i,disabled:p=!1,...f}=e,b=(0,d.z)(((e,t)=>e===t)),[v,O]=(0,n.useReducer)(k,{options:[]}),E=v.options,[R,A]=m(),[S,C]=(0,g.f)(),P=`headlessui-radiogroup-${(0,a.M)()}`,T=(0,n.useRef)(null),N=(0,s.T)(T,t),D=(0,n.useMemo)((()=>E.find((e=>!e.propsRef.current.disabled))),[E]),_=(0,n.useMemo)((()=>E.some((e=>b(e.propsRef.current.value,r)))),[E,r]),G=(0,d.z)((e=>{var t;if(p||b(e,r))return!1;let n=null==(t=E.find((t=>b(t.propsRef.current.value,e))))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(i(e),!0)}));(0,h.B)({container:T.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let M=(0,d.z)((e=>{let t=T.current;if(!t)return;let r=(0,j.r)(t),n=E.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case c.R.Enter:(0,x.g)(e.currentTarget);break;case c.R.ArrowLeft:case c.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(n,u.TO.Previous|u.TO.WrapAround)===u.fE.Success){let e=E.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&G(e.propsRef.current.value)}break;case c.R.ArrowRight:case c.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(n,u.TO.Next|u.TO.WrapAround)===u.fE.Success){let e=E.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&G(e.propsRef.current.value)}break;case c.R.Space:{e.preventDefault(),e.stopPropagation();let t=E.find((e=>e.element.current===(null==r?void 0:r.activeElement)));t&&G(t.propsRef.current.value)}}})),z=(0,d.z)((e=>(O({type:0,...e}),()=>O({type:1,id:e.id})))),F=(0,n.useMemo)((()=>({registerOption:z,firstOption:D,containsCheckedOption:_,change:G,disabled:p,value:r,compare:b})),[z,D,_,G,p,r,b]),I={ref:N,id:P,role:"radiogroup","aria-labelledby":R,"aria-describedby":S,onKeyDown:M};return n.createElement(C,{name:"RadioGroup.Description"},n.createElement(A,{name:"RadioGroup.Label"},n.createElement(w.Provider,{value:F},null!=l&&null!=r&&(0,x.t)({[l]:r}).map((([e,t])=>n.createElement(y._,{features:y.A.Hidden,...(0,o.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),(0,o.sY)({ourProps:I,theirProps:f,defaultTag:"div",name:"RadioGroup"}))))}));var S=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(S||{});let C=(0,o.yV)((function(e,t){let r=(0,n.useRef)(null),l=(0,s.T)(r,t),c=`headlessui-radiogroup-option-${(0,a.M)()}`,[u,p]=m(),[f,b]=(0,g.f)(),{addFlag:v,removeFlag:h,hasFlag:y}=function(e=0){let[t,r]=(0,n.useState)(e);return{addFlag:(0,n.useCallback)((e=>r((t=>t|e))),[t]),hasFlag:(0,n.useCallback)((e=>Boolean(t&e)),[t]),removeFlag:(0,n.useCallback)((e=>r((t=>t&~e))),[r]),toggleFlag:(0,n.useCallback)((e=>r((t=>t^e))),[r])}}(1),{value:x,disabled:j=!1,...O}=e,E=(0,n.useRef)({value:x,disabled:j});(0,i.e)((()=>{E.current.value=x}),[x,E]),(0,i.e)((()=>{E.current.disabled=j}),[j,E]);let{registerOption:w,disabled:k,change:A,firstOption:S,containsCheckedOption:C,value:P,compare:T}=R("RadioGroup.Option");(0,i.e)((()=>w({id:c,element:r,propsRef:E})),[c,w,r,e]);let N=(0,d.z)((()=>{var e;!A(x)||(v(2),null==(e=r.current)||e.focus())})),D=(0,d.z)((()=>v(2))),_=(0,d.z)((()=>h(2))),G=(null==S?void 0:S.id)===c,M=k||j,z=T(P,x),F={ref:l,id:c,role:"radio","aria-checked":z?"true":"false","aria-labelledby":u,"aria-describedby":f,"aria-disabled":!!M||void 0,tabIndex:M?-1:z||!C&&G?0:-1,onClick:M?void 0:N,onFocus:M?void 0:D,onBlur:M?void 0:_},I=(0,n.useMemo)((()=>({checked:z,disabled:M,active:y(2)})),[z,M,y]);return n.createElement(b,{name:"RadioGroup.Description"},n.createElement(p,{name:"RadioGroup.Label"},(0,o.sY)({ourProps:F,theirProps:O,slot:I,defaultTag:"div",name:"RadioGroup.Option"})))})),P=Object.assign(A,{Option:C,Label:b,Description:g.d})}}]);