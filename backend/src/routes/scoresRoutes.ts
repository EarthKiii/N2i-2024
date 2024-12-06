import express from 'express';
import { ScoresController } from '../controllers/scoresController.js';

const router = express.Router();
const scoresController = new ScoresController();

router.get('/', async (req, res) => {
    await scoresController.getScores(req, res);
});

router.post('/', async (req, res) => {
    await scoresController.postScore(req, res);
});

export default router;
