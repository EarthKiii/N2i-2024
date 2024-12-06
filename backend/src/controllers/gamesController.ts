import { Request, Response } from 'express';
import { GameService } from '../services/gameServices.js';

export class GameController {
    private readonly gameService: GameService;

    constructor() {
        this.gameService = new GameService();
    }

    /**
     * Récupère les statistiques de jeu.
     * @route GET /sherlock/games/
     */
    public async getAllGames(_req: Request, res: Response): Promise<void> {
        try {
            const games = await this.gameService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });        }
    }

    /**
     * Crée une nouvelle partie.
     * @route POST /sherlock/games/
     */
    public async postGame(_req: Request, res: Response): Promise<void> {
        try {
            const game = await this.gameService.postGame();
            res.status(201).json(game);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Met à jour une partie.
     * @route PUT /sherlock/games/{gameId}
     * @param gameId - L'identifiant de la partie.
     */
    public async updateGame(req: Request, res: Response): Promise<void> {
        try {
            const gameId = req.params.gameId;
            const game = await this.gameService.updateGame(gameId);
            res.status(200).json(game);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });        }
    }
}
