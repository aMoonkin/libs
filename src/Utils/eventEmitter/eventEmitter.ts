interface Event {
    listeners: Function[];
}

class EventEmitter {
    private events: Map<string, Event>;

    constructor() {
        this.events = new Map();
    }

    addListener(name: string, fn: Function) {
        if (this.events.has(name)) {
            this.events.get(name).listeners.push(fn);
        } else {
            this.events.set(name, {
                listeners: [fn]
            });
        }
    }

    emit(name: string, ...params: any[]) {
        let listeners =
            this.events.has(name) && this.events.get(name).listeners;

        if (!listeners) {
            return;
        }

        listeners.forEach(listener => {
            listener.apply(this, params);
        });
    }
}

