/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-11 09:24:41
 * @modify date 2017-09-11 09:24:41
 * @desc [버퍼와 뷰 사용하기]
 */
var buffer = new ArrayBuffer(16); //16B
console.log(buffer)
console.log(buffer.byteLength) //Array와 다른점

var int32 = new Int32Array(buffer)
for (let i = 0; i < int32.length; i++) {
    int32[i] = i * 2
}
console.log(int32) //Int32Array [ 0, 2, 4, 6 ]
    //32b = 4B