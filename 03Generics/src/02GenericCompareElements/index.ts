class CompareElements<T> {
    constructor(private data: T[]) {}

    public compare(elToCompareWith: any): number {
        let result = 0;

        this.data.forEach(el => {
            if (el === elToCompareWith) {
                result += 1;
            }
        });

        return result;
    }
}

export default CompareElements;
