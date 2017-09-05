/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-05 01:02:26
 * @modify date 2017-09-05 01:02:26
 * @desc [Create Object]
 */
var o = {
    a: 1
}
console.log(o)

function a() {
    this.a = 2
}
console.log(new a())
let obj
console.log(obj = Object.create(o))
console.log(obj.__proto__) //상속됨
console.log(obj.a) //상속됨
class Foo {
    constructor(str) {
        this.str = str
    }
}
class Bar extends Foo {
    constructor() {
        super('Hi')
    }
    get getStr() {
        return this.str
    }
}
let bar = new Bar()
console.log(bar)
console.log(bar.str)
console.log(bar.getStr)