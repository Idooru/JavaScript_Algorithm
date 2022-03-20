console.log("두 입력값 사이의 합을 구합니다.");

const readlineSync = require("readline-sync");
const range = require("../modules/range");

const a = Number(readlineSync.question("input number a : "));
const b = Number(readlineSync.question("input number b : "));

let sum = 0;

for (let i of range.default(a, b)) {
    sum += i;
}

console.log(`두 수 ${a}부터 ${b}까지의 합은 ${sum}`);
