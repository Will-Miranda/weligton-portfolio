import{n as e,t}from"./rolldown-runtime-A1xW-pDA.js";import{C as r,E as n,S as a,T as i,_ as o,a as s,b as c,c as l,d,f as p,g as u,h as m,i as f,l as h,m as g,n as x,o as v,p as b,r as y,s as w,t as j,u as S,v as C,w as k,x as A,y as I}from"./vendor-awnLu1B6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var P=i(),z=function(){return z=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},z.apply(this,arguments)};function E(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}var $=t({"node_modules/shallowequal/index.js":(e,t)=>{t.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var d=e[l],p=t[l];if(!1===(a=r?r.call(n,d,p,l):void 0)||void 0===a&&d!==p)return!1}return!0}}}),O="-ms-",R="-moz-",N="-webkit-",_="comm",D="rule",T="decl",M="@keyframes",q=Math.abs,F=String.fromCharCode,L=Object.assign;function W(e){return e.trim()}function G(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Y(e,t,r){return e.indexOf(t,r)}function U(e,t){return 0|e.charCodeAt(t)}function V(e,t,r){return e.slice(t,r)}function H(e){return e.length}function X(e){return e.length}function J(e,t){return t.push(e),e}function Z(e,t){return e.filter(function(e){return!G(e,t)})}var Q=1,K=1,ee=0,te=0,re=0,ne="";function ae(e,t,r,n,a,i,o,s){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:Q,column:K,length:o,return:"",siblings:s}}function ie(e,t){return L(ae("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function oe(e){for(;e.root;)e=ie(e.root,{children:[e]});J(e,e.siblings)}function se(){return re=te>0?U(ne,--te):0,K--,10===re&&(K=1,Q--),re}function ce(){return re=te<ee?U(ne,te++):0,K++,10===re&&(K=1,Q++),re}function le(){return U(ne,te)}function de(){return te}function pe(e,t){return V(ne,e,t)}function ue(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function me(e){return W(pe(te-1,ge(91===e?e+2:40===e?e+1:e)))}function fe(e){for(;(re=le())&&re<33;)ce();return ue(e)>2||ue(re)>3?"":" "}function he(e,t){for(;--t&&ce()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return pe(e,de()+(t<6&&32==le()&&32==ce()))}function ge(e){for(;ce();)switch(re){case e:return te;case 34:case 39:34!==e&&39!==e&&ge(re);break;case 40:41===e&&ge(e);break;case 92:ce()}return te}function xe(e,t){for(;ce()&&e+re!==57&&(e+re!==84||47!==le()););return"/*"+pe(t,te-1)+"*"+F(47===e?e:ce())}function ve(e){for(;!ue(le());)ce();return pe(e,te)}function be(e){return function(e){return ne="",e}(ye("",null,null,null,[""],e=function(e){return Q=K=1,ee=H(ne=e),te=0,[]}(e),0,[0],e))}function ye(e,t,r,n,a,i,o,s,c){for(var l=0,d=0,p=o,u=0,m=0,f=0,h=1,g=1,x=1,v=0,b="",y=a,w=i,j=n,S=b;g;)switch(f=v,v=ce()){case 40:if(108!=f&&58==U(S,p-1)){-1!=Y(S+=B(me(v),"&","&\f"),"&\f",q(l?s[l-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=me(v);break;case 9:case 10:case 13:case 32:S+=fe(f);break;case 92:S+=he(de()-1,7);continue;case 47:switch(le()){case 42:case 47:J(je(xe(ce(),de()),t,r,c),c);break;default:S+="/"}break;case 123*h:s[l++]=H(S)*x;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(S=B(S,/\f/g,"")),m>0&&H(S)-p&&J(m>32?Se(S+";",n,r,p-1,c):Se(B(S," ","")+";",n,r,p-2,c),c);break;case 59:S+=";";default:if(J(j=we(S,t,r,l,d,a,s,b,y=[],w=[],p,i),i),123===v)if(0===d)ye(S,t,j,j,y,i,p,s,w);else switch(99===u&&110===U(S,3)?100:u){case 100:case 108:case 109:case 115:ye(e,j,j,n&&J(we(e,j,j,0,0,a,s,b,a,y=[],p,w),w),a,w,p,s,n?y:w);break;default:ye(S,j,j,j,[""],w,0,s,w)}}l=d=m=0,h=x=1,b=S="",p=o;break;case 58:p=1+H(S),m=f;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==se())continue;switch(S+=F(v),v*h){case 38:x=d>0?1:(S+="\f",-1);break;case 44:s[l++]=(H(S)-1)*x,x=1;break;case 64:45===le()&&(S+=me(ce())),u=le(),d=p=H(b=S+=ve(de())),v++;break;case 45:45===f&&2==H(S)&&(h=0)}}return i}function we(e,t,r,n,a,i,o,s,c,l,d,p){for(var u=a-1,m=0===a?i:[""],f=X(m),h=0,g=0,x=0;h<n;++h)for(var v=0,b=V(e,u+1,u=q(g=o[h])),y=e;v<f;++v)(y=W(g>0?m[v]+" "+b:B(b,/&\f/g,m[v])))&&(c[x++]=y);return ae(e,t,r,0===a?D:s,c,l,d,p)}function je(e,t,r,n){return ae(e,t,r,_,F(re),V(e,2,-2),0,n)}function Se(e,t,r,n,a){return ae(e,t,r,T,V(e,0,n),V(e,n+1,-1),n,a)}function Ce(e,t,r){switch(function(e,t){return 45^U(e,0)?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}(e,t)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 4789:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+R+e+O+e+e;case 5936:switch(U(e,t+11)){case 114:return N+e+O+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+O+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+O+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return N+e+O+e+e;case 6165:return N+e+O+"flex-"+e+e;case 5187:return N+e+B(e,/(\w+).+(:[^]+)/,N+"box-$1$2"+O+"flex-$1$2")+e;case 5443:return N+e+O+"flex-item-"+B(e,/flex-|-self/g,"")+(G(e,/flex-|baseline/)?"":O+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return N+e+O+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return N+e+O+B(e,"shrink","negative")+e;case 5292:return N+e+O+B(e,"basis","preferred-size")+e;case 6060:return N+"box-"+B(e,"-grow","")+N+e+O+B(e,"grow","positive")+e;case 4554:return N+B(e,/([^-])(transform)/g,"$1"+N+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4200:if(!G(e,/flex-|baseline/))return O+"grid-column-align"+V(e,t)+e;break;case 2592:case 3360:return O+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(e,r){return t=r,G(e.props,/grid-\w+-end/)})?~Y(e+(r=r[t].value),"span",0)?e:O+B(e,"-start","")+e+O+"grid-row-span:"+(~Y(r,"span",0)?G(r,/\d+/):+G(r,/\d+/)-+G(e,/\d+/))+";":O+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(e){return G(e.props,/grid-\w+-start/)})?e:O+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(H(e)-1-t>6)switch(U(e,t+1)){case 109:if(45!==U(e,t+4))break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+R+(108==U(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Y(e,"stretch",0)?Ce(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,r,n,a,i,o,s){return O+r+":"+n+s+(a?O+r+"-span:"+(i?o:+o-+n)+s:"")+e});case 4949:if(121===U(e,t+6))return B(e,":",":"+N)+e;break;case 6444:switch(U(e,45===U(e,14)?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+N+(45===U(e,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+O+"$2box$3")+e;case 100:return B(e,":",":"+O)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function ke(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Ae(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case T:return e.return=e.return||e.value;case _:return"";case M:return e.return=e.value+"{"+ke(e.children,n)+"}";case D:if(!H(e.value=e.props.join(",")))return""}return H(r=ke(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ie(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case T:return void(e.return=Ce(e.value,e.length,r));case M:return ke([ie(e,{value:B(e.value,"@","@"+N)})],n);case D:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,function(t){switch(G(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oe(ie(e,{props:[B(t,/:(read-\w+)/,":-moz-$1")]})),oe(ie(e,{props:[t]})),L(e,{props:Z(r,n)});break;case"::placeholder":oe(ie(e,{props:[B(t,/:(plac\w+)/,":"+N+"input-$1")]})),oe(ie(e,{props:[B(t,/:(plac\w+)/,":-moz-$1")]})),oe(ie(e,{props:[B(t,/:(plac\w+)/,O+"input-$1")]})),oe(ie(e,{props:[t]})),L(e,{props:Z(r,n)})}return""})}}var Pe=e($()),ze=e(n()),Ee={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e="undefined"!=typeof process&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Oe="active",Re="data-styled-version",Ne="6.1.19",_e="/*!sc*/\n",De="undefined"!=typeof window&&"undefined"!=typeof document,Te=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),Me={},qe=Object.freeze([]),Fe=Object.freeze({});function Le(e,t,r){return void 0===r&&(r=Fe),e.theme!==r.theme&&e.theme||t||r.theme}var We=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ge=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Be=/(^-|-$)/g;function Ye(e){return e.replace(Ge,"-").replace(Be,"")}var Ue=/(a)(d)/gi,Ve=function(e){return String.fromCharCode(e+(e>25?39:97))};function He(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Ve(t%52)+r;return(Ve(t%52)+r).replace(Ue,"$1-$2")}var Xe,Je=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ze=function(e){return Je(5381,e)};function Qe(e){return He(Ze(e)>>>0)}function Ke(e){return"string"==typeof e&&!0}var et="function"==typeof Symbol&&Symbol.for,tt=et?Symbol.for("react.memo"):60115,rt=et?Symbol.for("react.forward_ref"):60112,nt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},at={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},it={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ot=((Xe={})[rt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xe[tt]=it,Xe);function st(e){return("type"in(t=e)&&t.type.$$typeof)===tt?it:"$$typeof"in e?ot[e.$$typeof]:nt;var t}var ct=Object.defineProperty,lt=Object.getOwnPropertyNames,dt=Object.getOwnPropertySymbols,pt=Object.getOwnPropertyDescriptor,ut=Object.getPrototypeOf,mt=Object.prototype;function ft(e,t,r){if("string"!=typeof t){if(mt){var n=ut(t);n&&n!==mt&&ft(e,n,r)}var a=lt(t);dt&&(a=a.concat(dt(t)));for(var i=st(e),o=st(t),s=0;s<a.length;++s){var c=a[s];if(!(c in at||r&&r[c]||o&&c in o||i&&c in i)){var l=pt(t,c);try{ct(e,c,l)}catch(d){}}}}return e}function ht(e){return"function"==typeof e}function gt(e){return"object"==typeof e&&"styledComponentId"in e}function xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vt(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function bt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yt(e,t,r){if(void 0===r&&(r=!1),!r&&!bt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=yt(e[n],t[n]);else if(bt(t))for(var n in t)e[n]=yt(e[n],t[n]);return e}function wt(e,t){Object.defineProperty(e,"toString",{value:t})}function jt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var St=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw jt(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=n;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,i=n;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(_e);return t},e}(),Ct=new Map,kt=new Map,At=1,It=function(e){if(Ct.has(e))return Ct.get(e);for(;kt.has(At);)At++;var t=At++;return Ct.set(e,t),kt.set(t,e),t},Pt=function(e,t){At=t+1,Ct.set(e,t),kt.set(t,e)},zt="style[".concat($e,"][").concat(Re,'="').concat(Ne,'"]'),Et=new RegExp("^".concat($e,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$t=function(e,t,r){for(var n,a=r.split(","),i=0,o=a.length;i<o;i++)(n=a[i])&&e.registerName(t,n)},Ot=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(_e),a=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var c=s.match(Et);if(c){var l=0|parseInt(c[1],10),d=c[2];0!==l&&(Pt(d,l),$t(e,d,c[3]),e.getTag().insertRules(l,a)),a.length=0}else a.push(s)}}},Rt=function(e){for(var t=document.querySelectorAll(zt),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute($e)!==Oe&&(Ot(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Nt(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var _t=function(e){var t,r,n=document.head,a=e||n,i=document.createElement("style"),o=(t=a,(r=Array.from(t.querySelectorAll("style[".concat($e,"]"))))[r.length-1]),s=void 0!==o?o.nextSibling:null;i.setAttribute($e,Oe),i.setAttribute(Re,Ne);var c=Nt();return c&&i.setAttribute("nonce",c),a.insertBefore(i,s),i},Dt=function(){function e(e){this.element=_t(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw jt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(r){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Tt=function(){function e(e){this.element=_t(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Mt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),qt=De,Ft={isServer:!De,useCSSOMInjection:!Te},Lt=function(){function e(e,t,r){void 0===e&&(e=Fe),void 0===t&&(t={});var n=this;this.options=z(z({},Ft),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&De&&qt&&(qt=!1,Rt(this)),wt(this,function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a,i=(a=r,kt.get(a));if(void 0===i)return"continue";var o=e.names.get(i),s=t.getGroup(r);if(void 0===o||!o.size||0===s.length)return"continue";var c="".concat($e,".g").concat(r,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),n+="".concat(s).concat(c,'{content:"').concat(l,'"}').concat(_e)},i=0;i<r;i++)a(i);return n}(n)})}return e.registerId=function(e){return It(e)},e.prototype.rehydrate=function(){!this.server&&De&&Rt(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(z(z({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,r=e.target,n=e.isServer?new Mt(r):t?new Dt(r):new Tt(r),new St(n)));var e,t,r,n},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(It(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(It(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(It(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wt=/&/g,Gt=/^\s*\/\/.*$/gm;function Bt(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Bt(e.children,t)),e})}function Yt(e){var t,r,n,a=void 0===e?Fe:e,i=a.options,o=void 0===i?Fe:i,s=a.plugins,c=void 0===s?qe:s,l=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},d=c.slice();d.push(function(e){"rule"===e.type&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Wt,r).replace(n,l))}),o.prefix&&d.push(Ie),d.push(Ae);var p=function(e,a,i,s){void 0===a&&(a=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(Gt,""),l=be(i||a?"".concat(i," ").concat(a," { ").concat(c," }"):c);o.namespace&&(l=Bt(l,o.namespace));var p,u,m,f=[];return ke(l,(p=d.concat((m=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&m(e)})),u=X(p),function(e,t,r,n){for(var a="",i=0;i<u;i++)a+=p[i](e,t,r,n)||"";return a})),f};return p.hash=c.length?c.reduce(function(e,t){return t.name||jt(15),Je(e,t.name)},5381).toString():"",p}var Ut=new Lt,Vt=Yt(),Ht=ze.createContext({shouldForwardProp:void 0,styleSheet:Ut,stylis:Vt}),Xt=(Ht.Consumer,ze.createContext(void 0));function Jt(){return(0,ze.useContext)(Ht)}function Zt(e){var t=(0,ze.useState)(e.stylisPlugins),r=t[0],n=t[1],a=Jt().styleSheet,i=(0,ze.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),o=(0,ze.useMemo)(function(){return Yt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,ze.useEffect)(function(){(0,Pe.default)(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,ze.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:o}},[e.shouldForwardProp,i,o]);return ze.createElement(Ht.Provider,{value:s},ze.createElement(Xt.Provider,{value:o},e.children))}var Qt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Vt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,wt(this,function(){throw jt(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Vt),this.name+e.hash},e}(),Kt=function(e){return e>="A"&&e<="Z"};function er(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Kt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var tr=function(e){return null==e||!1===e||""===e},rr=function(e){var t,r,n=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!tr(i)&&(Array.isArray(i)&&i.isCss||ht(i)?n.push("".concat(er(a),":"),i,";"):bt(i)?n.push.apply(n,E(E(["".concat(a," {")],rr(i),!1),["}"],!1)):n.push("".concat(er(a),": ").concat((t=a,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in Ee||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function nr(e,t,r,n){return tr(e)?[]:gt(e)?[".".concat(e.styledComponentId)]:ht(e)?!ht(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:nr(e(t),t,r,n):e instanceof Qt?r?(e.inject(r,n),[e.getName(n)]):[e]:bt(e)?rr(e):Array.isArray(e)?Array.prototype.concat.apply(qe,e.map(function(e){return nr(e,t,r,n)})):[e.toString()];var a}function ar(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ht(r)&&!gt(r))return!1}return!0}var ir=Ze(Ne),or=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&ar(e),this.componentId=t,this.baseHash=Je(ir,t),this.baseStyle=r,Lt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=xt(n,this.staticRulesId);else{var a=vt(nr(this.rules,e,t,r)),i=He(Je(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=r(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}n=xt(n,i),this.staticRulesId=i}else{for(var s=Je(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var d=this.rules[l];if("string"==typeof d)c+=d;else if(d){var p=vt(nr(d,e,t,r));s=Je(s,p+l),c+=p}}if(c){var u=He(s>>>0);t.hasNameForId(this.componentId,u)||t.insertRules(this.componentId,u,r(c,".".concat(u),void 0,this.componentId)),n=xt(n,u)}}return n},e}(),sr=ze.createContext(void 0),cr=(sr.Consumer,{});function lr(e,t,r){var n,a=gt(e),i=e,o=!Ke(e),s=t.attrs,c=void 0===s?qe:s,l=t.componentId,d=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Ye(e);cr[r]=(cr[r]||0)+1;var n="".concat(r,"-").concat(Qe(Ne+r+cr[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,p=t.displayName,u=void 0===p?Ke(n=e)?"styled.".concat(n):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(n),")"):p,m=t.displayName&&t.componentId?"".concat(Ye(t.displayName),"-").concat(t.componentId):t.componentId||d,f=a&&i.attrs?i.attrs.concat(c).filter(Boolean):c,h=t.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;h=function(e,t){return g(e,t)&&x(e,t)}}else h=g}var v=new or(r,m,a?i.componentStyle:void 0);function b(e,t){return function(e,t,r){var n=e.attrs,a=e.componentStyle,i=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=ze.useContext(sr),d=Jt(),p=e.shouldForwardProp||d.shouldForwardProp,u=Le(t,l,i)||Fe,m=function(e,t,r){for(var n,a=z(z({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var o=ht(n=e[i])?n(a):n;for(var s in o)a[s]="className"===s?xt(a[s],o[s]):"style"===s?z(z({},a[s]),o[s]):o[s]}return t.className&&(a.className=xt(a.className,t.className)),a}(n,t,u),f=m.as||c,h={};for(var g in m)void 0===m[g]||"$"===g[0]||"as"===g||"theme"===g&&m.theme===u||("forwardedAs"===g?h.as=m.forwardedAs:p&&!p(g,f)||(h[g]=m[g]));var x,v,b,y=(x=a,v=m,b=Jt(),x.generateAndInjectStyles(v,b.styleSheet,b.stylis)),w=xt(o,s);return y&&(w+=" "+y),m.className&&(w+=" "+m.className),h[Ke(f)&&!We.has(f)?"class":"className"]=w,r&&(h.ref=r),(0,ze.createElement)(f,h)}(y,e,t)}b.displayName=u;var y=ze.forwardRef(b);return y.attrs=f,y.componentStyle=v,y.displayName=u,y.shouldForwardProp=h,y.foldedComponentIds=a?xt(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=m,y.target=a?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)yt(e,a[n],!0);return e}({},i.defaultProps,e):e}}),wt(y,function(){return".".concat(y.styledComponentId)}),o&&ft(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function dr(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var pr=function(e){return Object.assign(e,{isCss:!0})};function ur(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ht(e)||bt(e))return pr(nr(dr(qe,E([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?nr(n):pr(nr(dr(n,t)))}function mr(e,t,r){if(void 0===r&&(r=Fe),!t)throw jt(1,t);var n=function(n){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,r,ur.apply(void 0,E([n],a,!1)))};return n.attrs=function(n){return mr(e,t,z(z({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return mr(e,t,z(z({},r),n))},n}var fr=function(e){return mr(lr,e)},hr=fr;We.forEach(function(e){hr[e]=fr(e)});var gr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ar(e),Lt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var a=n(vt(nr(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&Lt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=Nt(),n=vt([r&&'nonce="'.concat(r,'"'),"".concat($e,'="true"'),"".concat(Re,'="').concat(Ne,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw jt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw jt(2);var r=e.instance.toString();if(!r)return[];var n=((t={})[$e]="",t[Re]=Ne,t.dangerouslySetInnerHTML={__html:r},t),a=Nt();return a&&(n.nonce=a),[ze.createElement("style",z({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Lt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw jt(2);return ze.createElement(Zt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw jt(3)}}();"__sc-".concat($e,"__");var xr=(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ur.apply(void 0,E([e],t,!1)),a="sc-global-".concat(Qe(JSON.stringify(n))),i=new gr(n,a),o=function(e){var t=Jt(),r=ze.useContext(sr),n=ze.useRef(t.styleSheet.allocateGSInstance(a)).current;return t.styleSheet.server&&s(n,e,t.styleSheet,r,t.stylis),ze.useLayoutEffect(function(){if(!t.styleSheet.server)return s(n,e,t.styleSheet,r,t.stylis),function(){return i.removeStyles(n,t.styleSheet)}},[n,e,t.styleSheet,r,t.stylis]),null};function s(e,t,r,n,a){if(i.isStatic)i.renderStyles(e,Me,r,a);else{var s=z(z({},t),{theme:Le(t,n,o.defaultProps)});i.renderStyles(e,s,r,a)}}return ze.memo(o)})`
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
`;const vr=hr.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  background: var(--background, #ffffff);
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,br=hr.img`
  height: 85px;
  cursor: pointer;
`,yr=hr.button`
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
`,wr=hr.nav`
  display: flex;
  align-items: center;

  /* aplica apenas ao item 'conversa' */
li[data-id="conversa"] a {
  color: var(--primary, #1582eeff);
  font-weight: 600;
}

.consultor {
  color: #2f86ddd5;
  font-weight: 600;

  &:hover {
    color: #044c95;
  }
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
`,jr=hr.ul`
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
`;var Sr=k(),Cr=({items:e=null,logoSrc:t="/wm-consultoria/assets/logo-Dhac88re.png"})=>{const r=e||[{id:"inicio",label:"Início",href:"#inicio"},{id:"sobre",label:"Sobre",href:"#sobre"},{id:"servicos",label:"Serviços",href:"#servicos"},{id:"contato",label:"Contato",href:"#contato"},{id:"conversa",label:"Conversar com Consultor",href:"#conversa",className:"consultor"}],[n,a]=(0,ze.useState)(!1);return(0,ze.useEffect)(()=>{const e=()=>{window.innerWidth>768&&a(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,Sr.jsxs)(vr,{children:[(0,Sr.jsx)(br,{src:t,alt:"Logo Weligton Consultoria"}),(0,Sr.jsxs)(yr,{onClick:()=>a(e=>!e),"aria-expanded":n,"aria-label":n?"Fechar menu":"Abrir menu",children:[(0,Sr.jsx)("span",{}),(0,Sr.jsx)("span",{}),(0,Sr.jsx)("span",{})]}),(0,Sr.jsx)(wr,{open:n,role:"navigation","aria-label":"Navegação principal",children:(0,Sr.jsx)(jr,{children:r.map(e=>(0,Sr.jsx)("li",{children:(0,Sr.jsx)("a",{href:e.href,className:e.className,children:e.label})},e.id))})})]})};const kr=hr.footer`
  background: var(--primary, #e2e2e2); /* mesma cor do logo (usa variável se existir) */
  color: #fff;
  padding: 0.5rem 1rem;
`,Ar=hr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
`,Ir=hr.img`
  height: 86px;
`,Pr=hr.div`
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
`,zr=hr.p`
  margin: 0.25rem 0 0 0;
  width: 395px;
  font-size: 0.95rem;
  color: #000; /* texto em preto */
`,Er=hr.span`
  color: var(--accent, #0b74de); /* WillDev em azul */
  font-weight: 700;
`;var $r=()=>{const e=(new Date).getFullYear(),t=[{id:"instagram",Icon:h,href:"https://www.instagram.com/brav.owear/"},{id:"linkedin",Icon:l,href:"https://www.linkedin.com/in/willian-miranda-de-oliveira-7195642ba/"},{id:"whatsapp",Icon:j,href:"https://wa.me/5527997916541"}];return(0,Sr.jsx)(kr,{children:(0,Sr.jsxs)(Ar,{children:[(0,Sr.jsx)(Ir,{src:"/wm-consultoria/assets/logo-1-ZlNOkMDf.png",alt:"Logo"}),(0,Sr.jsx)(Pr,{"aria-label":"redes sociais",children:t.map(e=>(0,Sr.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.id,title:e.id,children:(0,Sr.jsx)(e.Icon,{size:24})},e.id))}),(0,Sr.jsxs)(zr,{children:["© ",e," Todos os Direitos Reservados a ",(0,Sr.jsx)("strong",{children:"WM Consultoria"}),". Desenvolvido por ",(0,Sr.jsx)(Er,{children:"WillDev"}),"."]})]})})};const Or=hr.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;const Rr=hr.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${"/wm-consultoria/assets/fundo-perfil-CW9g-leQ.png"});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 70vh;
`,Nr=hr.section`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

`,_r=hr.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    margin-right: 6.3rem;
    gap: 12px;
    color: #000;

    @media (max-width: 768px) {
        margin-right: 0;
        padding: 2rem;
    }
`,Dr=hr.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`,Tr=hr.p`
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 720px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;var Mr=()=>(0,Sr.jsx)(Rr,{id:"inicio",children:(0,Sr.jsx)(Nr,{children:(0,Sr.jsxs)(_r,{children:[(0,Sr.jsx)(Dr,{children:"SOMOS O APOIO ESTRATÉGICO DA SUA EMPRESA"}),(0,Sr.jsx)(Tr,{children:"Redefina o futuro da sua equipe e impulsione para o sucesso. Consultoria Administrativa, Planejamento estratégico, Recrutaento e seleção, Treinamentos, Planos de Cargo e Salários."})]})})});const qr=hr.section`
  padding: 4.8rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Fr=hr.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text, #111);
`,Lr=hr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.1rem;

  @media (max-width: 764px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 516px) {
    grid-template-columns: 1fr;
  }
`,Wr=hr.article`
  background: var(--card-bg, #d6d6d680);
  border-radius: 12px;
  padding: 2.85rem;
  box-shadow: 0 10px 25px rgba(69, 69, 69, 0.65);
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
`,Gr=hr.div`
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
`,Br=hr.h3`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  color: var(--text, #111);
  /* centraliza o título quando o card estiver alinhado ao centro */
  text-align: center;
`,Yr=hr.button`
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

  &:hover{
    background: var(--primary, #0b74de);
    color: #fff;
    transform: translateY(-2px);
  }
`;var Ur=()=>{const e=[{id:1,title:"Consultoria Empresarial",color:"#0b74de",icon:(0,Sr.jsx)(c,{"aria-hidden":!0})},{id:3,title:"Treinamentos e Palestras",color:"#7be495",icon:(0,Sr.jsx)(w,{"aria-hidden":!0})},{id:4,title:"Desenvolvimento Profissional",color:"#0f9d58",icon:(0,Sr.jsx)(g,{"aria-hidden":!0})}];return(0,Sr.jsxs)(qr,{id:"servicos",children:[(0,Sr.jsx)(Fr,{children:"Nossos Serviços"}),(0,Sr.jsx)(Lr,{children:e.map(e=>(0,Sr.jsxs)(Wr,{tabIndex:0,"aria-labelledby":`card-title-${e.id}`,children:[(0,Sr.jsx)(Gr,{style:{borderColor:e.color,color:e.color},"aria-hidden":!0,children:e.icon}),(0,Sr.jsx)(Br,{id:`card-title-${e.id}`,children:e.title}),(0,Sr.jsx)(Yr,{type:"button",onClick:()=>(e=>{const t=encodeURIComponent(`Olá, gostaria de saber mais sobre seus serviços de ${e}!`);window.open(`https://wa.me/5527997916541?text=${t}`,"_blank")})(e.title),"aria-label":"Saiba mais sobre este serviço",children:"Saiba Mais..."})]},e.id))})]})};const Vr=hr.section`
  background: linear-gradient(180deg, #707066 0%, #707070 100%);
  color: #fff;
  padding: 3rem 1rem;
`,Hr=hr.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Xr=hr.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  padding: 1.5rem 0;
`,Jr=hr.p`
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: rgba(255,255,255,0.95);
  font-size: 1.2rem;
`,Zr=hr.div`
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
`,Qr=hr.article`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 10px;
  
`,Kr=hr.div`
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
`,en=hr.h3`
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
  color: #fff;
`;var tn=()=>{const e=[{id:1,title:"Expertise e Experiência",icon:(0,Sr.jsx)(r,{"aria-hidden":!0})},{id:2,title:"Tecnologia Avançada",icon:(0,Sr.jsx)(f,{"aria-hidden":!0})},{id:3,title:"Foco no Cliente",icon:(0,Sr.jsx)(u,{"aria-hidden":!0})},{id:4,title:"Inovação Contínua",icon:(0,Sr.jsx)(m,{"aria-hidden":!0})},{id:5,title:"Gestão Estratégica de Pessoas",icon:(0,Sr.jsx)(v,{"aria-hidden":!0})}];return(0,Sr.jsx)(Vr,{children:(0,Sr.jsxs)(Hr,{children:[(0,Sr.jsx)(Xr,{children:"Diferenciais"}),(0,Sr.jsx)(Jr,{children:"A WM é uma empresa de consultoria formada por um profissional altamente experiente, o que garante uma atuação sólida, objetiva e com uma visão ampla para identificar as necessidades reais do seu negócio. Nosso compromisso é entregar soluções estratégicas, inovadoras e realmente eficazes sempre indo além do esperado. Trabalha para transformar a gestão de pessoas em uma força competitiva, capaz de impulsionar resultados e fortalecer a performance das organizações que confiam em nosso trabalho."}),(0,Sr.jsx)(Zr,{children:e.map(e=>(0,Sr.jsxs)(Qr,{tabIndex:0,"aria-label":e.title,children:[(0,Sr.jsx)(Kr,{"aria-hidden":!0,children:e.icon}),(0,Sr.jsx)(en,{children:e.title})]},e.id))})]})})};const rn=hr.main`
    display: flex;
    position: relative;
    flex-direction: column;
    background-image: url(${"/wm-consultoria/assets/perfil-1-3XaBqZAJ.jpeg"});
    background-size: cover;
    background-repeat: no-repeat;

        &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }


    @media (max-width: 516px) {
        background-position: right;
    }
`,nn=hr.section`
    min-height: 75vh;
    display: flex;
    align-items: center;
    margin-left: 10rem;
    padding-left: 3rem ;
    gap: 2rem;
    

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding-left: 0;
        margin-left: 0;
    }

    @media (max-width: 516px) {
        padding: 1rem;
        justify-content: center;
        align-items: center;
        text-align: start;
    }
`,an=hr.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    z-index: 5;
    gap: 12px;
    color: #fff;

`,on=hr.h3`
    margin-bottom: 1.2rem;
    font-size: 2em;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`,sn=hr.p`
    margin: 0;
    line-height: 1.5;
    font-size: 1.1em;
    max-width: 440px;
    
    @media (max-width: 768px) {
        font-size: 1em;
    }
`,cn=hr.button`
    margin-top: 14px;
    width: fit-content;
    background: #0d6efd;
    color: #fff;
    border: none;
    padding: 10px 16px;
    cursor: pointer;
    transition: background 180ms;

    &:hover { background: #084fca; }
`;var ln=()=>(0,Sr.jsx)(rn,{children:(0,Sr.jsx)(nn,{children:(0,Sr.jsxs)(an,{children:[(0,Sr.jsx)(on,{children:"Estamos constantemente inovando e aprimorando nossos serviços"}),(0,Sr.jsx)(sn,{children:"Utilizamos as mais recentes tecnologias e ferramentas de Consultoria, Treinamento e Coaching, para otimizar processos e garantir resultados precisos e rápidos."}),(0,Sr.jsx)(cn,{onClick:e=>{e.preventDefault(),window.open("https://wa.me/5527997916541?text="+encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços."),"_blank")},children:"Tire suas dúvidas"})]})})});const dn=hr.section`
    width: 100%;
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
`,pn=hr.h2`
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 3rem;
    max-width: 1100px;
    padding: 0 16px;
`,un=hr.ul`
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
`,mn=hr.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
`,fn=hr.div`
    font-size: 2em;
    margin: 0 0 12px;
`,hn=hr.p`
    font-size: 1em;
    line-height: 1.5;
    text-align: left;`;var gn=()=>{const e=[{id:1,icon:(0,Sr.jsx)(p,{"aria-hidden":!0}),text:"Para ter em sua empresa profissionais que fazem a diferença, que envolvem a equipe em treinamentos, que promovem o engajamento e melhoria dos resultados."},{id:2,icon:(0,Sr.jsx)(w,{"aria-hidden":!0}),text:"Para tirar os planos do papel, contando com um parceiro para ajudar implementar ações estratégicas."},{id:3,icon:(0,Sr.jsx)(x,{"aria-hidden":!0}),text:"Para promover o crescimento que tanto precisa, desenvolver a liderança, extrair o melhor de cada profissional e transformar sua empresa em uma organização que valoriza, potencializa e desenvolve seus profissionais."},{id:4,icon:(0,Sr.jsx)(A,{"aria-hidden":!0}),text:"Para profissionalizar os processos internos, treinar a equipe e melhorar a qualidade de produtos e serviços."},{id:5,icon:(0,Sr.jsx)(a,{"aria-hidden":!0}),text:"Para realizar mudanças e transições na empresa, que não consegue sozinhos."},{id:6,icon:(0,Sr.jsx)(S,{"aria-hidden":!0}),text:"Para reduzir o turnover e atrair talentos."},{id:7,icon:(0,Sr.jsx)(b,{"aria-hidden":!0}),text:"Para definir planos estratégicos e envolver a equipe para que sejam realizados."},{id:8,icon:(0,Sr.jsx)(d,{"aria-hidden":!0}),text:"Para se recolocar no mercado de trabalho de forma estratégica e com apoio de uma equipe experiente."}];return(0,Sr.jsxs)(dn,{children:[(0,Sr.jsx)(pn,{children:"Por que contratar nossos serviços?"}),(0,Sr.jsx)(un,{children:e.map(e=>(0,Sr.jsxs)(mn,{children:[(0,Sr.jsx)(fn,{children:e.icon}),(0,Sr.jsx)(hn,{children:e.text})]},e.id))})]})};const xn=hr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 3rem 2rem;
    background-color: #f2f2f2;
`,vn=hr.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #222;
`,bn=hr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 800px;
`,yn=hr.button`
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
`,wn=hr.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    
    /* Mobile: 1 card */
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`,jn=hr.div`
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

`,Sn=hr.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Cn=hr.p`
    font-style: italic;
    margin: 10px 0;
`,kn=hr.h3`
    margin: 10px 0 5px;
    color: #222;
`,An=hr.p`
    color: #666;
    margin: 0 0 10px;
`,In=hr.div`
    display: flex;
    gap: 8px;
    margin-top: 20px;
`,Pn=hr.button`
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
`;var zn=()=>{const e=[{nome:"João Silva",cargo:"Desenvolvedor Front-end",foto:"https://randomuser.me/api/portraits/men/1.jpg",texto:"O Weligton é um profissional excepcional! Sua dedicação e habilidades técnicas são impressionantes. Trabalhar com ele foi uma experiência enriquecedora."},{nome:"Maria Oliveira",cargo:"Gerente de Projetos",foto:"https://randomuser.me/api/portraits/women/2.jpg",texto:"Weligton demonstrou grande competência e proatividade em todos os projetos que participou. Sua capacidade de resolver problemas é notável."},{nome:"Carlos Pereira",cargo:"Designer UX/UI",foto:"https://randomuser.me/api/portraits/men/3.jpg",texto:"Trabalhar com Weligton foi uma experiência fantástica. Ele é criativo, colaborativo e sempre busca entregar o melhor resultado possível."},{nome:"Ana Souza",cargo:"Analista de Sistemas",foto:"https://randomuser.me/api/portraits/women/4.jpg",texto:"Weligton é um profissional dedicado e competente. Sua habilidade em comunicação e trabalho em equipe faz toda a diferença nos projetos."}],[t,r]=(0,ze.useState)(0),n=()=>window.innerWidth<=480?1:2,[a,i]=(0,ze.useState)(n());(0,ze.useEffect)(()=>{const e=()=>{i(n())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);return(0,Sr.jsxs)(xn,{children:[(0,Sr.jsx)(vn,{children:"Depoimentos"}),(0,Sr.jsxs)(bn,{children:[(0,Sr.jsx)(yn,{onClick:()=>{r(t=>{const r=t-a;return r<0?e.length-a:r})},"aria-label":"Anterior",children:(0,Sr.jsx)(C,{size:24})}),(0,Sr.jsx)(wn,{children:e.slice(t,(()=>{const r=t+a;return r>e.length?e.length:r})()).map((e,r)=>(0,Sr.jsxs)(jn,{children:[(0,Sr.jsx)(Sn,{src:e.foto,alt:`Foto de ${e.nome}`}),(0,Sr.jsx)(kn,{children:e.nome}),(0,Sr.jsx)(An,{children:e.cargo}),(0,Sr.jsx)(Cn,{children:e.texto})]},t+r))}),(0,Sr.jsx)(yn,{onClick:()=>{r(t=>{const r=t+a;return r>=e.length?0:r})},"aria-label":"Próximo",children:(0,Sr.jsx)(o,{size:24})})]}),(0,Sr.jsx)(In,{children:Array.from({length:Math.ceil(e.length/a)}).map((e,n)=>(0,Sr.jsx)(Pn,{isActive:Math.floor(t/a)===n,onClick:()=>(e=>{r(e)})(n*a),"aria-label":`Ir para grupo de depoimentos ${n+1}`},n))})]})};const En=hr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5rem 2rem;
    background-color: #fff;
`,$n=hr.h2`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #222;
`,On=hr.p`
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
`,Rn=hr.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    position: relative;
`,Nn=hr.button`
    // POSIÇÃO: Posicionamento absoluto baseado na direção
    position: ${e=>(e.direction,"absolute")};
    ${e=>"left"===e.direction?"left: -60px;":"right: -60px;"}
    
    // ESTILO: Aparência do botão
    background: rgba(99, 99, 99, 0.61);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    // HOVER: Efeitos ao passar o mouse
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
    
    // ACTIVE: Efeito ao clicar
    &:active {
        transform: scale(0.95);
    }
    
    // RESPONSIVO: Ajustes para telas menores
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        ${e=>"left"===e.direction?"left: -45px;":"right: -45px;"}
    }
    
    @media (max-width: 480px) {
        width: 35px;
        height: 35px;
        ${e=>"left"===e.direction?"left: -35px;":"right: -35px;"}
    }
`,_n=hr.div`
    width: 100%;
    max-width: 1000px;
    overflow: hidden;
    position: relative;
    margin: 2rem 0;
    border-radius: 12px;
`,Dn=hr.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${e=>220*e.position}px);
    
    // RESPONSIVO: Ajuste do movimento baseado no tamanho da tela
    @media (max-width: 1024px) {
        transform: translateX(-${e=>260*e.position}px);
    }
    
    @media (max-width: 768px) {
        transform: translateX(-${e=>180*e.position}px);
    }
    
    @media (max-width: 600px) {
        transform: translateX(-${e=>160*e.position}px);
    }
    
    @media (max-width: 480px) {
        transform: translateX(-${e=>140*e.position}px);
    }
`,Tn=hr.div`
    // LAYOUT: Flexbox centralizado
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    // DIMENSÕES: Tamanho mínimo e espaçamento
    min-width: 180px;
    margin: 0 10px;
    padding: 1.5rem;
    
    // APARÊNCIA: Visual moderno com sombras
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    // HOVER: Efeito de elevação ao passar o mouse
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    // RESPONSIVO: Ajustes para diferentes tamanhos de tela
    @media (max-width: 1024px) {
        min-width: 220px;
        margin: 0 10px;
    }
    
    @media (max-width: 768px) {
        min-width: 140px;
        margin: 0 8px;
        padding: 1rem;
    }
    
    @media (max-width: 600px) {
        min-width: 120px;
        margin: 0 5px;
        padding: 1rem;
    }
    
    @media (max-width: 480px) {
        min-width: 100px;
        margin: 0 2px;
        padding: 0.8rem;
    }
`,Mn=hr.img`
    // DIMENSÕES: Tamanho fixo para consistência
    width: 120px;
    height: 60px;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    // HOVER: Efeito de zoom sutil ao passar o mouse
    &:hover {
        transform: scale(1.05);
    }
    
    // RESPONSIVO: Ajuste para telas menores
    @media (max-width: 768px) {
        width: 90px;
        height: 45px;
    }
    
    @media (max-width: 600px) {
        width: 70px;
        height: 35px;
    }
    
    @media (max-width: 480px) {
        width: 50px;
        height: 25px;
    }
`,qn=(hr.h3`
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 0.5rem;
`,hr.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`),Fn=hr.button`
    // APARÊNCIA: Estilo base do ponto
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${e=>e.isActive?"#5561ac":"#ccc"};
    transition: all 0.3s ease;
    
    // TAMANHO: Maior quando ativo
    ${e=>e.isActive&&"\n        width: 14px;\n        height: 14px;\n        transform: scale(1.2);\n    "}
    
    // HOVER: Efeito ao passar o mouse
    &:hover {
        background-color: ${e=>e.isActive?"#5561ac":"#999"};
        transform: ${e=>e.isActive?"scale(1.2)":"scale(1.1)"};
    }
    
    // FOCUS: Estilo para acessibilidade
    &:focus {
        outline: 2px solid #5561ac;
        outline-offset: 2px;
    }
`;var Ln=()=>{const e=[{id:1,logo:"https://cdn6.f-cdn.com/contestentries/2220272/58801622/640732f63a225_thumb900.jpg"},{id:2,logo:"https://static.vecteezy.com/ti/vetor-gratis/p1/19073761-unidade-de-logotipo-da-matriz-logotipo-do-nome-da-empresa-ficticia-da-matriz-gratis-vetor.jpg"},{id:3,logo:"https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612818.jpg"},{id:4,logo:"https://thumbs.dreamstime.com/b/airmail-arte-vetorial-de-logotipo-empresa-fict%C3%ADcia-uma-ficcional-com-um-s%C3%ADmbolo-avi%C3%A3o-em-papel-ilustra%C3%A7%C3%A3o-para-empresas-e-180612571.jpg"},{id:5,logo:"https://turbologo.com/articles/wp-content/uploads/2019/08/Bank-of-America-logo.png"},{id:6,logo:"https://img.freepik.com/vetores-premium/logo-ficticio-una-buena-idea_471774-60.jpg"},{id:7,logo:"https://static.vecteezy.com/ti/vetor-gratis/p1/9032499-fic-logo-fic-letter-fic-letter-logo-design-initials-fic-logo-linked-with-circle-and-uppercase-monogram-logo-fic-typography-for-technology-business-and-real-marca-imobiliaria-vetor.jpg   "}],t=(0,ze.useRef)(null),r=[...e,...e],[n,a]=(0,ze.useState)(0),[i,s]=(0,ze.useState)(!0);(0,ze.useEffect)(()=>{if(!i)return;const t=setInterval(()=>{a(t=>t>=e.length?0:t+1)},3e3);return()=>clearInterval(t)},[e.length,i]);const c=()=>{setTimeout(()=>s(!0),5e3)};return(0,Sr.jsxs)(En,{children:[(0,Sr.jsx)($n,{children:"Quem Já Tem Conexão Com Weligton"}),(0,Sr.jsx)(On,{children:"Nossos Clientes e Parceiros"}),(0,Sr.jsxs)(Rn,{children:[(0,Sr.jsx)(Nn,{direction:"left",onClick:()=>{s(!1),a(t=>t<=0?e.length-1:t-1)},onMouseUp:c,"aria-label":"Slide anterior",children:(0,Sr.jsx)(C,{size:24})}),(0,Sr.jsx)(_n,{ref:t,children:(0,Sr.jsx)(Dn,{position:n,children:r.map((e,t)=>(0,Sr.jsx)(Tn,{children:(0,Sr.jsx)(Mn,{src:e.logo,alt:`Cliente ${e.id}`})},`${e.id}-${t}`))})}),(0,Sr.jsx)(Nn,{direction:"right",onClick:()=>{s(!1),a(t=>t>=e.length-1?0:t+1)},onMouseUp:c,"aria-label":"Próximo slide",children:(0,Sr.jsx)(o,{size:24})})]}),(0,Sr.jsx)(qn,{children:e.map((e,t)=>(0,Sr.jsx)(Fn,{isActive:t===n,onClick:()=>{a(t),s(!1),c()},"aria-label":`Ir para slide ${t+1}`},t))})]})};const Wn=hr.div`
    padding: 40px 20px;
    background-color: #5561ac;
    color: #fff;
    text-align: center;
    width: 100%;
`,Gn=hr.div`
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
`,Bn=hr.h1`
    width: 800px;
    text-align: start;
    margin: 0 auto;
    font-size: 2em;
    font-weight: bold;
`,Yn=hr.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem;
`,Un=hr.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`,Vn=hr.h2`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
`,Hn=hr.p`
    font-size: 1.2rem;
`;var Xn=()=>{const e=[{id:1,number:"239",description:"Profissionais Desenvolvidos",icon:s},{id:2,number:"4",description:"Palestras",icon:b},{id:3,number:"120",description:"Recrutamentos Realizados",icon:y},{id:4,number:"50",description:"Empresas Parceiras",icon:I}];return(0,Sr.jsxs)(Wn,{children:[(0,Sr.jsx)(Bn,{children:"Desde 2026"}),(0,Sr.jsx)(Gn,{children:e.map(e=>(0,Sr.jsxs)(Yn,{children:[(0,Sr.jsx)(Un,{as:e.icon}),(0,Sr.jsx)(Vn,{children:e.number}),(0,Sr.jsx)(Hn,{children:e.description})]},e.id))})]})};const Jn=hr.section`
  background: #f2f2f2;
`,Zn=hr.div`
  max-width: 880px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 1.3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Qn=hr.div`
  flex: 1;
`,Kn=hr.div`
  width: 330px;
`,ea=hr.h2`
  font-size: 2.2rem;
  width: 330px;
  text-align: center;
  margin: 0;
  color: var(--text, #111);
`,ta=hr.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ra=hr.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,na=hr.label`
  font-size: 1rem;
  color: var(--muted, #555);
`,aa=hr.input`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
`,ia=hr.textarea`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  font-size: 0.95rem;
  resize: vertical;
`,oa=hr.small`
  color: var(--muted, #666);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`,sa=hr.button`
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
`,ca=hr.a`
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

`;var la=()=>(0,Sr.jsx)(Jn,{id:"contato",children:(0,Sr.jsxs)(Zn,{children:[(0,Sr.jsx)(Qn,{children:(0,Sr.jsx)(ea,{children:"Como Podemos te Ajudar"})}),(0,Sr.jsxs)(Kn,{children:[(0,Sr.jsxs)(ta,{onSubmit:e=>{e.preventDefault();const t=new FormData(e.target),r=`Novo contato pelo site\n\nNome: ${t.get("name")}\nEmail: ${t.get("email")}\nMensagem:\n${t.get("message")}`,n=`https://wa.me/5527997916541?text=${encodeURIComponent(r)}`;window.open(n,"_blank")},children:[(0,Sr.jsxs)(ra,{children:[(0,Sr.jsx)(na,{htmlFor:"name",children:"Nome:"}),(0,Sr.jsx)(aa,{id:"name",name:"name",type:"text",placeholder:"Seu nome",required:!0,"aria-describedby":"name-help"}),(0,Sr.jsx)(oa,{id:"name-help",children:"Seu nome para identificação"})]}),(0,Sr.jsxs)(ra,{children:[(0,Sr.jsx)(na,{htmlFor:"email",children:"E-mail:"}),(0,Sr.jsx)(aa,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",required:!0,"aria-describedby":"email-help"}),(0,Sr.jsx)(oa,{id:"email-help",children:"Seu e-mail será usado apenas para resposta"})]}),(0,Sr.jsxs)(ra,{children:[(0,Sr.jsx)(na,{htmlFor:"message",children:"Mensagem:"}),(0,Sr.jsx)(ia,{id:"message",name:"message",rows:5,placeholder:"Digite sua mensagem aqui...",required:!0,"aria-describedby":"message-help"}),(0,Sr.jsx)(oa,{id:"message-help",children:"Descreva como podemos ajudar você"})]}),(0,Sr.jsx)(sa,{type:"submit",children:"Enviar Mensagem"})]}),(0,Sr.jsx)(ca,{href:"https://wa.me/5527997916541",target:"_blank",rel:"noopener noreferrer","aria-label":"Contato via WhatsApp",children:(0,Sr.jsx)(j,{size:32})})]})]})}),da=()=>(0,Sr.jsxs)(Or,{children:[(0,Sr.jsx)(Mr,{}),(0,Sr.jsx)(Ur,{}),(0,Sr.jsx)(tn,{}),(0,Sr.jsx)(ln,{}),(0,Sr.jsx)(gn,{}),(0,Sr.jsx)(zn,{}),(0,Sr.jsx)(Ln,{}),(0,Sr.jsx)(Xn,{}),(0,Sr.jsx)(la,{})]});(0,P.createRoot)(document.getElementById("root")).render((0,Sr.jsxs)(Sr.Fragment,{children:[(0,Sr.jsx)(xr,{}),(0,Sr.jsx)(Cr,{}),(0,Sr.jsx)(da,{}),(0,Sr.jsx)($r,{})]}));