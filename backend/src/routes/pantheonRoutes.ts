import express from 'express';
import { PantheonController } from '../controllers/pantheonController.js';

const router = express.Router();
const pantheonController = new PantheonController();

router.get('/pantheon', async (req, res) => {
    await pantheonController.getPlayers(req, res);
});

router.post('/pantheon', async (req, res) => {
    await pantheonController.postPlayer(req, res);
});

export default router;
