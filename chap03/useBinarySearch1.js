const input = require("readline-sync");
const range = require("../modules/range");
const binary_search = require("../modules/binary_search");

const num = Number(input.question("input inteager array's length : "));

const x = [];
x[0] = Number(input.question("input inteager x[0] : "));

for (let i of range.default(1, num)) {
    while (true) {
        x[i] = Number(input.question(`input inteager x[${i}] : `));
        if (x[i] > x[i - 1]) break;
    }
}

const target = Number(input.question("input inteager target : "));

const result = binary_search(x, target);
if (result === false) {
    console.log("찾으려는 값이 존재하지 않습니다.");
} else {
    console.log(`검색하려는 값(${target})이 x[${result}]에 존재합니다.`);
}
