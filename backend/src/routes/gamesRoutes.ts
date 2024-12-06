import express from 'express';
import { GameController } from '../controllers/gamesController.js';

const router = express.Router();
const gamesController = new GameController();

router.get('/games', async (req, res) => {
    await gamesController.getAllGames(req, res);
});

router.post('/games', async (req, res) => {
    await gamesController.postGame(req, res);
});

router.put('/games/{gameId}', async (req, res) => {
    await gamesController.updateGame(req, res);
});

export default router;
