console.log("배열 데이터의 인덱스 값마다 최댓값을 뽑아냅니다.");

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

const data = [
    [3, 2, 1],
    [3, 2, 2],
    [3, 1, 2],
    [3, 2, 3],
    [2, 1, 3],
    [3, 3, 2],
    [3, 3, 3],
    [2, 2, 3],
    [2, 3, 1],
    [2, 3, 2],
    [1, 3, 2],
    [2, 3, 3],
    [1, 2, 3],
];

for (let i in data) {
    console.log(`scanMax(${data[i]}) = ${scanMax(data[i][0], data[i][1], data[i][2])}`);
}
