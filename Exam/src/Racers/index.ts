import IRacer from '../interfaces/IRacer';

class Racers {
    public allRacers: IRacer[] = [];

    constructor() { }

    public createRacer(firstName: string, lastName: string, dateOfBirth: string, id: number): void {
        if (this.allRacers.length >= 20) {
            console.log('createRacer');
            throw new Error('You have exceeded the maximum number of racers on the grid');
        }

        const isRacerInGrid = this.allRacers.some(r => r.id === id);

        if (isRacerInGrid) {
            console.log('createRacer');
            throw new Error(`${firstName} ${lastName} already exists on the grid`);
        }

        const newRacer: IRacer = {
            firstName,
            lastName,
            id,
            dateOfBirth
        };

        this.allRacers.push(newRacer);
    }

    public signContract(id: number, racingTeam: string, salary: number, terms: number): string {
        const index = this.allRacers.findIndex(r => r.id === id);

        if (index === -1) {
            console.log('singContract');
            throw new Error('There is no such racer on the grid');
        }

        const updatedRacer = { ...this.allRacers[index] };
        updatedRacer.hasContract = true;
        updatedRacer.racingTeam = racingTeam;
        updatedRacer.salary = salary;
        updatedRacer.terms = terms;

        this.allRacers[index] = updatedRacer;

        return `${updatedRacer.firstName} ${updatedRacer.lastName} has just signed a contract with ${racingTeam} for ${terms} years`;
    }

    public renewContract(id: number, salary: number, terms: number): string {
        const index = this.allRacers.findIndex(r => r.id === id);

        if (index === -1) {
            console.log('renewContract');
            throw new Error('There is no racer who meets the criteria');
        }

        const updatedRacer = { ...this.allRacers[index] };
        updatedRacer.salary = salary;
        updatedRacer.terms = terms;

        this.allRacers[index] = updatedRacer;

        return `${updatedRacer.firstName} ${updatedRacer.lastName} has renewed his contract with ${updatedRacer.racingTeam} for ${terms} years`;
    }

    public signWithNewTeam(id: number, racingTeam: string, salary: number, terms: number): string {
        const index = this.allRacers.findIndex(r => r.id === id);
        const isInThisTeam = this.allRacers[index].racingTeam === racingTeam ? true : false;

        if (index === -1 || isInThisTeam) {
            console.log('signWithNewTeam');
            throw new Error('There is no racer who meets the criteria or he is currently in the same team');
        }

        const updatedRacer = { ...this.allRacers[index] };
        updatedRacer.racingTeam = racingTeam;
        updatedRacer.salary = salary;
        updatedRacer.terms = terms;

        this.allRacers[index] = updatedRacer;

        return `${updatedRacer.firstName} ${updatedRacer.lastName} has signed his contract with his new team - ${racingTeam} for ${terms} years`;
    }
}

export default Racers;
