# 2017-08-20

## 텍스트 서식
### 문자열
JS의 문자열 유형은 원문의 데이터를 나타내는데 사용된다.<br>
16비트(2byte) 부호 없는 정수 값의 "요소" 집합이다.<br>
문자열 만드는 법 :
<ul>
    <li>문자열 리터럴</li>
    <li>16진수 이스케이프 시퀀스</li>
    <li>유니코드 이스케이프 시퀀스</li>
    <li>유니코드 코드 포인트 이스케이프</li>
    <li>문자열 개체</li>
</ul>

[js](1.js)
### 문자열 메서드
자주 사용하는 것 : 
<ul>
    <li>charAt</li>
    <li>indexOf</li>
    <li>split</li>
    <li>slice</li>
    <li>substring</li>
    <li>substr</li>
    <li>match</li>
    <li>replace</li>
    <li>search</li>
    <li>towLowerCase</li>
    <li>toUpperCase</li>
    <li>trin</li>
</ul>

[js](2.js)
### 다중선 템플릿 문자열
``를 사용한다(back-tick).<br>
${}를 사용해서 포함식 사용한다.<br>

[js](3.js)
## 국제화
Intl 객체를 사용한다.
### 날짜와 시간서식
DateTimeFormat 개체는 날짜와 시간을 서식하기에 유용하다.<br>

[js](4.js)
### 숫자 서식
NumberFormat는 통화를 위해 숫자를 서식하기에 유용하다.<br>

[js](5.js)
### 조합
Collator는 문자열을 비교하고 구분하는 서식하기에 유용하다.<br>

[js](6.js)