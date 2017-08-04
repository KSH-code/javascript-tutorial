/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 02:07:03
 * @modify date 2017-08-04 02:07:03
 * @desc [짧은 함수]
 */
var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];

var a2 = a.map(function(s) { return s.length });

var a3 = a.map(s => s.length);
console.log(a2) //[ 8, 6, 7, 10 ]
console.log(a3) //[ 8, 6, 7, 10 ]