(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9EFL":function(e,t,r){"use strict";e.exports=r("R1wR")},MyWQ:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI"),o=r.n(n),u=r("Wbzz"),a=(r("636D"),r("qKvR"));var i=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={isToggleOn:!0},r.handleClick=r.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.handleClick=function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},o.render=function(){var e=this.state.isToggleOn?" ↓ ":" ↑ ";return Object(a.b)("div",{className:"modelNavigatorWrapper"},Object(a.b)("div",{className:"modelNavigator "+(this.state.isToggleOn?"":"none")},Object(a.b)(u.Link,{to:"/"},"Прототип статьи «История компании»"),Object(a.b)(u.Link,{to:"/grid/"},"Модель сетки респонсив"),Object(a.b)(u.Link,{to:"/grid-fluid/"},"Модель сетки флюид"),Object(a.b)(u.Link,{to:"/header/"},"Прототип шапки"),Object(a.b)(u.Link,{to:"/header-2/"},"Прототип шапки 2")),Object(a.b)("div",{className:"action",onClick:this.handleClick},e))},n}(o.a.Component)},QQWN:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r("9EFL"),o=r.n(n),u=r("qKvR");r("sp8E");var a=function(e){var t,r;function a(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={maketParam:""},t.updateMargins=function(){var e=document.querySelector("#row"),r=window.getComputedStyle(e),n=document.querySelector("#row > div"),o=window.getComputedStyle(n);t.setState({maketParam:"w:"+(parseInt(r.width,10)+2*parseInt(r.marginRight,10))+"    \n        m:"+parseInt(r.marginLeft,10)+"     g:"+parseInt(o.marginRight,10)+"  c:"+parseInt(o.width,10)})},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidMount=function(){this.props.isTrafaret&&(this.updateMargins(),window.addEventListener("resize",this.updateMargins))},i.componentWillUnmount=function(){this.props.isTrafaret&&window.removeEventListener("resize",this.updateMargins)},i.render=function(){var e=this.props,t=e.isTrafaret,r=void 0!==t&&t,a=e.children,i=e.h;return Object(u.b)("div",{className:"gridRowWrapper"},this.props.isTrafaret&&Object(u.b)("div",{className:"gridInfo"},this.state.maketParam),Object(u.b)("div",{id:"row",className:"gridRow"+(this.props.fluid?" fluid":"")},n.Children.map(a,(function(e,t){return null!==e?o.a.cloneElement(e,{isTrafaret:r,h:i}):null}))))},a}(o.a.Component),i=function(e){var t=e.s,r=e.w,n=e.isTrafaret,o=e.h,a=e.children,i=Object(u.a)("flex-grow:",t||0,";flex-shrink:0;flex-basis:",r||0,";height:",o||(n&&!o?"20px":"auto"),";");return n?Object(u.b)("div",{css:i},Object(u.b)("div",{className:"coloredBg gridCol"},a)):Object(u.b)("div",{css:i},Object(u.b)("div",{className:"gridCol"},a))}},R1wR:function(e,t,r){"use strict";r("2Spj"),r("a1Th"),r("h7Nl"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F"),r("pIFo"),r("rE2o"),r("ioFf");var n=r("MgzW"),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||m}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var S=w.prototype=new j;S.constructor=w,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},_={current:null},R=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)R.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:a,ref:i,props:o,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,P=[];function N(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case a:c=!0}}if(c)return n(o,t,""===r?"."+L(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=r+L(i=t[l],l);c+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)c+=e(i=i.value,s=r+L(i,l++),n,o);else if("object"===i)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),I(e,M,t=N(t,u,n,o)),T(t)}function W(){var e=k.current;if(null===e)throw Error(v(321));return e}var A={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,q,t=N(null,null,t,r)),T(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return W().useCallback(e,t)},useContext:function(e,t){return W().useContext(e,t)},useEffect:function(e,t){return W().useEffect(e,t)},useImperativeHandle:function(e,t,r){return W().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return W().useLayoutEffect(e,t)},useMemo:function(e,t){return W().useMemo(e,t)},useReducer:function(e,t,r){return W().useReducer(e,t,r)},useRef:function(e){return W().useRef(e)},useState:function(e){return W().useState(e)},Fragment:i,Profiler:l,StrictMode:c,Suspense:b,createElement:E,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)R.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:i,props:o,_owner:c}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n}},U={default:A},z=U&&A||U;e.exports=z.default||z},kURT:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),u=r("MyWQ"),a=r("QQWN"),i=r("qKvR");t.default=function(e){return Object(i.b)(o.a.Fragment,null,Object(i.b)(u.a,null),Object(i.b)("div",{className:"web"},Object(i.b)(a.b,{isTrafaret:!0,h:"100vh"},Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}))),Object(i.b)("div",{className:"mob"},Object(i.b)(a.b,{isTrafaret:!0,h:"100vh"},Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}),Object(i.b)(a.a,{s:1}))))}}}]);
//# sourceMappingURL=component---src-pages-grid-js-830b1d64b3512c17aa35.js.map