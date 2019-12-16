abstract class Activities {
    abstract parkVehicle(plate: string): void;

    abstract payForStay(hours: number, rate: number, plate: string): void;

    abstract leaveTheParking(plate: string): void;
}

export default Activities;
