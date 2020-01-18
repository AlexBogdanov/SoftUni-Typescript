interface IRacer {
    firstName: string;
    lastName: string;
    id: number;
    dateOfBirth: string;
    racingTeam?: string;
    hasContract?: boolean;
    salary?: number;
    terms?: number;
    wonRaces?: number;
}

export default IRacer;
