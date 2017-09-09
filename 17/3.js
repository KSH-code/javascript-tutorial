/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-09 10:39:47
 * @modify date 2017-09-09 10:39:47
 * @desc [흔한 에러]
 */
'use strict';
// a = 'Hello' //a is not defined
// console.log(a)

// var obj1 = {};
// Object.defineProperty(obj1, "x", { value: 42, writable: false })
// obj1.x = 1 //TypeError: Cannot assign to read only property 'x' of object '#<Object>'

// delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

var obj2 = {
    p: 1,
    p: 2
}

//문서에 따르면 에러가 떠야되는데 안뜬다.
console.log(obj2)

// function hello(a, a, a) {//SyntaxError: Duplicate parameter name not allowed in this context
// }
// var sum = 015 + // SyntaxError: Octal literals are not allowed in strict mode.
//     197 +
//     142;
// console.log(sum)
// false.true = ""; // TypeError: Cannot create property 'true' on boolean 'false'
// (14).sailing = "home"; // TypeError: console.log(...) is not a function
// "with".you = "far away"; // TypeError: Cannot create property 'you' on string 'with'