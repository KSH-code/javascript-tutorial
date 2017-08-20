/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-20 09:15:20
 * @modify date 2017-08-20 09:15:20
 * @desc [자주 사용하는 문자열 메서드]
 */
var a = '123456789'
console.log(a.charAt(0))
console.log(a.indexOf(9)) //9 index is 8
console.log(a.split(''))
console.log(a.slice(2)) //(startidx)
console.log(a.slice(2, 5)) //(startidx, length+startidx)
console.log(a.substr(2, 2)) //(startidx, length)
console.log(a.substring(2, 6)) //(startidx, endidx+1)
console.log(a.match('2'))
console.log(a.match(/[2]/))
console.log(a.replace('2', '1'))
console.log(a.search('1')) //return idx
console.log('aB'.toLowerCase())
console.log('aB'.toUpperCase())
console.log(' a b c '.trim())