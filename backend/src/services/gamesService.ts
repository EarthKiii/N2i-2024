import { GamesRepository } from '../repositories/GamesRepository.js';

export class GamesService {
    private readonly gameRepository: GamesRepository;

    constructor() {
        this.gameRepository = new GamesRepository();
    }

    public async getAllGames(): Promise<number> {
        return this.gameRepository.getAllGames();
    }

    public async postGame(): Promise<number> {
        return this.gameRepository.postGame();
    }

    public async updateGame(gameId: number): Promise<number> {
        return this.gameRepository.updateGame(gameId);
    }
}
