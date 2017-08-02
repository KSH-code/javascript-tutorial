/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-02 10:03:50
 * @modify date 2017-08-02 10:03:50
 * @desc [for...in문]
*/

function helloWorld(array) {
    for (var i in array)
        console.log(array[i])
}
helloWorld({ arr: [1, 2, 3, 4, 5], hello: 'hi' })