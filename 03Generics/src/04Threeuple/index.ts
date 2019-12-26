import Tuple from './../03Tuple';

class Threeuple<T, V, A> extends Tuple<T, V> {
    constructor(public param1: T, public param2: V, private param3: A) {
        super(param1, param2);
    }

    public toString(): string {
        return `${super.toString()} -> ${this.param3}`;
    }
}

export default Threeuple;
