(()=>{"use strict";var t={46:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),c=n.n(i),u=n(538),a=c()(o());a.i(u.Z),a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);"]),a.push([t.id,'body{font-family:"Roboto",sans-serif;background-color:#f5f5f5;color:#404040;width:100vw;height:100vh;overflow-x:hidden;overflow-y:hidden}*::first-letter{text-transform:uppercase}button{display:flex;justify-content:center;align-items:center;cursor:pointer;color:inherit}button:has(.material-symbols-rounded){padding:0;background-color:inherit;border:none}input,select{box-sizing:border-box}.material-symbols-rounded{color:inherit;font-size:inherit;font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-thumb{border-radius:15px;background-color:#a3a3a3}',""]);const l=a},538:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const u=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var u=0;u<this.length;u++){var a=this[u][0];null!=a&&(c[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],u=0;u<t.length;u++){var a=t[u],l=r.base?a[0]+r.base:a[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var p=n(f),y={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)e[p].references++,e[p].updater(y);else{var h=o(y,r);r.byIndex=u,e.splice(u,0,{identifier:f,updater:h,references:1})}c.push(f)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var u=n(i[c]);e[u].references--}for(var a=r(t,o),l=0;l<i.length;l++){var s=n(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=a}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),c=n.n(i),u=n(565),a=n.n(u),l=n(216),s=n.n(l),f=n(589),p=n.n(f),y=n(46),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),e()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const d=function(){function t(t){this._root=t}return Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this.root.id},set:function(t){this.root.id=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"classList",{get:function(){return this.root.classList},enumerable:!1,configurable:!0}),t.prototype.addClass=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.classList).add.apply(t,e)},t.prototype.removeClass=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.classList).remove.apply(t,e)},t}();var b,v=(b=function(t,e){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},b(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}b(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),m=function(t){function e(e,n){var r=t.call(this,e)||this;return r.name=n,r}return v(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t,this.root.name=this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.root.value},set:function(t){this.root.value=t},enumerable:!1,configurable:!0}),e}(d);const _=m;var w=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const g=function(t){function e(e,n){var r=t.call(this,document.createElement("input"),n)||this;return r.type=e,r}return w(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this.root.type=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valueAsDate",{get:function(){return this.root.valueAsDate},set:function(t){this.root.valueAsDate=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valueAsNumber",{get:function(){return this.root.valueAsNumber},set:function(t){this.root.valueAsNumber=t},enumerable:!1,configurable:!0}),e}(_);var O=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const x=function(t){function e(e){return t.call(this,"search",e)||this}return O(e,t),e}(g);var j=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const P=function(t){function e(e){var n=t.call(this,document.createElement("option"))||this;return e&&(e.value&&(n.value=e.value),e.text&&(n.text=e.text),e.key&&(n.key=e.key)),n}return j(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t,this.root.value=this._value.toString()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t,this.root.textContent=this._text},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this._key},set:function(t){this._key=t},enumerable:!1,configurable:!0}),e}(d);var k=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const C=function(t){function e(e,n){var r=t.call(this,document.createElement("select"),e)||this;return r._options=[],n&&(r.options=n),r}return k(e,t),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},set:function(t){var e,n=[];t.forEach((function(t){var e=new P(t);n.push(e)})),this._options=n,(e=this.root).replaceChildren.apply(e,this._options.map((function(t){return t.root})))},enumerable:!1,configurable:!0}),e}(_);var E=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(t){function e(e,n){var r=t.call(this,document.createElement("div"))||this;return r.addClass("form-field"),r._label=e,r._control=n,r.root.append(r.label.root,r.control.root),r}return E(e,t),Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"control",{get:function(){return this._control},enumerable:!1,configurable:!0}),e.prototype.setValid=function(t){this.addClass(t?"valid":"invalid"),this.removeClass(t?"invalid":"valid")},e.prototype.removeValidity=function(){this.removeClass("valid","invalid")},e}(d);const T=S;var A=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const z=function(t){function e(e,n){var r=t.call(this,document.createElement("label"))||this;return r.text=e,r.htmlFor=n,r}return A(e,t),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t,this.root.textContent=this._text},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"htmlFor",{get:function(){return this._htmlFor},set:function(t){this._htmlFor=t,this.root.htmlFor=this._htmlFor},enumerable:!1,configurable:!0}),e}(d);var L=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const F=function(t){function e(){return t.call(this,document.createElement("div"))||this}return L(e,t),e}(d);var M=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const q=function(t){function e(){return t.call(this)||this}return M(e,t),e}(F),I=function(){};var R=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),G=function(t){function e(e){var n=t.call(this)||this;return n.city=e.city,n.overall=e.overall,n.detailed=e.detailed,n}return R(e,t),Object.defineProperty(e.prototype,"city",{get:function(){return this._city},set:function(t){this._city=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overall",{get:function(){return this._overall},set:function(t){this._overall=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"detailed",{get:function(){return this._detailed},set:function(t){this._detailed=t},enumerable:!1,configurable:!0}),e.prototype.getRawObject=function(){return{city:this.city,overall:this.overall,detailed:this.detailed}},e}(I);const N=function(){function t(){}return t.prototype.get=function(t,e){return void 0===e&&(e={}),n=this,r=void 0,i=function(){return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(n){switch(n.label){case 0:return[4,fetch(t,{method:"GET",headers:e})];case 1:return[2,n.sent().json()]}}))},new((o=void 0)||(o=Promise))((function(t,e){function c(t){try{a(i.next(t))}catch(t){e(t)}}function u(t){try{a(i.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(c,u)}a((i=i.apply(n,r||[])).next())}));var n,r,o,i},t}();var Z=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const D=function(t){function e(e){var n=t.call(this)||this;return n.fetchAPI=new N,n.domain="open-meteo.com/v1/",n.subdomain=e||"api",n.url="https://".concat(n.subdomain,".").concat(n.domain),n}return Z(e,t),e.prototype.get=function(t){return e=this,n=void 0,o=function(){return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){switch(e.label){case 0:return[4,this.fetchAPI.get(this.url+t).then((function(t){return t}))];case 1:return[2,e.sent()]}}))},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,u)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o},e}((function(){}));var H=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),U=function(t){function e(){return t.call(this,"api")||this}return H(e,t),e.prototype.getCityForecast=function(t){return e=this,n=void 0,o=function(){var e,n,r,o,i,c,u,a,l,s;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(f){switch(f.label){case 0:return[4,this.get("forecast"+"?latitude=".concat(t.latitude)+"&longitude=".concat(t.longitude)+"&timezone=".concat(t.timezone)+"&hourly=weathercode,temperature_2m,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max")];case 1:if(!(e=f.sent()))return[2];for(n=e.daily,r=n.time.length,o=[],i=0;i<r;++i){for(c=[],a=u=24*i;a<u+24;++a)l=e.hourly,c.push({dateTime:l.time[a],weathercode:l.weathercode[a],temperature:l.temperature_2m[a],windspeed:l.windspeed_10m[a]});s={dateTime:n.time[i],weathercode:n.weathercode[i],windspeed:n.windspeed_10m_max[i],temperatureMin:n.temperature_2m_min[i],temperatureMax:n.temperature_2m_max[i]},o.push(new G({city:t,overall:s,detailed:c}))}return[2,o]}}))},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,u)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o},e}(D);const V=U;var J=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(t){function e(e){var n=t.call(this)||this;return n.name=e.name,n.country=e.country,n.admin=e.admin,n.latitude=e.latitude,n.longitude=e.longitude,n.timezone=e.timezone,n}return J(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"country",{get:function(){return this._country},set:function(t){this._country=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"admin",{get:function(){return this._admin},set:function(t){this._admin=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"latitude",{get:function(){return this._latitude},set:function(t){this._latitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"longitude",{get:function(){return this._longitude},set:function(t){this._longitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timezone",{get:function(){return this._timezone},set:function(t){this._timezone=t},enumerable:!1,configurable:!0}),e.prototype.getRawObject=function(){return{name:this.name,country:this.country,admin:this.admin,latitude:this.latitude,longitude:this.longitude,timezone:this.timezone}},e}(I),K=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Q=function(t){function e(){return t.call(this,"geocoding-api")||this}return K(e,t),e.prototype.searchCity=function(t){return e=this,n=void 0,o=function(){var e;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(n){switch(n.label){case 0:return[4,this.get("search?name=".concat(t))];case 1:return(e=n.sent()).results?[2,e.results.map((function(t){var e=t.admin1;return t.admin2&&(e+=", "+t.admin2),new B({name:t.name,country:t.country,admin:e,latitude:t.latitude,longitude:t.longitude,timezone:t.timezone})}))]:[2,[]]}}))},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,u)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o},e}(D);const W=Q;var X=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))},Y=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},$=new q;document.body.appendChild($.root);var tt=new W,et=new V,nt=new T(new z("Enter your city","city-search"),new x("city-search"));nt.control.root.autocomplete="off";var rt=new T(new z("Select your city","city-select"),new C("city-select"));document.body.append(nt.root,rt.root);var ot="",it=[];rt.control.root.addEventListener("click",(function(t){return X(void 0,void 0,void 0,(function(){var t,e;return Y(this,(function(n){switch(n.label){case 0:return t=nt.control.value,ot===t?[2]:(ot=t,[4,tt.searchCity(t)]);case 1:return it=n.sent(),e=it.map((function(t,e){return new P({value:e.toString(),text:"".concat(t.name," [").concat(t.country,", ").concat(t.admin,"]")})})),rt.control.options=e,[2]}}))}))})),rt.control.root.addEventListener("input",(function(t){return X(void 0,void 0,void 0,(function(){var t,e,n;return Y(this,(function(r){switch(r.label){case 0:return t=Number(rt.control.value),e=it[t],[4,et.getCityForecast(e)];case 1:return n=r.sent(),console.log(n),[2]}}))}))}))})()})();