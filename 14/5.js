/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 03:27:01
 * @modify date 2017-08-31 03:27:01
 * @desc [클로저]
 */
function test(a) {
    return function(b) {
        return a + b //a를 참조해서 a가 해제되지 않음
    }
}
console.log(test(1)(2))