/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 09:46:35
 * @modify date 2017-08-30 09:46:35
 * @desc [The Method]
 */
function Person(gender) {
    this.gender = gender
}
var p1 = new Person('Female')
console.log(p1)
Person.prototype.setAge = function(age) {
    this.age = age
}
p1.setAge(10)
console.log(p1)