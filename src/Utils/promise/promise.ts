const FULLFILLED = "fullfilled",
  REJECTED = "rejected",
  PENDING = "pending";

export interface IPromiseCtor extends Function {
  (resolve: Function, reject: Function): any;
}

export interface IResolve extends Function {
  (value: any): any;
}

export interface IReject extends Function {
  (value: any): any;
}

export class XPromise {
  private state: string;
  private value: any;
  private reason: any;

  private innerResolve: Function = (value: any) => {
    if (this.state !== PENDING) return;
    this.value = value;
    this.state = FULLFILLED;
  };

  private innerReject: Function = (value: any) => {
    if (this.state !== PENDING) return;
    this.reason = value;
    this.state = REJECTED;
  };

  constructor(private fn: IPromiseCtor) {
    try {
      fn(this.innerResolve, this.innerReject);
    } catch (e) {
      this.innerReject(e);
    }
    this.state = PENDING;
  }

  static resolve(v: any): XPromise {
    let x = v;
    if (v instanceof XPromise) {
    }
    let promise = new XPromise(r => r(x));
    return promise;
  }

  static reject(r: any): XPromise {
    let promise = new XPromise(r => r(r));
    return promise;
  }

  then(onFullfilled: IResolve, onRejected?: IReject): XPromise {
    if (this.state === FULLFILLED) {
      let r;
      try {
        r = onFullfilled(this.value);
      } catch (e) {
        return XPromise.reject(e);
      }
      return XPromise.resolve(r);
    }

    if (this.state === REJECTED) {
      let r;
      try {
        r = onRejected(this.reason);
      } catch (e) {
        onRejected(e);
      }
      return XPromise.reject(r);
    }

    if (this.state === PENDING) {
      setTimeout(() => {
        //   ???
        this.then(onFullfilled, onRejected);
      }, 0);
    }
  }
}
