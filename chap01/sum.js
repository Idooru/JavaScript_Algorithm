console.log("두 입력값 사이의 합을 구합니다.");

const input = require("readline-sync");
const range = require("../modules/range");
const sort = require("../modules/sort");

let a = Number(input.question("input number a : "));
let b = Number(input.question("input number b : "));

if (a > b) {
    [a, b] = sort.ascending(a, b);
}

let sum = 0;

for (let i of range.default(a, b + 1)) {
    sum += i;
}

console.log(`두 수 ${a}부터 ${b}까지의 합은 ${sum}`);
