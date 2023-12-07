!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,y=Math.max,b=Math.min,p=function(){return v.Date.now()};function h(e,t,n){var r,o,i,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function g(e){return l=e,f=setTimeout(j,t),s?v(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function j(){var e=p();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-c);return d?b(n,i-(e-l)):n}(e))}function O(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function T(){var e=p(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return g(c);if(d)return f=setTimeout(j,t),v(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,w(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(S(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function w(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=c.test(t);return r||l.test(t)?s(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return w(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),h(e,t,{leading:r,maxWait:t,trailing:o})};var j={email:"",message:""},O=function(){var e=o("feedback-form-state");void 0!==e&&(j.email=e.email,j.message=e.message);var t=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]');t.value=j.email,n.value=j.message},T=document.querySelector("form");T.addEventListener("input",e(t)((function(e){switch(e.target.name){case"email":j.email=e.target.value;break;case"message":j.message=e.target.value}r("feedback-form-state",j)}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t=o("feedback-form-state");console.log(t),localStorage.removeItem("feedback-form-state"),j.email="",j.message="",O()})),window.addEventListener("load",O)}();
//# sourceMappingURL=03-feedback.64594529.js.map