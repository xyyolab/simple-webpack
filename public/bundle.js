!function(e){var n={};function Q(t){if(n[t])return n[t].exports;var U=n[t]={i:t,l:!1,exports:{}};return e[t].call(U.exports,U,U.exports,Q),U.l=!0,U.exports}Q.m=e,Q.c=n,Q.d=function(e,n,t){Q.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},Q.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Q.t=function(e,n){if(1&n&&(e=Q(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(Q.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var U in e)Q.d(t,U,function(n){return e[n]}.bind(null,U));return t},Q.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return Q.d(n,"a",n),n},Q.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},Q.p="public",Q(Q.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/form.ts\nconst formData = (form) => {\n    const inputs = form.querySelectorAll('input');\n    let values = {};\n    inputs.forEach((input) => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\n\n// CONCATENATED MODULE: ./src/index.ts\n\nconst src_form = document.querySelector('form');\nsrc_form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const data = formData(src_form);\n    console.log(data);\n});\nconst person = {};\nconsole.log(person.speak());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS50cz83ZTE0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQzdDLElBQUksTUFBTSxHQUErQixFQUFFO0lBRTNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQ2hDLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTTtBQUNmLENBQUM7OztBQ1JnQztBQUVqQyxNQUFNLFFBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRTtBQUU1QyxRQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtJQUNsQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsUUFBSSxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFRLEVBQUU7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtRGF0YSA9IChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXG4gIGxldCB2YWx1ZXM6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICB2YWx1ZXNbaW5wdXQuaWRdID0gaW5wdXQudmFsdWVcbiAgfSlcbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tICcuL2Zvcm0nXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKVxuICBjb25zb2xlLmxvZyhkYXRhKVxufSlcblxuY29uc3QgcGVyc29uOiBhbnkgPSB7fVxuY29uc29sZS5sb2cocGVyc29uLnNwZWFrKCkpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);