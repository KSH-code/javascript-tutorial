/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-24 01:04:55
 * @modify date 2017-08-24 01:04:55
 * @desc [Set]
 */
var mySet = new Set();
mySet.add(1)
mySet.add("some text")
mySet.add("foo")
console.log(mySet)
console.log(mySet.has(1)) // true
console.log(mySet.delete("foo"))
console.log(mySet.size) // 2

for (let item of mySet) console.log(item);
// 1
// "some text"