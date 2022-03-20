exports.default = (start, end) => {
    const arr = [];

    for (let i = start; i < end; i++) {
        arr.push(i);
    }

    return arr;
};

exports.zeroStart = (until) => {
    const arr = [];

    for (let i = 0; i < until; i++) {
        arr.push(i);
    }

    return arr;
};

exports.formula = (formula) => {
    const Int = parseInt(formula);
    const arr = [];

    for (let i = 0; i < Int; i++) {
        arr.push(i);
    }

    return arr;
};
