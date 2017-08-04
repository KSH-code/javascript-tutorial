/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 11:00:33
 * @modify date 2017-08-04 11:00:33
 * @desc [함수 범위]
 */
//전역 변수
var num1 = 20,
    num2 = 3,
    name = 'Foo'

//전역 함수
function multiply() {
    return num1 * num2
}

multiply() //60

function getScore() {
    var num1 = 2,
        num2 = 3

    function add() {
        var num3 = 0
        return `name scored ${num1+num2}`
    }
    //console.log(num3) notdefined
    return add()
}

console.log(getScore())