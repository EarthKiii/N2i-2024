import { Request, Response } from 'express';
import { PantheonService } from '../services/pantheonService.js';
export class PantheonController {
    private readonly pantheonService: PantheonService;

    constructor() {
        this.pantheonService = new PantheonService();
    }

    /**
     * Récupère les joueurs du panthéon.
     * @route GET /sherlock/pantheon/
     */
    public async getPlayers(_req: Request, res: Response): Promise<void> {
        try {
            const games = await this.pantheonService.getPlayers();
            res.status(200).json(games);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });        
        }
    }

    /**
     * Ajoute un joueur au panthéon.
     * @route POST /sherlock/pantheon/
     */
    public async postPlayer(_req: Request, res: Response): Promise<void> {
        try {
            const game = await this.pantheonService.postPlayer();
            res.status(201).json(game);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }
}
