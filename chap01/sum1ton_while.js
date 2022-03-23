console.log("1부터 n까지의 합을 while 반복문으로 구합니다.");

const readlineSync = require("readline-sync");

const n = Number(readlineSync.question("input inteager n : "));

let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`1부터 ${n}까지의 합은 ${sum}입니다.`);
