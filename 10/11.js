/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-25 02:54:46
 * @modify date 2017-08-25 02:54:46
 * @desc [getters setters]
 */
var obj = {
    a: 7,
    get b() { return this.a + 1 },
    set c(x) { this.a = x }
}
console.log(obj)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
obj.c = 1
console.log(obj)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)