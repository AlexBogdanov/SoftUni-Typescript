interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerId: T, model:T): void;
}

class CarDealership<T, V> implements Dealership<T>, Actions<V> {
    public modelsSold: { [key: string]: V } = {};
    public soldCars = 0;

    constructor(public dealershipName: T) {}

    public sellCar(dealerId: V, model: V): void {
        if (Object.keys(this.modelsSold).indexOf(`${dealerId}`) === -1) {
            this.modelsSold[`${dealerId}`] = model;
        }
    }

    public showDetails(): string {
        let result = `${this.dealershipName}`;

        Object.keys(this.modelsSold).forEach(key => {
            result += `\n${key} sold ${this.modelsSold[key]}`;
        });

        return result;
    }
}

export default CarDealership;
