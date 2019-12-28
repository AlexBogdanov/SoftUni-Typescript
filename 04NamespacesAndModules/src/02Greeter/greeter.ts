namespace Greeter {
    export interface IGreeting<T> {
        introduction(): string;
        sayGoodbye(name: T): string;
    }
}
