/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-01 11:06:50
 * @modify date 2017-08-02 08:47:56
 * @desc [비동기식의 연산을 제어 한다.]
*/
function Sum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number' || isNaN(a) || isNaN(b))
            reject(Error('is not a number'))
        else
            resolve(a + b)
    })
}

Sum(1, 2).then(n => { console.log(n) }).catch((e) => { console.log(e.message) })
Sum(1, '2').then(n => { console.log(n) }).catch((e) => { console.log(e.message) })