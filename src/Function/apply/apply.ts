interface Function {
  xApply: any;
}

Function.prototype.xApply = function(context: any, restOfArgs: any[]): any {
  context.fn = this;
  let result = context.fn(...restOfArgs);
  delete context.fn;
  return result;
};
