import { swap } from "./swap";

export function selectSort(array: number[]) {
    let len = array.length;
    for (let i = len - 1; i >= 0; i--) {
        let max = i;
        for (let j = i; j >= 0; j--) {
            if (array[j] > array[max]) {
                max = j;
            }
        }

        if (max !== i) {
            swap(array, i, max);
        }
    }
}
