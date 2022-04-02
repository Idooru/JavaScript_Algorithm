console.log("*를 n개 출력하되 w개 만큼 줄바꿈합니다.");

const input = require("readline-sync");
const range = require("../modules/range");

const n = Number(input.question("input inteager n : "));
const w = Number(input.question("input inteager w : "));

for (let i of range.zeroStart(n)) {
    process.stdout.write("*");
    if (i % w === w - 1) {
        console.log();
    }
}

if (n % w) {
    console.log();
}
