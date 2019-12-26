abstract class CreateAccount<T> {
    constructor(public bankName: T, public bankID: T) {}
}

class PersonalAccount<T> extends CreateAccount<T> {
    public money: number = 0;
    public recentTransactions: { [key: string]: number } = {};

    constructor(
        public bankName: T,
        public bankID: T,
        readonly ownerName:string
    ) {
        super(bankName, bankID);
    }

    public deposit(amount: number): void {
        this.money += amount;
    }

    public expense(amount: number, expenseType: string): void {
        if (this.money >= amount) {
            this.money -= amount;

            if (Object.keys(this.recentTransactions).indexOf(expenseType) > -1) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
        } else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }

    public showDetails(): string {
        let totalMoneySpent = 0;

        Object.keys(this.recentTransactions).forEach(key => {
            totalMoneySpent += this.recentTransactions[key];
        });
        
        return `Bank name: ${this.bankName}
        Bank ID: ${this.bankID}
        Owner name: ${this.ownerName}
        Money: ${this.money}
        Money spent: ${totalMoneySpent}`;
    }
}

export default PersonalAccount;
