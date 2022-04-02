module.exports = (array, target) => {
    let i = 0;

    while (i < array.length) {
        if (array[i] === target) {
            break;
        }
        i++;
    }

    if (i === array.length) {
        return false;
    }
    return i;
};
