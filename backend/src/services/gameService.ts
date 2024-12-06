import { GameRepository } from '../repositories/GameRepository.js';

export class GameService {
    private readonly gameRepository: GameRepository;

    constructor() {
        this.gameRepository = new GameRepository();
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
