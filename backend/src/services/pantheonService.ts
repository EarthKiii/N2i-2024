import { PantheonRepository } from '../repositories/pantheonRepository.js';

export class PantheonService {
    private readonly pantheonRepository: PantheonRepository;

    constructor() {
        this.pantheonRepository = new PantheonRepository();
    }

    public async getPlayers(): Promise< { playerName: string, date: Date }[] > {
        const players = await this.pantheonRepository.getPlayers();
        return players.map(player => ({
            playerName: player.playerName,
            date: player.date
        }));
    }

    public async postPlayer(playerName: string) {
        return this.pantheonRepository.postPlayer(playerName);
    }
}
