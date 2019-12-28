import Shop from './Shop';

class PCStore extends Shop {
    public pcParts: { [key: string]: number } = {};
    public pcCollection: { [key: string]: string | string[] | number }[] = [];

    constructor(public shopName: string, public shopAddress: string, protected budget: number) {
        super(shopName, shopAddress);
    }

    public buyParts(part: string, price: number): void {
        if (this.budget >= price) {
            if (Object.keys(this.pcParts).indexOf(part) === -1) {
                this.pcParts[part] = 1;
            } else {
                this.pcParts[part] += 1;
            }

            this.budget -= price;
        } else {
            throw new Error(`${this.shopName} cannot afford that part.`);
        }
    }

    public buildPC(neededParts: string[], pcName: string, pcPrice: number): void | string {
        let doHaveAllParts = true;
        
        neededParts.every(partNeeded => {
            if (Object.keys(this.pcParts).indexOf(partNeeded) === -1) {
                doHaveAllParts = false;
                return false;
            } else {
                return true;
            }
        });

        if (doHaveAllParts) {
            const newPc = {
                pcName,
                neededParts,
                pcPrice
            };

            neededParts.forEach(partNeeded => {
                if (this.pcParts[partNeeded] === 1) {
                    delete this.pcParts[partNeeded];
                } else {
                    this.pcParts[partNeeded] -= 1;
                }
            });

            this.pcCollection.push(newPc);

            return `You have just built ${pcName}`;
        } else {
            throw new Error('You do not have all needed parts to build this PC');
        }
    }

    public sellPC(desiredPCName: string, clientBudget: number): void | string {
        let pcIndex = -1;

        this.pcCollection.some((pc, i) => {
            if (pc.pcName === desiredPCName) {
                pcIndex = i;
                return true;
            } else {
                return false;
            }
        });

        if (pcIndex > -1) {
            if (this.pcCollection[pcIndex].pcPrice <= clientBudget) {
                const pcPrice = Number(this.pcCollection[pcIndex].pcPrice);
                const moneyInReturn = clientBudget - pcPrice;

                this.budget += pcPrice;
                this.pcCollection.splice(pcIndex, 1);

                if (moneyInReturn > 0) {
                    return `You successfully bought ${desiredPCName} and you get ${moneyInReturn} BGN in return`;
                }
            }
        }
    }

    public showInventory(): string {
        let result = `Shop name: ${this.shopName}
Shop address: ${this.shopAddress}
Shop budget: ${this.budget}`;

        const pcPartsKeys = Object.keys(this.pcParts);

        if (pcPartsKeys.length > 0) {
            result += '\nPC parts in store: ';

            pcPartsKeys.forEach((part, i) => {
                if (i === 0) {
                    result += part;
                } else {
                    result += `, ${part}`;
                }
            });
        }

        if (this.pcCollection.length > 0) {
            result += '\nPCs in store: ';

            this.pcCollection.forEach((pc, i) => {
                if (i === 0) {
                    result += pc.pcName;
                } else {
                    result += `, ${pc.pcName}`;
                }
            });
        }

        return result;
    }
};

export default PCStore;
