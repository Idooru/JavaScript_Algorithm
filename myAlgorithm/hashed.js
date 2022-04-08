const existArr = [5, 6, 14, 20, 29, 34, 37, 51, 69, 75];
const hashedArr = [];
const hashTable = [];
const hashKey = 13;

console.log(`기존 배열: [${existArr.join(", ", " ")}]`);

for (let i in existArr) {
    hashedArr[i] = null;
}

let i = 0;

while (i < hashedArr.length) {
    for (let j of existArr) {
        let formula = j % hashKey;
        hashedArr[i] = formula;
        i++;
    }
}

console.log(`해시화한 배열: [${hashedArr.join(", ", " ")}]`);

i = 0;
while (i < hashedArr.length) {
    for (let j of existArr) {
        let formula = j % hashKey;
        hashTable[formula] = existArr[i];
        i++;
    }
}

console.log(`해시테이블: [${hashTable.join(", ", " ")}]`);
