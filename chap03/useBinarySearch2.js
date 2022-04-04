const input = require("readline-sync");
const binary_search = require("../modules/binary_search");
const random = require("../modules/random");

const num = Number(input.question("input inteager array's length : "));
const low = Number(input.question("input inteager low : "));
const high = Number(input.question("input inteager high : "));
if (low > high) {
    let temp = null;
    temp = low;
    low = high;
    high = temp;
}

const x = random(low, high, num);
const sorted = x.sort((a, b) => a - b);
console.log("정렬된 배열 : ", sorted);

const target = Number(input.question("input inteager target : "));
const result = binary_search(sorted, target);

if (result === false) {
    console.log("찾으려는 값이 존재하지 않습니다.");
} else {
    console.log(`검색하려는 값(${target})이 sorted[${result}]에 존재합니다.`);
}
