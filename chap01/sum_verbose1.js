console.log("두 입력값 사이의 합을 구하는 과정을 출력합니다.");

const readlineSync = require("readline-sync");
const range = require("../modules/range");

const a = Number(readlineSync.question("input inteager a : "));
const b = Number(readlineSync.question("input inteager b : "));

let sum = 0;

for (let i of range.default(a, b)) {
    if (i < b) {
        process.stdout.write(`${i} + `); // 한줄로 길게 출력
    } else {
        process.stdout.write(`${i} + `); // 한줄로 길게 출력
    }
    sum += i;
}

console.log(sum);
