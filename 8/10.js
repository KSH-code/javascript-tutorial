/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 10:15:05
 * @modify date 2017-08-23 10:15:05
 * @desc [타입 배열]
 */
//8bit int
// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y); // Int8Array [ 21, 31 ]

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
console.log(buffer) //ArrayBuffer { byteLength: 8 }
var z = new Int8Array(buffer, 1, 4);
console.log(z) //Int8Array [ 0, 0, 0, 0 ]
console.log(z.length) //Int8Array [ 0, 0, 0, 0 ]

// From an iterable
var iterable = function*() { yield*[1, 2, 3]; }(); //function*은 제너레이터 객체를 반환한다.
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]