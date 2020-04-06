import { selectSort } from "./selectSort";

let randomArray = [2, 1, 3, 5, 0, 1, -1, 20, -3];
let sortedArray = [-3, -1, 0, 1, 1, 2, 3, 5, 20];

test("random array after selection sort should return sorted array", () => {
    selectSort(randomArray);
    expect(randomArray).toEqual(sortedArray);
});
