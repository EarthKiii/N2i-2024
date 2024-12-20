import { Request, Response } from 'express';
import { GamesService } from '../services/gamesService.js';
export class GameController {
    private readonly gamesService: GamesService;

    constructor() {
        this.gamesService = new GamesService();
    }

    /**
     * Récupère les statistiques de jeu.
     * @route GET /sherlock/games/
     */
    public async getAllGames(_req: Request, res: Response): Promise<void> {
        try {
            const games = await this.gamesService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Crée une nouvelle partie.
     * @route POST /sherlock/games/
     */
    public async postGame(req: Request, res: Response): Promise<void> {
        try {
            const game = await this.gamesService.postGame(req.body.gameId);
            res.status(201).json(game);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Met à jour une partie.
     * @route PUT /sherlock/games/:gameId
     * @param gameId - L'identifiant de la partie.
     * @param gameTime - Le temps de jeu.
     */
    public async updateGame(req: Request, res: Response): Promise<void> {
        try {
            const gameId = parseInt(req.params.gameId, 10);
            const gameTime = req.body.gameTime;
            const game = await this.gamesService.updateGame(gameId, gameTime);
            res.status(201).json(game);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });        
        }
    }
}
