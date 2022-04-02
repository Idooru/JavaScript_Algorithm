console.log("10 ~ 99 사이의 난수 n개를 생성합니다. (13이 나오면 중단)");

const input = require("readline-sync");
const range = require("../modules/range");

let n;

do {
    n = Number(input.question("input inteager n : "));
} while (n <= 0 || n > 8);

for (_ of range.zeroStart(n)) {
    const randInt = Math.floor(Math.random() * (100 - 10) + 10);
    process.stdout.write(`${randInt} `);
}
0;
