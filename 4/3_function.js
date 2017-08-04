/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 10:52:24
 * @modify date 2017-08-04 10:52:24
 * @desc [함수 호출]
 */
console.log(square1(5))

/**
 * 다음과 같이 함수를 정의해야 위에서 실행할 수 있다. 
 */
function square1(n) { return n * n }

/**
 * 다음과 같이 코드를 작성하면
 * not defined를 출력한다.
 */
// console.log(square2(5))
// square2 = function(n) { return n * n }

/**
 * 함수 자체를 호출할 수 있다.
 */
function factorial(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * factorial(n - 1));
}
console.log(factorial(10))