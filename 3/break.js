/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-02 09:38:14
 * @modify date 2017-08-02 09:38:14
 * @desc [break문]
*/
var a = [1, 2, 3, 4, 5], theValue = 3
for (var i = 0; i < a.length; i++) {
    if (a[i] == theValue)
        break;
    console.log(i)
}
var x = 0
var z = 0
labelCancelLoops: while (true) {
    console.log(`Outer loops: ${x}`)
    x += 1
    z = 1
    while (true) {
        console.log(`Inner loops ${z}`)
        z += 1
        if (z === 10 && x === 10)
            break labelCancelLoops
        else if (z === 10)
            break
    }
}