/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-11 09:31:10
 * @modify date 2017-09-11 09:31:10
 * @desc [복잡한 데이터 구조화]
 */
/**
 * c언어에서의 구조체
 *  struct someStruct {
    unsigned long id;
    char username[16];
    float amountDue;
    };
 */
var buffer = new ArrayBuffer(24);


var idView = new Uint32Array(buffer, 0, 1); //0부터 4바이트
var usernameView = new Uint8Array(buffer, 4, 16); //4부터 16개(8bit = 1B)
var amountDueView = new Float32Array(buffer, 20, 1); //20부터 4바이트

amountDueView[0] = 10
for (let i = 0; i < usernameView.length; i++)
    usernameView[i] = i
console.log(idView)
console.log(usernameView)
console.log(amountDueView)