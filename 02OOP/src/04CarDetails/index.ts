import Car from './Car';
import Engine from './Engine';

class Details {
    constructor(public car: Car, public engine: Engine) {
        let result: string = '';

        result += `Vehicle model: ${car.model} \nEngine model: ${engine.model}\n   Power: ${engine.power}`;
        
        if (engine.displacement) {
            result += `\n   Displacement: ${engine.displacement}`;
        }

        if (engine.efficiency) {
            result += `\n   Efficiency: ${engine.efficiency}`;
        }

        if (car.weight) {
            result += `\nWeight: ${car.weight}`;
        }

        if (car.color) {
            result += `\nColor: ${car.color}`;
        }

        console.log(result);
    }
}

export default Details;
