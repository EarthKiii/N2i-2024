import express from 'express';
import { GameController } from '../controllers/gameController.js';

const router = express.Router();
const gameController = new GameController();

router.get('/stats', async (req, res) => {
    await gameController.getGameStats(req, res);
});

router.get('/completed', async (req, res) => {
    await gameController.getCompletedGames(req, res);
});

router.get('/abandoned', async (req, res) => {
    await gameController.getAbandonedGames(req, res);
});

export default router;
