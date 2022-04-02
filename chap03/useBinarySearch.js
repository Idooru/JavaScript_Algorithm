const readlineSync = require("readline-sync");
const range = require("../modules/range");
const sort = require("../modules/sort");
const binary_search = require("../modules/binary_search");

const n = Number(readlineSync.question("input inteager array's length : "));
const low = Number(readlineSync.question("input inteager low : "));
const high = Number(readlineSync.question("input inteager high : "));
const target = Number(readlineSync.question("input inteager target : "));
const x = [];

if (low > high) {
    [low, high] = sort.ascending(a, b);
}

for (let i of range.zeroStart(n)) {
    x[i] = Math.floor(Math.random() * (high - low) + low);
}

const sorted = x.sort();
console.log(sorted);

const result = binary_search(sorted, target);
console.log(`결과 : ${result}`);
