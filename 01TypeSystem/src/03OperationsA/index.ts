enum Commands {
    ADD = 'Add',
    INSERT = 'Insert',
    REMOVE = 'Remove',
    SHIFTLEFT = 'Shift left',
    SHIFTRIGHT = 'Shift right',
    END = 'End'
}

enum Directions {
    LEFT,
    RIGHT
}

function rotateArr(arr: Array<any>, direction: number): Array<any> {
    if (direction === Directions.LEFT) {
        arr.push(arr.shift());
    } else if (direction === Directions.RIGHT) {
        arr.unshift(arr.pop());
    }

    return arr;
} 

function operationsA(input: string): any {
    const tokens: Array<string> = input.trim().split('\n');
    let arr: Array<string> = tokens[0].trim().split(' ');
    tokens.shift();
    let result: string = '';
    
    tokens.forEach((token: string) => {
        const currTokens: Array<string> = token.trim().split(' ');
        const command: string = currTokens[0];

        if (command === Commands.ADD) {
            arr.push(currTokens[1]);
        } else if (command === Commands.INSERT) {
            const element: string = currTokens[1];
            const index: number = Number(currTokens[2]);

            if (index < 0 || index > arr.length) {
                console.log('Invalid index');
            } else {
                arr.splice(index, 0, element);
            }
        } else if (command === Commands.REMOVE) {
            const index: number = Number(currTokens[1]);

            if (index < 0 || index > arr.length) {
                console.log('Invalid index');
            } else {
                arr.splice(index, 1);
            }
        } else if (`${command} ${currTokens[1]}` === Commands.SHIFTLEFT) {
            const count = Number(currTokens[2]);

            for (let i = 1; i <= count; i += 1) {
                arr = rotateArr(arr, Directions.LEFT);
            }
        } else if (`${command} ${currTokens[1]}` === Commands.SHIFTRIGHT) {
            const count = Number(currTokens[2]);

            for (let i = 1; i <= count; i += 1) {
                arr = rotateArr(arr, Directions.RIGHT);
            }
        } else if (command === Commands.END) {
            result = arr.join(' ');
        }
    });

    return result;
}

export default operationsA;
