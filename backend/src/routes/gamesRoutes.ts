import express from 'express';
import { GameController } from '../controllers/gamesController.js';

const router = express.Router();
const gamesController = new GameController();

router.get('/', async (req, res) => {
    await gamesController.getAllGames(req, res);
});

router.post('/', async (req, res) => {
    await gamesController.postGame(req, res);
});

router.put('/{gameId}', async (req, res) => {
    await gamesController.updateGame(req, res);
});

export default router;
