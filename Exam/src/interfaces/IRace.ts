interface IRace {
    overtake(overtakerId: number, overtakenId: number): string;
    winRace(): string;
    showStandings(): string;
}

export default IRace;
