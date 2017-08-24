# 2017-08-24
## Map
ES6에서 값들을 매핑하기 위한 새로운 데이터 구조를 소개했다. 그 중 하나가 Map객체다.<br>
Map은 key와 value를 매핑시켜 저장하고 저장된 순서대로 접근이 가능하다.<br>
[js](1.js)<br>
Object와 Map 다른점은 
<ul>
    <li>object의 key는 string이다.</li>
    <li>object의 size는 수동적으로 가져와야 된다.</li>
    <li>Map은 삽입 순서대로 반복된다.</li>
    <li>객체(Object)에는 prototype이 있어 Map에 기본 키들이 있다. (이것은 map = Object.create(null) 를 사용하여 우회할 수 있다.)</li>
</ul>

### WeakMap
WeakMap 객체는 object만 key로 허용하고, 임의의 value를 허용한다.<br>
키가 가지고 있는 객체를 참조안하면, GC된다.<br>
Map객체와 다른점은 key들이 열거형이 아니라는 것이다.<br>

[js](2.js)
## Set
Set은 값들의 집합이다.<br>
Set은 공통된 값을 허용하지 않는다.<br>

[js](3.js)<br>
### 배열과 Set의 상호 변환
Array.form 또는 spread operator를 이용해서 배열에 Set 객체의 데이터를 넣을 수 있다.<br>
배열과 Set의 비교 :
<ul>
    <li>indexOf메서드를 사용해서 배열내에 특정 요소가 존재하는지 확인하는 것은 느리다.</li>
    <li>배열에서는 해당 요소를 지우면, 한칸씩 밀려나는데 Set은 한 번에 가능하다.</li>
    <li>NaN은 배열에서 찾을 수 없다.</li>
    <li>Set객체는 값의 유일성을 보장하기 때문에, 따로 검사해줄 필요 없다.</li>
</ul>

### WeakSet
WeakSet 객체는 객체를 저장하는 집합이다.<br>
중복된 객체는 없으며, WeakSet내의 객체들을 열거할 수 없다.<br>
Set과의 차이점
<ul>
    <li>객체만 저장이 가능하다.</li>
    <li>참조가 끊어지면 GC</li>
</ul>

## Map과 Set의 키와 값의 동치성
Map객체의 key에 대한 동치성 비교와 Set객체의 값에 대한 동치성 비교 모두 "same-value-zero algorithm"에 근거한다. 
<ul>
    <li>동치성 비교는 === 비교 연산과 같이 작동한다.</li>
    <li>-0과 +0은 같다고 간주한다.</li>
    <li>NaN는 자기 자신하고 같다고 간주한다. (===와는 반대로)</li>
</ul>