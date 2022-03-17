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
