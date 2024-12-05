import { GameRepository } from '../repositories/GameRepository.js';

export class GameService {
    private readonly gameRepository: GameRepository;

    constructor() {
        this.gameRepository = new GameRepository();
    }

    public async getGameStatistics() {
        // Exemple : Combinaison de plusieurs métriques
        const totalGames = await this.gameRepository.getTotalGames();
        const completedGames = await this.gameRepository.getCompletedGames();
        const abandonedGames = await this.gameRepository.getAbandonedGames();

        return {
            totalGames,
            completedGames,
            abandonedGames,
            completionRate: totalGames > 0 ? (completedGames / totalGames) * 100 : 0,
            abandonmentRate: totalGames > 0 ? (abandonedGames / totalGames) * 100 : 0,
        };
    }

    public async getCompletedGames() {
        return await this.gameRepository.getCompletedGames();
    }

    public async getAbandonedGames() {
        return await this.gameRepository.getAbandonedGames();
    }
}
