/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 10:41:47
 * @modify date 2017-08-04 10:41:47
 * @desc [함수 표현]
 */

/**
 * 함수의 이름을 쓸 필요가 없을 경우가 있다.
 * 이런걸 함수 표현이라고 한다.
 */
var square = function(number) { return number * number }
var x = square(4)
console.log(x)

/**
 * 함수의 표현은 함수를 다른 함수의 인수로 전달할 때 편리하다.
 */
function Log(f, txt) {
    f(txt)
}
Log(function(txt) {
    console.log(txt)
}, 'H')

/**
 * JS에서 함수는 조건에 의해 정의될 수 있다.
 */
var func1, func2
var n = 0
if (n == 0)
    func1 = function(txt) {
        console.log(txt)
    }
else
    func2 = function(txt) {
        console.log(txt)
    }
func1('hi'), func2('hello')