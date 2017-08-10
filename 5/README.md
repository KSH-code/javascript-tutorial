# 2017-08-10

## 연산자
<ul>
    <li>대입 연산자</li>
    <li>비교 연산자</li>
    <li>산술 연산자</li>
    <li>비트단위 연산자</li>
    <li>논리 연산자</li>
    <li>문자열 연산자</li>
    <li>조건 연산자</li>
    <li>콤마 연산자</li>
    <li>단항 연산자</li>
    <li>관계 연산자</li>
</ul>

### 대입 연산자
<ul>
    <li>대입 연산</li>
    <li>덧셈 대입</li>
    <li>뺄셈 대입</li>
    <li>곱셈 대입</li>
    <li>나머지 연산 대입</li>
    <li>왼쪽 이동 연산 대입</li>
    <li>오른쪽 이동 연산 대입</li>
    <li>비트 단위 논리곱 연산 대입</li>
    <li>비트 단위 베타적 논리합 연산 대입</li>
    <li>비트 단위 논리합 연산 대입</li>
</ul>

[js](1_operators.js)
### 비교 연산자
<ul>
    <li>== 같은 3 == '3' true</li>
    <li>!= 3 != '3' false 3 != 1 true</li>
    <li>=== 3==='3' false</li>
    <li>!== 형태가 다르거나 피연산자의 값이 다르면</li>
    <li>></li>
    <li><</li>
    <li>>=</li>
    <li><=</li>
</ul>

[js](2_operators.js)
### 산술 연산자
<ul>
    <li>% 나머지 연산자</li>
    <li>++ 증가 연산자</li>
    <li>-- 감소 연산자</li>
    <li>- 단항 부정 연산자</li>
    <li>+ 숫자화 연산자 연산자</li>
</ul>

[js](3_operators.js)
### 비트 단위 연산자
<ul>
    <li>a & b 두 피연산자의 각 자리 값이 1이면 1 아니면 0</li>
    <li>a | b 두 피연산자의 자리값중 하나가 1일경우 1 둘다 0 이면 0</li>
    <li>a ^ b 두 피연산자의 각 자리값이 다를경우 1을 반환</li>
    <li>~ a 피 연산자의 각 자리의 비트를 뒤집는다</li>
    <li>a << b 오른쪽에서 왼쪽으로 0들을 이동시키면서, a 각 비트를 b만큼 왼쪽으로 이동시킨다.</li>
    <li>a >> b 왼쪽에서 오른쪽으로 이동시키고, 사라지는 비트를 버리면서, a의 비트를 b마큼 이동시킨값을 반환한다.</li>
</ul>

[js](4_operators.js)
### 논리 연산자
<ul>
    <li>a&&b 논리 곱 둘 다 true면 true를 반환</li>
    <li>a || b 논리 합 하나만 true면 true를 반환</li>
    <li>!a true면 false로 false면 true를</li>
</ul>

[js](5_operators.js)