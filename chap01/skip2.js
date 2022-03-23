const range = require("../modules/range");

for (let i of range.default(1, 8).concat(range.default(9, 13))) {
    process.stdout.write(`${i} `);
}
