module.exports = (low, high, length) => {
    let arr = [];

    let i = 0;

    while (i < length) {
        let num = Math.floor(Math.random() * (high - low) + low);
        if (!sameNum(num)) {
            arr.push(num);
            i++;
        } else {
            continue;
        }
    }

    function sameNum(num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                return true;
            }
        }

        return false;
    }

    return arr;
};
