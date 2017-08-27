/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 10:52:06
 * @modify date 2017-08-27 10:52:06
 * @desc [function* yield]
 */
function* idMake() {
    var idx = 0
    while (true)
        yield idx++
}
var gen = idMake()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)