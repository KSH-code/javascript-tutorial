/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-25 02:58:44
 * @modify date 2017-08-25 02:58:44
 * @desc [객체 간의 비교]
 */
// 속성은 같지만 서로 별개인 두 변수와 두 객체
var fruit = { name: "apple" }
var fruitbear = { name: "apple" }

console.log(fruit == fruitbear) // false 리턴
console.log(fruit === fruitbear) // false 리턴 

fruit = { name: "apple" }
fruitbear = fruit // fruit 객체 레퍼런스를 fruitbear 에 할당

// here fruit and fruitbear are pointing to same object
console.log(fruit == fruitbear) // true 리턴
console.log(fruit === fruitbear) // true 리턴
fruit.a = 'h'
console.log(fruit)
console.log(fruitbear)
console.log(fruit == fruitbear) // true 리턴
console.log(fruit === fruitbear) // true 리턴