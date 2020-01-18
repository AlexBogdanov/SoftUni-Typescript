import QualiData from '../interfaces/QualiData';
import { racers } from './../';

class Quali {
    private times: QualiData[] = [];
    public finalPositions: QualiData[] = [];

    constructor() { }

    fastestLap(id: number, lapTime: number): void {
        const index = racers.allRacers.findIndex(r => r.id === id);
        const racer = racers.allRacers[index];

        if (index === -1 || !racer.hasContract) {
            throw new Error('There is no such racer on the grid or has no contract with a team');
        }

        const racerTime: QualiData = {
            id,
            lapTime
        };
        this.times.push(racerTime);
        
        if (this.times.length > 1) {
            this.times.sort((a, b) => (a.lapTime as any) - (b.lapTime as any));
        }
    }

    standings(): string | void {
        this.times.forEach((t, i) => {
            const racer: QualiData = {
                id: t.id,
                position: i + 1
            };

            this.finalPositions.push(racer);
        });

        const racer = racers.allRacers.find(r => r.id === this.finalPositions[0].id);

        if (racer) {
            return `The fastest driver was ${racer.firstName} ${racer.lastName} with car ${racer.id}!`;
        }
    }
}

export default Quali;
