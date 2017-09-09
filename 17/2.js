/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-09 10:36:52
 * @modify date 2017-09-09 10:36:52
 * @desc [함수에서 strict mode 사용하기]
 */
function strict() {
    'use strict';

    function nested() { return "And so am I!" }
    return "Hi!  I'm a strict mode function!  " + nested()
}

function notStrict() { return "I'm not strict." }
console.log(notStrict())
console.log(strict())