import { GamesRepository } from '../repositories/gamesRepository.js';

export class GamesService {
    private readonly gamesRepository: GamesRepository;

    constructor() {
        this.gamesRepository = new GamesRepository();
    }

    public async getAllGames(): Promise< { gameId: number, gameTime: number }[] > {
        const games = await this.gamesRepository.getAllGames();
        return games.map(game => ({
            gameId: game.gameId,
            gameTime: game.gameTime
        }));
    }

    public async postGame(gameId: number) {
        return this.gamesRepository.postGame(gameId);
    }

    public async updateGame(gameId: number, gameTime: number) {
        return this.gamesRepository.updateGame(gameId, gameTime);
    }
}
