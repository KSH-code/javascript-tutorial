/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-14 03:14:04
 * @modify date 2017-08-14 03:14:04
 * @desc [Method]
 */
var string = '1234'
console.log(Number.parseInt(string))
string = '1234.1234'
console.log(Number.parseFloat(string))
var n = Number.NEGATIVE_INFINITY
console.log(Number.isFinite(n)) //값이 무한이라 false
console.log(Number.isFinite(123)) //값이 정해져있어서 true
console.log(Number.isInteger(123)) //정수 true
console.log(Number.isInteger(123.123)) //소수라 false

/**
 * global의 isNaN와 Number의 isNaN의 차이점
 * global 객체의 isNaN은 모든 객체를 검사합니다.
 * 
 * Number 객체의 isNaN은 Number의 NaN만 검사합니다.
 */
console.log()
isNaN(NaN); // 참
isNaN(undefined); // 참
isNaN({}); // 참

isNaN(true); // 거짓
isNaN(null); // 거짓
isNaN(37); // 거짓

// 문자열
isNaN("37"); // 거짓: "37"은 NaN이 아닌 숫자 37로 변환됩니다
isNaN("37.37"); // 거짓: "37.37"은 NaN이 아닌 숫자 37.37로 변환됩니다
isNaN("123ABC"); // 참: parseInt("123ABC")는 123이지만 Number("123ABC")는 NaN입니다
isNaN(""); // 거짓: 빈 문자열은 NaN이 아닌 0으로 변환됩니다
isNaN(" "); // 거짓: 공백이 있는 문자열은 NaN이 아닌 0으로 변환됩니다

// dates
isNaN(new Date()); // 거짓
isNaN(new Date().toString()); // 참

// 이게 오탐이고 isNaN이 완전히 신뢰할 수 없는 이유입니다
isNaN("blabla") // 참: "blabla"는 숫자로 변환됩니다.

// 숫자로 구문 분석은 실패하고 NaN을 반환합니다
console.log()
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0) // true

// 예를 들면 이들은 global isNaN()으로는 true가 됐을 것임
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// 이들 모두 false를 반환함
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");