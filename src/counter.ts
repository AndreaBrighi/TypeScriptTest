class Counter {
    private count: number;

    constructor();

    constructor(count: number);

    constructor(count?: number) {
        this.count = count ?? 0;
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

export { Counter };