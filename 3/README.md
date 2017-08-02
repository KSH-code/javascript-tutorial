# 2017-08-02

## for문

for([초기문];[조건문];[증감문])<br>
statement<br>
<ol>
    <li>초기화 구문인 초기문이 존재한다면 초기문이 실행된다.</li>
    <li>조건문은 조건문을 검사한다. 만약 조건문이 참이면 반복문이 실행된다.</li>
    <li>문장이 실행된다. 많은 문장을 실행하면 {}로 묶어준다.</li>
    <li>갱신 구문인 증감문이 존재하면 실행되고 2.부터 다시 실행한다.</li>
</ol>

[js](for.js)

## do...while 문

    do
        statement
    while(조건문);
조건문을 확인하기 전에 실행되고, 조건문을 검사한다.

[js](dowhile.js)
## while 문

    while
        statement

조건문이 false면 실행하지 않고, true면 실행한다.

[js](while.js)
## label 문

    label:
        statement

label은 다른 곳으로 참조할 수 있도록 식별자로 제공한다.<br>
'use strict' 모드에서는 L: function F() {}를 사용 못한다.

[js](label.js)
## break 문

break문은 반복문, switch문, label문과 결합한 문장을 빠져나올 때 사용한다.
<ul>
    <li>레이블 없이 break문을 쓸 때</li>
    <li>레이블 문을 쓸 때, 특정 레이블 문에서 끝납니다.</li>
</ul>
<ol>
    <li>break;</li>
    <li>breka label;</li>
</ol>

[js](break.js)
## continue 문

continue문은 반복문, label문을 다시 시작하기 위해 사용한다.<br>
<ul>
    <li>레이블없이 continue를 사용하면, 가장 안쪽의 반복문을 둘러싼 현재 반복을 종료하고, 다음 반복으로 루프의 실행을 계속한다. break와는 달리 종료하지 않는다.</li>
    <li>레이블과 함께 continue를 사용하면, labe로 식별되는 루프문에 적용된다.</li>
</ul>
<ol>
    <li>continue;</li>
    <li>continue label;</li>
</ol>

[js](continue.js)
## for...in 문

for...in 문은 객체의 열거 속성을 통해 지정된 변수를 반복한다.

    for (variable in object) {
        statements
    }

variable 값은 index 값이다.<br>
for...in은 Array 객체를 수정하면 위험할 수 있으니 전통 for문을 사용하는게 좋을거같다?

[js](forin.js)
## for...of 문

### ES6에 나온 신기술이다.

    for (variable of object) {
        statement
    }
반복 가능한 객체들만 반복한다.

[js](forof.js)