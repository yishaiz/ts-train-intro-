"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalidrome = void 0;
function isPalidrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalidrome = isPalidrome;
// console.log(isPalidrome('madam')); // true
// console.log(isPalidrome('mada')); // true
