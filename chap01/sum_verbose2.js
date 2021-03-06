console.log("두 입력값 사이의 합을 구하는 과정을 출력합니다.");

const input = require("readline-sync");
const range = require("../modules/range");
const sort = require("../modules/sort");

let a = Number(input.question("input inteager a : "));
let b = Number(input.question("input inteager b : "));

if (a > b) {
    let temp = null;
    temp = a;
    a = b;
    b = temp;
}

let sum = 0;

for (let i of range.default(a, b)) {
    process.stdout.write(`${i} + `);
    sum += i;
}

process.stdout.write(`${b} = `);
sum += b;

console.log(sum);
