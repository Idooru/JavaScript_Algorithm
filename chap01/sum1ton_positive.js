console.log("1부터 n까지 양의 정수의 합만 구합니다.");

const input = require("readline-sync");
const range = require("../modules/range");

let n;
let sum = 0;

do {
    n = Number(input.question("input inteager n : "));
} while (0 >= n);

for (let i of range.zeroStart(n + 1)) {
    sum += i;
}

console.log(`1부터 ${n}까지의 합은 ${sum}`);
