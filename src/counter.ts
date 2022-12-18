class Counter {
    private count: number;

    constructor();

    constructor(count: number);

    constructor(count?: number) {
        this.count = count ?? 0;
    }

    increment(step: number = 1) {
        this.count+=step;
    }

    getCount() {
        return this.count;
    }
}

export { Counter };