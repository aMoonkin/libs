export function debounce(fn: Function, time: number, immediately: boolean) {
    let timeout: number;

    return function(e: Event) {
        let context = this;
        let firstTime = !timeout;
        if (timeout) clearTimeout(timeout);

        if (immediately && firstTime) {
            fn.apply(context, e);
        }

        timeout = setTimeout(fn.bind(context, e), time);
    };
}
