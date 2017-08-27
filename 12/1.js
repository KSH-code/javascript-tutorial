/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 10:37:57
 * @modify date 2017-08-27 10:37:57
 * @desc [makeIterator]
 */
function makeIterator(array) {
    var nextIdx = 0
    return {
        next: () => {
            return nextIdx < array.length ? { value: array[nextIdx++], done: false } : { done: true }
        }
    }
}
var it = makeIterator(['hello', 'world'])
let o
while (!(o = it.next()).done) {
    console.log(o.value)
}