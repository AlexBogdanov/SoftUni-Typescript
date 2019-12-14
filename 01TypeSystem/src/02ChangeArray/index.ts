enum Commands {
    DELETE = 'Delete',
    INSERT = 'Insert',
    END = 'end'
}

function changeArr(input: string): string {
    const tokens: Array<string> = input.split('\n');
    const arrStr: string = tokens[0];
    tokens.shift();
    const arr: Array<string> = arrStr.split(' ');
    let result: string = '';

    tokens.forEach((token: string) => {
        const currTokens: Array<string> = token.trim().split(' ');
        const command = currTokens[0];

        if (command === Commands.DELETE) {
            const numToRemove: string = currTokens[1];
            const indexesToRemove: Array<number> = [];

            arr.forEach((el: string, i: number) => {
                if (el === numToRemove) {
                    indexesToRemove.push(i);
                }
            });

            indexesToRemove
                .reverse()
                .forEach((index: number) => {
                    arr.splice(index, 1);
                });
        } else if (command === Commands.INSERT) {
            const element: string = currTokens[1];
            const index: number = Number(currTokens[2]);

            arr.splice(index, 0, element);
        } else if (command === Commands.END) {
            result = arr.join(' ');
            return;
        }
    });

    return result;
}

export default changeArr;
