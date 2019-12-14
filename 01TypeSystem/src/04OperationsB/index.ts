function operationsB(input: Array<any>): Object {
    const obj: { [key: string]: number } = {};
    
    for (let i = 0; i < input.length; i += 2) {
        const key: string = input[i];
        const value: number = input[i + 1];

        obj[key] = value;
    }

    return obj;
}

export default operationsB;
