const input = require("readline-sync");
const range = require("../modules/range");
const linear_search = require("../modules/linear_search");

const target = Number(input.question("input inteager target : "));
const number = Number(input.question("input inteager number : "));
const x = [];

for (let i of range.zeroStart(number)) {
    x[i] = Number(input.question(`input inteager x[${i}] : `));
}

const result = linear_search(x, target);

console.log(`결과 : ${result}`);
