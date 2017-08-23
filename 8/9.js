/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-23 10:11:47
 * @modify date 2017-08-23 10:11:47
 * @desc [배열 함축 표현]
 */
// var numbers = [1, 2, 3, 4];
// var doubled = [i * 2
//     for (i of numbers)
// ];
// console.log(doubled); // logs 2,4,6,8

// //same
// doubled = numbers.map(function(i) { return i * 2; });


// var numbers = [1, 2, 3, 21, 22, 30];
// var evens = [i
//     for (i of numbers)
//         if (i % 2 === 0)
// ];
// console.log(evens); // logs 2,22,30

// //same
// evens = numbers.filter(function(i) { return i % 2 === 0; });

// var str = 'abcdef';
// var consonantsOnlyStr = [c
//     for (c of str)
//         if (!(/[aeiouAEIOU]/).test(c))
// ].join(''); // 'bcdf'
// var interpolatedZeros = [c + '0'
//     for (c of str)
// ].join(''); // 'a0b0c0d0e0f0'