import { GamesRepository } from '../repositories/GamesRepository.js';

export class GamesService {
    private readonly gameRepository: GamesRepository;

    constructor() {
        this.gameRepository = new GamesRepository();
    }

    public async getAllGames(): Promise<{ game_id: number, game_time: number }> {
        return this.gameRepository.getAllGames();
    }

    public async postGame(gameId: number): Promise<number> {
        return this.gameRepository.postGame(gameId);
    }

    public async updateGame(gameId: number, gameTime: number): Promise<number> {
        return this.gameRepository.updateGame(gameId, gameTime);
    }
}
