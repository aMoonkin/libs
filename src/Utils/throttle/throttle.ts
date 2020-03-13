export function throttle(fn: Function, time: number) {
    let prev = Date.now();
    let context;

    return function(e: Event) {
        context = this;
        let now = Date.now();
        if (now - prev > time) {
            fn.apply(context, e);
            prev = Date.now();
        }
    };
}

export function throttleWithTimeout(fn: Function, time: number) {
    let timer: any = null;

    return function(e: Event) {
        let context = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, e);
                timer = null;
            }, time);
        }
    };
}
