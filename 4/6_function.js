/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 01:03:35
 * @modify date 2017-08-04 01:03:35
 * @desc [중첩된 함수와 클로저]
 */
function addSquares(a, b) {
    function square(x) {
        return x * x
    }
    return square(a) + square(b)
}

console.log(addSquares(2, 3)) //13

/**
 * 중첩된 내부 함수가 반환될 때 외부 함수의 인수 x가 보존된다.
 * 클로저는 그것을 참조하는 모든 범위에서 인수와 변수를 보존합니다.
 * 클로저는 외부 함수에 대하여 매번 새로 생성된다.
 * 메모리는 그 무엇도 내부 함수에 접근하지 않을 때 해제 된다.
 */
function outFunction(x) {
    console.log(x)

    function InFunction(y) { return x + y }
    return InFunction
}
var outFunc = outFunction(5) //5
console.log(outFunc) //[Function: InFunction]
console.log(outFunc(10)) //15

/**
 * 함수는 다중 중첩이 가능하다.
 * 클로저는 다중 범위를 포함 할 수 있다.
 * 
 * B는 A를 포함하는 클로저 형성
 * C는 B
 * C의 클로저는 A를 포함하기 대문에 B, C의 인수와 변수를 접근 가능하다.
 * A -> B 순서대로 범위(scope)를 체이닝한다.
 */
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // logs 6 (1 + 2 + 3)