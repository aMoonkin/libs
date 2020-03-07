import "./bind";

let num: number = 0;

let obj: Object = {
  num: 1
};

function fnWithoutArgs(): number {
  return this.num;
}
function fnWithTwoArgs(arg1: number, arg2: number): number {
  return arg1 + arg2 + this.num;
}
function fnWithThreeArgs(arg1: number, arg2: number, arg3: number): number {
  return arg1 + arg2 + arg3 + this.num;
}

test("bind should change this target", () => {
  expect(fnWithoutArgs.xBind(obj)()).toEqual(1);
});

test("bind could pass all args in bind", () => {
  expect(fnWithTwoArgs.xBind(obj, 1, 2)()).toEqual(4);
});

test("bind could pass all args in function", () => {
  expect(fnWithTwoArgs.xBind(obj)(1, 2)).toEqual(4);
});

test("bind could pass some else args in function", () => {
  expect(fnWithThreeArgs.xBind(obj, 1, 2)(3)).toEqual(7);
});
