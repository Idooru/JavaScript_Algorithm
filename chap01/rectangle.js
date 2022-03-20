console.log("가로, 세로 길이가 정수이고 넓이가 area인 직사각형에서 변의 길아 나열하기");

const readlineSync = require("readline-sync");
const range = require("../modules/range");

const area = Number(readlineSync.question("input rectangle's width : "));

for (let i of range.default(1, area + 1)) {
    if (i * i > area) break;
    if (area % i) continue;
    process.stdout.write(`${i} x ${area / i}\n`);
}
