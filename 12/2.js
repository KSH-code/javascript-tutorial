/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 10:42:29
 * @modify date 2017-08-27 10:42:29
 * @desc [사용자 정의 iterable]
 */
var myIterable = {}
myIterable[Symbol.iterator] = function*() {
    yield 1, yield 2, yield 3
}
console.log([...myIterable])