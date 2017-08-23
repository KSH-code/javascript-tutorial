/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 09:46:16
 * @modify date 2017-08-23 09:46:16
 * @desc [반복 처리]
 */
var arr1 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr1.length; i++)
    console.log(arr1[i])
console.log()
arr1.forEach(v => { console.log(v) })

/**
 * foreach 사용할 때 주의점은 값을 할당하지 않으면 출력이 안되고
 * undefined를 출력하고 싶으면 undefined를 할당해라
 */
var arr2 = [1, , 2, , 3]
console.log()
arr2.forEach(v => { console.log(v) })
var arr2 = [1, undefined, 2, undefined, 3]
console.log()
arr2.forEach(v => { console.log(v) })