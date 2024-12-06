import express from 'express';
import { ScoresController } from '../controllers/scoresController.js';

const router = express.Router();
const scoresController = new ScoresController();

router.get('/scores', async (req, res) => {
    await scoresController.getAllScores(req, res);
});

router.post('/scores', async (req, res) => {
    await scoresController.postScore(req, res);
});

export default router;
