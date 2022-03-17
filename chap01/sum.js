const readlineSync = require("readline-sync");

const a = Number(readlineSync.question("input number a : "));
const b = Number(readlineSync.question("input number b : "));

let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

console.log(sum);
