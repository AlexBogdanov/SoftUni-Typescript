namespace FoodAndBeverages {
    export interface IDelivery {
        newCustomer(customerName: string, visited: boolean): void | string;
        visitCustomer(customerName: string): void;
        showCustomers(): string;
    }
}
