import { swap } from "./swap";

export function insertSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let curIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (cur < array[j]) {
                swap(array, j, curIndex);
                curIndex = j;
            }
        }
    }
}
