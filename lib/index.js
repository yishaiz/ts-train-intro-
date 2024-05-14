"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('Hello World');
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const mainAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    console.log('1s');
    yield delay(1000);
    console.log('2s');
    yield delay(1000);
    console.log('3s');
});
mainAsync();
// const main = () => {
//   setTimeout(() => {
//     console.log('1');
//   }, 1000);
// };
