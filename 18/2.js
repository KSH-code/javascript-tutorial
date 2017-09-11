/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-11 09:28:44
 * @modify date 2017-09-11 09:28:44
 * @desc [같은 데이터에 여러 뷰]
 */
var buffer = new ArrayBuffer(16)

var int16 = new Int16Array(buffer)
for (let i = 0; i < int16.length; i++) {
    int16[i] = i
}
var int32 = new Int32Array(buffer)
console.log(int16) //[ 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(int32) //[ 65536, 196610, 327684, 458758 ]