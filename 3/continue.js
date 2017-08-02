/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-02 09:55:42
 * @modify date 2017-08-02 09:55:42
 * @desc [continue 문]
*/
i = 0, n = 0
while (i < 5) {//1 2 3 4
    i++//1 2 3 4 5
    if (i == 3) continue
    n += i
    console.log(n)
}
i = 0, j = 0
checkiandj:
while (i < 4) {
    i += 1
    console.log(i)
    checkj:
    while (j) {
        console.log(j)
        j -= 1
        if (j % 2 === 0) continue checkj
        console.log(`${j} is odd`)
    }
    console.log(`i = ${i}`)
    console.log(`j = ${j}`)
}