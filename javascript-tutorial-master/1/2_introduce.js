/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-07-27 09:36:11
 * @modify date 2017-07-27 09:36:11
 * @desc [Mozila Developer Network의 자료를 기반으로 코딩함]
 * 
 */
function greetMe(name) {
    console.log(`Hello ${name}`)
}
greetMe('World')

//JS는 대소문자를 구별하며 Unicode 문자셋을 이용한다.
//명령은 statement(문)이라고 부르며 ,;로 분리된다. 스페이스, 탭, 줄바꿈은 공백

function comment() {
    //자바스크립트의 각주 한 줄입니다.
    console.log('Foo')
}
comment()

function comment2() {
    /*자바스크립트의 각주 한 줄입니다.*/
    console.log('Bar')
}
comment2()

function comment3() {
    /*
    자바스크립트의 각주 
    여러 줄입니다.
    */
    console.log('Foo Bar')
}
comment3()

function comment4() {
    console.log(
        'Foo' +
        /*    이렇게 중간에도 삽입이 가능합니다.    */
        +' Bar')
}
comment4()

function comment5() {
    /* console.log("Hello world!"); */
    //코드를 감쌀 수 있습니다.
    ///* 그러나, /* 중첩된 주석은 쓸 수 없습니다 */    SyntaxError * / 맨 앞의 //는 코드가 에러를 띄우지 않기위해 했다.
}
comment5()

function variableStatement() {
    {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a)
    //console.log(b) ReferenceError let은 블록 범위 지역 변수를 선언한다.
    //console.log(c) ReferenceError const는 블록 범위 지역 변수를 선언한다.
}
/*
    변수는 상직적인 이름으로 사용한다.
    변수명은 식별자(identifier)라고 불리며 특정 규칙을 따른다.
    JS의 식별자는 문자, 밑줄 혹은 달러($) 기호로 시작해야 하고, 이후는 숫자도 사용이 가능하다.
    A0, $0, _0
    AA, $A, _A
    var 키워드는 지역 및 전역 변수를 선언하는데 모두 사용된다.
    x = 42 로 선언하면 전역 변수로 선언된다.
    strict mode로 하면 경고를 발생시켜 실행이 안된다.
    let y = 13은 블록 범위 지역 변수다.
*/

function variableEvaluation() {
    var input
    if (input === undefined)
        console.log('input is undefined')
    else
        console.log('input is not undefined')
    //undefined 값은 boolean context 에서 사용될 때 false로 동작된다.
    if (!input)
        console.log('input is undefined')
    else
        console.log('input is not undefined')
    input + 2
    console.log(input * 32)//input is NaN
    input = null
    console.log(input * 32)//input is 0
}
variableEvaluation()

/**
 * ES6 이전에는 block문 범위가 없다.
 */
function checkBlockRange() {
    variableStatement()
}

/**
 * 호이스팅은 나중에 선언된 변수를 참조하는 것이다.
 * 끌어올려진 변수는 undefined 값을 반환한다.
 */
function hoisting() {
    {
        console.log(x === undefined)
        var x = 3;

        var myvar = 'my value';
        (function () {
            console.log(myvar)
            var myvar = 'local value'
        }())
        /**
         * 위 코드는 아래와 같다.
         * var x
         * console.log(x === undefined)
         * x = 3
         * var myvar = 'my value'
         * 
         * (function () {
         * var myvar
         * console.log(myvar)
         * myvar = 'local value'
         * }())
         */
    }
}
hoisting()

/*
 * 전역 변수는 사실 global 객체의 속성(property)이다.
 * 웹 페이지에서 global 객체는 window 이므로, windows.variable 구문을 통해 전역 변수를 설정하고 접근한다.
 * 그 결과 window 혹은 frame의 이름은 지정하여 한 window 혹은 frame에서 다른 window 혹은 frame에 선언된 전역 변수에 접근이 가능하다.
 * phoneNumber 라는 변수가 문서에 선언된 경우, iframe에서 parent.phoneNumber로 참조 가능하다.
 */


/*
   * 상수는 const 키워드를 사용한다.
   * const는 읽기 전용이다.
   * 상수 식별자의 구문은 변수 식별자와 같다.
   * 스크립트가 실행 중인 동안 대입을 통해 값을 변경이나 재선언이 불가능하다.
   * 값으로 초기화해야 한다.
   * 범위는 let과 같이 블록 범위다.
 */
function f() {
    function g() {
        const h = 5
        //  var h//SyntaxError Identifier 이 이미 선언돼있다.
    }
}
//const f = 5//SyntaxError Identifier 이 이미 선언돼있다.
f()

/**
 * 데이터 형은 6가지 원시 데이터 형이 있다.
 * Boolean : true or false
 * null : null 값을 나타내는 특별한 키워드. JS는 대소문자를 구별하므로 Null, NULL이랑 다르다.
 * undefined : undefined 값 최상위 속성이다.
 * Number : 42 or 3.14195
 * String : 'Foo Bar'
 * Symbol : ES6에 추가됨 인스턴스가 고유하고 불변인 데이터 형
 * 
 * 그리고 Object
 * 객체와 함수는 언어의 다른 기본 요소다.
 * 객체는 값을 위한 컨테이너, 함수는 어플리케이션이 수행할 수 잇는 절차로 생각할 수 있다.
 */

/**
 * JS는 동적 형 지정 언어다.
 * 데이터를 선언할 때 형을 지정 안해도 된다. (자동으로 해줌)
 */
function dataType() {
    var answer = 42 //Number
    console.log(typeof answer)
    answer = 'Thank you'//String
    console.log(typeof answer)
    answer += 42//Thank you 42 (String)
    console.log(typeof answer)

    console.log('1.1' + '1.1' + '1.1')
    console.log((+'1.1') + (+'1.1') + (-'+1.1'))//괄호 안에 단항 더하기 연산자를 사용해 number로 형 변환이 됐다.
}
dataType()

/**
 * JS에서 값을 나타내기 위해 리터럴을 사용한다.
 * 스크립트에 부여한 고정값으로, 변수가 아니다.
 * 
 * 배열 리터럴
 * 불린 리터럴
 * 부동 소수점 리터럴
 * 정수
 * 객체 래티럴
 * 정규식 리터럴
 * 문자열 리터럴
 * 
 */

/**
 * 배열 리터럴은 0개 이상의 식(expression)목록이다.
 * 각 식은 배열 요소고, 대괄호로 묶인다.
 */
function arrayLiteral() {
    var coffees = ["French Roast", "Colombian", "Kona"]
    var fish1 = ["Lion", , "Angel"]//중간에 undefined 값이 들어간다.
    var fish2 = ["Lion", "Angel",]//마지막에 ,가 들어가면 무시된다. 구버전 브라우저에서는 에러를 일으킬 수 있다.
    var fish3 = [, "Lion", , "Angel"]//길이는 4다
}
/**
 * 불린 리터럴은 ture와 false의 값을 가진다.
 * Boolean 객체의 true 및 false 값을 혼동하지 마라.
 * 원시 boolean 데이터 형을 감싸는 Boolean 객체는 래퍼다.
 */
function boolean() {
    x = new Boolean(false)
    if (x) {
        console.log('1')
    }
    x = false;
    if (x) {
        console.log('2')
    }
    x = Boolean(false);//parameter는 expression
    if (x) {
        console.log('3')
    }
    x = Boolean(true);
    if (x) {
        console.log('4')
    }
    x = new Boolean(false);
    if (x) {
        console.log('5')
    }
}
boolean()
/**
 * 정수는 10진, 16진, 8진 및 2진수로 표현될 수 있다.
 * 10진 정수 리터럴은 선행 0이 아닌 숫자열로 이뤄진다.
 * 정수 리터럴에서 선행 0이나 0O , 0o는 8진수다.
 * 0x 는 16진수
 * 0b는 2진수
 * 0, 117 및 -345 (10진수)
 * 015, 0001 및 -0o77 (8진수)
 * 0x1123, 0x00111 및 -0xF1A7 (16진수)
 * 0b11, 0b0011 및 -0b11 (2진수)
 */

/**
 * 부동 소수점 리터럴은
 * 부호("+"나 "-")가 달릴 수 있는 10진 정수,
 * 소수점("."),
 * 소수(또 다른 10진수),
 * 지수.(e나 E 다음에 오며 +,-가 달릴 수 있는 정수다.)
 * [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
 * 3.1415926
 * -.123456789
 * -3.1E+12
 * .1e-23
 */

/**
 * 객체 리터럴은 중괄호로 묶인 0개 이상인 객체의 속성명과 관련 값 쌍 목록이다.
 * 문의 시작을 {}로 시작하면 안된다. (블록으로 인식)
 */

function object() {
    var sales = "Toyota";
    function carTypes(name) {
        if (name === "Honda") {
            return name
        } else {

        }
        return "Sorry, we don't sell " + name + "."
    }

    {
        var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales }

        console.log(car.myCar)   // Saturn
        console.log(car.getCar)  // Honda
        console.log(car.special) // Toyota
    }

    {
        var car = { manyCars: { a: "Saab", "b": "Jeep" }, 7: "Mazda" }

        console.log(car.manyCars.b) // Jeep
        console.log(car[7]) // Mazda
        //객체 안에 객체를 중첩 가능하다.
        //[]로도 접근이 가능하다.
    }
    {
        var unusualPropertyNames = {
            "": "An empty string",
            "!": "Bang!"
        }
        //식별자나 숫자가 아닌경우 따음표('',"")로 묶여야 된다.
        // console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
        //console.log(unusualPropertyNames[""]);  // An empty string
        //console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
        console.log(unusualPropertyNames["!"]) // Bang!
    }
    {
        var handler
        var obj = {
            // ‘handler: handler’의 단축 표기
            handler,
            // Methods
            //tostring : toString()
            toString() {
                // Super calls
                return "d " + super.toString();
            },
            // Computed (dynamic) property names
            ['prop_' + (() => 42)()]: 42
        }
    }
}
object()

/**
 * 정규식은 딱히 필요할 때 마다 찾아사용하면 되니 작성을 안하겠다.
 * 
 * 문자열은 '', "", ``로 묶여 있다.
 * ``를 사용하면 문자열 삽입 기능과 비슷한 사용이 가능하다.
 * `안녕 `${variable}` 이런식으로
 * ''를 사용하면 '안녕 '+ variable
 * ""를 사용하면 "안녕 "+ variable
 * 
 */
{
    var str =
        "this string \
is broken \
across multiple\
lines."
    console.log(str)   // this string is broken across multiplelines.
}
{
    var poem =
        "Roses are red,\n\
        Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."
    console.log(poem)
}