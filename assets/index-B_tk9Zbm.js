import{n as e,t}from"./rolldown-runtime-A1xW-pDA.js";import{C as r,D as n,E as o,S as a,T as i,_ as s,a as c,b as l,c as d,d as u,f as p,g as m,h as f,i as h,l as g,m as x,n as v,o as b,p as y,r as w,s as j,t as S,u as k,v as C,w as P,x as z,y as A}from"./vendor-DgDXtVaV.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var I=o(),E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)};function R(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var $=t({"node_modules/shallowequal/index.js":(e,t)=>{t.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var d=e[l],u=t[l];if(!1===(o=r?r.call(n,d,u,l):void 0)||void 0===o&&d!==u)return!1}return!0}}}),O="-ms-",_="-moz-",D="-webkit-",N="comm",T="rule",F="decl",q="@keyframes",W=Math.abs,G=String.fromCharCode,M=Object.assign;function L(e){return e.trim()}function B(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,r){return e.replace(t,r)}function H(e,t,r){return e.indexOf(t,r)}function U(e,t){return 0|e.charCodeAt(t)}function J(e,t,r){return e.slice(t,r)}function K(e){return e.length}function Q(e){return e.length}function V(e,t){return t.push(e),e}function X(e,t){return e.filter(function(e){return!B(e,t)})}var Z=1,ee=1,te=0,re=0,ne=0,oe="";function ae(e,t,r,n,o,a,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:Z,column:ee,length:i,return:"",siblings:s}}function ie(e,t){return M(ae("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function se(e){for(;e.root;)e=ie(e.root,{children:[e]});V(e,e.siblings)}function ce(){return ne=re>0?U(oe,--re):0,ee--,10===ne&&(ee=1,Z--),ne}function le(){return ne=re<te?U(oe,re++):0,ee++,10===ne&&(ee=1,Z++),ne}function de(){return U(oe,re)}function ue(){return re}function pe(e,t){return J(oe,e,t)}function me(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return L(pe(re-1,xe(91===e?e+2:40===e?e+1:e)))}function he(e){for(;(ne=de())&&ne<33;)le();return me(e)>2||me(ne)>3?"":" "}function ge(e,t){for(;--t&&le()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return pe(e,ue()+(t<6&&32==de()&&32==le()))}function xe(e){for(;le();)switch(ne){case e:return re;case 34:case 39:34!==e&&39!==e&&xe(ne);break;case 40:41===e&&xe(e);break;case 92:le()}return re}function ve(e,t){for(;le()&&e+ne!==57&&(e+ne!==84||47!==de()););return"/*"+pe(t,re-1)+"*"+G(47===e?e:le())}function be(e){for(;!me(de());)le();return pe(e,re)}function ye(e){return function(e){return oe="",e}(we("",null,null,null,[""],e=function(e){return Z=ee=1,te=K(oe=e),re=0,[]}(e),0,[0],e))}function we(e,t,r,n,o,a,i,s,c){for(var l=0,d=0,u=i,p=0,m=0,f=0,h=1,g=1,x=1,v=0,b="",y=o,w=a,j=n,S=b;g;)switch(f=v,v=le()){case 40:if(108!=f&&58==U(S,u-1)){-1!=H(S+=Y(fe(v),"&","&\f"),"&\f",W(l?s[l-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=fe(v);break;case 9:case 10:case 13:case 32:S+=he(f);break;case 92:S+=ge(ue()-1,7);continue;case 47:switch(de()){case 42:case 47:V(Se(ve(le(),ue()),t,r,c),c);break;default:S+="/"}break;case 123*h:s[l++]=K(S)*x;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(S=Y(S,/\f/g,"")),m>0&&K(S)-u&&V(m>32?ke(S+";",n,r,u-1,c):ke(Y(S," ","")+";",n,r,u-2,c),c);break;case 59:S+=";";default:if(V(j=je(S,t,r,l,d,o,s,b,y=[],w=[],u,a),a),123===v)if(0===d)we(S,t,j,j,y,a,u,s,w);else switch(99===p&&110===U(S,3)?100:p){case 100:case 108:case 109:case 115:we(e,j,j,n&&V(je(e,j,j,0,0,o,s,b,o,y=[],u,w),w),o,w,u,s,n?y:w);break;default:we(S,j,j,j,[""],w,0,s,w)}}l=d=m=0,h=x=1,b=S="",u=i;break;case 58:u=1+K(S),m=f;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==ce())continue;switch(S+=G(v),v*h){case 38:x=d>0?1:(S+="\f",-1);break;case 44:s[l++]=(K(S)-1)*x,x=1;break;case 64:45===de()&&(S+=fe(le())),p=de(),d=u=K(b=S+=be(ue())),v++;break;case 45:45===f&&2==K(S)&&(h=0)}}return a}function je(e,t,r,n,o,a,i,s,c,l,d,u){for(var p=o-1,m=0===o?a:[""],f=Q(m),h=0,g=0,x=0;h<n;++h)for(var v=0,b=J(e,p+1,p=W(g=i[h])),y=e;v<f;++v)(y=L(g>0?m[v]+" "+b:Y(b,/&\f/g,m[v])))&&(c[x++]=y);return ae(e,t,r,0===o?T:s,c,l,d,u)}function Se(e,t,r,n){return ae(e,t,r,N,G(ne),J(e,2,-2),0,n)}function ke(e,t,r,n,o){return ae(e,t,r,F,J(e,0,n),J(e,n+1,-1),n,o)}function Ce(e,t,r){switch(function(e,t){return 45^U(e,0)?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return _+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+_+e+O+e+e;case 5936:switch(U(e,t+11)){case 114:return D+e+O+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+O+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+O+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+O+e+e;case 6165:return D+e+O+"flex-"+e+e;case 5187:return D+e+Y(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return D+e+O+"flex-item-"+Y(e,/flex-|-self/g,"")+(B(e,/flex-|baseline/)?"":O+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return D+e+O+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+O+Y(e,"shrink","negative")+e;case 5292:return D+e+O+Y(e,"basis","preferred-size")+e;case 6060:return D+"box-"+Y(e,"-grow","")+D+e+O+Y(e,"grow","positive")+e;case 4554:return D+Y(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!B(e,/flex-|baseline/))return O+"grid-column-align"+J(e,t)+e;break;case 2592:case 3360:return O+Y(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,B(e.props,/grid-\w+-end/)})?~H(e+(r=r[t].value),"span",0)?e:O+Y(e,"-start","")+e+O+"grid-row-span:"+(~H(r,"span",0)?B(r,/\d+/):+B(r,/\d+/)-+B(e,/\d+/))+";":O+Y(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return B(e.props,/grid-\w+-start/)})?e:O+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(K(e)-1-t>6)switch(U(e,t+1)){case 109:if(45!==U(e,t+4))break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+_+(108==U(e,t+3)?"$3":"$2-$3"))+e;case 115:return~H(e,"stretch",0)?Ce(Y(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,o,a,i,s){return O+r+":"+n+s+(o?O+r+"-span:"+(a?i:+i-+n)+s:"")+e});case 4949:if(121===U(e,t+6))return Y(e,":",":"+D)+e;break;case 6444:switch(U(e,45===U(e,14)?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(45===U(e,14)?"inline-":"")+"box$3$1"+D+"$2$3$1"+O+"$2box$3")+e;case 100:return Y(e,":",":"+O)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Pe(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function ze(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case F:return e.return=e.return||e.value;case N:return"";case q:return e.return=e.value+"{"+Pe(e.children,n)+"}";case T:if(!K(e.value=e.props.join(",")))return""}return K(r=Pe(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ae(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case F:return void(e.return=Ce(e.value,e.length,r));case q:return Pe([ie(e,{value:Y(e.value,"@","@"+D)})],n);case T:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(B(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":se(ie(e,{props:[Y(t,/:(read-\w+)/,":-moz-$1")]})),se(ie(e,{props:[t]})),M(e,{props:X(r,n)});break;case"::placeholder":se(ie(e,{props:[Y(t,/:(plac\w+)/,":"+D+"input-$1")]})),se(ie(e,{props:[Y(t,/:(plac\w+)/,":-moz-$1")]})),se(ie(e,{props:[Y(t,/:(plac\w+)/,O+"input-$1")]})),se(ie(e,{props:[t]})),M(e,{props:X(r,n)})}return""})}}var Ie=e($()),Ee=e(n()),Re={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Oe="active",_e="data-styled-version",De="6.1.19",Ne="/*!sc*/\n",Te="undefined"!=typeof window&&"undefined"!=typeof document,Fe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),qe={},We=Object.freeze([]),Ge=Object.freeze({});function Me(e,t,r){return void 0===r&&(r=Ge),e.theme!==r.theme&&e.theme||t||r.theme}var Le=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ye=/(^-|-$)/g;function He(e){return e.replace(Be,"-").replace(Ye,"")}var Ue=/(a)(d)/gi,Je=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ke(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Je(t%52)+r;return(Je(t%52)+r).replace(Ue,"$1-$2")}var Qe,Ve=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Xe=function(e){return Ve(5381,e)};function Ze(e){return Ke(Xe(e)>>>0)}function et(e){return"string"==typeof e&&!0}var tt="function"==typeof Symbol&&Symbol.for,rt=tt?Symbol.for("react.memo"):60115,nt=tt?Symbol.for("react.forward_ref"):60112,ot={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},at={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},it={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},st=((Qe={})[nt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qe[rt]=it,Qe);function ct(e){return("type"in(t=e)&&t.type.$$typeof)===rt?it:"$$typeof"in e?st[e.$$typeof]:ot;var t}var lt=Object.defineProperty,dt=Object.getOwnPropertyNames,ut=Object.getOwnPropertySymbols,pt=Object.getOwnPropertyDescriptor,mt=Object.getPrototypeOf,ft=Object.prototype;function ht(e,t,r){if("string"!=typeof t){if(ft){var n=mt(t);n&&n!==ft&&ht(e,n,r)}var o=dt(t);ut&&(o=o.concat(ut(t)));for(var a=ct(e),i=ct(t),s=0;s<o.length;++s){var c=o[s];if(!(c in at||r&&r[c]||i&&c in i||a&&c in a)){var l=pt(t,c);try{lt(e,c,l)}catch(d){}}}}return e}function gt(e){return"function"==typeof e}function xt(e){return"object"==typeof e&&"styledComponentId"in e}function vt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function yt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wt(e,t,r){if(void 0===r&&(r=!1),!r&&!yt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=wt(e[n],t[n]);else if(yt(t))for(var n in t)e[n]=wt(e[n],t[n]);return e}function jt(e,t){Object.defineProperty(e,"toString",{value:t})}function St(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw St(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(Ne);return t},e}(),Ct=new Map,Pt=new Map,zt=1,At=function(e){if(Ct.has(e))return Ct.get(e);for(;Pt.has(zt);)zt++;var t=zt++;return Ct.set(e,t),Pt.set(t,e),t},It=function(e,t){zt=t+1,Ct.set(e,t),Pt.set(t,e)},Et="style[".concat($e,"][").concat(_e,'="').concat(De,'"]'),Rt=new RegExp("^".concat($e,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$t=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},Ot=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(Ne),o=[],a=0,i=n.length;a<i;a++){var s=n[a].trim();if(s){var c=s.match(Rt);if(c){var l=0|parseInt(c[1],10),d=c[2];0!==l&&(It(d,l),$t(e,d,c[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}},_t=function(e){for(var t=document.querySelectorAll(Et),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute($e)!==Oe&&(Ot(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Dt(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Nt=function(e){var t,r,n=document.head,o=e||n,a=document.createElement("style"),i=(t=o,(r=Array.from(t.querySelectorAll("style[".concat($e,"]"))))[r.length-1]),s=void 0!==i?i.nextSibling:null;a.setAttribute($e,Oe),a.setAttribute(_e,De);var c=Dt();return c&&a.setAttribute("nonce",c),o.insertBefore(a,s),a},Tt=function(){function e(e){this.element=Nt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw St(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ft=function(){function e(e){this.element=Nt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),qt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wt=Te,Gt={isServer:!Te,useCSSOMInjection:!Fe},Mt=function(){function e(e,t,r){void 0===e&&(e=Ge),void 0===t&&(t={});var n=this;this.options=E(E({},Gt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Te&&Wt&&(Wt=!1,_t(this)),jt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o,a=(o=r,Pt.get(o));if(void 0===a)return"continue";var i=e.names.get(a),s=t.getGroup(r);if(void 0===i||!i.size||0===s.length)return"continue";var c="".concat($e,".g").concat(r,'[id="').concat(a,'"]'),l="";void 0!==i&&i.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(s).concat(c,'{content:"').concat(l,'"}').concat(Ne)},a=0;a<r;a++)o(a);return n}(n)})}return e.registerId=function(e){return At(e)},e.prototype.rehydrate=function(){!this.server&&Te&&_t(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(E(E({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new qt(r):t?new Tt(r):new Ft(r),new kt(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(At(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(At(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(At(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lt=/&/g,Bt=/^\s*\/\/.*$/gm;function Yt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yt(e.children,t)),e})}function Ht(e){var t,r,n,o=void 0===e?Ge:e,a=o.options,i=void 0===a?Ge:a,s=o.plugins,c=void 0===s?We:s,l=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=c.slice();d.push(function(e){"rule"===e.type&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Lt,r).replace(n,l))}),i.prefix&&d.push(Ae),d.push(ze);var u=function(e,o,a,s){void 0===o&&(o=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(Bt,""),l=ye(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);i.namespace&&(l=Yt(l,i.namespace));var u,p,m,f=[];return Pe(l,(u=d.concat((m=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&m(e)})),p=Q(u),function(e,t,r,n){for(var o="",a=0;a<p;a++)o+=u[a](e,t,r,n)||"";return o})),f};return u.hash=c.length?c.reduce(function(e,t){return t.name||St(15),Ve(e,t.name)},5381).toString():"",u}var Ut=new Mt,Jt=Ht(),Kt=Ee.createContext({shouldForwardProp:void 0,styleSheet:Ut,stylis:Jt}),Qt=(Kt.Consumer,Ee.createContext(void 0));function Vt(){return(0,Ee.useContext)(Kt)}function Xt(e){var t=(0,Ee.useState)(e.stylisPlugins),r=t[0],n=t[1],o=Vt().styleSheet,a=(0,Ee.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),i=(0,Ee.useMemo)(function(){return Ht({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,Ee.useEffect)(function(){(0,Ie.default)(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,Ee.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:i}},[e.shouldForwardProp,a,i]);return Ee.createElement(Kt.Provider,{value:s},Ee.createElement(Qt.Provider,{value:i},e.children))}var Zt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Jt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jt(this,function(){throw St(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Jt),this.name+e.hash},e}(),er=function(e){return e>="A"&&e<="Z"};function tr(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;er(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var rr=function(e){return null==e||!1===e||""===e},nr=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!rr(a)&&(Array.isArray(a)&&a.isCss||gt(a)?n.push("".concat(tr(o),":"),a,";"):yt(a)?n.push.apply(n,R(R(["".concat(o," {")],nr(a),!1),["}"],!1)):n.push("".concat(tr(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Re||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function or(e,t,r,n){return rr(e)?[]:xt(e)?[".".concat(e.styledComponentId)]:gt(e)?!gt(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:or(e(t),t,r,n):e instanceof Zt?r?(e.inject(r,n),[e.getName(n)]):[e]:yt(e)?nr(e):Array.isArray(e)?Array.prototype.concat.apply(We,e.map(function(e){return or(e,t,r,n)})):[e.toString()];var o}function ar(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(gt(r)&&!xt(r))return!1}return!0}var ir=Xe(De),sr=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&ar(e),this.componentId=t,this.baseHash=Ve(ir,t),this.baseStyle=r,Mt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=vt(n,this.staticRulesId);else{var o=bt(or(this.rules,e,t,r)),a=Ke(Ve(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=vt(n,a),this.staticRulesId=a}else{for(var s=Ve(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var d=this.rules[l];if("string"==typeof d)c+=d;else if(d){var u=bt(or(d,e,t,r));s=Ve(s,u+l),c+=u}}if(c){var p=Ke(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=vt(n,p)}}return n},e}(),cr=Ee.createContext(void 0),lr=(cr.Consumer,{});function dr(e,t,r){var n,o=xt(e),a=e,i=!et(e),s=t.attrs,c=void 0===s?We:s,l=t.componentId,d=void 0===l?function(e,t){var r="string"!=typeof e?"sc":He(e);lr[r]=(lr[r]||0)+1;var n="".concat(r,"-").concat(Ze(De+r+lr[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,u=t.displayName,p=void 0===u?et(n=e)?"styled.".concat(n):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(n),")"):u,m=t.displayName&&t.componentId?"".concat(He(t.displayName),"-").concat(t.componentId):t.componentId||d,f=o&&a.attrs?a.attrs.concat(c).filter(Boolean):c,h=t.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;h=function(e,t){return g(e,t)&&x(e,t)}}else h=g}var v=new sr(r,m,o?a.componentStyle:void 0);function b(e,t){return function(e,t,r){var n=e.attrs,o=e.componentStyle,a=e.defaultProps,i=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=Ee.useContext(cr),d=Vt(),u=e.shouldForwardProp||d.shouldForwardProp,p=Me(t,l,a)||Ge,m=function(e,t,r){for(var n,o=E(E({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=gt(n=e[a])?n(o):n;for(var s in i)o[s]="className"===s?vt(o[s],i[s]):"style"===s?E(E({},o[s]),i[s]):i[s]}return t.className&&(o.className=vt(o.className,t.className)),o}(n,t,p),f=m.as||c,h={};for(var g in m)void 0===m[g]||"$"===g[0]||"as"===g||"theme"===g&&m.theme===p||("forwardedAs"===g?h.as=m.forwardedAs:u&&!u(g,f)||(h[g]=m[g]));var x,v,b,y=(x=o,v=m,b=Vt(),x.generateAndInjectStyles(v,b.styleSheet,b.stylis)),w=vt(i,s);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),h[et(f)&&!Le.has(f)?"class":"className"]=w,r&&(h.ref=r),(0,Ee.createElement)(f,h)}(y,e,t)}b.displayName=p;var y=Ee.forwardRef(b);return y.attrs=f,y.componentStyle=v,y.displayName=p,y.shouldForwardProp=h,y.foldedComponentIds=o?vt(a.foldedComponentIds,a.styledComponentId):"",y.styledComponentId=m,y.target=o?a.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)wt(e,o[n],!0);return e}({},a.defaultProps,e):e}}),jt(y,function(){return".".concat(y.styledComponentId)}),i&&ht(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function ur(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var pr=function(e){return Object.assign(e,{isCss:!0})};function mr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(gt(e)||yt(e))return pr(or(ur(We,R([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?or(n):pr(or(ur(n,t)))}function fr(e,t,r){if(void 0===r&&(r=Ge),!t)throw St(1,t);var n=function(n){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,r,mr.apply(void 0,R([n],o,!1)))};return n.attrs=function(n){return fr(e,t,E(E({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return fr(e,t,E(E({},r),n))},n}var hr=function(e){return fr(dr,e)},gr=hr;Le.forEach(function(e){gr[e]=hr(e)});var xr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ar(e),Mt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(bt(or(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&Mt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=Dt(),n=bt([r&&'nonce="'.concat(r,'"'),"".concat($e,'="true"'),"".concat(_e,'="').concat(De,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw St(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw St(2);var r=e.instance.toString();if(!r)return[];var n=((t={})[$e]="",t[_e]=De,t.dangerouslySetInnerHTML={__html:r},t),o=Dt();return o&&(n.nonce=o),[Ee.createElement("style",E({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw St(2);return Ee.createElement(Xt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw St(3)}}();"__sc-".concat($e,"__");var vr=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=mr.apply(void 0,R([e],t,!1)),o="sc-global-".concat(Ze(JSON.stringify(n))),a=new xr(n,o),i=function(e){var t=Vt(),r=Ee.useContext(cr),n=Ee.useRef(t.styleSheet.allocateGSInstance(o)).current;return t.styleSheet.server&&s(n,e,t.styleSheet,r,t.stylis),Ee.useLayoutEffect(function(){if(!t.styleSheet.server)return s(n,e,t.styleSheet,r,t.stylis),function(){return a.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function s(e,t,r,n,o){if(a.isStatic)a.renderStyles(e,qe,r,o);else{var s=E(E({},t),{theme:Me(t,n,i.defaultProps)});a.renderStyles(e,s,r,o)}}return Ee.memo(i)})`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Sensation", Arial, sans-serif;
        src: url(${"data:font/ttf;base64,"}) format('truetype');
        font-weight: 400;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: "Sensation", Arial, sans-serif;
        background-color: #ffffff;
        color: #333333;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, nav {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    button {
        font-family: inherit;
    }

    input, textarea {
        font-family: inherit;
    }
`;const br=gr.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  background: var(--background, #ffffff);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,yr=gr.img`
  height: 85px;
  cursor: pointer;
`,wr=gr.button`
  display: none;
  background: none;
  border: 0;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  cursor: pointer;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text, #111);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  &[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  &[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`,jr=gr.nav`
  display: flex;
  align-items: center;

  /* aplica apenas ao item 'conversa' */
li[data-id="conversa"] a {
  color: var(--primary, #1582eeff);
  font-weight: 600;
}

/* preserva estado de foco/hover */
li[data-id="conversa"] a:hover,
li[data-id="conversa"] a:focus {
  color: #044c95ff;
  outline: none;
}

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--background, #fff);
    max-height: ${e=>e.open?"320px":"0"};
    overflow: hidden;
    transition: max-height 0.35s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
`,Sr=gr.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: var(--text, #111);
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    transition: color 0.15s ease, transform 0.15s ease;
  }

  li a:hover {
    color: var(--primary, #0b74de);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
    li {
      padding: 0.5rem 0;
    }
  }
`;var kr=i(),Cr=({items:e=null,logoSrc:t="/Weligton-portf-lio/assets/logo-Dhac88re.png"})=>{const r=e||[{id:"inicio",label:"Início",href:"#inicio"},{id:"sobre",label:"Sobre",href:"#sobre"},{id:"servicos",label:"Serviços",href:"#servicos"},{id:"contato",label:"Contato",href:"#contato"},{id:"conversa",label:"Conversar com Consultor",href:"#conversa"}],[n,o]=(0,Ee.useState)(!1);return(0,Ee.useEffect)(()=>{const e=()=>{window.innerWidth>768&&o(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,kr.jsxs)(br,{children:[(0,kr.jsx)(yr,{src:t,alt:"Logo Weligton Consultoria"}),(0,kr.jsxs)(wr,{onClick:()=>o(e=>!e),"aria-expanded":n,"aria-label":n?"Fechar menu":"Abrir menu",children:[(0,kr.jsx)("span",{}),(0,kr.jsx)("span",{}),(0,kr.jsx)("span",{})]}),(0,kr.jsx)(jr,{open:n,role:"navigation","aria-label":"Navegação principal",children:(0,kr.jsx)(Sr,{children:r.map(e=>(0,kr.jsx)("li",{children:(0,kr.jsx)("a",{href:e.href,children:e.label})},e.id))})})]})};const Pr=gr.footer`
  background: var(--primary, #e2e2e2); /* mesma cor do logo (usa variável se existir) */
  color: #fff;
  padding: 0.5rem 1rem;
`,zr=gr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`,Ar=gr.img`
  height: 86px;
`,Ir=gr.div`
  display: flex;
  gap: 1rem; /* espaçamento de 1rem entre os ícones */
  margin-top: 0.5rem;
  color: #686868ff; /* ícones na cor branca */

    a {
        display: inline-flex;
        gap: 1rem;
        color: inherit; /* mantém a cor definida acima */
        text-decoration: none;
    }

  svg {
    display: block;
    color: currentColor; /* respeita a cor acima */
  }
`,Er=gr.p`
  margin: 0.25rem 0 0 0;
  width: 395px;
  font-size: 0.95rem;
  color: #000; /* texto em preto */
`,Rr=gr.span`
  color: var(--accent, #0b74de); /* WillDev em azul */
  font-weight: 700;
`;var $r=()=>{const e=(new Date).getFullYear(),t=[{id:"instagram",Icon:k,href:"https://www.instagram.com/brav.owear/"},{id:"linkedin",Icon:g,href:"https://www.linkedin.com/in/willian-miranda-de-oliveira-7195642ba/"},{id:"whatsapp",Icon:S,href:"https://wa.me/5527997916541"}];return(0,kr.jsx)(Pr,{children:(0,kr.jsxs)(zr,{children:[(0,kr.jsx)(Ar,{src:"/Weligton-portf-lio/assets/logo-1-ZlNOkMDf.png",alt:"Logo"}),(0,kr.jsx)(Ir,{"aria-label":"redes sociais",children:t.map(e=>(0,kr.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.id,title:e.id,children:(0,kr.jsx)(e.Icon,{size:24})},e.id))}),(0,kr.jsxs)(Er,{children:["© ",e," Todos os Direitos Reservados a ",(0,kr.jsx)("strong",{children:"Weligton Consultoria"}),". Desenvolvido por ",(0,kr.jsx)(Rr,{children:"WillDev"}),"."]})]})})};const Or=gr.main`
    display: flex;
    flex-direction: column;
    background:  #c3c3cdba;

`,_r=gr.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem;
    padding-left: 3rem ;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding-left: 0;
        margin-left: 0;
    }
`,Dr=gr.figure`
    width: 500px;

    @media (max-width: 768px) {
        width: 220px;
        max-width: 100%;
        margin: 0 auto;
    }
`,Nr=gr.img`
    width: 100%;
        display: block;

    @media (max-width: 768px) {
        transform: none;
    }
`,Tr=gr.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 12px;
    color: #000;

`,Fr=gr.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`,qr=gr.p`
    margin: 0;
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 440px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
`,Wr=gr.button`
    margin-top: 14px;
    width: fit-content;
    background: #0d6efd;
    color: #fff;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
    transition: background 180ms;

    &:hover { background: #084fca; }
`,Gr=gr.section`
  padding: 3rem 6rem 5.5rem 6rem;
  margin: 0 auto;
  background-color: #fff;
`,Mr=gr.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text, #111);
`,Lr=gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Br=gr.article`
  background: var(--card-bg, #ffffff87);
  border-radius: 12px;
  padding: 2.85rem;
  box-shadow: 0 8px 20px rgba(10, 10, 10, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* Centraliza ícone e conteúdo horizontalmente */
  align-items: center;
  /* Garante que textos fiquem centralizados dentro do card */
  text-align: center;
  cursor: default;

  &:hover,
  &:focus {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
    outline: none;
  }
`,Yr=gr.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  color: var(--icon-color, #0b74de);
  margin-bottom: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
  }
`,Hr=gr.h3`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  color: var(--text, #111);
  /* centraliza o título quando o card estiver alinhado ao centro */
  text-align: center;
`,Ur=gr.button`
  margin-top: auto;
  align-self: stretch;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 1px solid var(--primary, #0b74de);
  color: var(--primary, #0b74de);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease, transform 0.12s ease;

  &:hover,
  &:focus {
    background: var(--primary, #0b74de);
    color: #fff;
    transform: translateY(-2px);
  }
`;var Jr=()=>{const e=[{id:1,title:"Consultoria Empresarial",color:"#0b74de",icon:(0,kr.jsx)(z,{"aria-hidden":!0})},{id:2,title:"Consultoria de RH",color:"#ff8c42",icon:(0,kr.jsx)(j,{"aria-hidden":!0})},{id:3,title:"Treinamentos e Palestras",color:"#7be495",icon:(0,kr.jsx)(d,{"aria-hidden":!0})},{id:4,title:"Desenvolvimento Profissional",color:"#0f9d58",icon:(0,kr.jsx)(f,{"aria-hidden":!0})}];return(0,kr.jsxs)(Gr,{children:[(0,kr.jsx)(Mr,{children:"Nossos Serviços"}),(0,kr.jsx)(Lr,{children:e.map(e=>(0,kr.jsxs)(Br,{tabIndex:0,"aria-labelledby":`card-title-${e.id}`,children:[(0,kr.jsx)(Yr,{style:{borderColor:e.color,color:e.color},"aria-hidden":!0,children:e.icon}),(0,kr.jsx)(Hr,{id:`card-title-${e.id}`,children:e.title}),(0,kr.jsx)(Ur,{type:"button",children:"Saiba Mais..."})]},e.id))})]})};const Kr=gr.section`
  background: linear-gradient(180deg, #707066 0%, #707070 100%);
  color: #fff;
  padding: 3rem 1rem;
`,Qr=gr.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Vr=gr.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  padding: 1.5rem 0;
`,Xr=gr.p`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: rgba(255,255,255,0.95);
  font-size: 1.2rem;
`,Zr=gr.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,en=gr.article`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 10px;
  
`,tn=gr.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff; /* círculo branco com ícone branco */
  color: #fff;

  svg {
    width: 28px;
    height: 28px;
  }
`,rn=gr.h3`
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
  color: #fff;
`;var nn=()=>{const e=[{id:1,title:"Expertise e Experiência",icon:(0,kr.jsx)(P,{"aria-hidden":!0})},{id:2,title:"Tecnologia Avançada",icon:(0,kr.jsx)(h,{"aria-hidden":!0})},{id:3,title:"Foco no Cliente",icon:(0,kr.jsx)(s,{"aria-hidden":!0})},{id:4,title:"Inovação Contínua",icon:(0,kr.jsx)(m,{"aria-hidden":!0})},{id:5,title:"Gestão Estratégica de Pessoas",icon:(0,kr.jsx)(b,{"aria-hidden":!0})}];return(0,kr.jsx)(Kr,{children:(0,kr.jsxs)(Qr,{children:[(0,kr.jsx)(Vr,{children:"Diferenciais"}),(0,kr.jsx)(Xr,{children:"A Weligton é uma consultoria formada por profissionais altamente experientes, o que garante uma atuação sólida, objetiva e com uma visão ampla para identificar as necessidades reais do seu negócio. Nosso compromisso é entregar soluções estratégicas, inovadoras e realmente eficazes sempre indo além do esperado. Trabalhamos para transformar a gestão de pessoas em uma força competitiva, capaz de impulsionar resultados e fortalecer a performance das organizações que confiam em nosso trabalho."}),(0,kr.jsx)(Zr,{children:e.map(e=>(0,kr.jsxs)(en,{tabIndex:0,"aria-label":e.title,children:[(0,kr.jsx)(tn,{"aria-hidden":!0,children:e.icon}),(0,kr.jsx)(rn,{children:e.title})]},e.id))})]})})};const on=gr.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${"/Weligton-portf-lio/assets/fundo-perfil-DnKRn16Y.png"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 70vh;
`,an=gr.section`
    display: flex;
    text-align: center;
    align-items: center;
`,sn=gr.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    margin-right: 6.3rem;
    gap: 12px;
    color: #000;

`,cn=gr.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`,ln=gr.p`
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 720px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;var dn=()=>(0,kr.jsx)(on,{children:(0,kr.jsx)(an,{children:(0,kr.jsxs)(sn,{children:[(0,kr.jsx)(cn,{children:"SOMOS O APOIO ESTRATÉGICO DA SUA EMPRESA"}),(0,kr.jsx)(ln,{children:"Redefina o futuro da sua equipe e impulsione para o sucesso. Consultoria Administrativa e RH, Planejamento estratégico, Recrutaento e seleção, Treinamentos, Planos de Cargo e Salários, Terceirização de RH e muito mais."})]})})});const un=gr.section`
    width: 100%;
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
`,pn=gr.h2`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 3rem;
    max-width: 1100px;
    padding: 0 16px;
`,mn=gr.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    gap: 2rem;
    padding: 0 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        
    }

    @media (max-width: 564px) {
        grid-template-columns: 1fr;
    }
`,fn=gr.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
`,hn=gr.div`
    font-size: 2em;
    margin: 0 0 12px;
`,gn=gr.p`
    font-size: 1em;
    line-height: 1.5;
    text-align: left;`;var xn=()=>{const e=[{id:1,icon:(0,kr.jsx)(y,{"aria-hidden":!0}),text:"Para ter em sua empresa profissionais que fazem a diferença, que envolvem a equipe em treinamentos, que promovem o engajamento e melhoria dos resultados."},{id:2,icon:(0,kr.jsx)(d,{"aria-hidden":!0}),text:"Para tirar os planos do papel, contando com um parceiro para ajudar implementar ações estratégicas."},{id:3,icon:(0,kr.jsx)(v,{"aria-hidden":!0}),text:"Para promover o crescimento que tanto precisa, desenvolver a liderança, extrair o melhor de cada profissional e transformar sua empresa em uma organização que valoriza, potencializa e desenvolve seus profissionais."},{id:4,icon:(0,kr.jsx)(a,{"aria-hidden":!0}),text:"Para profissionalizar os processos internos, treinar a equipe e melhorar a qualidade de produtos e serviços."},{id:5,icon:(0,kr.jsx)(r,{"aria-hidden":!0}),text:"Para realizar mudanças e transições na empresa, que não consegue sozinhos."},{id:6,icon:(0,kr.jsx)(u,{"aria-hidden":!0}),text:"Para reduzir o turnover e atrair talentos."},{id:7,icon:(0,kr.jsx)(x,{"aria-hidden":!0}),text:"Para definir planos estratégicos e envolver a equipe para que sejam realizados."},{id:8,icon:(0,kr.jsx)(p,{"aria-hidden":!0}),text:"Para se recolocar no mercado de trabalho de forma estratégica e com apoio de uma equipe experiente."}];return(0,kr.jsxs)(un,{children:[(0,kr.jsx)(pn,{children:"Por que contratar nossos serviços?"}),(0,kr.jsx)(mn,{children:e.map(e=>(0,kr.jsxs)(fn,{children:[(0,kr.jsx)(hn,{children:e.icon}),(0,kr.jsx)(gn,{children:e.text})]},e.id))})]})};const vn=gr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 3rem 2rem;
    background-color: #f2f2f2;
`,bn=gr.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #222;
`,yn=gr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 800px;
`,wn=gr.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5561ac;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(85, 97, 172, 0.1);
    }
`,jn=gr.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`,Sn=gr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    padding-top: 70px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    max-width: 350px;
    width: 100%;
    position: relative;
`,kn=gr.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Cn=gr.p`
    font-style: italic;
    margin: 10px 0;
`,Pn=gr.h3`
    margin: 10px 0 5px;
    color: #222;
`,zn=gr.p`
    color: #666;
    margin: 0 0 10px;
`,An=gr.div`
    display: flex;
    gap: 8px;
    margin-top: 20px;
`,In=gr.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${e=>e.isActive?"#5561ac":"#ccc"};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5561ac;
    }
`;var En=()=>{const e=[{nome:"João Silva",cargo:"Desenvolvedor Front-end",foto:"https://randomuser.me/api/portraits/men/1.jpg",texto:"O Weligton é um profissional excepcional! Sua dedicação e habilidades técnicas são impressionantes. Trabalhar com ele foi uma experiência enriquecedora."},{nome:"Maria Oliveira",cargo:"Gerente de Projetos",foto:"https://randomuser.me/api/portraits/women/2.jpg",texto:"Weligton demonstrou grande competência e proatividade em todos os projetos que participou. Sua capacidade de resolver problemas é notável."},{nome:"Carlos Pereira",cargo:"Designer UX/UI",foto:"https://randomuser.me/api/portraits/men/3.jpg",texto:"Trabalhar com Weligton foi uma experiência fantástica. Ele é criativo, colaborativo e sempre busca entregar o melhor resultado possível."},{nome:"Ana Souza",cargo:"Analista de Sistemas",foto:"https://randomuser.me/api/portraits/women/4.jpg",texto:"Weligton é um profissional dedicado e competente. Sua habilidade em comunicação e trabalho em equipe faz toda a diferença nos projetos."}],[t,r]=Ee.useState(0);return(0,kr.jsxs)(vn,{children:[(0,kr.jsx)(bn,{children:"Depoimentos"}),(0,kr.jsxs)(yn,{children:[(0,kr.jsx)(wn,{onClick:()=>{r(t=>0===t?e.length-1:t-1)},"aria-label":"Anterior",children:(0,kr.jsx)(A,{size:24})}),(0,kr.jsxs)(jn,{children:[(0,kr.jsxs)(Sn,{children:[(0,kr.jsx)(kn,{src:e[t].foto,alt:e[t].nome}),(0,kr.jsx)(Pn,{children:e[t].nome}),(0,kr.jsx)(zn,{children:e[t].cargo}),(0,kr.jsx)(Cn,{children:e[t].texto})]}),(0,kr.jsxs)(Sn,{children:[(0,kr.jsx)(kn,{src:e[(t+1)%e.length].foto,alt:e[(t+1)%e.length].nome}),(0,kr.jsx)(Pn,{children:e[(t+1)%e.length].nome}),(0,kr.jsx)(zn,{children:e[(t+1)%e.length].cargo}),(0,kr.jsx)(Cn,{children:e[(t+1)%e.length].texto})]})]}),(0,kr.jsx)(wn,{onClick:()=>{r(t=>t===e.length-1?0:t+1)},"aria-label":"Próximo",children:(0,kr.jsx)(C,{size:24})})]}),(0,kr.jsx)(An,{children:e.map((e,n)=>(0,kr.jsx)(In,{isActive:n===t,onClick:()=>r(n),"aria-label":`Ir para depoimento ${n+1}`},n))})]})};const Rn=gr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5rem 2rem;
    background-color: #fff;
`,$n=gr.h2`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #222;
`,On=gr.p`
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
`,_n=gr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    gap: 1.2rem;
`,Dn=gr.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #5561ac;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(85, 97, 172, 0.1);
    }
`,Nn=gr.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`,Tn=gr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Fn=gr.img`
    width: 150px;
    margin-bottom: 1rem;
    height: 80px;
    object-fit: contain;
`,qn=gr.h3`
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 0.5rem;
`,Wn=gr.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`,Gn=gr.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    border: none;
    cursor: pointer;

    &.active {
        background-color: #5561ac;
    }
`;var Mn=()=>{const e=[{id:1,nome:"Empresa A",logo:"https://cdn6.f-cdn.com/contestentries/2220272/58801622/640732f63a225_thumb900.jpg"},{id:2,nome:"Empresa B",logo:"https://static.vecteezy.com/ti/vetor-gratis/p1/19073761-unidade-de-logotipo-da-matriz-logotipo-do-nome-da-empresa-ficticia-da-matriz-gratis-vetor.jpg"},{id:3,nome:"Empresa C",logo:"https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612818.jpg"},{id:4,nome:"Empresa D",logo:"https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612571.jpg"},{id:5,nome:"Empresa E",logo:"https://turbologo.com/articles/wp-content/uploads/2019/08/Bank-of-America-logo.png"},{id:6,nome:"Empresa F",logo:"https://img.freepik.com/vetores-premium/logo-ficticio-una-buena-idea_471774-60.jpg"},{id:7,nome:"Empresa G",logo:"https://static.vecteezy.com/ti/vetor-gratis/p1/9032499-fic-logo-fic-letter-fic-letter-logo-design-initials-fic-logo-linked-with-circle-and-uppercase-monogram-logo-fic-typography-for-technology-business-and-real-marca-imobiliaria-vetor.jpg   "}],[t,r]=(0,Ee.useState)(0),n=r=>(t+r)%e.length;return(0,kr.jsxs)(Rn,{children:[(0,kr.jsx)($n,{children:"Quem Já Tem Conexão Com Weligton"}),(0,kr.jsx)(On,{children:"Nossos Clientes e Parceiros"}),(0,kr.jsxs)(_n,{children:[(0,kr.jsx)(Dn,{onClick:()=>{r(t=>0===t?e.length-1:t-1)},"aria-label":"Anterior",children:(0,kr.jsx)(A,{size:24})}),(0,kr.jsx)(Nn,{children:[0,1,2,3,4].map(t=>(0,kr.jsxs)(Tn,{children:[(0,kr.jsx)(Fn,{src:e[n(t)].logo,alt:e[n(t)].nome}),(0,kr.jsx)(qn,{children:e[n(t)].nome})]},t))}),(0,kr.jsx)(Dn,{onClick:()=>{r(t=>t===e.length-1?0:t+1)},"aria-label":"Próximo",children:(0,kr.jsx)(C,{size:24})})]}),(0,kr.jsx)(Wn,{children:e.map((e,n)=>(0,kr.jsx)(Gn,{isActive:n===t,onClick:()=>r(n),"aria-label":`Ir para o cliente ${n+1}`},n))})]})};const Ln=gr.div`
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
    width: 100%;
`,Bn=gr.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
`,Yn=gr.h1`
    width: 800px;
    text-align: start;
    margin: 0 auto;
    font-size: 2em;
    font-weight: bold;
`,Hn=gr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
`,Un=gr.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`,Jn=gr.h2`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
`,Kn=gr.p`
    font-size: 1.2rem;
`;var Qn=()=>{const e=[{id:1,number:"239",description:"Profissionais Desenvolvidos",icon:c},{id:2,number:"4",description:"Palestras",icon:x},{id:3,number:"120",description:"Recrutamentos Realizados",icon:w},{id:4,number:"50",description:"Empresas Parceiras",icon:l}];return(0,kr.jsxs)(Ln,{children:[(0,kr.jsx)(Yn,{children:"Desde 2026"}),(0,kr.jsx)(Bn,{children:e.map(e=>(0,kr.jsxs)(Hn,{children:[(0,kr.jsx)(Un,{as:e.icon}),(0,kr.jsx)(Jn,{children:e.number}),(0,kr.jsx)(Kn,{children:e.description})]},e.id))})]})};const Vn=gr.section`
  background: #f2f2f2;
  padding: 5rem 1rem;
`,Xn=gr.div`
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Zn=gr.div`
  flex: 1;
`,eo=gr.div`
  width: 330px;
`,to=gr.h2`
  font-size: 2.2rem;
  width: 330px;
  text-align: center;
  margin: 0;
  color: var(--text, #111);
`,ro=gr.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,no=gr.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,oo=gr.label`
  font-size: 1rem;
  color: var(--muted, #555);
`,ao=gr.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
`,io=gr.textarea`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
  resize: vertical;
`,so=gr.small`
  color: var(--muted, #666);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,co=gr.button`
  margin-top: 0.25rem;
  padding: 0.6rem 0.75rem;
  background: var(--primary, #0b74de);
  color: #fff;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.12s ease, background 0.12s ease;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    background: #095bb7;
    outline: none;
  }
`,lo=gr.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: #25D366;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: #128C7E;
  }

`;var uo=()=>(0,kr.jsx)(Vn,{id:"contato",children:(0,kr.jsxs)(Xn,{children:[(0,kr.jsx)(Zn,{children:(0,kr.jsx)(to,{children:"Como Podemos te Ajudar"})}),(0,kr.jsxs)(eo,{children:[(0,kr.jsxs)(ro,{onSubmit:e=>{e.preventDefault();const t=new FormData(e.target);t.get("email"),t.get("message");alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")},children:[(0,kr.jsxs)(no,{children:[(0,kr.jsx)(oo,{htmlFor:"email",children:"E-mail:"}),(0,kr.jsx)(ao,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",required:!0,"aria-describedby":"email-help"}),(0,kr.jsx)(so,{id:"email-help",children:"Seu e-mail será usado apenas para resposta"})]}),(0,kr.jsxs)(no,{children:[(0,kr.jsx)(oo,{htmlFor:"message",children:"Mensagem:"}),(0,kr.jsx)(io,{id:"message",name:"message",rows:5,placeholder:"Digite sua mensagem aqui...",required:!0,"aria-describedby":"message-help"}),(0,kr.jsx)(so,{id:"message-help",children:"Descreva como podemos ajudar você"})]}),(0,kr.jsx)(co,{type:"submit",children:"Enviar Mensagem"})]}),(0,kr.jsx)(lo,{href:"https://wa.me/5527997916541",target:"_blank",rel:"noopener noreferrer","aria-label":"Contato via WhatsApp",children:(0,kr.jsx)(S,{size:32})})]})]})}),po=()=>(0,kr.jsxs)(Or,{children:[(0,kr.jsx)(dn,{}),(0,kr.jsx)(Jr,{}),(0,kr.jsx)(nn,{}),(0,kr.jsxs)(_r,{children:[(0,kr.jsxs)(Tr,{children:[(0,kr.jsx)(Fr,{children:"Estamos constantemente inovando e aprimorando nossos serviços"}),(0,kr.jsx)(qr,{children:"Utilizamos as mais recentes tecnologias e ferramentas de RH para otimizar processos e garantir resultados precisos e rápidos."}),(0,kr.jsx)(Wr,{children:"Tire suas dúvidas"})]}),(0,kr.jsx)(Dr,{children:(0,kr.jsx)(Nr,{src:"/Weligton-portf-lio/assets/perfil-1-DQCr88Em.jpg",alt:"Foto de Perfil - direita"})})]}),(0,kr.jsx)(xn,{}),(0,kr.jsx)(En,{}),(0,kr.jsx)(Mn,{}),(0,kr.jsx)(Qn,{}),(0,kr.jsx)(uo,{})]});(0,I.createRoot)(document.getElementById("root")).render((0,kr.jsxs)(kr.Fragment,{children:[(0,kr.jsx)(vr,{}),(0,kr.jsx)(Cr,{}),(0,kr.jsx)(po,{}),(0,kr.jsx)($r,{})]}));