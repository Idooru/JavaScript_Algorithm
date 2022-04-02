module.exports = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let center = parseInt((low + high) / 2);
        const guess = array[center];

        if (guess === target) {
            return center;
        }

        if (center < target) {
            low = center + 1;
        }

        if (center > target) {
            high = center - 1;
        }
    }

    return false;
};
