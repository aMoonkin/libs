export function swap(array: number[], i: number, j: number) {
    if (
        !array ||
        !Array.isArray(array) ||
        typeof array[i] !== "number" ||
        typeof array[j] !== "number"
    ) {
        throw new TypeError(
            `type error, array: ${typeof array}, i: ${typeof i}, j: ${typeof j}`
        );
    }

    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
