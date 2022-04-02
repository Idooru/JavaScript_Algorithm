const readlineSync = require("readline-sync");
const range = require("../modules/range");
const linear_search = require("../modules/linear_search");

const target = Number(readlineSync.question("input inteager target : "));
const number = Number(readlineSync.question("input inteager number : "));
const x = [];

for (let i of range.zeroStart(number)) {
    x[i] = Number(readlineSync.question(`input inteager x[${i}] : `));
}

const result = linear_search(x, target);

console.log(`결과 : ${result}`);
