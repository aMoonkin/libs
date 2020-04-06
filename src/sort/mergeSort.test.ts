import { mergeSort } from "./mergeSort";

let randomArray = [2, 1, 3, 5, 0, 1, -1, 20, -3];
let sortedArray = [-3, -1, 0, 1, 1, 2, 3, 5, 20];

test("random array after merge sort should return sorted array", () => {
    expect(mergeSort(randomArray)).toEqual(sortedArray);
});
