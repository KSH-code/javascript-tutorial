/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-25 02:57:00
 * @modify date 2017-08-25 02:57:00
 * @desc [속성의 삭제]
 */
// 새 객체 myobj를 두 개의 속성 a, b 와 함께 생성
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// 속성을 삭제. myobj 에는 속성 b 만 남게 됨.
delete myobj.a;
console.log("a" in myobj) // "false"를 출력
console.log("b" in myobj) // "true"를 출력