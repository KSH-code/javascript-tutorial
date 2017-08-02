/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-02 10:14:19
 * @modify date 2017-08-02 10:14:19
 * @desc [for...of문]
*/
let arr = [3, 5, 7]
arr.foo = 'hello'

for (let i in arr) {
    console.log(i)//0 1 2 foo
}

console.log()
for (let i of arr) {
    console.log(i)//3 5 7
}