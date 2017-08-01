/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-01 09:09:05
 * @modify date 2017-08-01 09:09:05
 * @desc [조건문]
*/

/**
 * if(condtion){ //condition 안에는 bool 값이 들어간다.
 *  statment_1 // 참
 * } else {
 *  statment_2 // 거짓
 * }
 */

/**
 * if문이 중첩 된 경우
*/

/**
 * if (condition_1){
 *  statment_1
 * }else if(condition_2){
 *  statment_2
 * }else{
 *  statment_3
 * }
 */

var x = false, y = true
if (x = y) { // 이 코드는 사용하지 않는게 좋다.
    //헷갈릴 수 있다.
}

// 만약 사용해야 될 경우
if ((x = y)) {//괄호 안에 사용

}

var b = new Boolean(false)
if (b)
    console.log('Boolean은 원시 boolean값과 다릅니다.')

checkData()

function checkData() {
    if ("안녕ㅋ".length == 3) {
        return true;
    } else {
        return false;
    }
}

/**
 * switch 문은 프로그램이 표현식을 평가하고 값을 조건과 비교한다.
 */
var expression = 1;
switch (expression) {
    case '1':
        console.log('String 1')
        break;//탈출!
    case 1:
        console.log('Number 1')
        break;//탈출!
    default:
        console.log('Default')
        break;//탈출!
}