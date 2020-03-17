import { XPromise } from "./promise";

let x = new XPromise((resolve: Function, reject: Function) => {
  let n = 1;
  if (n === 1) resolve(n);
  else reject(n);
});

let a = x.then(x => {
  //1
});
