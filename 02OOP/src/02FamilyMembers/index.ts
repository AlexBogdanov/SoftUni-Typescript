import Person from './../01DefineAClassPerson';

class Family {
    constructor(public family: Person[] = []) { }

    public addNewMember([name, age]: [string, number]): void {
        const newMember = new Person(name, age);
        this.family.push(newMember);
    }

    public oldestMember(): string {
        let oldestMember: Person = new Person('', 0);

        this.family.forEach((member, i) => {
            if (i === 0) {
                oldestMember = member;
            } else {
                if (member.age > oldestMember.age) {
                    oldestMember = member;
                }
            }
        });

        return `The oldest member is ${oldestMember.name} and is ${oldestMember.age} years old.`;
    }
}

export default Family;
