/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 03:18:19
 * @modify date 2017-08-31 03:18:19
 * @desc [&& ||]
 */
function aaaa(a, b) {
    let c = a && b //a가 유효하면 b
    let d = a || b //a가 유효하면 a 아니면 b
    return [c, d]
}
console.log(aaaa('', 'h'))
console.log(aaaa('a', 'h'))