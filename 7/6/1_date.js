/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-14 03:46:51
 * @modify date 2017-08-14 03:46:51
 * @desc [날짜 개체]
 */
var Xmas17 = new Date("December 25, 2017")
console.log(Xmas17.getMonth())
console.log(Xmas17.getDate())
console.log(Xmas17.getFullYear())
console.log(Xmas17.getDay()) //요일 1 : Monday
console.log(Xmas17.getTime()) //1970-1-1 0:0:0 ~ Xmas17 시간의 ms
console.log(new Date())
var d = new Date()
d.setTime(Date.parse('Aug 9, 2017'))
console.log(d)