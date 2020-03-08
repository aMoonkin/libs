import { curry } from "./curry";

function fnWith2Params(n1: number, n2: number): number {
  return n1 + n2;
}

function fnWith3Params(n1: number, n2: number, n3: number): number {
  return n1 + n2 + n3;
}

test("curry on fn with 2 params", () => {
  expect(curry(fnWith2Params)(1)(2)).toEqual(3);
});

test("curry on fn with 3 params", () => {
  expect(curry(fnWith3Params)(1)(2)(3)).toEqual(6);
});

test("curry on fn with 3 params, passing params together", () => {
  expect(curry(fnWith3Params)(1)(2, 3)).toEqual(6);
  expect(curry(fnWith3Params)(1, 2, 3)).toEqual(6);
});
