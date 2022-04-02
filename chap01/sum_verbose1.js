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

for (let i of range.default(a, b + 1)) {
    if (i < b) {
        process.stdout.write(`${i} + `); // 한줄로 길게 출력
    } else {
        process.stdout.write(`${i} = `); // 한줄로 길게 출력
    }
    sum += i;
}

console.log(sum);
