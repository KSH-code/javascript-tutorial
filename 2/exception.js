/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-01 10:32:30
 * @modify date 2017-08-02 08:47:50
 * @desc [예외 처리문]
*/
try {
    throw "Error2"
    throw "42"
    throw true
} catch (e) {
    console.log(e)
}
try {
    throw {
        toString: function () {
            return "I'm an object!"
        }
    }
} catch (e) {
    console.log(e)
}
/**
 * 예외를 사용할 때 객체를 명시할 수 있다.
 * catch문 안에서 객체들의 특성들을 참고가 가능하다.
 * throw 에서도 사용이 가능하다
 */
function UserException(message) {
    this.message = message
    this.name = "UserException"
}

UserException.prototype.toString = function () {
    return `${this.name} : ${this.name}`
}
try {
    throw new UserException('Value too high')
} catch (e) { console.log(e) }
function getMonthName(mo) {
    mo = mo - 1
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"]
    if (months[mo]) return months[mo]
    else throw "InvalidMonthNo"
}
try {
    monthName = getMonthName(1)
}
catch (e) {
    monthName = "unknown";
    console.log(e);
}

function f() {
    try {
        console.log(0);
        throw "bogus";
    } catch (e) {
        console.log(1);
        return true;
        console.log(2);
    } finally {
        console.log(3);
        return false;
        console.log(4);
    }
    console.log(5);
}
f(); //0, 1, 3

function g() {
    try {
        throw "bogus";
    } catch (e) {
        console.log('caught inner "bogus"');
        throw e;
    } finally {
        return false;
    }
}

try {
    g();
} catch (e) {
    console.log('caught outer "bogus"');
}

// caught inner "bogus"

try {
    console.log('1')
    try {
        console.log('2')
        throw 'a'
    } catch (e) {
        console.log(e)
    }
    console.log('3')
    try {
        console.log('4')
        throw 'b'
    } catch (e) {
        console.log(e)
    }
    throw 'c'
    console.log('5')
} catch (e) {
    console.log(e)
}

function doSomethingErrorProne() {
    throw (new Error('The message'))
}
try {
    doSomethingErrorProne();
}
catch (e) {
    console.log(e.name); // logs 'Error'
    console.log(e.message); // logs 'The message' or a JavaScript error message)
}

