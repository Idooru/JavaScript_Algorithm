const input = require("readline-sync");
const range = require("../modules/range");
const sort = require("../modules/sort");

const num = Number(input.question("input inteager number : "));
const arr = [];
let x;

for (let i of range.zeroStart(num)) {
    x = Number(input.question(`x[${i}] = `));
    arr.push(x);
}

arr.reverse();

console.log(arr);

for (let i in arr) {
    console.log(i);
}
