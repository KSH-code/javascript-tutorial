/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 09:49:38
 * @modify date 2017-08-30 09:49:38
 * @desc [상속]
 */
function Person(name) {
    this.name = name
}
Person.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}`)
}

function Student(name) { //Abstraction
    Person.call(this, name)
}
Student.prototype.sayHello = function() { //Encapsulation
    console.log(`I'm ${this.name}`)
}
var s1 = new Student('KSH-Code')
console.log(s1)
Person.prototype.sayHello.call(s1)
s1.sayHello()