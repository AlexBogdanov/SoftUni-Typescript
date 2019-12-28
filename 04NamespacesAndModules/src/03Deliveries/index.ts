/// <reference path="food-and-beverages.ts" />

class Courier implements FoodAndBeverages.IDelivery {
    constructor(protected placesToVisit: { [key: string]: string | boolean }[]) {}

    public newCustomer(customerName: string, visited: boolean = false): void | string {
        let isCustomerInList = false;

        this.placesToVisit.forEach(place => {
            if (place.customerName === customerName) {
                isCustomerInList = true;
            }
        });

        if (isCustomerInList) {
            throw new Error(`${customerName} is already a customer of yours!`);
        } else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }

    public visitCustomer(customerName: string): void {
        let index = -1;

        this.placesToVisit.forEach((place, i) => {
            if (place.customerName === customerName) {
                index = i;
            }
        });

        if (index === -1) {
            throw new Error(`${customerName} is not your customer`);
        } else {
            this.placesToVisit[index].visited = true;
        }
    }

    public showCustomers(): string {
        let result = '';

        this.placesToVisit.forEach((place, i) => {
            if (i === 0) {
                result += `${place.customerName} -> ${place.visited}`;
            } else {
                result += `\n${place.customerName} -> ${place.visited}`;
            }
        });

        return result;
    }
}

export default Courier;
