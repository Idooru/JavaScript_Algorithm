module.exports = (data) => {
    let maximum = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] > maximum) {
            maximum = data[i];
        }
    }

    return maximum;
};
