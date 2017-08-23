/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 09:51:35
 * @modify date 2017-08-23 09:51:35
 * @desc [Array 객체의 메소드]
 */
var arr1 = [1, 2, 3],
    arr2 = [4, 5, 6, 4, 5, 6]
console.log(arr1.concat(arr2)) //배열을 합친다
console.log(arr1.join('~~~~~')) //,를 인자값으로 바꿔서 출력함
arr1.push(123) //배열 마지막에 추가
console.log(arr1)
arr1.pop() //마지막 값 삭제
console.log(arr1)
console.log(arr1.shift()) //배열의 첫 번째 값 삭제하고 반환
console.log(arr1.unshift(1, 123)) //배열의 처음에 값을 삽입하고, 배열의 길이를 반환
console.log(arr1)
console.log(arr1.slice(2, 3)) //(start,end) start ~ end-1까지 출력한다.
arr1.splice(1, 2, 123, 456, 789) //(start,count_to_remove,addElement...)
console.log(arr1)
console.log(arr1.reverse()) //배열을 뒤집는다.
console.log(arr1.sort()) //문자열 기반으로 오름차순 정렬
console.log(arr1.sort((a, b) => {
    if (a > b)
        return 1
    else
        return -1
})); //number 기반으로 오름차순 정렬
console.log(arr1)
console.log(arr1.indexOf(123)) //123이 있는 index반환
console.log(arr2)
console.log(arr2.indexOf(4, 3)) //4가 있는 index반환(idx 3부터 찾는다.) (searchE, startIdx)
console.log(arr2.indexOf(4)) //4가 있는 index반환(0부터 시작)
var a1 = ['a', 'b', 'c']
var a2 = a1.map(function(item) { return item.toUpperCase() }) //map은 배열의 요소들에 대해 콜백함수를 실행하고 반환값을 배열에 다시 넣는다.
console.log(a2) // logs A,B,C
console.log(arr1.filter(v => v > 10)) //말 그대로 filter 가능
console.log(arr1.every(v => v > 10)) //모든게 조건에 맞아야 true가 나옴
console.log(arr1.some(v => v > 10)) //아무거나 조건에 맞으면 true가 나옴
console.log(arr1.reduce((a, b) => a = b)) //배열의 요소들을 하나로 합친다.