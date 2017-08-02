/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-02 09:25:59
 * @modify date 2017-08-02 09:25:59
 * @desc [label문]
*/

var i, j
loop1:
for (i = 0; i < 3; i++) {//loop1
    loop2:
    for (j = 0; j < 3; j++) {
        if (i === 1 && j === 1)
            continue loop1;
        console.log(`i = ${i}, j = ${j}`)
    }
}
/**
     * i = 0, j = 0
     * i = 0, j = 2
     * i = 0, j = 1
     * i = 1, j = 0
     * i = 2, j = 0
     * i = 2, j = 1
     * i = 2, j = 2
 */

var itemsPassed = 0;
var i, j;
items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tests = [/^\d{1}$/]
top:
for (i = 0; i < items.length; i++) {
    for (j = 0; j < tests.length; j++) {
        if (!tests[j].test(items[i])) {
            continue top;
        }
    }
    itemsPassed++;
}
console.log(itemsPassed)

foo: {
    console.log('face')
    break foo
    console.log('this will not be executed')
}
console.log('swap')
