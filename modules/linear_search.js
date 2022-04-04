module.exports = (array, target) => {
    const sentinal = Array.from(array); // 보초법 사용
    sentinal.push(target);

    let i = 0;
    while (true) {
        if (sentinal[i] === target) {
            break;
        }
        i++;
    }

    if (i === array.length) return false;
    return i;
};
