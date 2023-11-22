export const mod = (k: number, n: number): number => ((k % n) + n) % n;

export const min =
    <T>(compareFn: (x1: T, x2: T) => number, maxValue: T): ((xList: T[]) => T) =>
    (xList: T[]) =>
        xList.reduce((xPrevious, xCurrent) => (compareFn(xPrevious, xCurrent) <= 0 ? xPrevious : xCurrent), maxValue);

export const max =
    <T>(compareFn: (x1: T, x2: T) => number, minValue: T): ((xList: T[]) => T) =>
    (xList: T[]) =>
        xList.reduce((xPrevious, xCurrent) => (compareFn(xPrevious, xCurrent) >= 0 ? xPrevious : xCurrent), minValue);

export const getFromMap =
    <U, V>(map: Map<U, V>) =>
    (key: U): V => {
        if (!map.has(key)) throw ReferenceError;

        return map.get(key) as V;
    };

export class AutoIncrementMap<T> {
    private map: Map<number, T>;
    private index: number;

    constructor(staringIndex: number = 0) {
        this.map = new Map();
        this.index = staringIndex;
    }

    toArray(): [number, T][] {
        return Array.from(this.map.entries());
    }

    push(t: T): void {
        this.map.set(this.index, t);
        this.index++;
    }

    get(i: number): T | undefined {
        return this.map.get(i);
    }

    has(i: number): boolean {
        return this.map.has(i);
    }
}
