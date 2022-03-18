const readlineSync = require("readline-sync");

const a = Number(readlineSync.question("input inteager a : "));
const b = Number(readlineSync.question("input inteager b : "));

let sum = 0;

for (let i = a; i < b; i++) {
    process.stdout.write(`${i} + `);
    sum += i;
}

process.stdout.write(`${b} = `);
sum += b;

console.log(sum);
