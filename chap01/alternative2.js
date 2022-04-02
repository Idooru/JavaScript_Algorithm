console.log("+와 -를 번갈아 출력합니다.");

const input = require("readline-sync");
const range = require("../modules/range.js");

const n = Number(input.question("input inteager n : "));

for (_ of range.formula(n / 2)) {
    process.stdout.write("+-");
}

if (n % 2) {
    console.log("+");
}
