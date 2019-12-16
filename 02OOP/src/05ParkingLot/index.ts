import Activites from './Activities';

class ParkedVehicle {
    public didPay: boolean = false;

    constructor(public plate: string) { }
}

const f = (x: number) => Math.pow(x, 2);

const derivative = (x: number, dx: number) => {
    dx = dx || 0.0000001;
    return (f(x + dx) - f(x)) / dx;
}

class ParkingLot extends Activites {
    public revenue: number = 0;
    public parkedVehicles: Array<ParkedVehicle> = [];

    constructor(public capacity: number) {
        super();
    }

    parkVehicle(plate: string): void {
        if (this.capacity > this.parkedVehicles.length) {
            const parkedVehicle = new ParkedVehicle(plate);
            this.parkedVehicles.push(parkedVehicle);
        } else {
            throw new Error('No more available spaces in the parking lot!');
        }
    }

    payForStay(hours: number, rate: number, plate: string): void {
        let index: number = -1;

        if (this.parkedVehicles.some((v, i) => { if (v.plate === plate) { index = i; return true; } } )) {
            this.revenue += derivative(rate, hours);
            this.parkedVehicles[index].didPay = true;
        } else {
            throw new Error('There is no such vehicle parked in the parking lot!');
        }
    }

    leaveTheParking(plate: string): void {
        let index: number = -1;

        this.parkedVehicles.some((v, i) => {
            if (v.plate === plate) {
                index = i;
                return true;
            }
        });

        if (index > -1 && this.parkedVehicles[index].didPay) {
            this.parkedVehicles.splice(index, 1);
        }
    }

    overview(): string {
        const parkedVehiclesPlates: Array<string> = [];
        this.parkedVehicles.forEach(v => parkedVehiclesPlates.push(v.plate));
        return `The current revenue of the parking lot is ${this.revenue} and ${parkedVehiclesPlates.join(', ')} are parked!`;
    }
}

export default ParkingLot;
