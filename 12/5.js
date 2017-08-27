/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 10:54:48
 * @modify date 2017-08-27 10:54:48
 * @desc [고급 generator]
 */

function* fibo() {
    var fn1 = 0
    var fn2 = 1
    while (true) {
        var current = fn1
        fn1 = fn2
        fn2 = current + fn1
        let reset = yield current
        if (reset) {
            fn1 = 0, fn2 = 1
        }
    }
}
var sequence = fibo();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2