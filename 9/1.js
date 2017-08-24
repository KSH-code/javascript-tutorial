/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-24 11:48:42
 * @modify date 2017-08-24 11:48:42
 * @desc [Map]
 */
var sayings = new Map()
sayings.set('dogs', 'woof')
sayings.set('cats', 'mewo')
console.log(sayings.size)
console.log(sayings.get('dogs'))
console.log(sayings.get('hello'))
console.log(sayings.has('dogs'))
console.log(sayings.has('hello'))
console.log(sayings)
console.log(sayings.delete('dogs'))
console.log(sayings)