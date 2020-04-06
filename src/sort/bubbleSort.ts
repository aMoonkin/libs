import { swap } from "./swap";

export function bubbleSort(array: number[]) {
    const len = array.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}
