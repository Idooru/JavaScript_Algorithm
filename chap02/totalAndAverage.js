const input = require("readline-sync");
const range = require("../modules/range");

const n = Number(input.question("input students's number : "));
const students = [];
let total = 0;

for (let i of range.zeroStart(n)) {
    const score = Number(input.question(`input student(${i + 1})'s score : `));
    students.push(score);

    total += students[i];
}

console.log(`학생들의 총 점수는 ${total}점입니다.`);
console.log(`학생들의 평균 점수는 ${parseInt(total / n)}점입니다.`);
