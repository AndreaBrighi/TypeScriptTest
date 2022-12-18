class Counter {
    private count: number;

    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

export { Counter };