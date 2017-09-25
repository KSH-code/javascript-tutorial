/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-25 08:59:32
 * @modify date 2017-09-25 08:59:32
 * @desc [function]
 */
function foo(b) { //인자와 지역변수를 포함하는 두 번째 프레임이 꼭대기에 생성된다.
    var a = 10; //
    return a + b + 11; //반환되면 스택구조라 pop된다.
}

function bar(x) { //첫 번째 프레임 생선
    var y = 3;
    return foo(x * y); //foo 호출
}

console.log(bar(7)); //bar 호출