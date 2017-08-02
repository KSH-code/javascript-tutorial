/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-01 08:50:05
 * @modify date 2017-08-02 08:47:47
 * @desc [Block 문]
*/
/**
 * {
 * statement_1;
 * statement_2;
 * statement_3;
 * }
 */
var x = 0
while (x < 10) {
    x++
}
/**
 * ES6 이전의 JS는 블록 범위를 가지고 있지 않는다.
 * C나 JAVA는 1을 출력한다.
 * JS의 독립 block은 다른 결과를 가진다.
 */
var x = 1
{
    var x = 2
}
console.log(x)//2

/**
 * ES6부터 let 변수 선언으로 변수의 블록 범위를 제한할 수 있다.
 */
var y = 1
{
    let y = 2
    console.log(y)
}
console.log(y)