/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-11 09:34:20
 * @modify date 2017-09-11 09:34:20
 * @desc [일반 배열]
 */
var typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
console.log(normalArray.length === 4);
console.log(normalArray.constructor === Array);
console.log(normalArray)