import sortArr from './01SortArray';
import changeArr from './02ChangeArray';
import operationsA from './03OperationsA';
import operationsB from './04OperationsB';
import racing from './05Racing';

// 01 Sort Array
const asc = sortArr([14, 7, 17, 6, 8], 'asc');
const desc = sortArr([14, 7, 17, 6, 8], 'desc');

console.log('01 Sort Array');
console.log('asc =>', asc);
console.log('desc =>', desc);
console.log('==================================================================================');

// 02 Change Array
const changeArrRes1 = changeArr(
    `1 2 3 4 5 5 5 6
    Delete 5
    Insert 10 1
    Delete 5
    end`
);
const changeArrRes2 = changeArr(
    `20 12 4 319 21 31234 2 41 23 4
    Insert 50 2
    Insert 50 5
    Delete 4
    end`
);

console.log('02 Change Array');
console.log('changeArr result 1 =>', changeArrRes1);
console.log('changeArr result 2 =>', changeArrRes2);
console.log('==================================================================================');

// 03 Operations A
const operationsARes1: string = operationsA(
    `1 23 29 18 43 21 20
    Add 5
    Remove 5
    Shift left 3
    Shift left 1
    End`
);
const operationsARes2: string = operationsA(
    `5 12 42 95 32 1
    Insert 3 0
    Remove 10
    Insert 8 6
    Shift right 1
    Shift left 2
    End`
);

console.log('03 Operations A');
console.log('operations result 1 => ', operationsARes1);
console.log('operations result 2 => ', operationsARes2);
console.log('==================================================================================');

// 04 Operations B
const operationsBRes1: Object = operationsB(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
const operationsBRes2: Object = operationsB(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);

console.log('03 Operations B');
console.log(operationsBRes1);
console.log(operationsBRes2);
console.log('==================================================================================');

// 05 Racing
const racingRes = racing('29 13 9 0 13 0 21 0 14 82 12');

console.log('Racing');
console.log(racingRes);
console.log('==================================================================================');
