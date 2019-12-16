interface IRacing {
    createRacer(name: string, fuel: number, position: number): void;
    consumeFuel(usedFuel:number, name: string): void;
    overtake(gained: string, lost: string): void;
}

export default IRacing;
