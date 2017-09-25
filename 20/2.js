/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-25 09:10:38
 * @modify date 2017-09-25 09:10:38
 * @desc [Zero delays]
 */
(function() {

    console.log('this is the start'); //1

    setTimeout(function cb() {
        console.log('this is a msg from call back'); //5
    });

    console.log('this is just a message'); //2

    setTimeout(function cb1() {
        console.log('this is a msg from call back1'); //4
    }, 0); //요청을 처리하기 위해 필요한 최소 시간

    console.log('this is the  end'); //3

})();