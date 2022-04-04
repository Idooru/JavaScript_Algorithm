function binary_search(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = parseInt((low + high) / 2);
        let guess = arr[mid];

        if (guess === target) return mid;
        else if (guess < target) low = mid + 1;
        else if (guess > target) high = mid - 1;
    }

    return -1;
}

const target = 67;
const arr = [12, 23, 34, 45, 56];

const idx = binary_search(arr, target);

if (idx == -1) {
    console.log(false);
} else {
    console.log(`찾으려는 값(${target})이 x[${idx}]에 존재합니다.`);
}
