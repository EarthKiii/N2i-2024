import { PantheonRepository } from '../repositories/PantheonRepository.js';

export class PantheonService {
    private readonly pantheonRepository: PantheonRepository;

    constructor() {
        this.pantheonRepository = new PantheonRepository();
    }

    public async getPlayers(): Promise<number> {
        return this.pantheonRepository.getPlayers();
    }

    public async postPlayer(playerName: string, date: Date): Promise<number> {
        return this.pantheonRepository.postPlayer(playerName, date);
    }
}
