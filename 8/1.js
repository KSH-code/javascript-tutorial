/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-21 04:12:51
 * @modify date 2017-08-23 09:20:39
 * @desc [description]
 */
// var arr1 = new Array(element0, element1, elementN);
// var arr2 = Array(element0, element1, elementN);
// var arr3 = [element0, element1, elementN];
var arr1 = Array()
var arr2 = new Array()
var arr3 = []

/**
 * 빈 배열 객체 생성 방법.
 * 모두 같다.
 */
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr1.length)
console.log(arr2.length)
console.log(arr3.length)
arr1.length = arr2.length = arr3.length = 2

//배열 길이 설정
console.log(arr1.length)
console.log(arr2.length)
console.log(arr3.length)
arr1 = [42]
arr2 = Array(42) //배열 길이로 설정된다.  same code arr1.length=42
console.log(arr1)
console.log(arr2)

//arr2 = Array(4.2) RangeError: Invalid array length
//양의 정수만 가능하다.