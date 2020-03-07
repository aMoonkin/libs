import "./apply";

let num: number = 0;

let obj: Object = {
  num: 1
};

function fnWithoutArgs(): number {
  return this.num;
}

function fnWithOneArg(num: number): number {
  return num + this.num;
}

function fnWithTwoArgs(num1: number, num2: number): number {
  return num1 + num2 + this.num;
}

test("call should change this target", () => {
  expect(fnWithoutArgs.xApply(obj)).toEqual(1);
});

test("call could handle function arguments", () => {
  expect(fnWithOneArg.xApply(obj, [2])).toEqual(3);
  expect(fnWithTwoArgs.xApply(obj, [2, 3])).toEqual(6);
});
