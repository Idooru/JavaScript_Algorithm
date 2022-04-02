console.log("+와 -를 번갈아 출력합니다.");

const input = require("readline-sync");
const range = require("../modules/range");

const n = Number(input.question("input inteager n : "));

for (let i of range.default(1, n + 1)) {
    if (i % 2) {
        process.stdout.write("+");
    } else {
        process.stdout.write("-");
    }
}
