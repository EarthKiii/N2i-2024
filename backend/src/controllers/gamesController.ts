import { Request, Response } from 'express';
import { GameService } from '../services/gameService.js';

export class GameController {
    private readonly gameService: GameService;

    constructor() {
        this.gameService = new GameService();
    }

    /**
     * Récupère les statistiques de jeu.
     * @route GET /games/stats
     */
    public async getGameStats(_req: Request, res: Response): Promise<Response> {
        try {
            const stats = await this.gameService.getGameStatistics();
            return res.status(200).json({
                success: true,
                data: stats,
            });
        } catch (error) {
            console.error('Error fetching game stats:', error);
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching game statistics.',
            });
        }
    }

    /**
     * Récupère les parties terminées.
     * @route GET /games/completed
     */
    public async getCompletedGames(_req: Request, res: Response): Promise<Response> {
        try {
            const completedGames = await this.gameService.getCompletedGames();
            return res.status(200).json({
                success: true,
                data: completedGames,
            });
        } catch (error) {
            console.error('Error fetching completed games:', error);
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching completed games.',
            });
        }
    }

    /**
     * Récupère les parties abandonnées.
     * @route GET /games/abandoned
     */
    public async getAbandonedGames(_req: Request, res: Response): Promise<Response> {
        try {
            const abandonedGames = await this.gameService.getAbandonedGames();
            return res.status(200).json({
                success: true,
                data: abandonedGames,
            });
        } catch (error) {
            console.error('Error fetching abandoned games:', error);
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching abandoned games.',
            });
        }
    }
}
