/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-20 09:07:47
 * @modify date 2017-08-20 09:07:47
 * @desc [문자열 만들기]
 */
var a = 'foo',
    b = 'bar',
    c = '\xA9',
    d = '\u00A9',
    e = '\u{2F804}',
    f = '\uD87E\uDC04',
    g = new String('foo')
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g, g[0], g[1], g[2], g.toString())