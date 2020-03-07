interface Function {
  xBind: any;
}

Function.prototype.xBind = function xBind(
  context: any,
  ...partOfArgs: any[]
): any {
  let self = this;
  return function(...restOfArgs: any[]) {
    return self.apply(context, partOfArgs.concat(restOfArgs));
  };
};
