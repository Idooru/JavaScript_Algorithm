const range = require("../modules/range");

for (let i of range.default(1, 13)) {
    if (i == 8) continue;
    process.stdout.write(`${i} `);
}
