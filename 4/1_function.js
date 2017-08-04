/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 09:43:05
 * @modify date 2017-08-04 09:43:05
 * @desc [함수 정의]
 */

/**
 * 함수의 이름 : square
 * 인수 : number
 */
function square(number) {
    return number * number;
}

/**
 * @param {JSON} obj - json
 * @param {String} txt - json.make = txt
 * 원시값으로 된 매개변수는 값으로 함수에 전달된다.
 * 매개변수로 배열이나 객체와 같이 원시값이 아닌경우는 다음과 같다.
 */
function makeChange(obj, txt) {
    obj.make = txt
}
var mycar = { make: "Honda", model: "Accord", year: 1998 }
var x, y

x = mycar.make;
makeChange(mycar, 'Hello')
y = mycar.make;
console.log(x)
console.log(y)

/**
 * 
 * @param {JSON} obj 
 */
function objChange(obj) {
    obj = { make: "Ford", model: "Focus", year: 2006 }
}
var mycar = { make: "Honda", model: "Accord", year: 1998 }
var x, y

x = mycar.make;
objChange(mycar)
y = mycar.make;
console.log(x)
console.log(y)