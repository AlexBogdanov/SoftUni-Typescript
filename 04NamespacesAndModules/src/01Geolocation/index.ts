import open from 'open';

class Geolocation {
    constructor(private latitude: number, private longtitude: number) {}

    showCoordinates(): void {
        const url = `https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longtitude}`;
        open(url);
    }
}

export default Geolocation;
