/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 09:29:07
 * @modify date 2017-08-23 09:29:07
 * @desc [배열에 값 저장]
 */
var arr1, arr2

/**
 * 배열에 값 저장하는 방법
 */
arr2[0] = 1
arr2[1] = 2
arr2[2] = 3
arr2[3.4] = 4 //양의 정수가 아닌 값을 넣으면 key와 value가 들어간다.
console.log(arr2)

/**
 * 생성과 동시에 저장하기
 */
arr1 = Array(1, 2, 3)
arr2 = [1, 2, 3, 4]
console.log(arr1)
console.log(arr2)