/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 03:28:52
 * @modify date 2017-08-31 03:28:52
 * @desc [Leak Memory]
 */
function leakMemory() {
    var e = { type: 1 }
    var o = { e }
    e.o = o
    console.log(e)
    console.log(o)
}
leakMemory() //순환 참조해서 메모리가 leak

function addHandler() { //메모리 leak
    var el = document.getElementById('el');
    el.onclick = function() {
        //클로저 내에서 el을 참조함
        this.style.backgroundColor = 'red';
    }
}

function addHandler() { //메모리 leak이 없음
    var el = document.getElementById('el');
    el.onclick = function() {
        this.style.backgroundColor = 'red';
    }
    el = null; //참조를 끊어줘야 됨
}

function addHandler() { //클로저를 사용해 참조를 끊음
    var clickHandler = function() {
            this.style.backgroundColor = 'red';
        }
        (function() { //내부 함수는 실행되고 바로 사라진다.(function이 실행되고 el참조가 끊어진다.)
            var el = document.getElementById('el');
            el.onclick = clickHandler;
        })();
}