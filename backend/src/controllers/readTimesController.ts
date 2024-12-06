import { Request, Response } from 'express';
import { ReadTimesService } from '../services/readTimesService.js';

export class ReadTimesController {
    private readonly readTimesService: ReadTimesService;

    constructor() {
        this.readTimesService = new ReadTimesService();
    }

    /**
     * Récupère tous les temps de lecture des pop-up d'information.
     * @route GET /sherlock/read-times/
     */
    public async getAllReadTimes(_req: Request, res: Response): Promise<void> {
        try {
            const readTimes = await this.readTimesService.getAllReadTimes();
            res.status(200).json(readTimes);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Récupère le temps de lecture moyen d'une pop-up d'information.
     * @route GET /sherlock/head-times/:popupId
     */
    public async getReadTime(req: Request, res: Response): Promise<void> {
        try {
            const popupId = req.params.popupId;
            const readTime = await this.readTimesService.getReadTime(popupId);
            res.status(200).json(readTime);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Ajoute un temps de lecture d'une pop-up d'information.
     * @route POST /sherlock/read-times/
     * @bodyParam popupId string
     * @bodyParam readTime number
     */
    public async postReadTime(req: Request, res: Response): Promise<void> {
        try {
            const popupId = req.body.popupId;
            const readTime = req.body.readTime;
            const payload = await this.readTimesService.postReadTime(popupId, readTime);
            res.status(201).json(payload);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ message: err.message });
        }
    }
}