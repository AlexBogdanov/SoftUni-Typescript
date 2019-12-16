import IRacing from './IRacing';

class Racer {
    public isDnf: boolean = false;
    
    constructor(public name: string, public fuel: number, public position: number) { }
}

class Circuit implements IRacing {
    constructor(public racers: Array<Racer> = []) { }

    createRacer(name: string, fuel: number, position: number) {
        const newRacer = new Racer(name, fuel, position);
        this.racers.push(newRacer);
    }
    
    consumeFuel(usedFuel: number, name: string) {
        this.racers.some(racer => {
            if (racer.name === name) {
                racer.fuel -= usedFuel;

                if (racer.fuel <= 0) {
                    racer.isDnf = true;
                    
                    this.racers.forEach(r => {
                        if (r.position > racer.position) {
                            r.position -= 1;
                        }
                    });
                }

                return true;
            }
        })
    }

    overtake(gained: string, lost: string): string {
        let gainedRacerIndex: number = -1;
        let lostRacerIndex: number = -1;
        
        this.racers.some((r, i) => {
            if (r.name === gained) {
                gainedRacerIndex = i;
                return true;
            }
        });
        
        this.racers.some((r, i) => {
            if (r.name === lost) {
                lostRacerIndex = i;
                return true;
            }
        });

        const gainedRacer = this.racers[gainedRacerIndex];
        const lostRacer = this.racers[lostRacerIndex];
        let result: string = '';

        if (gainedRacer && lostRacer && !gainedRacer.isDnf && !lostRacer.isDnf && gainedRacer.position > lostRacer.position) {
            gainedRacer.position -= 1;
            lostRacer.position += 1;

            const activeRacersLength = this.racers.filter(r => !r.isDnf).length;

            if (lostRacer.position >= activeRacersLength) {
                result = `${lostRacer.name} is on the back of the grid!`;
            }
        }
        
        return result;
    }

    showPositions(): string {
        let result: string = '';

        this.racers
            .filter(r => !r.isDnf)
            .sort((r1, r2) => {
                return r1.position - r2.position;
            }).forEach((r, i) => {
                if (i === this.racers.length - 1) {
                    result += `${r.name} finished on ${r.position} position with ${r.fuel} l remaining`;
                } else {
                    result += `${r.name} finished on ${r.position} position with ${r.fuel} l remaining \n`;
                }
            });

        return result;
    }
}

export default Circuit;
