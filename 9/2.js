/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-24 11:56:43
 * @modify date 2017-08-24 11:56:43
 * @desc [WeakMap]
 */
let Person = function() {
    let props = new WeakMap()
    class Person {
        constructor(name) {
            this.name = name
            props.set(this, { name, age: 20 })
        }
        greet() {
            console.log(props.get(this))
        }
        static check() {
            console.log(props)
        }
    }
    return Person
}()
let KSH = new Person('KSH_Code')
let KSH1 = new Person('Hello')
let KSH2 = new Person('Hi')
KSH.greet()
KSH1.greet()

//KSH2 greet를 안해서 GC
Person.check()