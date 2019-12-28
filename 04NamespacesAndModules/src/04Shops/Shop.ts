abstract class Shop {
    constructor(protected shopName: string, protected shopAddress: string) {}

    abstract showInventory(): void;
}

export default Shop;
