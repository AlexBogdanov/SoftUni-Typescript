function timeHandler(racerTime: number, stepTime: number): number {
    if (stepTime === 0) {
        racerTime = racerTime - (racerTime * 0.2);
    } else {
        racerTime += stepTime;
    }

    return racerTime;
}

function racing(input: string): string {
    const track: Array<number> = input
        .split(' ')
        .map(el => Number(el));

    const finishIndex: number = track.length / 2;
    const leftTrack: Array<number> = track.slice(0, finishIndex);
    const rightTrack: Array<number> = track.slice(finishIndex).reverse();
    let leftRacerTime: number = 0;
    let rightRacerTime: number = 0;
    let result: string;

    leftRacerTime = leftTrack.reduce((acc: number, curr: number) => {
        return timeHandler(acc, curr);
    }, 0);

    rightRacerTime = rightTrack.reduce((acc: number, curr: number) => {
        return timeHandler(acc, curr);
    }, 0);

    if (leftRacerTime < rightRacerTime) {
        result = `The winner is left with total time: ${leftRacerTime}`;
    } else if (leftRacerTime > rightRacerTime) {
        result = `The winner is right with total time: ${rightRacerTime}`;
    } else {
        result = `The race is tie with total time: ${leftRacerTime}`;
    }

    return result;
};

export default racing;
