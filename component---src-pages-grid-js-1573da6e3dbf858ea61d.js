(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9EFL":function(e,t,r){"use strict";e.exports=r("R1wR")},MyWQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI"),o=r.n(n),u=r("Wbzz"),i=(r("636D"),r("qKvR"));var a=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={isToggleOn:!0},r.handleClick=r.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.handleClick=function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},o.render=function(){var e=this.state.isToggleOn?" ↑ ":" ↓ ";return Object(i.b)("div",{className:"modelNavigatorWrapper"},Object(i.b)("div",{className:"action",onClick:this.handleClick},e),Object(i.b)("div",{className:"modelNavigator "+(this.state.isToggleOn?"":"none")},Object(i.b)(u.Link,{to:"/"},"Прототип статьи «История компании»"),Object(i.b)(u.Link,{to:"/grid/"},"Модель сетки респонсив"),Object(i.b)(u.Link,{to:"/grid-fluid/"},"Модель сетки флюид"),Object(i.b)(u.Link,{to:"/header/"},"Прототип шапки")))},n}(o.a.Component)},QQWN:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r("9EFL"),o=r.n(n),u=r("qKvR");r("sp8E");var i=function(e){var t,r;function i(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={maketParam:""},t.updateMargins=function(){var e=document.querySelector("#row"),r=window.getComputedStyle(e),n=document.querySelector("#row > div"),o=window.getComputedStyle(n);t.setState({maketParam:"w:"+(parseInt(r.width,10)+2*parseInt(r.marginRight,10))+"    \n        m:"+parseInt(r.marginLeft,10)+"     g:"+parseInt(o.marginRight,10)+"  c:"+parseInt(o.width,10)})},t}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.componentDidMount=function(){this.props.isTrafaret&&(this.updateMargins(),window.addEventListener("resize",this.updateMargins))},a.componentWillUnmount=function(){this.props.isTrafaret&&window.removeEventListener("resize",this.updateMargins)},a.render=function(){var e=this.props,t=e.isTrafaret,r=void 0!==t&&t,i=e.children,a=e.h;return Object(u.b)("div",{className:"gridRowWrapper"},this.props.isTrafaret&&Object(u.b)("div",{style:{marginBottom:50,position:"absolute",top:0,right:10,zIndex:100},className:"gridInfo"},this.state.maketParam),Object(u.b)("div",{id:"row",className:"gridRow"+(this.props.fluid?" fluid":"")},n.Children.map(i,(function(e,t){return null!==e?o.a.cloneElement(e,{isTrafaret:r,h:a}):null}))))},i}(o.a.Component),a=function(e){var t=e.s,r=e.w,n=e.isTrafaret,o=e.h,i=e.children,a=Object(u.a)("flex-grow:",t||0,";flex-shrink:0;flex-basis:",r||0,";height:",o||(n&&!o?"20px":"auto"),";");return n?Object(u.b)("div",{css:a},Object(u.b)("div",{className:"coloredBg gridCol"},i)):Object(u.b)("div",{css:a},Object(u.b)("div",{className:"gridCol"},i))}},R1wR:function(e,t,r){"use strict";r("2Spj"),r("a1Th"),r("h7Nl"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F"),r("pIFo"),r("rE2o"),r("ioFf");var n=r("MgzW"),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},_={current:null},R=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,P=[];function N(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return n(o,t,""===r?"."+L(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+L(a=t[l],l);c+=e(a,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,s=r+L(a,l++),n,o);else if("object"===a)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),I(e,M,t=N(t,u,n,o)),T(t)}function W(){var e=k.current;if(null===e)throw Error(v(321));return e}var A={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,q,t=N(null,null,t,r)),T(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return W().useCallback(e,t)},useContext:function(e,t){return W().useContext(e,t)},useEffect:function(e,t){return W().useEffect(e,t)},useImperativeHandle:function(e,t,r){return W().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return W().useLayoutEffect(e,t)},useMemo:function(e,t){return W().useMemo(e,t)},useReducer:function(e,t,r){return W().useReducer(e,t,r)},useRef:function(e){return W().useRef(e)},useState:function(e){return W().useState(e)},Fragment:a,Profiler:l,StrictMode:c,Suspense:b,createElement:E,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)R.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},U={default:A},z=U&&A||U;e.exports=z.default||z},kURT:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),u=r("MyWQ"),i=r("QQWN"),a=r("qKvR");t.default=function(e){return Object(a.b)(o.a.Fragment,null,Object(a.b)(u.a,null),Object(a.b)("div",{className:"web"},Object(a.b)(i.b,{isTrafaret:!0,h:"100vh"},Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}))),Object(a.b)("div",{className:"mob"},Object(a.b)(i.b,{isTrafaret:!0,h:"100vh"},Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}),Object(a.b)(i.a,{s:1}))))}}}]);
//# sourceMappingURL=component---src-pages-grid-js-1573da6e3dbf858ea61d.js.map