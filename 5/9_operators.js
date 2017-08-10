/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-10 03:01:19
 * @modify date 2017-08-10 03:01:19
 * @desc [단항 연산자]
*/
var x = {
    a:1,
    b:1
}
console.log(x)
delete x
console.log(x)
delete x.b
console.log(x)
delete x['a']
console.log(x)
delete x
console.log(x)
console.log()
console.log()
console.log(typeof '1')
console.log(typeof 1)
console.log(typeof false)
console.log(typeof {})
console.log(typeof new Function())
console.log(typeof asdbasdb)
console.log(typeof null)
console.log()
console.log()
console.log(void (1+2+3+4))//아무것도 반환하지 않음