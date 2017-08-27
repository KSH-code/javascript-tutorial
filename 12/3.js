/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 10:47:54
 * @modify date 2017-08-27 10:47:54
 * @desc []
 */

for (let v of['a', 'b', 'c']) {
    console.log(v);
}
console.log([...
    'abc'
]);

function* gen() {
    yield*['a', 'b', 'c']
}
let g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

var [a, b, c] = new Set(['a', 'b', 'c']) //배열 비구조화
console.log(a)
console.log(b)
console.log(c)