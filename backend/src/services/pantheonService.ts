import { PantheonRepository } from '../repositories/PantheonRepository.js';

export class PantheonService {
    private readonly pantheonRepository: PantheonRepository;

    constructor() {
        this.pantheonRepository = new PantheonRepository();
    }

    public async getPlayers(): Promise< { player_name: string, date: Date }[] > {
        return this.pantheonRepository.getPlayers();
    }

    public async postPlayer(playerName: string, date: Date) {
        return this.pantheonRepository.postPlayer(playerName, date);
    }
}
