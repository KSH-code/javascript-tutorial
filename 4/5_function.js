/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 12:55:15
 * @modify date 2017-08-04 12:55:15
 * @desc [재귀]
 */
/**
 * 3가지 방법
 */
var foo = function bar(a, txt) {
    console.log('hello')
    if (a) {
        console.log(txt)
        return
    }
    bar(true, 'bar()')
    arguments.callee(true, 'arguments.callee')
    foo(true, 'foo()')
}
foo(false, '')