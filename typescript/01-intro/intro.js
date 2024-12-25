"use strict";
// let message: string;
// console.log(message);
Object.defineProperty(exports, "__esModule", { value: true });
// let number:any = 100;
// number = true
function handleError(errMsg) {
    throw new Error(errMsg);
}
// handleError("Code break in middle");
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(2, 3));
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet("Divyanshu"));
var nums = [1, 2, 3, 4];
function getNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums;
}
console.log(getNums(1, 2, 3));
