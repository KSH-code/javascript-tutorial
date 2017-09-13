# 2017-09-13
## 개요
C 언어같이 low-level 언어는 메모리를 직접 관리하지만, JS는 '자동으로' 객체나 문자열을 사용 안하면, 해제한다.
## 메모리 life-cycle
1. 필요할때 할당한다.
2. 사용한다. (읽기, 쓰기)
3. 필요없어지면 해제한다. 
### 값 초기화
[js](1.js)
### 값 사용
값 사용은 메모리를 읽는다는 것이다.
* 함수 호출 시 인수 넘길 떄
* 변수 읽기
### 메모리 해제
세상에 존재하는 모든 가비지 콜렉터는 안전하지만 완전하지 않다. 가비지 콜렉터는 항상 필요없어진 메모리만을 해제하지만 모든 필요없어진 메모리를 해제하는건 아니다
## 가비지 콜렉션
더 이상 필요없는 몇몇의 메모리를 해제하는데, 그것을 찾아보자.
### 참조
가비지 콜렉션에서의 참조는 핵심 개념이다.<br>
참조는 a라는 변수가 b에 접근할 수 있으면, 참조한다고 한다.<br>
[js](2.js)
### 표시하고-쓸기(Mark-and-sweep) 알고리즘
이 알고리즘은 "더 이상 필요없는 오브젝트"를 "닿을 수 없는 오브젝트"로 정의한다.

이 알고리즘은 roots 라는 오브젝트의 집합을 가지고 있다(자바스크립트에서는 전역 변수들을 의미한다). 주기적으로 가비지 콜렉터는 roots로 부터 시작하여 roots가 참조하는 오브젝트들, roots가 참조하는 오브젝트가 참조하는 오브젝트들... 을 닿을 수 있는 오브젝트라고 표시한다. 그리고 닿을 수 있는 오브젝트가 아닌 닿을 수 없는 오브젝트에 대해 가비지 콜렉션을 수행한다.

이 알고리즘은 위에서 설명한 참조-세기 알고리즘보다 효율적이다. 왜냐하면 "참조되지 않는 오브젝트"는 모두 "닿을 수 없는 오브젝트" 이지만 역은 성립하지 않기 때문이다. 위에서 반례인 순환 참조하는 오브젝트들을 설명했다.

2012년 기준으로 모든 최신 브라우저들은 가비지 콜렉션에서 표시하고-쓸기 알고리즘을 사용한다. 지난 몇 년간 연구된 자바스크립트 가비지 콜렉션 알고리즘의 개선들은 모두 이 알고리즘에 대한 것이다. 개선된 알고리즘도 여전히 "더 이상 필요없는 오브젝트"를 "닿을 수 없는 오브젝트"로 정의하고 있다.

[js](2.js) 코드는 Refrence-Counting 알고리즘으로는 해제가 안되지만, Mark-and-Sweep으로는 해제가 된다.<br>
global variabel에서 접근이 안되기 때문