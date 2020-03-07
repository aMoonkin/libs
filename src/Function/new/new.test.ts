import { newFactory } from "./new";

class Person {
  public height: number = 10;
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHeight() {
    return this.height;
  }
}

interface ITest {
  name: string;
}

function Test1(): ITest {
  return {
    name: "test"
  };
}

function Test2(): number {
  return 1;
}

let person1: Person = newFactory(Person, "xie");
let testValue1: ITest = newFactory(Test1);
let testValue2: any = newFactory(Test2);

test("newFactory can generate from it's constructor", () => {
  expect(person1).toBeInstanceOf(Person);
});

test("newFactory with returned object value should return that value", () => {
  expect(testValue1).toHaveProperty("name");
  expect(testValue1.name).toEqual("test");
});

test("newFactory with returned none object value should return that value", () => {
  expect(testValue2).not.toHaveProperty("name");
});
