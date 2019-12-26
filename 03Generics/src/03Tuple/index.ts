class Tuple<T, V> {
    constructor(public param1: T, public param2: V) {}

    public toString(): string {
        return `${this.param1} -> ${this.param2}`;
    }
}

export default Tuple;
