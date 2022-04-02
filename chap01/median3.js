console.log("세 개의 입력값 중 중앙값을 뽑아냅니다.");

const input = require("readline-sync");

const a = Number(input.question("input inteager a : "));
const b = Number(input.question("input inteager b : "));
const c = Number(input.question("input inteager c : "));

const median = (a, b, c) => {
    if ((a >= b && a <= c) || (c >= a && b <= a)) {
        return a;
    } else if ((a > b && c < b) || (c > b && a < b)) {
        return b;
    } else return c;
};

console.log(`${a} ${b} ${c} 중에서 중앙값은 ${median(a, b, c)}입니다.`);
