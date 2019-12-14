enum Orders {
    ASC = 'asc',
    DESC = 'desc'
}

function sortArr(arr: number[], order: string): number[] {
    if (order === Orders.ASC) {
        arr.sort((a: number, b:number) => {
            return a - b;
        });

        return arr;
    } else if (order === Orders.DESC) {
        arr.sort((a: number, b:number) => {
            return b - a;
        });

        return arr;
    } else {
        return arr;
    }
}

export default sortArr;
