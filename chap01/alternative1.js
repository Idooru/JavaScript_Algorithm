console.log("+와 -를 번갈아 출력합니다.");

const readlineSync = require("readline-sync");
const range = require("../modules/range");

const n = Number(readlineSync.question("input inteager n : "));

for (let i of range.zeroStart(n)) {
    if (i % 2) {
        process.stdout.write("-");
    } else {
        process.stdout.write("+");
    }
}
