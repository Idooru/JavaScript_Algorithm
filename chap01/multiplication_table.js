const range = require("../modules/range");

for (_ of range.zeroStart(45)) {
    process.stdout.write("*");
}
console.log();

for (let i of range.default(1, 10)) {
    for (let j of range.default(1, 10)) {
        process.stdout.write(`  ${i * j} `);
    }
    console.log();
}
