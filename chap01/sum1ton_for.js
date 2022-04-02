console.log("1부터 n까지의 합을 for 반복문으로 구합니다.");

const input = require("readline-sync");
const range = require("../modules/range");

const n = Number(input.question("input inteager n : "));

let sum = 0;

for (let i of range.default(1, n + 1)) {
    sum += i;
}

console.log(`1부터 ${n}까지의 합은 ${sum}입니다.`);
