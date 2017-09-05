/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-05 01:09:21
 * @modify date 2017-09-05 01:09:21
 * @desc [hasOwnProperty]
 */
let obj = {
    a: 'a',
    b: {
        ba: 'b-a'
    }
}
console.log(obj.hasOwnProperty('a'))
console.log(obj.hasOwnProperty('b'))
console.log(obj.hasOwnProperty('ba'))
console.log(obj.b.hasOwnProperty('ba'))