/// <reference path="greeter.ts" />

class Person implements Greeter.IGreeting<string> {
    constructor (private name: string, private age: number) {}

    public introduction(): string {
        return `My name is ${this.name} and I am ${this.age} years old`;
    }

    public sayGoodbye(name: string): string {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}

export default Person;
