export const mod = (k: number, n: number): number => ((k % n) + n) % n;

export const getFromMap = <U, V>(map: Map<U, V>) => (key: U): V => {

    if (!map.has(key)) throw ReferenceError;

    return (map.get(key) as V);
}