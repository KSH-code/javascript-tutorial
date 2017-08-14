# 2017-08-14

## 숫자

JS의 모든 숫자는  double-precision 64-bit binary format IEEE 754 (즉, -(253 -1)과 253 -1 사이의 숫자)입니다. 정수의 특정 유형은 없습니다.<br>
Infinity, -Infinity and NaN 값을 가진다.<br>
<ul>
    <li>2진수</li>
    <li>8진수</li>
    <li>10진수</li>
    <li>16진수</li>
</ul>

[js](1_number.js)
## Number 객체
### 속성
Number 내장 객체는 여러가지 속성들을 제공한다.<br>
[js](2_number.js)
### 메소드

Number 내장 객체는 여러가지 메소드들을 제공한다.<br>
[js](3_number.js)
## 수학 개체

Math 개체<br>
[js](1_math.js)
## 날짜 개체

js는 날짜 데이터 형식이 없다.<br>
날짜 개체를 사용해서 날짜를 설정하고 조작이 가능하다.<br>
1970년 1월 1일 00:00 ~ 현재 까지 사용이 가능하다<br>
JAVA와 JS의 날짜 개체는 비슷하다.<br>
ms까지 처리가 가능하다.<br>
<ul>
    <li>new Date()는 현재 날짜와 시간을 만든다.</li>
    <li>Month day, year hours:minutes:seconds new Date(8 14, 2017 15:52:1) 시간 분 초를 뺀다면 0으로 처리된다.</li>
    <li>년,월,일 처리도 된다. new Date(2017,8,14)</li>
    <li>년,월,일,시간,분,초도 가능하다.</li>초와 분: 0 to 59
</ul>
<ul>
    <li>시간: 0 to 23</li>
    <li>요일: 0 (Sunday) to 6 (Saturday)</li>
    <li>날짜: 1 to 31 (day of the month)</li>
    <li>월: 0 (January) to 11 (December)</li>
    <li>연도: years since 1900</li>
</ul>

[js](1_date.js)