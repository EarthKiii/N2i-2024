import { Request, Response } from 'express';
import { ScoresService } from '../services/scoresService.js';
export class ScoresController {
    private readonly scoresService: ScoresService;

    constructor() {
        this.scoresService = new ScoresService();
    }

    /**
     * Récupère les scores.
     * @route GET /sherlock/scores/
     */
    public async getAllScores(_req: Request, res: Response): Promise<void> {
        try {
            const scores = await this.scoresService.getScores();
            res.status(200).json(scores);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }

    }

    /**
     * Crée un nouveau score.
     * @route POST /sherlock/scores/
     */
    public async postScore(req: Request, res: Response): Promise<void> {
        try {
            const score = await this.scoresService.postScore(req.body.score);
            res.status(201).json(score);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }
}
