export function mergeSort(array: number[]): number[] {
    if (array.length > 1) {
        const len = array.length;

        let middle = Math.floor(len / 2);
        let left = mergeSort(array.slice(0, middle));
        let right = mergeSort(array.slice(middle, len));

        array = merge(left, right);
    }

    return array;
}

function merge(arr1: number[], arr2: number[]): number[] {
    let a1l = arr1.length,
        a2l = arr2.length;
    let array = [];

    let i = 0,
        j = 0;
    while (i < a1l && j < a2l) {
        if (arr1[i] < arr2[j]) {
            array.push(arr1[i]);
            i++;
        } else {
            array.push(arr2[j]);
            j++;
        }
    }

    if (i !== a1l) {
        array = array.concat(arr1.slice(i));
    } else {
        array = array.concat(arr2.slice(j));
    }

    return array;
}
