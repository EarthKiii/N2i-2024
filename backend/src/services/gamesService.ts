import { GamesRepository } from '../repositories/GamesRepository.js';

export class GamesService {
    private readonly gamesRepository: GamesRepository;

    constructor() {
        this.gamesRepository = new GamesRepository();
    }

    public async getAllGames(): Promise< { game_id: number, game_time: number }[] > {
        const games = await this.gamesRepository.getAllGames();
        return games.map(game => ({
            game_id: game.gameId,
            game_time: game.gameTime
        }));
    }

    public async postGame(gameId: number) {
        return this.gamesRepository.postGame(gameId);
    }

    public async updateGame(gameId: number, gameTime: number) {
        return this.gamesRepository.updateGame(gameId, gameTime);
    }
}
