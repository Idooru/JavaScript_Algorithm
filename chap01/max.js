console.log("세 개의 입력값 중 최댓값을 뽑아냅니다.");

const input = require("readline-sync");

const a = Number(input.question("input inteager a : "));
const b = Number(input.question("input inteager b : "));
const c = Number(input.question("input inteager c : "));

const scanMax = (a, b, c) => {
    let max = a;

    if (max < b) {
        max = b;
    }

    if (max < c) {
        max = c;
    }

    return max;
};

console.log(`${a} ${b} ${c} 중에서 최댓값은 ${scanMax(a, b, c)}입니다.`);
