/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-10 03:05:40
 * @modify date 2017-08-10 03:05:40
 * @desc [관계 연산자]
*/
/**
 * in 연산자는 객체에 특정한 속성이 있는경우 true를 반환
 */
var trees = ["redwood", "bay", "cedar", "oak", "maple"]
console.log(0 in trees)//t
console.log(4 in trees)//t
console.log(5 in trees)//f
console.log(6 in trees)//f
console.log("bay" in trees)//f
console.log("length" in trees)//t
console.log("PI" in Math)//t
var obj={make:"Honda"}
console.log("Honda" in obj)//f
console.log("make" in obj)//true