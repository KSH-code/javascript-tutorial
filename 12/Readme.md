# 2017-08-27F
## 반복기
객체는 한 번에 하나씩 컬렉션 항목을 액세스하는 법을 아는 경우 반복기(iterator)입니다. 그 열(sequence)내부 현재 위치를 기억하면서. JS에서 Iterator는 열 내 다음 항목을 반환하는 next() 메서드를 제공하는 객체입니다. 이 메서드는 다음 두 속성이 있는 객체를 반환합니다.:done 및 value.

일단 생성되면, Iterator 객체는 명시해서 next()를 반복 호출하여 사용될 수 있다.
[js](1.js)
## iterable
객체는 값이 for..of구조 내에서 반복되는 것 같은 그 반복 동작을 정의하는 경우 iterable(반복가능)입니다.<br>

반복가능하기 위해서, 객체는 iterator 메서드를 구현해야 한다.
[js](2.js)
## 내장 iterable
String.Array, TypedArray, Map, Set은 모두 내장 iterable 객체다.
## iterable을 기대하는 구문
[js](3.js)
## generator
사용자 정의 iterator는 유용한 도구지만, iterator 생성은 명시적으로 내부 상태를 유짛할 필요 때문에, 주의깊은 프로그래밍이 필요하다.<br>
generator는 강력한 대안을 제공한다.
[js](4.js)
## 고급 geneator
generator는 요청에 따라 그 산출된 값을 계산하고, 효율적으로 나타내야 한다.<br>
next() 메서드는 generator가 중단된 마지막 yield 식 결과로 처리된다.<br>
[js](5.js)