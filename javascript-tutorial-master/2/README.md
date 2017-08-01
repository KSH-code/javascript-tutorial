# 2017-08-01

## Block 문

block문은 제어 흐름 문과 함께 사용한다.<br>
if, for, while<br>
ES6 이전의 JS는 Block범위를 가지고 있지 않았다.

[js](block.js)

## 조건문

JS는 두 가지 조건문을 지원한다.<br>
if...else and switch.<br>

거짓으로 취급하는 값
<ul>
    <li>false</li>
    <li>undefined</li>
    <li>null</li>
    <li>0</li>
    <li>NaN</li>
    <li>empty string('',"")</li>
</ul>

[js](if.js)

## 예외처리문

throw 문<br>
try catch 문<br><br>
### 예외 유형

<ul>
    <li>ECMAScript exceptions</li>
    <li>DOMException and DOMError</li>
</ul>

finally block<br>
    try{

    }catch(e){

    }finally{
        statment
    }
finally는 catch 되더라도 무조건 실행된다.<br>
Exepction 객체를 커스텀 할 수 있다.<br>
코드에선 new Error를 사용한다.<br>
[js](exception.js)

## Promises

### Promise의 상태

<ul>
    <li>pending: 초기 상태</li>
    <li>fulfilled: 연산 수행 성공.</li>
    <li>rejected: 연산 수행 실패.</li>
    <li>settled: fulfilled or rejected</li>
</ul>

![Promise 상태](https://mdn.mozillademos.org/files/8633/promises.png)

[js](promise.js)