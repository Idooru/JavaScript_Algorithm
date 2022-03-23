console.log("세 개의 입력값 중 최댓값을 뽑아냅니다.");

const readlineSync = require("readline-sync");

const a = Number(readlineSync.question("input inteager a : "));
const b = Number(readlineSync.question("input inteager b : "));
const c = Number(readlineSync.question("input inteager c : "));

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
