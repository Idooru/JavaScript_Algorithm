// function makePair(a, b) {
//     return function (f) {
//         return f(a, b);
//     };
// }

// function fst(p) {
//     return p(function (a, b) {
//         return a;
//     });
// }

// function snd(p) {
//     return p(function (a, b) {
//         return b;
//     });
// }

// let p = makePair(1, "abc");

// console.log(fst(p));
// console.log(snd(p));

// const input = require("readline-sync");

// a = Number(input.question("input a : "));
// b = Number(input.question("input b : "));

// if (a > b) {
//     let temp;
//     temp = a;
//     a = b;
//     b = temp;
// }

// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
// }

// console.log(`${a} 부터 ${b} 까지의 합은 `, sum);

const input = require("readline-sync");
const range = require("../modules/range");

const a = Number(input.question("input inteager a : "));
const b = Number(input.question("input inteager b : "));

if (a > b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
}
