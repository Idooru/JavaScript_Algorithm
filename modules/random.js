module.exports = (low, high, length) => {
    let arr = [];

    for (let i = 1; i <= length; i++) {
        num = Math.floor(Math.random() * (low <= x <= high));
        if (!sameNum(num)) {
            arr.push(num);
        }
    }

    function sameNum(num) {
        return arr.find((idx) => {
            idx === num;
        });
    }

    return arr;
};
