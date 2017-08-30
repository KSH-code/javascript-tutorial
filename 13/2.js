/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 09:44:01
 * @modify date 2017-08-30 09:44:01
 * @desc [The Constructor and Property]
 */

function Person(gender) {
    this.gender = gender
    console.log(this.gender)
}
var p1 = new Person('Female')
console.log(p1)
console.log(p1.gender)