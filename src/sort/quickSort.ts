export function quickSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let middleValue = array.splice(middle, 1)[0];

    let left = [],
        right = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < middleValue) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([middleValue], quickSort(right));
}
