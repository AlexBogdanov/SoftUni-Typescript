import IRace from './../interfaces/IRace';
import { racers, q } from './../index';

class Race implements IRace {
    constructor(private raceName: string) { }

    overtake(overtakerId: number, overtakedId: number): string {
        const overtakerIndex = q.finalPositions.findIndex(r => r.id === overtakerId);
        const overtakedIndex = q.finalPositions.findIndex(r => r.id === overtakedId);
        const overtaker = { ...q.finalPositions[overtakerIndex] };
        const overtaked = { ...q.finalPositions[overtakedIndex] };

        if (overtakerIndex === -1 || overtakedIndex === -1) {
            throw new Error('There is no such racers in the race');
        }

        const isOvertakerInLowerPos = (overtaker.position as any) > (overtaked.position as any) ? true : false;
        const areInSubqPos = (overtaker.position as any) - (overtaked.position as any) === 1 ? true : false;
        const isInFirstPos = overtaker.position === 1 ? true : false;
        const isInLastPos = overtaked.position === q.finalPositions.length ? true : false;

        if (!isOvertakerInLowerPos || !areInSubqPos || isInFirstPos || isInLastPos) {
            throw new Error('This overtake is not possible');
        }

        const overtakerOldPos = overtaker.position;
        overtaker.position = overtaked.position;
        overtaked.position = overtakerOldPos;

        q.finalPositions[overtakerIndex] = overtaker;
        q.finalPositions[overtakedIndex] = overtaked;
        q.finalPositions.sort((a, b) => (a.position as any) - (b.position as any));

        return `${overtaker.id} successfully overtook ${overtaked.id}`;
    }

    winRace(): string {
        const winner = racers.allRacers.find(r => r.id === q.finalPositions[0].id);
        
        if (!winner?.hasContract) {
            throw new Error(`${winner?.firstName} ${winner?.lastName} has no valid contract with a team`);
        }

        winner.wonRaces = (winner.wonRaces as any) >= 1 ? (winner.wonRaces as any) += 1 : 1; 

        return `The winner of the ${this.raceName} is ${winner.firstName} ${winner.lastName}`;
    }

    showStandings(): string {
        let result = 'Here is your top three:\n';

        q.finalPositions.forEach((p, i) => {
            if (i === 3) {
                result += 'And the rest of the grid is as follows:\n';
            }

            const racer = racers.allRacers.find(r => r.id === p.id);

            result += `${i + 1}. ${racer?.firstName} ${racer?.lastName}\n`;
        });

        return result;
    }
}

export default Race;
