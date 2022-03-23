exports.ascending = (end, start) => {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return [arr[0], arr[arr.length - 1]];
};
