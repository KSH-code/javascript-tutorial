/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 10:07:30
 * @modify date 2017-08-23 10:07:30
 * @desc [유사 객체]
 */
function printArguments() {
    // Array.forEach(arguments, function(item) {//안된다
    //     console.log(item);
    // });
    Array.prototype.forEach.call(arguments, function(item) {
        console.log(item);
    });
}
// Array.forEach("a string", function(chr) { //안된다
//     console.log(chr);
// })
printArguments([1, 2, 3])
Array.prototype.forEach.call("a string", function(chr) { //문자열도 사용이 가능
    console.log(chr);
})