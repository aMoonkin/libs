export function newFactory<T extends Function>(ctor: T, ...args: any[]): any {
  let obj = { __proto__: ctor.prototype };
  let result = ctor.apply(obj, args);
  return typeof result === "object" ? result : obj;
}
