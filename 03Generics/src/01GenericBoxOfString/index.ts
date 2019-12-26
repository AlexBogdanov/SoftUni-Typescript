class Box<T> {
    constructor(private data: T) {}

    public toString(): string {
        return `${this.data} is of type ${typeof(this.data)}`;
    }
}

export default Box;
