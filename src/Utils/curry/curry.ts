export function curry(fn: Function, ...someOfArgs: any[]) {
  let len = fn.length;
  return helper(fn, len, ...someOfArgs);
}

function helper(fn: Function, len: number, ...someOfArgs: any[]) {
  if (someOfArgs.length < len) {
    return function(...rest: any[]) {
      someOfArgs = someOfArgs.concat(rest);
      return helper(fn, len, ...someOfArgs);
    };
  } else {
    return fn(...someOfArgs);
  }
}
